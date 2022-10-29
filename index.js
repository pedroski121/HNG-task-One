const express = require('express');

const app = express()

app.get('/profile',(req,res)=>{
    res.send({
        slackUsername: "obipedrochinomso",
        backend: true,
        age: 21,
        bio: "Electrical and Electronics Engineering student while studying software engineering"
    })
})


app.listen(3000, ()=>{
    console.log('Listening on port 3000')
})