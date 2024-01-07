const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({from: '+18665133806', body: 'Hi there', to: '+19492285645'})
      .then(message => console.log(message.sid));
client.messages.list({limit: 20})
               .then(messages => messages.forEach(m => console.log(m.sid)));