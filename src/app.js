const express = require("express");
const path = require("path");
const User = require("./models/registers")
require("./db/conn")
const app = express();

const port = process.env.port || 3000;
const static_path = path.join(__dirname , "../public")
app.use(express.static(static_path))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
// app.set("view engine" ,"hbs");
app.get("/" , (req , res)=>{
    res.send("we are on");
})

app.get("/team" , (req , res)=>{
    res.send("we are on")
})

app.post("/team", async (req, res) => {
    try {
      const password = req.body.password;
      const cpassword = req.body.password_repeat;
      if (password === cpassword) {
        const registeredUser = new User({
          email: req.body.email,
          password: password,
          password_repeat: cpassword,
        });
        console.log(registeredUser);
         await registeredUser.save();
        res.redirect("/"); // Redirect to the homepage or any other desired page
      } else {
        res.send("Passwords do not match.");
      }
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  

app.listen(port , ()=>{
    console.log(`server is running from ${port}`)
})
