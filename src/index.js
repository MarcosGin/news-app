import React from 'react';
import {Provider} from 'react-redux';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
//Redux
import store from './store';

//Pages
import Home from './pages/Home';
import Settings from './pages/Settings';

const icons = {
  Home: {iconName: 'home'},
  Settings: {iconName: 'setting'},
};

const HomeStack = createStackNavigator({
  Home,
});

const SettingsStack = createStackNavigator({
  Settings,
});

const tabs = createBottomTabNavigator(
  {Home: HomeStack, Settings: SettingsStack},
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({tintColor}) => {
        const iconName = icons[navigation.state.routeName].iconName;
        return <Icon name={iconName} color={tintColor} size={24} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: {width: 5, height: 3},
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5,
      },
    },
  },
);

let Navigation = createAppContainer(tabs);

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
