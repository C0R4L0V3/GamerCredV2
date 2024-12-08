require('dotenv').config
const express = require('express')
const cors = require('cors')
const app = express()

const PORT = 3000


//middleware
app.use(cors())

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
    
})
