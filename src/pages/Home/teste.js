import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/icons/menu-icon.png')}
          style={{width: 40, height: 30}}
          resizeMode="contain"
        />
        <Text style={styles.menu}> Início </Text>
        <Image
          source={require('../../assets/icons/sino.png')}
          style={{width: 50, height: 50}}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/icons/lupa.png')}
          style={{width: 20, height: 20}}
          resizeMode="contain"
        />
      </View>
      <View>
        <Text style={styles.title}> Sua leitura diária </Text>
      </View>

      <ScrollView>
        <TouchableHighlight>
          <View style={styles.box}>
            <Text style={styles.text}> 19 things Istole from great developers </Text>
            <Text>Daniel Anderson - 6 min de leitura * ...</Text>
            <Image
              style={styles.img}
              source={require('../../assets/icons/google-icon.png')}
            />
          </View>
        </TouchableHighlight>

        
        <View style={styles.box}>
          <Text>The Hidden Opportunity for Growth in Cancel Culture</Text>
          <Text>Richard Achiro, Ph.D. - 8 min de leitura * ...</Text>
        </View>

        <View style={styles.box}>
          <Text>
            Demystifying Palantir: The Most Controversial Company to Go
          </Text>
          <Text>Mario Gabriele - 6 min de leitura * ...</Text>
        </View>

        <View style={styles.box}>
          <Text>5 Habits of Truly Cool Couples</Text>
          <Text>Sira M. - 8 min de leitura * ...</Text>
        </View>

        <View style={styles.box}>
          <Text>
            8 Life Lessons I've Learned at 40-Something That I Wish I'd
          </Text>
          <Text>Shannon Hilson - 13 min de leitura * ...</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: '#000',
    elevation: 2,
    borderWidth: 10,
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  menu: {
    color: '#fff',
    paddingRight: 130,
    fontSize: 18,
    textAlign: 'center',
  },

  title: {
    fontSize: 18,
    margin: 10,
    padding: 10,
  },
  box: {
    height: 80,
    backgroundColor: '#fff',
    borderWidth: 0.2,
    margin: 15,
  },
});

export default Home;
