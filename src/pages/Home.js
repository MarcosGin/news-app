import React from 'react';
import {View, Text, Image, StatusBar, StyleSheet} from 'react-native';

import Header from '../components/Header';

import FeatureScroll from '../components/FeatureScroll';
import SectionScroll from '../components/SectionScroll';

const elevationShadowStyle = elevation => {
  return {
    elevation,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 0.8 * elevation,
  };
};

const styles = StyleSheet.create({
  user: {
    width: 140,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 100,
    borderStyle: 'solid',
    borderColor: '#fff',
    borderWidth: 3.5,
  },
  shadow: elevationShadowStyle(25),
});

const avatarImg = require('../assets/avatar.png');

class Home extends React.Component {
  static navigationOptions = {
    headerStyle: {
      shadowColor: 'transparent',
      elevation: 0,
      marginHorizontal: 24,
    },
    headerLeft: () => (
      <View style={styles.user}>
        <View style={[styles.avatar, styles.shadow]}>
          <Image
            source={avatarImg}
            style={{width: '100%', height: '100%', borderRadius: 100}}
          />
        </View>
        <View style={{width: 88}}>
          <Text style={{fontSize: 12, color: '#2226'}}>Good Morning!</Text>
          <Text style={{fontSize: 14, color: '#222'}}>Hi, Marcos</Text>
        </View>
      </View>
    ),
  };
  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" backgroundColor="#ecf0f1" />

        <Header></Header>

        <SectionScroll
          items={[
            {
              id: 1,
              name: 'Elecciones',
              color: 'rgba(22, 157, 255, 0.1)',
              icon: {name: 'vote-yea', color: '#47B2FF'},
            },
            {
              id: 2,
              name: 'Politica',
              color: 'rgba(255, 116, 158, 0.1)',
              icon: {name: 'balance-scale', color: '#FF749E'},
            },
            {
              id: 3,
              name: 'Actualidad',
              color: 'rgba(139, 132, 207, 0.1)',
              icon: {name: 'star', color: '#8B83DC'},
            },
            {
              id: 4,
              name: 'Global',
              color: 'rgba(121, 199, 138, 0.1)',
              icon: {name: 'globe', color: '#79C78A'},
            },
            {
              id: 5,
              name: 'Deportes',
              color: 'rgba(248, 169, 120, 0.1)',
              icon: {name: 'running', color: '#F8A978'},
            },
            {
              id: 6,
              name: 'Economía',
              color: 'rgba(22, 157, 255, 0.1)',
              icon: {name: 'dollar-sign', color: '#47B2FF'},
            },
          ]}
        />
        <FeatureScroll
          items={[
            {id: 1, title: 'EY hello'},
            {id: 2, title: 'ey how are you'},
            {id: 3, title: 'ey how are you 2'},
          ]}
        />
      </View>
    );
  }
}

export default Home;
