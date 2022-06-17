import { useState } from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import Header from './components/header';
import TodoInput from './components/todoInput';
import TodoItem from './components/todoItem';

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'Learn React Native', key:1,time:"12, Monday, 2020", isCompleted: false },


  ])


  const removeTodo = (key)=>{
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key !== key)
    })
  }

  const addTodo = (text)=>{
    if(text !== ""){
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }
      const time = new Date().toLocaleDateString('en-US', options)
      setTodos((prevTodos)=>{
        return [...prevTodos, {text, key: Math.random().toString(), isCompleted: false,time: time}]
      })
    }
  }
  return (
    <View>
      <Header/>
        <View style={styles.container}>
          <TodoInput handler={addTodo} />
          <FlatList data={todos} 
            renderItem={({item})=> (
              <TodoItem handler={removeTodo} todo={item}/>
            )} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   padding: 10
  },
});
