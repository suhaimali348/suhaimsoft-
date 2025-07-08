const Ably = require('ably');

async function publishSubscribe() {
  const ably = new Ably.Realtime('X5Tp-g.KazqMw:4P1Auzf48H0HEPaLBDDpjU4IBTtGMgSOdGMOIDkwFzE');

  ably.connection.once('connected', () => {
    console.log('✅ Connected to Ably!');
  });

  const channel = ably.channels.get('get-started');

  // Subscribe for demonstration (optional)
  channel.subscribe('first', message => {
    console.log('📥 Message received:', message.data);
  });

  // Publish a message every 5 seconds
  setInterval(() => {
    const msg = 'Real-time update at ' + new Date().toLocaleTimeString();
    channel.publish('first', msg);
    console.log('📤 Message published:', msg);
  }, 5000);
}

publishSubscribe();
