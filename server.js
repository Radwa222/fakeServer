const express=require('express')
const app = express()
app.use(express.json())


app.get('/chats',  (req, res)=> {
    
    try{
        
        if(req.body.hasOwnProperty('category')&&req.body.category !=''){
         return   res.status(201).send({"chatId": -123456789,"token": "abc-#sd_gx235vs"}
         )}
         return res.status(400).send({
            "code": 1,
            "message": "Chat not found"
          })

    }catch(e){
      return  res.status(500).send({
            "code": 1,
            "message": "Chat not found"
          })

    }  
  })
   
  app.listen(3000)

