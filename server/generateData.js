var faker = require('faker');

let maxNumOfProds = 5;
let maxNumOfTasks = 10;
let exampleData = []

const generateProject = (projectName) => {
  let numOfTasks = Math.floor(Math.random() * maxNumOfTasks) + 1
  let tasks = []
  const i
  for (var taskNum = 1; taskNum <= maxNumOfTasks; taskNum++) {
    tasks[taskNum - 1] = {
    title: faker.lorem.word(),
    description: faker.lorem.sentences(),
    priority: Math.floor(Math.random() * 3) + 1,
    deadline: faker.date.future(),
    isComplete: ,
    hoursNeeded: (Math.random() * 39) + 1,
    createdAt: faker.date.recent(),

    }
  }
  let project = {project: projectName, tasks: tasks}
  console.log(project)
  exampleData.push(project)
}

for (var prodNum = 1; prodNum <= maxNumOfProds; prodNum++) {
  generateProject(faker.hacker.noun())
}

