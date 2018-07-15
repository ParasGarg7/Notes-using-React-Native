import React, { Component } from "react";
import { Text, StyleSheet} from "react-native";
import { Container, Content, Icon, Button } from 'native-base'
import CustomHeader from './CustomHeader'

class SettingsScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Settings",
        headerLeft: <Icon name="menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        drawerIcon: <Icon name = "settings" style={[styles.icon]}/>
    })

    render() {
        return (

            <Container>
                <CustomHeader
                    title="Settings"
                    drawerOpen={() => this.props.navigation.navigate("DrawerOpen")}
                />
                <Content contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                    <Button
                        full
                        onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={{ color: 'white' }}>Go to Home screen</Text>
                    </Button>
                </Content>
            </Container>
        )
    }

}

export default SettingsScreen

const styles = StyleSheet.create({
    icon: {
        height: 24,
        width: 24
    }
})