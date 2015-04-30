module.exports = function( options ) {
  var seneca = this
  var plugin = 'ping'


  seneca.add( {role:plugin, cmd:'serve'}, cmd_serve)

  function cmd_serve( args, done ) {
    var i = 0;
    
    seneca.act({role:'pong', cmd:'ping'}, processResponse);
    
    function processResponse(err, obj){
      console.log(obj);
      i++;
      if(i > 5){
        return done(null,{message:'Done'});
      } 
      seneca.act({role:'pong', cmd:'ping'}, processResponse);
    }

  }

  return {name:plugin};
}

