const http = require('http');
const express = require('express')
const VoiceResponse = require('twilio').twiml.VoiceResponse;
const MessageResponse = require('twilio').twiml.MessagingResponse;
const morgan = require('morgan');

const app = express()

app.use(morgan('dev'))

app.post('/conference', (req, res) => {
  const twiml = new VoiceResponse();
  twiml.say('Thank for calling. This call is being recorded.')
  twiml.say('Forwarding your call now')
  twiml.dial().conference('MyRoom')
  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString())
})

http.createServer(app).listen(3000, () => {
  console.log('App was listen on port 3000')
})