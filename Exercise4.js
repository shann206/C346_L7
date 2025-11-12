// Exercise4
import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
        marginTop: 30,
    },
    child: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const Exercise4 = () => {
    return (
        <View style={[styles.parent]}>
            <View>
                <Text style={[styles.child, {backgroundColor: 'skyblue'}]}>Square 1</Text>
            </View>
            <View>
                <Text style={[styles.child, {backgroundColor: 'lightgreen'}]}>Square 2</Text>
            </View>
            <View>
                <Text style={[styles.child, {backgroundColor: 'red'}]}>Square 3</Text>
            </View>
        </View>
    );
};

export default Exercise4;

