import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
const GoalItem = props => {
    return (
        <TouchableOpacity activeOpacity={0.1} onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listGoalContainer}>
                <View style={styles.goalText}>
                    <Text>{props.goal}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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
    }

});
export default GoalItem;