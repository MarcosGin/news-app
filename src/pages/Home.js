import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {connect} from 'react-redux';

import {getSections} from '../actions';

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

  componentDidMount() {
    this.props.getSections();
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="light-content" backgroundColor="#ecf0f1" />
        <ScrollView>
          <SearchInput />

          <SectionScroll items={this.props.sections.data} />

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

const mapStateToProps = ({sections}) => {
  return {
    sections,
  };
};

export default connect(
  mapStateToProps,
  {getSections},
)(Home);
