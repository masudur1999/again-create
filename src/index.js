const express = require('express')
const app = express();
const env = require("dotenv");
const { testRoute } = require('./routes/test/testroute');
env.config()

app.use('/test',testRoute)



const PORT = process.env.PORT;
app.listen(PORT,()=>{
     console.log(`Server is listning on port ${PORT}`)
})