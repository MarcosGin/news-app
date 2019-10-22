import React from 'react';
import {View, Text} from 'react-native';
import Button from '../Button';

const Section = ({title, ...props}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 24,
          height: 50,
        }}>
        <Text
          style={{
            fontSize: 22,
            fontFamily: 'SofiaProRegular',
            textAlignVertical: 'center',
          }}>
          {title}
        </Text>

        <Button text="More" style={{marginTop: 5}} />
      </View>
      {props.children}
    </View>
  );
};

Section.defaultProps = {
  title: '',
};

export default Section;
