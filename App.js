import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goalTitle => {
    //console.log(enteredGoal);
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      { key: Math.random().toString(), value: goalTitle}]);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key !== goalId);
    });
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <FlatList 
        data={courseGoals} 
        renderItem={itemData => 
          <GoalItem 
            id={itemData.item.key}  
            onDelete={removeGoalHandler}  
            title={itemData.item.value}
          />
        }
      >
          
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});


