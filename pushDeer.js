const axios = require('axios')

axios.get('https://api2.pushdeer.com/message/push', {
  params: {
    pushkey: `PDU11761ToWUUk9RwgyydeEvQWTbBmSFMwkIc7C29`,
    text: `帆哥，您的笔记部署成功!`,
  },
})
