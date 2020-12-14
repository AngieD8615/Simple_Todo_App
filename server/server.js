var express = require('express');
var app = express();
var path = require('path');
var PORT = 3010;


app.use(express.static(path.join(__dirname, "/../client/dist")));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// app.get("/", (req, res) => {
//   res.send("hello world from server")
// })

app.listen(PORT, () => {
  console.log("serving on port: " + PORT);
})