const mysql = require('mysql');
const config = require('../mysql.config');

var con = mysql.createConnection(config);

// const callBack = (err, results, field) => {
//   if (err) {
//     cb(err)
//   } else {
//     cb(null, results)
//   }
// };

const getAllProjects = (cb) => {
  let query = "SELECT * FROM tasks INNER JOIN projects USING (project_id) ORDER BY (project_id);"
  con.query(query, (err, results, field) => {
    if (err) {
      cb(err)
    } else {
      cb(null, results)
    }
  })
}

const getOneProject = (id, cb) => {
  let query = "SELECT * FROM tasks INNER JOIN projects USING (project_id) WHERE project_id = ? ;"
  con.query(query, id, (err, results, field) => {
    if (err) {
      cb(err)
    } else {
      cb(null, results)
    }
  })
}

const postNewTask = (data, cb) => {
  console.log("from query.js data: ", data)
  const { project_id, title, description, priority, deadline, is_complete, time_remaining } = data
  let query = "INSERT INTO tasks (project_id, title, description, priority, deadline, is_complete, hours_remaining) VALUES (?,?,?,?,?,?,?)";
  let dataArr = [project_id, title, description, priority, "2021-11-01", false, time_remaining]
  
  con.query(query, dataArr, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    } console.log("Task ID: ", results.insertId);
  })

  cb(null, null)
  // let query = ""

}
module.exports = { getAllProjects, getOneProject, postNewTask };
