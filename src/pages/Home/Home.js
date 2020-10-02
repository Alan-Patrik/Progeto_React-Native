import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const Home = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
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

      <ScrollView>
        <View>
          <Text style={styles.title}>Sua leitura diária</Text>
          <View style={styles.containerBox}>
            <View style={styles.box}>
              <Text style={styles.boxText}>
                19 things I stole from great developers
              </Text>
              <Text style={styles.boxTextIcon}>
                Daniel Anderson - 6 min de leitura   <Image
                  source={require('../../assets/icons/estrela.png')}
                  style={{ width: 12, height: 12,}}
                />
              </Text>
              <Image
                  source={require('../../assets/icons/reticencias.png')}
                  style={{ width: 20, height: 20,}}
                />
            </View>
            <View>
            <Image
              style={styles.img}
              source={require('../../assets/imgCards/imagemCard1.png')}
            />
            </View>
          </View>
          <View style={styles.containerBox}>
            <View style={styles.box}>
              <Text style={styles.boxText}>
              The Hidden Opportunity for Growth in Cancel Culture Richard
              </Text>
              <Text style={styles.boxTextIcon}>
                Achiro, Ph.D. - 8 min de leitura   <Image
                  source={require('../../assets/icons/estrela.png')}
                  style={{ width: 12, height: 12,}}
                />
              </Text>
              <Image
                  source={require('../../assets/icons/reticencias.png')}
                  style={{ width: 20, height: 20,}}
                />
            </View>
            <View>
            <Image
              style={styles.img}
              source={require('../../assets/imgCards/imagemCard2.png')}
            />
            </View>
          </View>
          <View style={styles.containerBox}>
            <View style={styles.box}>
              <Text style={styles.boxText}>
              Demystifying Palantir: The Most Controversial Company to Go Mario
              </Text>
              <Text style={styles.boxTextIcon}>
                Gabriele - 6 min de leitura   <Image
                  source={require('../../assets/icons/estrela.png')}
                  style={{ width: 12, height: 12,}}
                />
              </Text>
              <Image
                  source={require('../../assets/icons/reticencias.png')}
                  style={{ width: 20, height: 20,}}
                />
            </View>
            <View>
            <Image
              style={styles.img}
              source={require('../../assets/imgCards/imagemCard3.png')}
            />
            </View>
          </View>
          <View style={styles.containerBox}>
            <View style={styles.box}>
              <Text style={styles.boxText}>
                5 Habits of Truly Cool Couples
              </Text>
              <Text style={styles.boxTextIcon}>
                Sira M. - 8 min de leitura   <Image
                  source={require('../../assets/icons/estrela.png')}
                  style={{ width: 12, height: 12,}}
                />
              </Text>
              <Image
                  source={require('../../assets/icons/reticencias.png')}
                  style={{ width: 20, height: 20,}}
                />
            </View>
            <View>
            <Image
              style={styles.img}
              source={require('../../assets/imgCards/imagemCard4.png')}
            />
            </View>
          </View>
          <View style={styles.containerBox}>
            <View style={styles.box}>
              <Text style={styles.boxText}>
                8 Life Lessons I've Learned at 40-Something That I Wish I'd
              </Text>
              <Text style={styles.boxTextIcon}>
                Shannon Hilson - 13 min de leitura   <Image
                  source={require('../../assets/icons/estrela.png')}
                  style={{ width: 12, height: 12,}}
                />
              </Text>
              <Image
                  source={require('../../assets/icons/reticencias.png')}
                  style={{ width: 20, height: 20,}}
                />
            </View>
            <View>
            <Image
              style={styles.img}
              source={require('../../assets/imgCards/imagemCard5.png')}
            />
            </View>
          </View>
          <View style={styles.containerBox}>
            <View style={styles.box}>
              <Text style={styles.boxText}>
                Jane Doe identified After Five Decades
              </Text>
              <Text style={styles.boxTextIcon}>
                Josie Claxton - 6 min de leitura   <Image
                  source={require('../../assets/icons/estrela.png')}
                  style={{ width: 12, height: 12,}}
                />
              </Text>
              <Image
                  source={require('../../assets/icons/reticencias.png')}
                  style={{ width: 25, height: 25,}}
                />
            </View>
            <View>
            <Image
              style={styles.img}
              source={require('../../assets/imgCards/imagemCard6.png')}
            />
            </View>
          </View>
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
    fontSize: 20,
    fontWeight: 'bold',
    margin: 5,
    padding: 10,
    paddingLeft: 15,
  },

  containerBox: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: 8,
    paddingRight: 10,
    paddingLeft: 10,
    justifyContent: 'space-between',
  },

  box: {
    flexDirection: 'column',
    flex: 0.9,
  },

  boxText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2c2c2c',
    paddingVertical: 8,
    
  },

  boxTextIcon: {
    fontSize: 11,
    color: '#69726d',
  },

  img: {
    width: 80,
    height: 80,
    paddingLeft: 10,
  },
});

export default Home;
