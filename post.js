const express = require("express");
const data = require('./data.js');


const app = express();
app.use(express.json())

const checkQuery = (req, res, next) => {
  const clg = req.query.college;
  if (!clg) {
    return res.json({ msg: "Please provide college name." });
  }
  next();
}

const validate = (req, res, next) => {
  const name = req.body.name;
  const address = req.body.address;
  const email = req.body.email;
  const phonenumber = req.body.phonenumber;
  const DOB = req.body.DOB;

  const PhonenumbRegex = /^\d{10}$/;
  const EmailRegex = /^\w+\d*@\w+\.\w{2,3}$/;
  if (!name) {
    return res.send('Please Provide your Name');
  }

  if (!address) {
    return res.send('Please Provide your Address');
  }

  if (!DOB) {
    return res.send('Please Provide your DOB');
  }

  if (!PhonenumbRegex.test(phonenumber)) {
    return res.send('Please Provide Valid PhoneNumber');
  }

  if (!EmailRegex.test(email)) {
    return res.send('Please Provide Valid E-mail');
  }

  next();

}

app.post("/registeruser", validate, (req, res) => {
  const name = req.body.name;
  const address = req.body.address;
  const email = req.body.email;
  const phonenumber = req.body.phonenumber;
  const DOB = req.body.DOB;

  return res.json({ msg: "Login Successful", name: name, address: address, email: email, phonenumber: phonenumber, DOB: DOB });

})

app.get('/search', checkQuery, (req, res) => {
  const clg = req.query.college;
  console.log(clg);
  const filteruser = data.filter((user) => {
    return user.college === clg;
  })
  res.json(filteruser);
});



app.listen(5000, function () {
  console.log("server is running on port 5000");
})