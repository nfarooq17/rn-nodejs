import React, { useState } from 'react'
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'

const data = [
  {
    id: '1',
    title: '@danish5576',
    description: "Danish Hussain",
    image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",

  },
  {
    id: '2',
    title: '@danish5576',
    description: "Danish Hussain",
    image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",

  },
  {
    id: '3',
    title: '@danish5576',
    description: "Danish Hussain",
    image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",

  },
  {
    id: '4',
    title: '@danish5576',
    description: "Danish Hussain",
    image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",

  },
  {
    id: '5',
    title: '@danish5576',
    description: "Danish Hussain",
    image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",

  },
  {
    id: '6',
    title: '@danish5576',
    description: "Danish Hussain",
    image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",

  },
  {
    id: '7',
    title: '@danish5576',
    description: "Danish Hussain",
    image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",

  },
  {
    id: '8',
    title: '@danish5576',
    description: "Danish Hussain",
    image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",

  },
]
const ProfileZoomScreen = () => {


  const [serachText, setSearchText] = useState("");

  const handleChange = (e) => {
    console.log(e)
    setSearchText(e)
  }
  const clearSearch = () => {
    setSearchText("")
  }



  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View style={{ width: "100%", height: 45, }}>
        <Text style={{ color: "black", margin: 10, fontSize: 20, fontWeight: '800' }}>Profile Zoom</Text>
      </View>

      <View style={styles.inputFiled}>
        <Image
          style={{ marginLeft: 10, color: "blue", width: 20, height: 40, tintColor: "blue", top: 3 }}
          source={require("../assets/searchIcon.png")}
        />
        <View style={{ width: 260 }}>
          <TextInput
            placeholderTextColor='#0096FF'
            placeholder='Search'
            d value={serachText}
          />
        </View>
        {(serachText != "") && <TouchableOpacity style={{ width: 20, height: 20, backgroundColor: 'blue', borderRadius: 20, top: 13, marginLeft: 18, }} onPress={clearSearch}>
          <Image
            style={{ width: 8, height: 8, alignSelf: 'center', top: 6, tintColor: "white", }}
            source={require("../assets/closeIcon.png")}
          />
        </TouchableOpacity>}
      </View>


      {(serachText != null && serachText != "") && <FlatList
        data={data}
        // showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          < ScrollView >
            <View style={{ top: 10, width: "100%", height: 100, }}>
              <View style={{ flexDirection: 'row', }}>
                <TouchableOpacity>
                  <View style={{ top: 8, marginLeft: 14, }}>
                    <Image
                      style={{
                        width: 60, height: 60, resizeMode: "contain",
                        borderRadius: 50,
                        marginLeft: 6,
                        borderWidth: 1,
                        borderColor: 'gray',
                      }}
                      source={{ uri: item.image }}
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>

                  <View style={{ width: 270, height: 75, justifyContent: "center", marginLeft: 10 }}>
                    <Text style={{ fontSize: 13, fontWeight: '600', color: 'black' }}>{item.title}</Text>
                    <Text style={{ color: "gray", paddingTop: 4, fontSize: 13, fontWeight: '500' }}> {item.description}</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: 'darkblue', borderRadius: 20, width: 22, height: 22, justifyContent: 'center', alignSelf: "center" }}>
                  <View>
                    <Image
                      style={{ width: 20, height: 10, tintColor: 'white' }}
                      source={require("../assets/arrow2.png")}
                    />
                  </View>
                </TouchableOpacity>

              </View>
              <View style={{ backgroundColor: "gray", width: "72%", height: 1, marginTop: 7, justifyContent: "center", alignSelf: "flex-end", marginRight: 20 }} />
            </View>

          </ScrollView>
        )
        }
      />
      }
    </View>


  )
}
const styles = StyleSheet.create({
  inputFiled: {
    borderRadius: 20,
    padding: 1,
    width: 350,
    marginTop: 10,
    marginHorizontal: 25,
    backgroundColor: '#DEF0FC',
    height: 50,
    flexDirection: 'row',
  },
})


export default ProfileZoomScreen