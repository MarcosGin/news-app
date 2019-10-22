import {StyleSheet, Dimensions} from 'react-native';

const paddingHorizontal = 24;
const paddingTop = 10;
const paddingBottom = 20;
export const slideWidth = 248;
export const slideHeight = 260;

export const sliderWidth = Dimensions.get('window').width;
export const itemWidth = slideWidth + (paddingTop + paddingBottom) * 2;
const itemHeight = slideHeight + (paddingTop + paddingBottom);

export default StyleSheet.create({
  slide: {
    width: itemWidth,
    height: itemHeight,
    paddingHorizontal,
    paddingTop,
    paddingBottom,
  },
});
