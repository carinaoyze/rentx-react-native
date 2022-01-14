import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StatusBar} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';

import { Container,
Header,
TotalCars,
HeaderContent,
CarList } from './styles';

export function Home(){

const navigation = useNavigation<any>();

const carDataOne = {
    brand: 'Audi',
    name: 'R$ 5 coupé',
    rent: {
        period: 'Ao dia',
        price:120,
    },
    thumbnail: 'https://assets.stickpng.com/thumbs/580b585b2edbce24c47b2c21.png'
}

const carDataSecond = {
    brand: 'Audi',
    name: 'R$ 5 coupé',
    rent: {
        period: 'Ao dia',
        price:120,
    },
    thumbnail: 'https://png2.cleanpng.com/sh/87ed60011213bb2402151be17cf4f188/L0KzQYi4UsE4N2Q6eZGAYUO5QIjqVMk2bWI5T5C9NEO7RYS7WcE2OWQ5UaI8N0K5QYSCTwBvbz==/5a3607c495e147.4438534915134903726139.png'
}

function handleCarDetails(){
    navigation.navigate("CarDetails")
}

 return(
    <Container>
        <StatusBar 
            barStyle='light-content'
            backgroundColor='transparent'
            translucent
        />
        <Header>
            <HeaderContent>
                <Logo 
                    width={RFValue(108)}
                    height={RFValue(12)}
                />
                <TotalCars>
                    Total 12 carros
                </TotalCars>
            </HeaderContent>
        </Header>
        <CarList 
            data={[1,2,3,4,5,6,7,8]}
            keyExtractor={item => String(item)}
            renderItem={({item}) =>
            <Car data={carDataOne} onPress={handleCarDetails}/>} 
            
        />
    </Container>
 );
}