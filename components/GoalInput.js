import React, { useState } from 'react';
import { View, Modal, TextInput, Button, StyleSheet } from 'react-native';

const GoalItem = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        props.inputGoal(enteredGoal);
        setEnteredGoal('');
    };


    return (

        <Modal visible={props.visible} animationType='slide'>

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='course goal'
                    style={styles.textInput}
                    onChangeText={goalInputHandler}
                    value={enteredGoal} />

                <View style={styles.wrapButton}>
                    <View style={styles.viewAroundButton}>
                        <Button style={styles.button} title='cancel' color='red' onPress={props.cancelGoal} />
                    </View>
                    <View style={styles.viewAroundButton}>
                        <Button style={styles.button} title='Add' onPress={addGoalHandler} />
                    </View>
                </View>
            </View>

        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    textInput: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 5
    },
    goalText: {
        padding: 10,
        marginTop: 10,
        width: '95%',
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50

    },
    listGoalContainer: {
        alignItems: 'center'
    },
    wrapButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '70%'
    },

    viewAroundButton: {
        width: '40%'
    }

});

export default GoalItem;
