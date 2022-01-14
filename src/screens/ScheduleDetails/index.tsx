import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Acessory } from '../../components/Acessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

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
Acessories,
Footer,
RentalPeriod,
CalendarIcon,
DateInfo,
DateTitle,
DateValue,
RentalPrice,
RentalPriceLabel,
RentalPriceDetails,
RentalPrinceQuota,
RentalPriceTotal

} from './styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { ColorPropType } from 'react-native';
import theme from '../../styles/theme';

export function ScheduleDetails(){
 return(
  <Container>
      <Header>
          <BackButton onPress={()=>{}} />
      </Header>
      <CarImages>
        <ImageSlider imagesUrl={['https://assets.stickpng.com/thumbs/580b585b2edbce24c47b2c21.png']}/>
      </CarImages>
      <Content>
          <Details>
              <Description>
                  <Brand>Lamborghini</Brand>
                  <Name>Huracan</Name>
              </Description>
              <Rent>
                  <Period>Ao dia</Period>
                  <Price>R$580</Price>
              </Rent>
          </Details>
          <Acessories>
            <Acessory name="380Km/h" icon={speedSvg}/>
            <Acessory name="3.2s" icon={accelerationSvg}/>
            <Acessory name="800 HP" icon={forceSvg}/>
            <Acessory name="Gasolina" icon={gasolineSvg}/>
            <Acessory name="Auto" icon={exchangeSvg}/>
            <Acessory name="2 pessoas" icon={peopleSvg}/>
          </Acessories>
          <RentalPeriod>
              <CalendarIcon>
                  <Feather
                    name="calendar"
                    size={RFValue(24)}
                    color={theme.colors.shape}
                  />
              </CalendarIcon>
              <DateInfo>
                  <DateTitle>DE</DateTitle>
                  <DateValue>13/01/2022</DateValue>
              </DateInfo>
              <Feather
                    name="chevron-right"
                    size={RFValue(10)}
                    color={theme.colors.text}
              />
              <DateInfo>
                  <DateTitle>DE</DateTitle>
                  <DateValue>13/01/2022</DateValue>
              </DateInfo>
          </RentalPeriod>
          <RentalPrice>
              <RentalPriceLabel>TOTAL</RentalPriceLabel>
              <RentalPriceDetails>
                  <RentalPrinceQuota>R$ 580 x3 diárias</RentalPrinceQuota>
                  <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
              </RentalPriceDetails>
          </RentalPrice>
      </Content>
      <Footer>
          <Button title="Confirmar" />
      </Footer>
  </Container>
 );
}