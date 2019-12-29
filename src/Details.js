import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
    TextInput,
    Button,
    Alert,
    AsyncStorage,
    TouchableOpacity
} from 'react-native';


export default class Details extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name:'',
            sap:'',
            branch:'',
            email:'',
        }
    }

    static navigationOptions = {
        title: 'Details',
        headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
    };

    componentDidMount(){
        this._retrieveData()
    }

    _retrieveData = async () => {
        try {
            name = await AsyncStorage.getItem('nameKey');
            sap = await AsyncStorage.getItem('sapKey');
            branch = await AsyncStorage.getItem('branchKey');
            email = await AsyncStorage.getItem('emailKey');
            this.setState({name: name , sap : sap , branch: branch , email: email})
        } catch (error) {
            Alert.alert(
                'error!', '',
                [
                    { text: 'okay' }
                ],
            );
        }
    };
    render() {
        return (
            <View>
                <Text style={styles.textStyle}>Name: {this.state.name} </Text>
                <Text style={styles.textStyle}>SAP: {this.state.sap}</Text>
                <Text style={styles.textStyle}>Branch: {this.state.branch}</Text>
                <Text style={styles.textStyle}>Email: {this.state.email}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        textStyle: {
            fontSize: 24,
            margin: 20,
        }
    }
)