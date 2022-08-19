import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import * as Styles from './styles';

import axiosModule from '../../config/axios';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// import components
import Filter from '../../components/Filter';

export default function Home() {

    const [search, setSearch] = useState<string>('');
    const [pockemons, setPockemons] = useState<any>([]);
    const [colors, setColors] = useState([]);
    const [boxFilterOpen, setBoxFilterOpen] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            await axiosModule.baseURL.get('/pokemon')
                .then(async result => {
                    let data = result.data.results;
                    let newData = [];
                    for await (let item of data) {
                        const result = await axiosModule.baseURL.get(`/pokemon/${item.name}`)
                        item = { ...item, image: result.data.sprites.front_default }

                        // const color = await axiosModule.baseURL.get(`/pokemon-color/${item.name}`)
                        // console.log(color)

                        newData.push(item)
                    }
                    setPockemons(newData);
                })
                .catch(error => console.log(error))


        })()
    }, []);

    const pokemonsfiltered = search.length > 0 ? pockemons.filter((pokemon) => pokemon?.name?.toLowerCase().includes(search.toLowerCase())) : pockemons;

    return (
        <Styles.Container>
            {boxFilterOpen && <Filter callback={() => setBoxFilterOpen(false)} />}

            <Styles.Content>

                <Styles.BoxCenter>
                    <Styles.Logo source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png' }} />
                </Styles.BoxCenter>
                <Styles.BoxSearch>
                    <Styles.InputSearch
                        value={search}
                        onChangeText={(text: string) => setSearch(text)}
                        placeholder="Buscar Pokémon" />
                    <Styles.ButtonOptions onPress={() => setBoxFilterOpen(true)} />

                    {/* <FontAwesome5 name="comments" size={32} /> */}
                </Styles.BoxSearch>
                <Styles.BoxListItem>
                    {
                        pokemonsfiltered.length > 0 ?
                            pokemonsfiltered.map((pokemon, pokemonIndex) => (
                                <Styles.ItemHomeList key={pokemonIndex}>
                                    <Styles.ItemHomeListContent color="lightgray">
                                        <Styles.ItemHomeListContentTitle>{`${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}`}</Styles.ItemHomeListContentTitle>
                                        <Styles.ItemHomeListContentImage source={{ uri: pokemon.image }} />
                                    </Styles.ItemHomeListContent>
                                </Styles.ItemHomeList>
                            )) :
                            <View style={{ width: '100%' }}>
                                <Text style={{ textAlign: 'center' }}>Sem resultado</Text>
                            </View>
                    }

                </Styles.BoxListItem>

            </Styles.Content>
        </Styles.Container>
    );

}
