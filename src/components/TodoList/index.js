import React, { Component } from 'react'
import { FlatList, View, Text, StyleSheet, Button } from 'react-native'

class TodoList extends Component {
  render() {
    const { todos, _keyExtractor } = this.props

    if (todos.length == 0) {
      return (
        <View style={ stylesTodoList.listContainer }>
          <Text style={ stylesTodoList.listItem } />
        </View>
      )
    } else {
      return (
        <FlatList style={ { marginTop: 10 } }
          data={ todos }
          keyExtractor={ _keyExtractor }
          
          renderItem={ ({ item }) => (
            <View style={ stylesTodoList.listContainer }>
              <Text style={ stylesTodoList.listItem }>{ item }</Text>
              <Button title='remove' onPress={ () => this.props.onRemove(item)} />
              <Button title='edit' onPress={ () => this.props.onEdit(item)} />
            </View>
          )}
        />
      )
    }
  }
}

const stylesTodoList = StyleSheet.create({
  listContainer: {
    padding: 5,
    paddingTop: 20,
    paddingBottom: 20,
    margin: 1,
    backgroundColor: 'rgba(225,225,225,0.2)'
  },
  listItem: {
    color: '#fff'
  }
})

export default TodoList