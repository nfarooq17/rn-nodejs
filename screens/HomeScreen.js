import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={{ height: 80, width: 400 }}>
                    <Image
                        style={styles.image1}
                        source={require("../assets/logo.png")}
                    />
                </View>
                <View style={{ marginLeft: 22, top: 15 }}>
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: "600" }}>Welcome to:</Text>
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: "600" }}>Yupi Reports for Instagram</Text>
                </View>
                <View style={{ marginLeft: 22, top: 45, justifyContent: 'center', }}>
                    <Text style={{ color: 'gray', fontSize: 14, fontWeight: "400" }}> Yupi is ready to  show you what you need to</Text>
                    <Text style={{ color: 'gray', fontSize: 14, fontWeight: "400" }}> know about your Instagram.</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
                    <View style={{ marginLeft: 22, top: 70, backgroundColor: 'darkblue', borderRadius: 10, height: 50, width: 340, }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', top: 13, marginLeft: -12 }}>
                            <Image
                                style={{ height: 20, width: 20, borderRadius: 10, alignSelf: 'center' }}
                                source={require("../assets/logo.png")}
                            />
                            <Text style={{ color: 'white', marginLeft: 12, fontSize: 13, fontWeight: "700", alignSelf: 'center' }}>Instagram Login</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={{ marginLeft: 30, top: 90, justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ fontSize: 16 }}> By signing in, you agree to the</Text>
                        <TouchableOpacity>
                            <Text style={{ color: 'blue', fontSize: 16 }} > privacy policy </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 75 }}>
                        <Text style={{ fontSize: 14 }}> and its </Text>
                        <TouchableOpacity>
                            <Text style={{ color: 'blue', fontSize: 14 }}>terms of use.</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        width: 400,
        height: 800,
        justifyContent: 'center',
        flex: 1
    },
    container: {
        width: 400,
        height: 400
    },
    image1: {
        height: 70,
        width: 70,
        margin: 22,
        borderRadius: 30,
        bottom: 15
    }
})

export default HomeScreen