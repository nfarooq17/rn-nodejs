import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import LoginFrom from '../loginScreen/LoginFrom'
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: 'blue', width: "100%", height: 65 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, top: 20 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image

                            style={{ height: 30, width: 30 }}
                            source={require("../assets/arrow.png")}
                        />
                    </TouchableOpacity>
                    <Text style={{ alignSelf: 'center', color: 'white', fontSize: 15, fontWeight: '400' }}>Login with Instagram</Text>
                    <View></View>
                </View>
            </View>
            <View style={{ backgroundColor: 'white' }}>
                <View style={{ flexDirection: "row", justifyContent: "space-around", }}>
                    <Text style={{ color: 'gray', fontSize: 20, fontWeight: "bold", marginLeft: -23, top: 4 }}>...</Text>
                    <Text style={{ color: 'gray', top: 4 }}>English</Text>
                    <View></View>
                </View>
                <View style={{
                    alignItems: 'center',
                    top: 10,
                    marginTop: 40,
                }}>
                    <Image
                        style={{ height: 100, width: 200, color: "black" }}
                        source={require("../assets/insIcon.png")} />
                </View>

                <LoginFrom />
            </View>
            <View style={{ height: 80, alignItems: 'center', borderTopWidth: 1, }}>
                <View style={{ top: 12 }}>
                    <Text style={{ alignSelf: "center", fontSize: 10, fontWeight: '600', marginLeft: 10, }}> from </Text>
                    <Text style={{ color: 'black', fontSize: 15, fontWeight: '600' }}> Ⓜ️ Meta </Text>
                </View>
            </View>
        </View>
    )
}

export default LoginScreen