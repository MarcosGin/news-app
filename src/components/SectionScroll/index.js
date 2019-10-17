import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SectionScroll = ({items}) => {
  return (
    <View style={{marginLeft: 24, marginBottom: 40}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {items.map(item => {
          return (
            <View
              key={item.id}
              style={{alignItems: 'center', width: 70, marginRight: 20}}>
              <View
                style={{
                  backgroundColor: item.color,
                  height: 66,
                  width: 66,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 8,
                }}>
                <Icon
                  name={item.icon.name}
                  size={23}
                  color={item.icon.color}></Icon>
              </View>
              <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

SectionScroll.defaultProps = {
  items: [],
};

export default SectionScroll;
