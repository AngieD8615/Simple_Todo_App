var faker = require('faker');
var fs = require('fs');

let maxNumOfProjects = 5;
let maxNumOfTasks = 10;
let exampleData = []

const generateProject = (projectName) => {
  let numOfTasks = Math.floor(Math.random() * maxNumOfTasks) + 1
  let tasks = []
 
  for (var taskNum = 1; taskNum <= numOfTasks; taskNum++) {
    tasks[taskNum - 1] = {
    title: faker.lorem.word(),
    description: faker.lorem.sentences(),
    priority: Math.floor(Math.random() * 3) + 1,
    deadline: faker.date.future(),
    isComplete: Math.random() < .25,
    hoursNeeded: Math.floor((Math.random() * 39) + 1),
    createdAt: faker.date.recent(),

    }
  }
  let project = {project: projectName, tasks: tasks}
  exampleData.push(project)
}

for (var prodNum = 1; prodNum <= maxNumOfProjects; prodNum++) {
  generateProject(faker.hacker.noun())
}

fs.writeFile('./exampleData.js', 'var exampleData = ' + JSON.stringify(exampleData) + '\nexport default exampleData', (err, data) => {
  if (err) {
    console.log("err", err)
  } else {
    console.log(data)
  }
})
