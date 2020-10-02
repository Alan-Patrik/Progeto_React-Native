import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Image} from 'react-native';


const Login = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#d7efef'}}>
      <View style={styles.container}>
        <Text style={styles.title}>Medium</Text>
        <View style={styles.containerBotton}>
          <Text style={styles.body}>Bem-vindo de volta.</Text>
          <TouchableHighlight onPress={() => navigation.navigate('Home')}>
            <View style={styles.button}>
              <Image
                style={styles.img}
                source={require('../../assets/icons/google-icon.png')}
              />
              <Text style={styles.text}> Entrar com Google </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigation.navigate('Home')}>
            <View style={styles.button}>
              <Image
                style={styles.img}
                source={require('../../assets/icons/facebook-icone-icon.png')}
              />
              <Text style={styles.text}> Entrar com Facebook</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigation.navigate('Home')}>
            <View style={styles.button}>
              <Image
                style={styles.img}
                source={require('../../assets/icons/Twitter-logo.png')}
              />

              <Text style={styles.text}> Entrar com Twitter</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigation.navigate('Home')}>
            <View style={styles.button}>
              <Image
                style={styles.img}
                source={require('../../assets/icons/email.png')}
              />
              <Text style={styles.text}> Entrar com e-mail</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigation.navigate('Welcome')}>
            <View style={styles.buttonLink}>
              <Text style={styles.textLink}> Não tem uma conta? </Text>
              <Text style={{fontSize: 16, color: '#28a380'}}> Cadastrar-se </Text>
            </View>
          </TouchableHighlight>
        </View>
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
    paddingVertical: 7,
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
    paddingVertical: 30,
    fontSize: 16,
    color: '#69726d',
  },
});

export default Login;
