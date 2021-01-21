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

module.exports = { getAllProjects, getOneProject };
