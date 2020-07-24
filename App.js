import React, { useState } from 'react';
import { StyleSheet, Button, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {


  const [courseGoals, setCourseGoals] = useState([]);

  const [isAddMode, setIsAddmode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalTitle }]);

    setIsAddmode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    })
  }

  const cancelGoalHandler = () => {
    setIsAddmode(false)
  }

  return (
    <View style={styles.screen}>

      <Button title='Add new goal' onPress={() => setIsAddmode(true)} />
      <GoalInput
        visible={isAddMode}
        inputGoal={addGoalHandler}
        cancelGoal={cancelGoalHandler} />

      <FlatList data={courseGoals}
        renderItem={
          itemData => <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            goal={itemData.item.value} />
        }
      />

    </View>
  );
}

const styles = StyleSheet.create({

  screen: {
    paddingTop: 50
  },



});
