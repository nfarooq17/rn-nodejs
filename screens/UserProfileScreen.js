import { StyleSheet, View, } from 'react-native'
import React from 'react'
import UserProfile from '../components/userProfile/UserProfile'
import { ScrollView } from 'react-native-gesture-handler'
import Header from '../components/userProfile/Header'
import BottomTabe from '../components/userProfile/BottomTabe'

const UserProfileScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ width: "100%" }} showsVerticalScrollIndicator={false}>
                <Header />
                <UserProfile />
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({

})

export default UserProfileScreen