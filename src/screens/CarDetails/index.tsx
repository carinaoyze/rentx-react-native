import React from 'react';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';

import { getAcessoryIcons } from '../../utils/getAcessoryIcons';

import { Container, 
Header,
CarImages,
Content,
Details,
Description,
Brand,
Rent,
Period,
Price,
Name,
About,
Accessories,
Footer} from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CarDTO } from '../../dtos/CarDTO';

interface Params{
    car: CarDTO;
}

export function CarDetails(){
 const navigation = useNavigation<any>();
 const route = useRoute();
 const { car } = route.params as Params  ;

 function handleConfirmRental(){
    navigation.navigate('Schedule')
 }

 function handleBack(){
    navigation.goBack();
 }

 return(
  <Container>
      <Header>
          <BackButton onPress={handleBack} />
      </Header>
      <CarImages>
        <ImageSlider imagesUrl={car.photos}/>
      </CarImages>
      <Content>
          <Details>
              <Description>
                  <Brand>{car.brand}</Brand>
                  <Name>{car.name}</Name>
              </Description>
              <Rent>
                  <Period>{car.rent.period}</Period>
                  <Price>R$ {car.rent.price}</Price>
              </Rent>
          </Details>
          <Accessories>
              {
                  car.accessories.map(accessory => (
                      <Accessory 
                        key={accessory.type}
                        name={accessory.name}
                        icon={getAcessoryIcons(accessory.type)}
                       />
                  ))
              }
          </Accessories>
          <About>
          {car.about} 
          </About>
      </Content>
      <Footer>
          <Button title="Escolher período do aluguel" onPress={handleConfirmRental}/>
      </Footer>
  </Container>
 );
}