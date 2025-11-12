// Main file : App.js
import React from 'react';
import {View, Text} from 'react-native';
import Exercise1 from './Exercise1';
import Exercise2 from './Exercise2';
import Exercise3A from './Exercise3a';
import Exercise3B from './Exercise3b';
import Exercise3C from './Exercise3c';
import Exercise3D from './Exercise3d';
// import Exercise3E from './Exercise3e';
import Exercise4 from './Exercise4';

const MyApp = () => {
    return (
        <View style={{marginTop: 40, flex: 1}}>
            <Text style={{fontSize: 30}}>Lesson 7 exercises:</Text>

            {/*<Exercise1 />*/}
            {/*<Exercise2 />*/}
            {/*<Exercise3A />*/}
            {/*<Exercise3B />*/}
            {/*<Exercise3C />*/}
            {/*<Exercise3D />*/}
            {/*<Exercise3E />*/}
            <Exercise4 />

        </View>
    );
};

export default MyApp;

