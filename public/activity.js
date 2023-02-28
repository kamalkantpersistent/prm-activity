var connection = new Postmonger.Session();

// Startup Sequence
connection.trigger('ready');

connection.on('initActivity', function( data ) {
  document.getElementById( 'configuration' ).value = JSON.stringify( data, null, 2 );
});

// Save Sequence
connection.on('clickedNext', function() {
  var configuration = JSON.parse( document.getElementById( 'configuration' ).value );
  var feedid = JSON.parse( document.getElementById( 'feedid' ).value );
  var username = JSON.parse( document.getElementById( 'username' ).value );
  var password = JSON.parse( document.getElementById( 'password' ).value );
  var jobname = JSON.parse( document.getElementById( 'jobname' ).value );
  var mobile = JSON.parse( document.getElementById( 'mobile' ).value );
  var messages = JSON.parse( document.getElementById( 'messages' ).value );
  var templateid = JSON.parse( document.getElementById( 'templateid' ).value );
  var entityid = JSON.parse( document.getElementById( 'entityid' ).value );

  connection.trigger('updateActivity', configuration);
  connection.trigger('feedid', feedid);
  connection.trigger('username', username);
  connection.trigger('password', password);
  connection.trigger('jobname', jobname);
  connection.trigger('mobile', mobile);
  connection.trigger('messages', messages);
  connection.trigger('templateid', templateid);
  connection.trigger('entityid', entityid);
});
