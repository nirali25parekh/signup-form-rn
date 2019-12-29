import 'react-native-gesture-handler'
import React from 'react';
import { StyleSheet, View, ScrollView, StatusBar, TextInput, TouchableOpacity, Alert, Button, AsyncStorage, Text, } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Details from './src/Details'

class SignUp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      sap: '',
      branch: '',
      email: '',
      password: ''
    }
    

  }

  static navigationOptions = {
    title: 'Sign Up Page',
    headerStyle: {
      backgroundColor: 'black',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  viewDetailsButtonPressed = () => {
    this.props.navigation.navigate('DetailsRoute')
  }

  saveDetailsButtonPressed = () => {
    this._storeData()
  }

  _storeData = async () => {
    try {
      AsyncStorage.setItem('nameKey', this.state.name);
      AsyncStorage.setItem('sapKey', this.state.sap);
      AsyncStorage.setItem('branchKey', this.state.branch);
      AsyncStorage.setItem('emailKey', this.state.email);
    } catch (error) {
      Alert.alert(
        'Error in saving', '',
        [
          { text: 'okay' }
        ],
      );
    }
    Alert.alert('Details saved successfully! ','',[{ text: 'okay'}],)
  };

  render() {
    return (
      <ScrollView style={styles.scrollStyle}>
        <View style={styles.container}>
          <StatusBar backgroundColor='#29434e'
            barStyle='light-content' />
          <View style={styles.appStyle}>
            <View >
              <StatusBar backgroundColor='#29434e'
                barStyle='light-content' />
              <Text style={styles.welcomeText}> Welcome ! </Text>

              <TextInput
                style={styles.inputBox}
                placeholderTextColor='#ffffff'
                underLineColorAndroid='#000000'
                placeholder="Name"
                onChangeText={(text) => this.setState({ name: text })}
              />
              <TextInput
                style={styles.inputBox}
                underLineColorAndroid='#000000'
                placeholderTextColor='#ffffff'
                placeholder="SAP ID"
                keyboardType='decimal-pad'
                onChangeText={(text) => this.setState({ sap: text })}
              />

              <TextInput
                style={styles.inputBox}
                underLineColorAndroid='#000000'
                placeholderTextColor='#ffffff'
                placeholder="Branch"
                //scrollEnabled='true'
                onChangeText={(text) => this.setState({ branch: text })}
              />

              <TextInput
                style={styles.inputBox}
                underLineColorAndroid='#000000'
                placeholderTextColor='#ffffff'
                placeholder="email-id"
                keyboardType='email-address'
                autoCapitalize='none'
                onChangeText={(text) => this.setState({ email: text })}
              />

              <TextInput
                style={styles.inputBox}
                underLineColorAndroid='#000000'
                placeholder="password"
                placeholderTextColor='#ffffff'
                secureTextEntry={true}
                onChangeText={(text) => this.setState({ password: text })}
              />
            </View>
            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={styles.button}
                onPress={this.saveDetailsButtonPressed} >
                <Text style={styles.buttonText}>Save Details</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={this.viewDetailsButtonPressed} >
                <Text style={styles.buttonText}>View Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollStyle: {
    backgroundColor: '#455a64',
    flex: 1,
    flexDirection: "column",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appStyle: {
    flex: 1,
    alignItems: 'center',
    flexDirection: "column",
  },
  welcomeText: {
    color: 'white',
    alignItems: 'center',
    fontSize: 28,
    paddingBottom: 16,
    paddingTop: 55,
    paddingHorizontal: 60,
    justifyContent: 'center'
  },
  inputBox: {
    marginVertical: 14,
    paddingHorizontal: 16,
    width: 300,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.3)',
    fontSize: 16,
    borderRadius: 25,
  },
  buttonRow: {
    flexDirection: 'row',
    marginVertical: 30,
  },
  buttonText:
  {
    fontSize: 18,
    alignContent: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    textAlign: 'center'
  },
  button:
  {
    paddingVertical: 15,
    paddingHorizontal: 15,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: 140,
    backgroundColor: 'rgba(00,00,00,0.4)',
  },
}
);

const RootStack = createStackNavigator({
  SignUpRoute: SignUp,
  DetailsRoute: Details,
});

export default createAppContainer(RootStack);

