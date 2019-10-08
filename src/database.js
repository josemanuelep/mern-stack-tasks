const mongoose = require('mongoose');
const URI = "mongodb+srv://mello:NITROpc98@pagetour-ucdqg.mongodb.net/";
mongoose.connect(URI, { dbName: 'PageTour' }).then(db => {
  console.log('Db is connected')
}).catch(error => console.error(error));

module.exports = mongoose;