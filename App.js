import React from 'react';
import { Button, Image, View, Text,PermissionsAndroid } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

class LogoTitle extends React.Component {
    render() {
        return (
            <View style={{flexDirection:'row',flex:1,justifyContent:'center'}}>
                <Image
                    source={require('./Spyro.png')}
                    style={{ width: 40, height: 40 }}
                />
                <Text>Hello</Text>
            </View>
        );
    }
}

class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};

        return {
            headerTitle: <LogoTitle />,
            headerLeft: (
                <Button
                    onPress={() => navigation.navigate('MyModal')}
                    title="Info"
                />
            ),
            headerRight: (
                <Button onPress={() => params.increaseCount()} title="+1" />
            ),
        };
    };

    componentWillMount() {
        this.props.navigation.setParams({ increaseCount: this._increaseCount });
    }

    state = {
        count: 0,
    };

    _increaseCount = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <View style={{flexDirection:'column',flex:1,}}>
                <View style={{flex:2,flexDirection:"row",justifyContent:'space-between',padding:10}}>
                    <View style={{backgroundColor:'red',flex:2,padding:10}}>
                    </View>
                    <View style={{flex:0.1}}/>
                    <View style={{backgroundColor:'blue',flex:2,padding:10}}>
                    </View>
                </View>

                <View style={{flex:2,flexDirection:"row",justifyContent:'space-between',padding:10}}>
                    <View style={{backgroundColor:'white',flex:2,padding:10}}>
                    </View>
                    <View style={{flex:0.1}}/>
                    <View style={{backgroundColor:'black',flex:2,padding:10}}>
                    </View>
                </View>
                <View style={{flex:2,flexDirection:"row",justifyContent:'space-between',padding:10}}>
                    <View style={{backgroundColor:'gray',flex:1,padding:10}}>
                    </View>
                    <View style={{flex:0.1}}/>
                    <View style={{backgroundColor:'yellow',flex:1,padding:10}}>
                    </View>
                </View>
            </View>
        );
    }
}

class DetailsScreen extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;

        return {
            title: params ? params.otherParam : 'A Nested Details Screen',
            /* These values are used instead of the shared configuration! */
            headerStyle: {
                backgroundColor: navigationOptions.headerTintColor,
            },
            headerTintColor: navigationOptions.headerStyle.backgroundColor,
        };
    };

    render() {
        /* 2. Read the params from the navigation state */
        const { params } = this.props.navigation.state;
        const itemId = params ? params.itemId : null;
        const otherParam = params ? params.otherParam : null;

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>
                <Button
                    title="Update the title"
                    onPress={() =>
                        this.props.navigation.setParams({ otherParam: 'Updated!' })}
                />
                <Button
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}

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

const MainStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Details: {
            screen: DetailsScreen,
        },
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

const RootStack = createStackNavigator(
    {
        Main: {
            screen: MainStack,
        },
        MyModal: {
            screen: ModalScreen,
        },
    },
    {
        mode: 'modal',
        headerMode: 'none',
    }
);

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}