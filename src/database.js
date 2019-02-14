const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/vinterest_tutorial', {
  useNewUrlParser: true
})
.then(db => console.log(`DB is connected`))
.catch(err => console.error(err));
