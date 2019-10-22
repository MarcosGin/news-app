import React from 'react';
import {View} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import styles, {
  itemWidth,
  slideHeight,
  slideWidth,
  sliderWidth,
} from './styles.js';
import Card from '../Card';

const FeatureScroll = ({items}) => {
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.slide}>
        <Card {...item} width={slideWidth} height={slideHeight} />
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
    />
  );
};

FeatureScroll.defaultProps = {
  items: [],
};

export default FeatureScroll;
