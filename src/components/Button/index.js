import React from 'react';
import {
  View,
  Text,
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';

const Button = ({text, style}) => {
  const Touchable =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <Touchable accessibilityRole="button">
      <View
        style={[
          {
            backgroundColor: '#2D53DB',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15,
            width: 70,
            height: 30,
          },
          style,
        ]}>
        <Text style={{color: '#fff', fontSize: 12}}>{text}</Text>
      </View>
    </Touchable>
  );
};

Button.defaultProps = {
  text: '',
};

export default Button;
