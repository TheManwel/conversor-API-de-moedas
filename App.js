/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import axios from "axios";
import React, {Component} from 'react';
import {Platform, ImageBackground, StyleSheet, Text, View, TouchableOpacity, Picker, TextInput} from 'react-native';
import { functionDeclaration } from "@babel/types";

export default class App extends Component {
  state = {
    moeda : "",
    valor: 0,
    convertido: 0
  }

  handleConvert = () => {
    axios.get(`https://economia.awesomeapi.com.br/json/${this.state.moeda}`)
    .then(resp => {
      this.setState({convertido: (resp.data[0].ask * this.state.valor)});
    })

    .catch(err => {
      alert(err);
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{Color:"#000", fontSize: 30, marginTop:-255}}>Conversor de moedas</Text>

        <TextInput style={styles.campo}
            keyboardType="numeric"
            placeholder="Insira um valor para converter..."
            onChangeText={(valor) => this.setState({valor: valor})}
          />
<View style={{marginTop:25}}>
        <Picker selectValue={this.state.moeda} style={{heigth: 50, width: 350}} onValueChange={(itemValue, itemIndex) => this.setState({moeda : itemValue})}>
          <Picker.Item label="Selecione uma moeda..." value="" />
          <Picker.Item label="EUR - EURO" value="EUR" />
          <Picker.Item label="USD - DÓLAR" value="USD" />
          <Picker.Item label="AUD - DÓLAR AUSTRALIANO" value="AUD" />
          <Picker.Item label="JPY - IENE JAPONÊS" value="JPY" />
          <Picker.Item label="CHF - FRANCO SUÍÇO" value="CHF" />
          <Picker.Item label="GBP - LIBRA" value="GBP" />
          <Picker.Item label="ARS - PESO ARGENTINO" value="ARS" />
          <Picker.Item label="CNY - YUAN CHINÊS" value="CNY" />
          <Picker.Item label="BTC - BITCOIN" value="BTC" />
          <Picker.Item label="USDT - DÓLAR TURISMO" value="USDT" />
          <Picker.Item label="ILS - NOVO SHEKEL ISRAELENSE" value="ILS" />
          <Picker.Item label="CAD - DÓLAR CANADENSE" value="CAD" />
          <Picker.Item label="XRP - RIPPLE" value="XRP" />
          <Picker.Item label="LTC - LITECOIN" value="LTC" />
        </Picker>
        </View>
        <TouchableOpacity onPress={this.handleConvert} style={{backgroundColor:"#808080", borderRadius:10, width:300, height:35, marginTop: 30}}><Text style={{color:"#000", marginLeft:110, marginTop:6}}>CONVERTER</Text></TouchableOpacity>
        <Text style={styles.convertid}>Valor convertido para {this.state.moeda} </Text><Text style={{fontSize:45}}> {this.state.convertido}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  convertid: {
    fontSize:20,
    marginTop:20
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0',
    height:700
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  campo:{
    borderWidth:2,
    borderRadius:15,
    borderColor:"#A9A9A9",
    marginTop:20
  }

});
