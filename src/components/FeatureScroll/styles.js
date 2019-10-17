import {StyleSheet, Dimensions} from 'react-native';

export const sliderWidth = Dimensions.get('window').width;
export const horizontalMargin = 20;
export const verticalMargin = 8;
export const slideWidth = 248;

export const itemWidth = slideWidth + horizontalMargin * 2;
export const itemHeight = 260 + verticalMargin * 2;

export default StyleSheet.create({
  slide: {
    width: itemWidth,
    height: itemHeight,
    paddingHorizontal: horizontalMargin,
    paddingVertical: verticalMargin,
  },
  slideInnerContainer: {
    width: slideWidth,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    flex: 1,
  },

  title: {
    fontFamily: 'SofiaProRegular',
    fontSize: 14,
    color: '#09133C',
  },
  extra: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  extraIcon: {
    paddingHorizontal: 8,
  },
});
