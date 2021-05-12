import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from './styles';

export default function Input(props) {
    return (
        <View style={styles.wrapper}>
            <TextInput
                style={[styles.field, props.error && styles.error, props.style]}
                {...props}
            />
            {props.errorText && (
                <Text style={styles.errorText}>{props.errorText}</Text>
            )}
        </View>
    );
}