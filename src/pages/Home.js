import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';

import FeatureScroll from '../components/FeatureScroll';
import SectionScroll from '../components/SectionScroll';
import SearchInput from '../components/SearchInput';
import Avatar from '../components/Avatar';
import Section from '../components/Section';

class Home extends React.Component {
  static navigationOptions = {
    headerStyle: {
      shadowColor: 'transparent',
      elevation: 0,
      marginHorizontal: 24,
    },
    headerLeft: () => <Avatar />,
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="light-content" backgroundColor="#ecf0f1" />
        <ScrollView>
          <SearchInput />

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

          <Section title="Novedades">
            <FeatureScroll
              items={[
                {
                  id: 1,
                  title:
                    'Just a simple tabletop scene for you to insert your design, art',
                  media: {image: require('../assets/card/two.png')},
                },
                {
                  id: 2,
                  title: 'ey how are you',
                  media: {image: require('../assets/card/one.png')},
                },
              ]}
            />
          </Section>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Home;
