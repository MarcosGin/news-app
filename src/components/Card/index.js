import React from 'react';
import {View, Text, Image} from 'react-native';
import {BoxShadow} from 'react-native-shadow';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles, {shadowOpt} from './styles';

const Card = ({title, media, width, height}) => {
  //Todo: Quiza tenga que verificar que esta en un dipositivo android para agregar esta sombra,

  const shadowOpt = {
    width: width,
    height: height,
    color: '#EAEDFC',
    border: 16,
    radius: 8,
    opacity: 0.65,
    x: 0,
    y: 4,
  };
  return (
    <BoxShadow setting={shadowOpt}>
      <View style={[styles.slideInnerContainer, {width, height}]}>
        <View>
          <Image source={media.image} />
        </View>
        <View>
          <View style={{padding: 15, height: 64}}>
            <Text style={styles.title} numberOfLines={2}>
              {title}
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
    </BoxShadow>
  );
};

Card.defaultProps = {
  title: '',
  media: {},
  width: 248,
  height: 260,
};

export default Card;
