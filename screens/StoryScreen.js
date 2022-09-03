import { View, Text, Button } from 'react-native'
import nodejs from 'nodejs-mobile-react-native';
import React, { useEffect, useState } from 'react'

const StoryScreen = () => {
  const [lastMsg, setLastMsg] = useState("No message yet.")
  let listenerRef = null
  let data = { username: "nfr_products", password: "hello123" }

  useEffect(() => {

    nodejs.start('main.js');
    listenerRef = ((msg) => {
      setLastMsg(msg)
      console.log(msg)
    });
    nodejs.channel.addListener(
      'message',
      listenerRef
      // this
    );
  }, [])

  // useEffect(() => {
  //   if (listenerRef) {
  //     nodejs.channel.removeListener("message", listenerRef);
  //   }
  // }, [listenerRef])

  const hendleChange = () => {


    nodejs.channel.send(data)
    // nodejs.channel.removeListener('message');
  }
  return (


    <View>
      <Text>StoryScreen</Text>
      <Button title="Message Node"
        onPress={() => hendleChange()}
      />
      {lastMsg && <Text>{lastMsg}</Text>}

    </View>

  )
}



export default StoryScreen
