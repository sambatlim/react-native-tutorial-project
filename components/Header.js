import React from 'react'
import { StyleSheet, View, Text } from 'react-native';

const Header = props => {
    return (
        <View style={styles.header}>

            <Text style={styles.headerTitle}>{props.title}</Text>

        </View>
    )


}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcfd1',
        paddingTop: 35,
        paddingBottom: 5
    },
    headerTitle: {
        color: 'white',
        fontSize: 20
    }
});

export default Header
