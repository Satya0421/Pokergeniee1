const mongoose = require("mongoose");

const TrainingRegistrationSchema = new mongoose.Schema({
		name:{type:String,required:true},
		email: { type: String, required: true},
  		contactnumber: { type: Number, required: true,validate: {
            validator: function(val) {
                return val.toString().length ===10
            },
            message: val => `${val.value} has to be 10 digits`
        }},
  address:{type: String, required: true},
  qualification: { type: String, required: true},
  passportnumber: { type: String, required: true },
  traininglevel:{type: String, required: true},
  passportcopy:{type:String,required:true},
  date: { type: String, default:new Date().toLocaleDateString()},
  time:{type:String,default:new Date().toLocaleTimeString()}
});
 
module.exports = mongoose.model("TrainingRegistration",  TrainingRegistrationSchema);