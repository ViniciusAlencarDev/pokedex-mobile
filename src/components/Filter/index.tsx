import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import * as Styles from './styles';

export default function Filter({ callback }) {

    return (
        <Styles.Container>
            <Text>Filter</Text>
            <TouchableOpacity onPress={callback}>
                <Text>X</Text>
            </TouchableOpacity>
        </Styles.Container>
    );

}
