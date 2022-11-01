const app = require('./app')
require('dotenv').config()
const {connection} = require('./src/models/db-connection')

const PORT = process.env.PORT || 1234

const start = async() => {
  try {
    await connection();
    app.listen(PORT, (e) => {
      if (e) console.log(e.message)
      console.log(`Data base connection on PORT ${PORT}`)
    })
  } catch (e) {
    console.log(`Server run with error ${e.message}`)
    process.exit(1);
  }
  
}
start();