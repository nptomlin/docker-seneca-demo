var SRV_HOST = process.env.SRV_HOST || '127.0.0.1'

require('seneca')()
  .use('beanstalk-transport')
  .use('./lib/pong.js', {})
  .listen({
    type: 'beanstalk',
    pin:  'role:pong,cmd:*',
    host: SRV_HOST
  })

