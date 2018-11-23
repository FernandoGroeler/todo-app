import React, { Component } from 'react'
import { View, Text, TextInput, Alert, TouchableOpacity, Image, StyleSheet } from 'react-native'

import Styles from '../../styles'
import Button from '../../components/Button'

const logoImage = require('../../../assets/login.png')

class LoginPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      login: '',
      password: ''
    }
  }

  onChangeTextLogin = login => {
    this.setState({
      login
    })
  }

  onChangeTextPassword = password => {
    this.setState({
      password
    })
  }

  goTodoPage = () => {
    const { login, password } = this.state

    if (login === 'admin' && password == 1) {
      const { navigation } = this.props
      navigation.navigate('TodoPage')
    } else {
      Alert.alert(
        'Login',
        'Usuário ou senha inválido!',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed')}
        ],
        { cancelable: false }
      )
    }
  }

  render() {
    const { login, password } = this.state

    return (
      <View style={ Styles.container }>
        <View style={ loginStyles.logoContainer }>
          <Image
            style={ loginStyles.logo }
            source={ logoImage } />
        </View>
        <TextInput
          style={ Styles.input }
          onChangeText={ this.onChangeTextLogin }
          name='login'
          value={ login }
          autoCapitalize='none'
          placeholder='Login'
          placeholderTextColor='rgba(225,225,225,0.7)'/>
        <TextInput
          style={ Styles.input }
          onChangeText={ this.onChangeTextPassword }
          name='password'
          value={ password }
          placeholder='Senha'
          placeholderTextColor='rgba(225,225,225,0.7)'
          secureTextEntry />
        <Button
          onPress={ this.goTodoPage }
          text='LOGIN' />
      </View>
    )
  }
}

const loginStyles = StyleSheet.create({
  logoContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 100,
    height: 100
  }
})

export default LoginPage