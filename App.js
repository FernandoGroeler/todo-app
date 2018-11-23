import { createStackNavigator, createAppContainer } from 'react-navigation'

import LoginPage from './src/components/LoginPage'
import TodoPage  from './src/components/TodoPage'

const navigation = createStackNavigator ({
  Main: {
    screen: LoginPage
  },
  TodoPage: {
    screen: TodoPage,
    navigationOptions: {
      title: 'Todo'
    }
  }
}, {
  navigationOptions: {
    title: 'TODO App',
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#65499c'
    },
    headerTitleStyle: {
      color: '#fff'
    }
  }
})

export default createAppContainer(navigation)