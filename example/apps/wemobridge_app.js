module.exports = function testApp(server) {

  // add query params in the where object like so:
  // var starterDeviceQuery = server.where({type: 'led'});
  var wemoDeviceQuery = server.where({});

  server.observe([wemoDeviceQuery], function(wemoDevice){
    setInterval(function(){
      //wemoDevice.call('do', './example/apps/wemobridge_app.js is running', function() {});
    }, 1000);
  });

}