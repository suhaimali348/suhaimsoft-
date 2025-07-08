const pusher = new Pusher('YOUR_APP_KEY', {
  cluster: 'YOUR_APP_CLUSTER'
});

const channel = pusher.subscribe('suhaimsoft');
channel.bind('data-update', function(data) {
  console.log('Received real-time data:', data);
  // Update your UI here
});
