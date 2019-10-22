import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SectionScroll = ({items}) => {
  if (items.length === 0) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View style={{marginLeft: 24, marginBottom: 30}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {items.map(item => {
          return (
            <View
              key={item.id}
              style={{alignItems: 'center', width: 70, marginRight: 20}}>
              <View
                style={{
                  backgroundColor: item.style.color,
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
