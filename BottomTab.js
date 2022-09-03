import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import StoryScreen from './screens/StoryScreen';
import ProfileZoomScreen from './screens/ProfileZoomScreen';
import SearchScreen from './screens/SearchScreen';
import UserProfileScreen from './screens/UserProfileScreen';






const Tab = createBottomTabNavigator();

function BottomTab() {

    const screenOptions = {
        headerShown: false,
    };
    return (
        <Tab.Navigator
            tabBarOptions={{
                keyboardHidesTabBar: true,
                showLabel: false,
                style: {
                    backgroundColor: '#00428E',
                },
            }}
            initialRouteName="ProfileZoom"
            screenOptions={{
                headerShown: false,
            }}>
            <Tab.Screen
                name='UserProfileScreen'
                component={UserProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.mainIconContainer}>
                            <View style={styles.iconContainer}>
                                <Image
                                    source={require("../demo/assets/homeIcon.png")}
                                    resizeMode='contain'
                                    style={{
                                        width: 45,
                                        height: 45,
                                        tintColor: focused ? 'white' : "gray"
                                    }}
                                />
                            </View>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name='StoryScreen'
                component={StoryScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.mainIconContainer}>
                            <View style={styles.iconContainer}>
                                <Image
                                    source={require("../demo/assets/playIcon.png")}
                                    resizeMode='contain'
                                    style={{
                                        width: 40,
                                        height: 40,
                                        tintColor: focused ? 'white' : "gray",
                                    }}
                                />
                            </View>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name='ProfileZoom'
                component={ProfileZoomScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.mainIconContainer}>
                            <View style={styles.iconContainer}>
                                <Image
                                    source={require("../demo/assets/homeIcon.png")}
                                    resizeMode='contain'
                                    style={{
                                        width: 40,
                                        height: 40,
                                        tintColor: focused ? 'white' : "gray",
                                    }}
                                />
                            </View>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name='Search'
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.mainIconContainer}>
                            <View style={styles.iconContainer}>
                                <Image
                                    source={require("../demo/assets/searchIcons.png")}
                                    resizeMode='contain'
                                    style={{
                                        width: 50,
                                        height: 50,
                                        tintColor: focused ? 'white' : "gray",
                                    }}
                                />
                            </View>
                        </View>
                    ),
                }}
            />


        </Tab.Navigator>
    );
}

export default BottomTab
const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30,
    },
    label: {
        fontSize: 12,
    },

    iconContainer: {
        width: 55,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginBottom: 4,

    },
    textContainer: {
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        width: 80,
    },
    mainIconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        top: 5,
        paddingBottom: 5,

    },


});