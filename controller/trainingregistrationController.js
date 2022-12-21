const TrainingRegistration = require("../models/registration.js");
const nodemailer = require("nodemailer");

exports.createTrainingRegistration = async (req, res) => {
  const trainingRegistration = req.body;
  // const { email } = req.body;
  console.log(trainingRegistration);

  try {
    
    const newTrainingRegistration = new TrainingRegistration(trainingRegistration);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "multiplexdronealerts@gmail.com",
        pass: "irewyyqniyjrpcic",
      },
    });

    
    const options = {
      from: "multiplexdronealerts@gmail.com",
      
       to: "training@multiplexdrone.com",
      subject: "New  Training Registration | Multiplex Drone Group Training Registration",
      text: "New  Training Registration | Multiplex Drone Group Training Registration",
      html: `<h2>Multiplex Drone Group</h2><br/> <h3>New Training Registration</h3> <p>Name: ${trainingRegistration.name}</p> <p>Email Id: ${trainingRegistration.email}</p> <p>Mobile Number: ${trainingRegistration.contactnumber}</p> <p>Place: ${trainingRegistration.address}</p> <p>Qualification: ${trainingRegistration.qualification}</p> <p>Passport Number: ${trainingRegistration.passportnumber}</p> <p>Training Level: ${trainingRegistration.traininglevel}</p>   <b>Thankyou!</b>`,
    };
    transporter.sendMail(options, function (err, info) {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Sent: " + info.response);
    });

    await newTrainingRegistration.save();
    res.status(201).json(newTrainingRegistration);
  } catch (error) {
    console.log(error);
    res.status(409).json(error.message);
  }
};

exports.fetchTrainingRegistration = async (req, res) => {
  // const TrainingRegistration = await TrainingRegistration.find();
  // try {
  //   res.status(200).send(TrainingRegistration);
  // } catch (error) {
  //   console.log(error);
  //   res.status(409).send("Some thing went wrong in fetching TrainingRegistration");
  // }
  TrainingRegistration.find(function(err, users_list) {
        if(err){
            res.json(err);
        } else {
            // console.log("one:",users_list);
            res.json({status: 1, data: users_list});

        }
    })
  
};

exports.deleteTrainingRegistration = async (req, res) => {
  const id = req.params.id;
  try {
    await TrainingRegistration.findByIdAndRemove(id);
    res.send("User Deleted Successfully");
  } catch (error) {
    console.log(error);
  }
};
