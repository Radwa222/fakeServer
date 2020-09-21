const express = require('express')
const app = express()
app.use(express.json())


app.post('/chats', (req, res)=> {

    try{

        if(req.body.hasOwnProperty('category')&&req.body.category !=''){
         return   res.status(201).send({"chatId": -123456789,"token": "abc-#sd_gx235vs"}
         )}
        

    }catch(e){
      return  res.status(400).send({
            "code": 1,
            "message": "Chat not found"
          })

    }  
  })
app.post('/chats/:chatId/messages', (req, res) => {
  try {
    let id = req.params.chatId
    if (id && req.body.hasOwnProperty('token') && req.body.token != '' && req.body.hasOwnProperty('message')) {

      return res.status(204).send()
    }

  } catch (e) {

    return res.status(400).send({
      "code": 1,
      "message": "Chat not found"
    })


  }
})
let port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('server is up and running')
})

