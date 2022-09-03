import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Cards = ({ counter, title, image, style, icon }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.cardsContanier}>
                <View style={styles.container}>
                    <View style={{ width: 115, top: 3, height: 40, }}>

                        {title && <Text style={title}> {title} </Text>}
                    </View>
                    <View style={style}>
                        {image && <Image
                            style={icon}
                            source={image}
                        />}
                    </View>
                </View>
                <View style={{
                    justifyContent: 'center',
                    top: 7, width: 150, margin: 4, height: 40
                }}>
                    <Text style={styles.counter}>{counter}</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    mainContainer: {

    },
    cardsContanier: {
        backgroundColor: '#FEFEFE',
        width: "90%",
        height: 100,
        borderRadius: 10,
        marginVertical: "10%",
        marginHorizontal: 14

    },
    container: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginHorizontal: 10
    },
    title: {
        color: 'gray',
        fontSize: 12,
        fontWeight: "700",
        marginTop: 15,

    },
    counter: {
        color: 'darkblue',
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',

    },


})

export default Cards