const Contact = require("../models/contactus.js");
const nodemailer = require("nodemailer");


exports.createContactEnquiry = async (req, res) => {
  const contact = req.body;
  const { email } = req.body;
  console.log(contact);

  try {
    //const existingUser = await Contact.findOne({ email });
    // if (existingUser) {
    //   return res
    //     .status(400)
    //     .json(`User Already Exist With this email: ${email}`);
    // }
    const newContact = new Contact(contact);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "multiplexdronealerts@gmail.com",
        pass: "irewyyqniyjrpcic",
      },
    });

    

    const options = {
      from: "multiplexdronealerts@gmail.com",
      to: 'marketing@multiplexdrone.com',
      subject: "New Marketing ContactUs Enquiry | Multiplex Drone Group Enquires",
      text: "New Marketing ContactUs Enquiry | Multiplex Drone Group Enquires",
      html: `<h2>Multiplex Drone Group</h2><br/> <h3>New Marketing ContactUs Enquiry</h3> <p>Name: ${contact.name}</p> <p>Email Id: ${contact.email}</p> <p>Mobile Number: ${contact.contactnumber}</p> <p>Description: ${contact.message}</p>   <b>Thankyou!</b>`,
    };
    transporter.sendMail(options, function (err, info) {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Sent: " + info.response);
    });

    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    console.log(error);
    res.status(409).json(error.message);
  }
};

exports.fetchContactEnquiries = async (req, res) => {
  const Contact = await Contact.find();
  try {
    res.status(200).send(Contact);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Enquires");
  }
};

exports.deleteContactEnquiries = async (req, res) => {
  const id = req.params.id;
  try {
    await Enquiry.findByIdAndRemove(id);
    res.send("Contact details Deleted Successfully");
  } catch (error) {
    console.log(error);
  }
};
