const express = require('express');
const app = express();
const path = require('path');
const { getAllProjects, getOneProject } = require('./query');
const PORT = 3010;


app.use(express.static(path.join(__dirname, "/../client/dist")));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/", (req, res) => {
  res.send("hello world from server")
})

app.get("/projects", (req, res) => {
  getAllProjects((err, results) => {
    if (err) {
      console.error("err: ", err)
    } else {
      if (results.length === 0) {
        res.status(200).send(results)
      } else {
        let resArr = [];
        results.forEach(result => {
          let { project_id, project, task_id, title, description, priority, deadline, is_complete, hours_remaining, created_at} = result;
          if (resArr.length === 0 || resArr[resArr.length - 1].project_id !== project_id) {
            resArr.push({project_id, project, tasks:[]});
          }
          let task = {task_id, title, description, priority, deadline, is_complete, hours_remaining, created_at}
          resArr[resArr.length - 1].tasks.push(task);
        })
        res.status(200).send(resArr)
      }
    }
  })
  
})

app.get("/projects/:id", (req, res) => {
  
})

app.post("/projects", (req, res) => {
  
})

app.post("/projects/:id/tasks", (req, res) => {
  
})

app.patch("/projects", (req, res) => {
  
})

app.patch("/projects/:id/tasks/:id", (req, res) => {
  
})

app.delete("/projects/:id", (req, res) => {
  
})

app.delete("/projects/:id/tasks/:id", (req, res) => {
  
})

app.listen(PORT, () => {
  console.log("serving on port: " + PORT);
})