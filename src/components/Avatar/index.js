import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

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

const avatarImg = require('../../assets/avatar.png');

const Avatar = () => {
  return (
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
  );
};

export default Avatar;
