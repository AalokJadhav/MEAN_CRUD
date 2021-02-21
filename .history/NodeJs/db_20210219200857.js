const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CrudDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, (err) => {
    if(!err)
        console.log('MongoDB Connection Succeeded..!');
        else 
        console.log('Error in DB Collection..!: ' + JSON.stringify(err, undefind, 2));
    
}); 

module.exports = mongoose;