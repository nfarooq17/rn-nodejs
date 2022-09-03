import React, { useState } from 'react'
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'

const data = [
  {
    id: '1',
    title: '@humtvpakistanoffical',
    description: "humtvpakistan",
    image: "https://links.papareact.com/3pn",

  },
  {
    id: '2',
    title: '@humtvpakistanoffical',
    description: "humtvpakistan",
    image: "https://links.papareact.com/3pn",

  },
  {
    id: '3',
    title: '@humtvpakistanoffical',
    description: "humtvpakistan",
    image: "https://links.papareact.com/3pn",

  },
  {
    id: '4',
    title: '@humtvpakistanoffical',
    description: "humtvpakistan",
    image: "https://links.papareact.com/3pn",

  },
  {
    id: '5',
    title: 'humtvpakistanoffical',
    description: "humtvpakistan",
    image: "https://links.papareact.com/3pn",

  },
  {
    id: '6',
    title: 'humtvpakistanoffical',
    description: "humtvpakistan",
    image: "https://links.papareact.com/3pn",

  },
  {
    id: '7',
    title: 'humtvpakistanoffical',
    description: "humtvpakistan",
    image: "https://links.papareact.com/3pn",

  },
  {
    id: '8',
    title: 'humtvpakistanoffical',
    description: "humtvpakistan",
    image: "https://links.papareact.com/3pn",

  },
]

const SearchScreen = () => {


  const [serachText, setSearchText] = useState("");

  const handleChange = (e) => {
    console.log(e)
    setSearchText(e)
  }
  const clearSearch = () => {
    setSearchText("")
  }



  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <View style={{ width: "100%", height: 45, }}>
        <Text style={{ color: "white", margin: 10, fontSize: 19, fontWeight: '900' }}>Spy Watch</Text>
      </View>

      <View style={styles.inputFiled}>
        <Image
          style={{ marginLeft: 10, color: "#000", width: 20, height: 40 }}
          source={require("../assets/searchIcon.png")}
        />
        <View style={{ width: 260 }}>
          <TextInput
            placeholder='User Search'
            onChangeText={handleChange}
            value={serachText}
          />
        </View>
        {(serachText != "") && <TouchableOpacity style={{ width: 20, height: 20, backgroundColor: 'black', borderRadius: 20, top: 10, marginLeft: 12, }} onPress={clearSearch}>
          <Image
            style={{ color: "#000", width: 8, height: 8, alignSelf: 'center', top: 6, tintColor: "white", }}
            source={require("../assets/closeIcon.png")}
          />
        </TouchableOpacity>}
      </View>
      {(serachText == "") && <View>
        <View style={{ width: "100%", height: 50 }}>
          <Text style={{ color: 'white', top: 15, marginLeft: 10, fontSize: 15, fontWeight: "700" }}> On this screen, you can: </Text>
        </View>
        <View style={{ flexDirection: "row", top: 2, width: "100%", height: 40, marginLeft: 16, }}>
          <View style={{ width: 20, height: 20, backgroundColor: "white", borderRadius: 20 }}>
            <Image
              style={{ width: 15, height: 15, top: 3, marginLeft: 3 }}
              source={require("../assets/tickIcon.png")}
            />
          </View>
          <Text style={{ color: "white", marginLeft: 15, fontSize: 15, fontWeight: "700" }}>Watch Stories Secretly</Text>
        </View>
        <View style={{ flexDirection: "row", top: 2, width: "100%", height: 40, marginLeft: 16, }}>
          <View style={{ width: 20, height: 20, backgroundColor: "white", borderRadius: 20 }}>
            <Image
              style={{ width: 15, height: 15, top: 3, marginLeft: 3 }}
              source={require("../assets/tickIcon.png")}
            />
          </View>
          <Text style={{ color: "white", marginLeft: 15, fontSize: 15, fontWeight: "700" }}>Download any posts or videos,</Text>
        </View>
        <View style={{ flexDirection: "row", top: 2, width: "100%", height: 40, marginLeft: 16, }}>
          <View style={{ width: 20, height: 20, backgroundColor: "white", borderRadius: 20 }}>
            <Image
              style={{ width: 15, height: 15, top: 3, marginLeft: 3 }}
              source={require("../assets/tickIcon.png")}
            />
          </View>
          <Text style={{ color: "white", marginLeft: 15, fontSize: 15, fontWeight: "700" }}>Zoom on profile pics!</Text>
        </View>
        <View>
          <Text style={{ color: "white", marginLeft: 15, fontSize: 15, fontWeight: "700" }}>Type any desired username to start! 👨‍🔬</Text>
        </View>
      </View>
      }

      {(serachText != null && serachText != "") && <FlatList
        data={data}
        // showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          < ScrollView >
            <View style={{ top: 10, width: "100%", height: 100, }}>
              <View style={{ flexDirection: 'row', }}>
                <TouchableOpacity>
                  <View style={{ top: 5, marginLeft: 6 }}>
                    <Image
                      style={{
                        width: 70, height: 70, resizeMode: "contain",
                        borderRadius: 50,
                        marginLeft: 6,
                        borderWidth: 2,
                        borderColor: '#fff',
                      }}
                      source={{ uri: item.image }}
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>

                  <View style={{ width: 255, height: 75, justifyContent: "center", marginLeft: 10 }}>
                    <Text style={{ fontSize: 14, fontWeight: '800', color: 'white' }}>{item.title}</Text>
                    <Text style={{ color: "gray", paddingTop: 4, fontSize: 12, fontWeight: '500' }}> {item.description}</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: 'gray', borderRadius: 20, width: 22, height: 22, justifyContent: 'center', alignSelf: "center" }}>
                  <View>
                    <Image
                      style={{ width: 20, height: 10, }}
                      source={require("../assets/arrow2.png")}
                    />
                  </View>
                </TouchableOpacity>

              </View>
              <View style={{ backgroundColor: "gray", width: "72%", height: 1, marginTop: 10, justifyContent: "center", alignSelf: "flex-end", marginRight: 20 }} />
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
    borderWidth: 1,
    marginHorizontal: 25,
    backgroundColor: 'white',
    height: 50,
    borderStyle: "dashed",
    borderColor: 'gray',
    borderWidth: 3,
    flexDirection: 'row',
  },
})

export default SearchScreen