import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StatusBar} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';

import { api } from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';

import { Car } from '../../components/Car';
import { Load } from '../../components/Load';

import { Container,
Header,
TotalCars,
HeaderContent,
CarList } from './styles';

export function Home(){

    const [cars, setCars] = useState<CarDTO[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const navigation = useNavigation<any>();


    function handleCarDetails(car:CarDTO){
    navigation.navigate("CarDetails", {car})
}

useEffect(() => {
    async function fetchCars(){
        try{
            const response = await api.get('/cars');
            setCars(response.data);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }   
    fetchCars();
}, [])

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
        { isLoading ? <Load /> :
            <CarList 
                data={cars}
                keyExtractor={item => item.id}
                renderItem={({item}) =>
                <Car data={item} onPress={()=>handleCarDetails(item)}/>} 
                
            />
        }
    </Container>
 );
}