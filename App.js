import React from 'react';
import { Button, View, Text,PermissionsAndroid } from 'react-native';
import { createDrawerNavigator } from 'react-navigation'; // Version can be specified in package.json
import HomeScreen  from './components/HomeScreen'
import SettingsScreen from "./components/SettingsScreen";

class ModalScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 30 }}>This is a modal!</Text>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Dismiss"
                />
            </View>
        );
    }
}


const RootDrawer = createDrawerNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Settings :{
            screen : SettingsScreen,
        },
        MyModal: {
            screen: ModalScreen,
        },
    },
    {
        initialRouteName: 'Home',
        drawerPosition: 'left',
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle'
    }
);

export default class App extends React.Component {
    render() {
        return <RootDrawer />;
    }
}

