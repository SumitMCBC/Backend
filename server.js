const express = require("express");
const bodyParse = require("body-parser")
const app = express();
const pool =require("./db")
const PORT  = 7000 | process.env.PORT


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(bodyParse.json());
app.use(express.json())
app.use(bodyParse.urlencoded({
    extended:true
}))
const userLogin = require("./Routes/userLoginAndSignup");
const order = require("./Routes/orders")
const about = require("./Routes/Res_about")
const review = require("./Routes/review")
const profile = require("./Routes/profile")
const contact = require("./Routes/contact")
const search = require("./Routes/serach")
const AddRes = require("./Routes/addRes");
// const { default: Contact } = require("../Frontend/src/Pages/contact");



app.use("/api/userLogin",userLogin);
app.use("/api/order",order)
app.use("/api/about",about)
app.use("/api/review",review)
app.use("/api/profile",profile)
app.use("/api/contact",contact)
app.use("/api/search",search)
app.use("/api/addRes",AddRes)




app.listen(PORT,(err)=>{
    if(err) throw err;
    console.log(`server is running at ${PORT}`)
})

