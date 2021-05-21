import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function ItemCarousel({ item, index }) {
    return (
        <View style={{ marginHorizontal: 20 }}>
            <Image source={{ uri: item.img }} style={styles.img} />
            {/* <Text style={{ fontSize: 30 }}>{item.title}</Text> */}
            <Text style={styles.text}>{item.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: 440,
        borderRadius: 20,
        resizeMode: 'cover'
    },
    text: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 20,
        width: '100%'
    }
});

export default ItemCarousel;