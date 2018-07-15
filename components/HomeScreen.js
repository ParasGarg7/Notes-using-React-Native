import React from "react";
import {Container,Header,Content,Icon,Grid,Col,Row} from 'native-base';
import {StyleSheet} from "react-native";
import CustomHeader from './CustomHeader';

class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Settings",
        headerLeft: <Icon name="menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        drawerIcon: <Icon name = "home" style={[styles.icon]}/>
    })

    render() {
        return (
            <Container>
                <CustomHeader
                    title="Home"
                    drawerOpen={() => this.props.navigation.navigate("DrawerOpen")}
                />
                <Content>
                    <Container>
                        <Grid>
                            <Row>
                                <Col style={{ backgroundColor: '#635DB7', height: 200 }}></Col>
                                <Col style={{ backgroundColor: '#00CE9F', height: 200 }}></Col>
                            </Row>
                            <Row>
                                <Col style={{ backgroundColor: '#000', height: 200 }}></Col>
                                <Col style={{ backgroundColor: '#FFF', height: 200 }}></Col>
                            </Row>
                            <Row>
                                <Col style={{ backgroundColor: '#F00', height: 200 }}></Col>
                                <Col style={{ backgroundColor: '#00F', height: 200 }}></Col>
                            </Row>
                        </Grid>
                    </Container>
                </Content>
            </Container>
        );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    icon: {
        height: 24,
        width: 24
    }
})