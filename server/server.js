const app = require('./src/app');
require('dotenv').config();

app.listen(8000 , () => {
    console.log("Server is working........");
})