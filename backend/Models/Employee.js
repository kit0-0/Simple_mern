const mongoose = require('mongoose'),
    Schema = mongoose.Schema;


let employeeSchema = new Schema({
    name: {
        type: String
    },

}, {
    collection: 'employee'
})
module.exports = mongoose.model('Employee', employeeSchema)
