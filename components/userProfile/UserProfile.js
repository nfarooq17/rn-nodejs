import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Cards from './Cards'

const UserProfile = () => {

    return (
        <View style={styles.mainContainer}>
            <View style={styles.profileContainer}>
                <View>
                    <Image
                        style={styles.profileImage}
                        source={require("../../assets/profile.png")}
                    />
                </View>
                <View style={styles.followersContainer}>
                    <Image
                        style={{ width: 30, height: 30, alignSelf: 'center' }}
                        source={require("../../assets/FollowersIcon.png")}
                    />
                    <Text style={styles.text1}> Followers </Text>
                    <Text style={styles.counter}> 0 </Text>

                </View>
                <View style={styles.postContanier}>
                    <Image
                        style={{ width: 25, height: 25, alignSelf: 'center' }}
                        source={require("../../assets/postIcon.png")}
                    />
                    <Text style={styles.text1}> Posts </Text>
                    <Text style={styles.counter}> 0 </Text>

                </View>
                <View style={styles.followingContainer}>
                    <Image
                        style={{ width: 30, height: 30, alignSelf: 'center' }}
                        source={require("../../assets/FollowingIcon.png")}
                    />
                    <Text style={styles.text1}> Following </Text>
                    <Text style={styles.counter}> 0 </Text>
                </View>
            </View>
            <View style={{
                // backgroundColor: 'blue',
                flexWrap: "wrap",
                flexDirection: "row",

            }}>
                <TouchableOpacity>
                    <Cards counter="0" title={"New Followers"} style={styles.followersStyle} image={require("../../assets/FollowersIcon.png")} icon={styles.icon1} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Cards counter="0" title={"Lost Followers"} style={styles.LostFollowersStyle} image={require("../../assets/FollowersIcon.png")} icon={styles.icon2} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Cards counter="0" title={"Fans"} style={styles.FansStyle} image={require("../../assets/heartIcon.png")} icon={styles.icon3} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Cards counter="0" title={"Not Following Me Bcak"} style={styles.NotFollowingStyle} image={require("../../assets/restoreIcon.png")} icon={styles.icon4} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Cards counter="?" title={"Who Blocked"} style={styles.BlockedStyle} image={require("../../assets/handIcon.png")} icon={styles.icon5} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Cards counter="?" title={"Profile Vistiors"} style={styles.ProfileStyle} image={require("../../assets/eyeIcon.png")} icon={styles.icon6} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        height: 700,
        backgroundColor: 'whitesmoke',
    },


    profileContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        height: 160,
        width: "100%",
        // backgroundColor: 'red',

    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginTop: 15,
        justifyContent: 'center',
        marginLeft: 12
    },
    followersContainer: {
        marginTop: 20,
        marginLeft: 10
    },
    postContanier: {
        marginLeft: 25,
        marginTop: 25,
    },
    followingContainer: {
        marginHorizontal: 30,
        marginTop: 20,
    },
    text1: {
        color: "black",
    },
    counter: {
        color: "gray",
        alignSelf: 'center'
    },
    followersStyle: {
        backgroundColor: 'lightblue',
        width: 30,
        height: 30,
        borderRadius: 7,
        top: 10,
    },
    LostFollowersStyle: {
        backgroundColor: '#f5c6d6',
        width: 30,
        height: 30,
        borderRadius: 7,
        top: 10,
    },
    FansStyle: {
        backgroundColor: '#f5c6d6',
        width: 30,
        height: 30,
        borderRadius: 7,
        top: 10,
    },
    NotFollowingStyle: {
        backgroundColor: '#f5c6d6',
        width: 30,
        height: 30,
        borderRadius: 7,
        top: 10,
    },
    BlockedStyle: {
        backgroundColor: '#f5c6d6',
        width: 30,
        height: 30,
        borderRadius: 7,
        top: 10,
    },
    ProfileStyle: {
        backgroundColor: 'lightblue',
        width: 30,
        height: 30,
        borderRadius: 7,
        top: 10,
    },
    icon1: {
        width: 25,
        height: 25,
        alignSelf: 'center',
        tintColor: 'green',
        top: 4,
    },
    icon2: {
        width: 25,
        height: 25,
        alignSelf: 'center',
        tintColor: 'red',
        top: 4,
    },
    icon3: {
        width: 16,
        height: 16,
        borderRadius: 6,
        tintColor: 'red',
        top: 6,
        alignSelf: "center"
    },
    icon4: {
        width: 16,
        height: 16,
        borderRadius: 6,
        top: 6,
        alignSelf: "center"
    },
    icon5: {
        width: 16,
        height: 16,
        borderRadius: 6,
        tintColor: 'red',
        top: 6,
        alignSelf: "center"
    },
    icon6: {
        width: 20,
        height: 20,
        borderRadius: 6,
        tintColor: 'green',
        top: 5,
        alignSelf: "center"

    }
})

export default UserProfile