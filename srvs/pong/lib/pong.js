module.exports = function( options ) {
  var seneca = this;
  var plugin = 'pong';

  seneca.add('role:pong,cmd:ping', function(args,done){
    console.log('got ping');
    done(null, {message:'pong'});
  });

  return {name:plugin};
}

