const accountSid = 'AC8f921a0961d3d8d5ded5a456f3a346ec';
const authToken = '017ce9360b7ea9ae2d00384c634b99a3';
const client = require('twilio')(accountSid, authToken);


client.calls
  .create({
    url: 'http://9a4e91fa.ngrok.io/voice', // webhook link
    to: '+84372577996', // User 1 number
    from: '+12528889976'
  })
  .then(call => console.log(call.sid)).catch(e => { console.log(e) })


client.calls
  .create({
    url: 'http://9a4e91fa.ngrok.io/voice', // webhook link
    to: '+84372577996', // User 2 number
    from: '+12528889976'
  })
  .then(call => console.log(call.sid)).catch(e => { console.log(e) })