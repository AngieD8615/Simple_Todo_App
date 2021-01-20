var faker = require("faker");
var fs = require("fs");

let maxNumOfProjects = 10;
let maxNumOfTasks = 7;

const randNum = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

const generateProject = () => {
  const outProject = fs.createWriteStream("./exampleProjectData.js", {
    flag: "a",
  });
  try {
    for (var projectNum = 1; projectNum <= maxNumOfProjects; projectNum++) {
      let project =
          faker.commerce.productAdjective() + faker.commerce.productName();

      if (projectNum === 1) {
        outProject.write(`let projectData = "INSERT INTO projects (project) VALUES ('${project}'),`);
      } else if (projectNum === maxNumOfProjects) {
        outProject.write(`('${project}');"\nmodule.exports = projectData;\n`);
      } else {
        outProject.write(`('${project}'),`);
      }
    }
  } catch (err) {
    console.log(err);
  }
};

generateProject();

const generateTasks = () => {
  const outTask = fs.createWriteStream("./exampleTaskData.js", { flag: "a" });
  try {
    for (var projectNum = 1; projectNum <= maxNumOfProjects; projectNum++) {
      let numOfTasks = randNum(1, maxNumOfTasks);

      for (var taskNum = 1; taskNum <= numOfTasks; taskNum++) {
        let isComplete = Math.random() < 0.25;
        let hoursNeeded = isComplete ? 0 : randNum(1, 40);
        let task = 
          `(${projectNum},'${faker.hacker.phrase()}', '${faker.lorem.sentences()}', ${randNum(1, 4)}, '${2021}-0${randNum(1, 10)}-${randNum(10, 29)}', ${isComplete}, ${hoursNeeded})`;
        

        if (taskNum === 1 && projectNum === 1) {
          outTask.write(`let taskData = "INSERT INTO tasks (project_id, title, description, priority, deadline, is_complete, hours_remaining) VALUES ${task},`);
        } else if (taskNum === numOfTasks && projectNum === maxNumOfProjects) {
          outTask.write(`${task}"\nmodule.exports = taskData;\n`);
        } else {
          outTask.write(`${task},`);
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
};

generateTasks();
