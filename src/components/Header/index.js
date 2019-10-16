import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
  searchInput: {
    flexDirection: 'row',

    marginVertical: 29,
  },

  shared: {
    borderWidth: 1,
    borderColor: '#EFEFEF',
    backgroundColor: '#FAFAFA',
    height: 44,
  },

  input: {
    flex: 1,
    fontSize: 14,
    borderLeftWidth: 0,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },

  icon: {
    borderRightWidth: 0,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    justifyContent: 'center',
  },
});

const Header = () => {
  return (
    <View style={[styles.container]}>
      <View style={styles.searchInput}>
        <View style={[styles.shared, styles.icon]}>
          <Icon
            name="search1"
            style={{marginLeft: 15, marginRight: 10}}
            size={20}
          />
        </View>
        <TextInput
          placeholder="Type something that you want"
          placeholderTextColor="#22222266"
          style={[styles.shared, styles.input]}
        />
      </View>
    </View>
  );
};

Header.defaultProps = {};

export default Header;
