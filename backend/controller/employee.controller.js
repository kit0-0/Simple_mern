const employeeSchema = require('../Models/Employee')

module.exports.createUser = async (req, res, next) => {
    console.log("CREATE Employee")
    employeeSchema.create(req.body, (error, data) => {
        if (error) { return next(error) }
        else {
            console.log("data")
            res.json(data)
        }
    })
}