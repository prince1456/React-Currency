
import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';

import { Container } from '../Components/Container';
import { Logo } from '../Components/Logo';
import { InputWithButton } from '../Components/TextInput';
import {ClearButton} from "../Components/Buttons"
import {LastConverted} from '../Components/Text'
import {Header} from "../Components/Header"

const TEMP_BASE_CURRENCY = 'USD'
const TEMP_QOUTE_CURRENCY = 'GBP'
const TEMP_BASE_PRICE = '100'
const TEMP_QOUTE_PRICE = '79.74'
const TEMP_CONVERSION_RATE= 0.7932
const TEMP_CONVERSION_DATE= new Date();

class Home extends Component {
  handlePressBaseCurrency =( ) => {
    console.log('press qoute');
  }
  handlePressQouteCurrency = ()=> {
    console.log('Press Qoute')
  }
  handleSwapCurrency = () => {
    console.log("change text")
  }
  handleSetting = () => {
    console.log("settings up")
  }

  render(){
    return (

        <Container>
              <StatusBar translucent={false} barStyle="light-content" />
              <Header onPress={this.handleSetting}/>
              <KeyboardAvoidingView behavior="padding">
                  <Logo />
                  <InputWithButton
                    buttonText={TEMP_BASE_CURRENCY}
                    onPress={this.handlePressQouteCurrency}
                    defaultValue={TEMP_BASE_PRICE}
                    keyboardType= "numeric"
                    onchangeText={ this.handleTextChange}
                  />
                  <InputWithButton
                    buttonText={TEMP_QOUTE_CURRENCY}
                    onPress={this.handlePressQouteCurrency}
                    editable= {false}
                    value= {TEMP_QOUTE_PRICE}
                  />
                  <LastConverted
                  base={TEMP_BASE_CURRENCY}
                  qoute={TEMP_QOUTE_CURRENCY}
                  date={TEMP_CONVERSION_DATE}
                  conversionRate={TEMP_CONVERSION_RATE}
                  />
                  </KeyboardAvoidingView>
                  <ClearButton
                    text= "Reverse Currencies"
                    onPress= {this.handleSwapCurrency}
                    />

        </Container>
    )
  }
}


export default Home;
