import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    height: 100%;
`

export const Content = styled.ScrollView`
    display: flex;
`

export const BoxCenter = styled.View`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Logo = styled.Image`
    width: 140px;
    height: 50px;
    margin-top: 20px;
    margin-bottom: 10px;
`

export const BoxSearch = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px;
`

export const InputSearch = styled.TextInput`
    width: 80%;
    height: 50px;
    background-color: lightgray;
    border-radius: 100px;
    padding: 10px 10px;
    text-align: center;
`

export const ButtonOptions = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    background-color: darkgray;
    margin-left: 20px;
`

export const BoxListItem = styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0px 10px;
`

export const ItemHomeList = styled.TouchableOpacity`
    width: 50%;
    padding: 30px 10px;
    margin-bottom: 10px;
`

export const ItemHomeListContent = styled.View`
   background-color: lightgray;
   border-radius: 20px;
   display: flex;
   align-items: center;
   /* overflow: hidden; */

   ${(props: any) => props.color && `background-color: ${props.color}`}
`

export const ItemHomeListContentImage = styled.Image`
   width: 150px;
   height: 120px;
   margin-top: -50px;
   margin-bottom: 50px;
`

export const ItemHomeListContentTitle = styled.Text`
   position: absolute;
   background-color: gray;
   color: #fff;
   padding: 5px 10px;
   bottom: 12px;
   border-radius: 10px;
   z-index: 1;
`