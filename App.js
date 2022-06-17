import { useState } from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import Header from './components/header';
import TodoInput from './components/todoInput';
import TodoItem from './components/todoItem';

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'Learn React Native', key:1, isCompleted: false },
    { text: 'Learn Node js', key:2, isCompleted: true },
    { text: 'Learn React', key:3, isCompleted: false },
    { text: 'Learn Kotlin', key:4, isCompleted: true },

  ])


  const removeTodo = (key)=>{
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key !== key)
    })
  }

  const addTodo = (text)=>{
    if(!text === ""){
      setTodos((prevTodos)=>{
        return [...prevTodos, {text, key: Math.random().toString(), isCompleted: false}]
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
