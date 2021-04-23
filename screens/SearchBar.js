import React from 'react';
import { TextInput, TouchableOpacity, Text, View, StyleSheet } from 'react-native';


export const SearchBar = () => {
   
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text style={styles.filter}>Filtrar</Text>
            </TouchableOpacity>
            <View>
                <TextInput 
                /* onChangeText={onChange} */
                /* value={input} */
                placeholder="Buscar..."
                placeholderTextColor={'#8626FF'}
                style={styles.searchbar}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 40,
        paddingHorizontal: 30,
        width: '90%',
        alignSelf: 'center'
    },

    searchbar: {
        width: '100%',
        alignSelf: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#8626FF',
        borderRadius: 25,
        padding: 10,
        marginVertical: 10,
        fontSize: 18,
        color: '#393e46'
    },

    filter: {
        alignSelf: 'flex-end',
        fontSize: 18,
        color: '#8626FF'
    },

   
  });
  

