import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";

const horizontalMargin = 20;
const slideWidth = 280;

const sliderWidth = Dimensions.get("window").width;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 200;

const styles = StyleSheet.create({
  slide: {
    width: itemWidth,
    height: itemHeight,
    paddingHorizontal: horizontalMargin,
    backgroundColor: "red"
    // other styles for the item container
  },
  slideInnerContainer: {
    width: slideWidth,
    flex: 1
    // other styles for the inner container
  }
});

const FeatureScroll = ({ items }) => {
  const renderItem = ({ item, index }) => (
    <View style={styles.slide}>
      <View style={styles.slideInnerContainer}>
        <Text>{item.title}</Text>
      </View>
    </View>
  );
  return (
    <Carousel
      data={items}
      renderItem={renderItem}
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
    />
  );
};

FeatureScroll.defaultProps = {
  items: []
};

export default FeatureScroll;
