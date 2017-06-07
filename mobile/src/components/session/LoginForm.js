import React, { Component } from 'react';
import { View, TextInput, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  onButtonSubmit() {
    const { username, password } = this.state;
    this.props.login({ username, password });
  }

  handleChange(value, name) {
    let newState = {};
    newState[name] = value;
    this.setState(newState);
  }

  renderError() {
    if (this.props.errors) {
      return (
        <Text
          style={{
          textAlign: 'center',
          fontSize: 20,
          color: '#cc3333'
        }}
        >Sorry authentication failed!</Text>
      );
    }
    return null;
  }


  render() {
    return (
      <View style={{
        flexDirection: 'column',
        height: 100,
        padding: 20,
        marginTop: 200,
        justifyContent: 'center',
        alignItems: 'center'
      }}
      linkAction={ Actions.loginForm }
      >
        <TextInput
          style={{
            borderColor: '#000000',
            borderWidth: 3,
            width: 300,
            height: 50,
            marginBottom: 20,
            alignSelf: 'center',
            textAlign: 'center'
          }}
          id={"username"}
          placeholder={'Username'}
          value={this.state.username}
          onChangeText={(value) => this.handleChange(value , 'username')}
        />

        <TextInput
          style={{
            borderColor: '#000000',
            borderWidth: 3,
            width: 300,
            height: 50,
            alignSelf: 'center',
            marginBottom: 30,
            textAlign: 'center'
          }}
          placeholder={'Password'}
          value={this.state.password}
          onChangeText={(value) => this.handleChange(value, 'password')}
          secureTextEntry
        />
        <View
          style={{backgroundColor: 'green', width: 150}}>
          <Button
            color= 'white'
            title="Login"
            onPress={this.onButtonSubmit.bind(this)}
          >
          </Button>
        </View>
      </View>
    );
  }
}
