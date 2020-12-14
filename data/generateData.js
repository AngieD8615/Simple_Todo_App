var faker = require("faker");
var fs = require("fs");

let maxNumOfProjects = 5;
let maxNumOfTasks = 10;
let exampleData = [];

const generateProject = () => {
  const outProject = fs.createWriteStream('./exampleProjectData.json', {flag: 'a'})
  try {

    let numOfTasks = Math.floor(Math.random() * maxNumOfTasks) + 1;
    
    for (var projectNum = 1; projectNum <= maxNumOfProjects; projectNum++) {
      let project = {
        project: faker.commerce.productAdjective() + faker.commerce.productName(),
        project_id: projectNum,
        tasks: [],
      };
      
      for (var taskNum = 1; taskNum <= numOfTasks; taskNum++) {
        project.tasks.push({
          task_id: taskNum,
          title: faker.hacker.phrase(),
          description: faker.lorem.sentences(),
          priority: Math.floor(Math.random() * 3) + 1,
          deadline: faker.date.future(),
          isComplete: Math.random() < 0.25,
          hoursNeeded: Math.floor(Math.random() * 39 + 1),
          createdAt: faker.date.recent(),
        });
      }

      if (projectNum === 1) {
        outProject.write(`[\n${JSON.stringify(project)},\n`)
      } else if (projectNum === maxNumOfProjects) {
        outProject.write(`${JSON.stringify(project)}\n]\n`)
      } else {
        outProject.write(`${JSON.stringify(project)},\n`)
      }
    }

  } catch (err) {
    console.log(err)
  }
};

generateProject();


