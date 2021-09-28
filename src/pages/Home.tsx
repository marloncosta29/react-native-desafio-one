import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    setTasks([...tasks, {id: tasks.length + 1, title: newTaskTitle, done: false} ])
  }

  function handleToggleTaskDone(id: number) {
    setTasks(tasks.map(task => {
      if(task.id === id){
        task.done = !task.done
      }
      return task
    }))
  }

  function handleRemoveTask(id: number) {
   const index  = tasks.findIndex(task => task.id === id)
   tasks.splice(index, 1)
   setTasks([...tasks])
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})