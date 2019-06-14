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
        <Text style={{Color:"#000", fontSize: 30, }}>Conversor de moedas</Text>

        <TextInput style={styles.campo}
            keyboardType="numeric"
            placeholder="Insira um valor para converter..."
            onChangeText={(valor) => this.setState({valor: valor})}
          />

        <Picker selectValue={this.state.moeda} style={{heigth: 50, width: 350}} onValueChange={(itemValue, itemIndex) => this.setState({moeda : itemValue})}>
          <Picker.Item label="Selecione uma moeda" value="" />
          <Picker.Item label="EUR - EURO" value="EUR" />
          <Picker.Item label="USD - DÓLAR" value="USD" />
        </Picker>

        <TouchableOpacity onPress={this.handleConvert} style={{backgroundColor:"#808080", borderRadius:10, width:300, height:35}}><Text style={{color:"#000", marginLeft:110, marginTop:6}}>CONVERTER</Text></TouchableOpacity>
        <Text style={styles.convertid}>Valor convertido = {this.state.convertido}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  convertid: {
    fontSize:30
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0',
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
    borderWidth:1,
    borderRadius:15,
    borderColor:"#A9A9A9"
  }

});
