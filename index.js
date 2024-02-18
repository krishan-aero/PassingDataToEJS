import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

var name = {
  nameEntered : "" ,
  nameLength  : 0 
};

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  name.nameEntered =  req.body.fName + " " + req.body.lName;
  name.nameLength  = name.nameEntered.length-1;
  if (name.nameLength > 0){
    res.render("index.ejs", name);
  }
  else{
    res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
