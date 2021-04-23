import React from 'react';
import { Text, TouchableOpacity, ScrollView, Image, View, StyleSheet } from 'react-native';

export const GalleryScreen = () => {

    return (
        <ScrollView>
            <View style={styles.container}>
                    <TouchableOpacity>
                    <View style={styles.card}>
                      <Image 
                      style={styles.image}
                      source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWXD6gyj5FUG3kWpovkdZx7JLDEbUCVlI_vw&usqp=CAU',
                      }}
                      resizeMode='contain'
                      />
                      <View style={styles.data}>
                          <Text style={styles.info}>Nombre</Text>
                          <Text style={styles.info}>Estado</Text>
                          <Text style={styles.info}>Sexo | Edad</Text>
                      </View>
                    </View>
                </TouchableOpacity>
                
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 40,
        paddingHorizontal: 30,
        width: '100%',
    },

    card: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignSelf: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#8626FF',
        borderRadius: 25,
        padding: 8,
        margin: 5
    },

    image: {
        width: 100,
        height: 100,
        borderRadius: 25,
        alignSelf: 'center'
    },

    data: {
        padding: 8,
        margin: 0
    },

    info: {
        fontSize: 20,
        color: '#8626FF'
    }
  });
  

