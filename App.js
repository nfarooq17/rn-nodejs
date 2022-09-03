import React, { useEffect, useState } from 'react'
import Navigation from './navigation';
import nodejs from 'nodejs-mobile-react-native';

export default function App() {
  // const [lastMsg, setLastMsg] = useState("No message yet.")
  // let listenerRef = null

  // useEffect(() => {

  //   nodejs.start('main.js');
  //   listenerRef = ((msg) => {
  //     setLastMsg(msg)
  //   });
  //   nodejs.channel.addListener(
  //     'message',
  //     listenerRef
  //     // this
  //   );
  // }, [])

  // useEffect(() => {
  //   if (listenerRef) {
  //     nodejs.channel.removeListener("message", listenerRef);
  //   }
  // }, [])




  return (
    <Navigation />
  );
}
