var SRV_HOST = process.env.SRV_HOST || '127.0.0.1'

require('seneca')()
  .use('beanstalk-transport')
  .use('./lib/ping.js')
  .client({
    type: 'beanstalk',
    pin:  'role:pong,cmd:*',
    host: SRV_HOST
  })
  .ready(function(){
    this.act({role:'ping',cmd:'serve'},console.log)
  })

