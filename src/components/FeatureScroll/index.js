import React from 'react';
import {View, Text, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles, {itemWidth, sliderWidth} from './styles.js';

const FeatureScroll = ({items}) => {
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.slide}>
        <View style={styles.slideInnerContainer}>
          <View>
            <Image source={item.media.image} />
          </View>
          <View>
            <View style={{padding: 15, height: 64}}>
              <Text style={styles.title} numberOfLines={2}>
                {item.title}
              </Text>
            </View>
            <View style={styles.extra}>
              <View>
                <Text>Avatar</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Icon
                  name="heart"
                  size={16}
                  style={styles.extraIcon}
                  color="#C3C9DF"
                />
                <Icon
                  name="bookmark"
                  size={16}
                  style={styles.extraIcon}
                  color="#6B8CFF"
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <Carousel
      data={items}
      renderItem={renderItem}
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
      activeSlideAlignment="start"
      inactiveSlideOpacity={1}
      inactiveSlideScale={1}
      containerCustomStyle={{paddingHorizontal: 24}}
    />
  );
};

FeatureScroll.defaultProps = {
  items: [],
};

export default FeatureScroll;
