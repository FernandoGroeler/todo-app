import React, { Component } from 'react'
import { TextInput, View } from 'react-native'

import Styles from '../../styles'

import Button from '../Button'
import TodoList from '../TodoList'

class TodoPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      task: '',
      todos: [],
      editing: ''
    }
  }

  onAdd = () => {
    const { task, todos, editing } = this.state
    const newTodos = todos

    if (editing !== '') {
      newTodos[editing] = task
    } else {
      newTodos.push(task)
    }   

    console.log(newTodos)

    this.setState({
      todos: newTodos,
      task: '',
      editing: ''
    })
  }

  onRemove = item => {
    const { todos } = this.state

    let index = todos.indexOf(item)

    todos.splice(index, 1);
    this.setState({
      todos
    })
  }  

  onEdit = item => {
    const { todos } = this.state

    let index = todos.indexOf(item)

    this.setState({
      editing: index,
      task: todos[index]
    })
  }

  onChangeTextTask = task => {
    this.setState({ 
      task 
    })
  }

  _keyExtractor = (item, index) => index.toString();

  render() {
    const { task, todos } = this.state

    return (
      <View style={ Styles.container }>
        <TextInput
          style={ Styles.input }
          value={ task }
          name='login'
          onChangeText={ this.onChangeTextTask }
          autoCapitalize='none'
          placeholder='Task'
          placeholderTextColor='rgba(225,225,225,0.7)' 
        />
        <Button
          onPress={ this.onAdd }
          text='ADD'
        />
        
        <TodoList
          todos={ todos }
          onRemove={ this.onRemove }
          onEdit={ this.onEdit }
          _keyExtractor={ this._keyExtractor }
        />
      </View>
    )
  }
}

export default TodoPage