import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={{ width: "100%", height: 50 }}>
            <View style={styles.mainHeader}>
                <View style={styles.headerContainer}>
                    <Text style={styles.text}>danishhussain5178</Text>
                    <TouchableOpacity>
                        <View style={styles.viewImage}>
                            <Image
                                style={styles.image}
                                source={require("../../assets/arrowIcon.png")}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", }}>
                    <TouchableOpacity>
                        <Image
                            style={{ width: 60, height: 30, bottom: 2 }}
                            source={require("../../assets/settingIcon.png")}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={{ width: 33, height: 30, tintColor: 'blue', bottom: 2 }}
                            source={require("../../assets/crown2.png")}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    mainHeader: {
        flexDirection: "row",
        top: 20,
        justifyContent: 'space-between',
        marginHorizontal: 25,

    },
    headerContainer: {
        flexDirection: "row"
    },
    text: {
        color: "black",
        fontSize: 18
    },
    image: {
        width: 10,
        height: 10,
        marginLeft: 5,
        top: 4,

    },
    viewImage: {
        backgroundColor: 'darkblue',
        borderRadius: 10,
        width: 20,
        height: 20,
        marginLeft: 4,
        top: 3
    }
})

export default Header