var mysql = require("mysql");
var projectData = require("../exampleProjectData");
var taskData = require("../exampleTaskData");
var config = require("../mysql.config");

var con = mysql.createConnection(config);

con.query(projectData, (err, results, field) => {
  if (err) {
    console.log("err: ", err);
    return;
  }
  console.log('success ', results)

});

con.query(taskData, (err, results, field) => {
  if (err) {
    console.log("err: ", err);
    return;
  }
  console.log('success ', results)

});

con.end();

