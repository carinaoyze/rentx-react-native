import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';

import { Container,
    Header,
    Title,
    RentalPeriod,
    DateInfo,
    DateTitle,
    DateValue,
    Content,
    Footer  } from './styles';

import ArrowSvg from '../../assets/arrow.svg';
import { Button } from '../../components/Button';
import { Calendar, DayProps, generateInterval, MarkedDatesProps } from '../../components/Calendar';
import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';
import { getPlatformDate } from '../../utils/getPlatformDate';

interface RentalPeriod {
    start: number;
    startFormatted: string;
    end: number;
    endFormatted: string;
}

export function Schedule(){
    const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
    const [markedDates, setMarkedDates] = useState<MarkedDatesProps>({} as MarkedDatesProps);
    const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)

    const theme = useTheme();
    const navigation = useNavigation<any>();

    function handleConfirmRental(){
       navigation.navigate('ScheduleDetails')
   }
   function handleBack(){
        navigation.goBack();
    }  

    function handleChangeDate(date: DayProps){
        let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
        let end = date;
        if(start.timestamp > end.timestamp){
            start = end;
            end = start;
        }
        setLastSelectedDate(end);
        const interval = generateInterval(start, end);
        setMarkedDates(interval);

        const firstDate = Object.keys(interval)[0];
        const endDate = Object.keys(interval)[Object.keys(interval).length - 1];
        setRentalPeriod({
            start: start.timestamp,
            end: end.timestamp,
            startFormatted: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy'),
            endFormatted: format(getPlatformDate(new Date(endDate)), 'dd/MM/yyyy'),
        })
    }

    return(
        <Container>
            <Header>
                <StatusBar barStyle='light-content'
                translucent
                backgroundColor='transparent' />
                <BackButton 
                    color={theme.colors.shape}
                    onPress={handleBack} 
                />
                <Title>
                    Escolha uma {'\n'}
                    data de início e {'\n'}
                    fim do aluguel
                </Title>
                <RentalPeriod>
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue selected={!!rentalPeriod.startFormatted}>{rentalPeriod.startFormatted}</DateValue>
                    </DateInfo>
                    <ArrowSvg />
                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue selected={!!rentalPeriod.endFormatted}>{rentalPeriod.endFormatted}</DateValue>
                    </DateInfo>
                </RentalPeriod>
            </Header>
            <Content>
                <Calendar
                    markedDates={markedDates}
                    onDayPress={handleChangeDate}
                />
            </Content>
            <Footer>
                <Button title="Confirmar" onPress={handleConfirmRental}/>
            </Footer>
        </Container>
    );
}