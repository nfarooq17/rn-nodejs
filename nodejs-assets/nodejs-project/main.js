// Rename this sample file to main.js to use on your project.
// The main.js file will be overwritten in updates/reinstalls.

var rn_bridge = require('rn-bridge');
const { IgApiClient } = require('instagram-private-api');

// Echo every message received from react-native.
rn_bridge.channel.on('message', (msg) => {
  //rn_bridge.channel.send(msg);
  sendData(msg)
});

const sendData = (data) => {
  const ig = new IgApiClient();
  ig.state.generateDevice(data.username);
  if (true) {
    console.log('----- !!! IG Account Login Procedure !!! ----- ')

    await ig.simulate.preLoginFlow();

    ig.request.end$.subscribe(async () => {
      const serialized = await ig.state.serialize();
      delete serialized.constants; // this deletes the version info, so you'll always use the version provided by the library
      // instaSessionSave(serialized);
    });

    const loggedInUser = await ig.account.login(data.username, data.password);
    console.log(loggedInUser.pk)
    try {
      const media = ig.feed.user(loggedInUser.pk)
      // const mediaData = media.items()

      // return res.send(media)
      rn_bridge.channel.send(media)
    } catch (err) {
      rn_bridge.channel.send(err)
    }

  }
  // rn_bridge.channel.send(data);


}
// Inform react-native node is initialized.
rn_bridge.channel.send("Node was initialized.");