import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Image, Button} from 'react-native';


const Welcome = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#e8f3eb'}}>
      <View style={styles.container}>
        <Text style={styles.title}>Medium</Text>
        <View style={styles.containerBotton}>
          <Text style={styles.body}>Ideias que fazem sua mente trabalha.</Text>
          <TouchableHighlight onPress={() => navigation.navigate('Login')}>
            <View style={styles.button}>
              <Image
                style={styles.img}
                source={require('../../assets/icons/google-icon.png')}
              />
              <Text style={styles.text}> Cadastrar-se com Google </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigation.navigate('Login')}>
            <View style={styles.button}>
              <Image
                style={styles.img}
                source={require('../../assets/icons/facebook-icone-icon.png')}
              />
              <Text style={styles.text}> Cadastrar-se com Facebook</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigation.navigate('Login')}>
            <View style={styles.button}>
              <Image
                style={styles.img}
                source={require('../../assets/icons/email.png')}
              />
              <Text style={styles.text}> Cadastrar-se com e-mail</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigation.navigate('Login')}>
            <View style={styles.buttonLink}>
              <Text style={styles.textLink}> Já tem conta? </Text>
              <Text style={{ fontSize: 16, color: '#28a380'}}> Entrar </Text>
            </View>
          </TouchableHighlight>
        </View>
        <Text style={styles.footer}>Ao criar uma conta eu aceito</Text>
        <Text style={styles.footerLink}>Termos de serviço.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 6,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  containerBotton: {
    paddingVertical: 60,
    alignItems: 'center',
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    elevation: 2,
    backgroundColor: '#fff',
    padding: 12,
    margin: 8,
    width: 250,
  },

  body: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  img: {
    width: 25,
    height: 25,
  },

  text: {
    paddingLeft: 12,
  },

  buttonLink: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  textLink: {
    textAlign: 'center',
    paddingVertical: 37,
    fontSize: 16,
    color: '#69726d',
  },

  footer: {
    textAlign: 'center',
    fontSize: 14,
    color: '#69726d',
  },

  footerLink: {
    textAlign: 'center',
    fontSize: 14,
    color: 'rgb(116, 119, 118)',
    textDecorationLine: 'underline',
  },
});

export default Welcome;
