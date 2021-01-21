# Welcome to a simple To Do App

## Overview:
### Intro:
This is a simple To Do App which allows the user to log there projects and tasks associated with them. The user can add new projects (tasks) and update current projects (tasks) with the data saved to a database

### Tech:
mysql, nodeJS, Express, HTML/CSS, Material-UI, React

### Create/Seed data
All scripts should be run using the command line while in the root directory 
To generate the data: `node data/generateData.js`
To "clear" the database: `npm run resetDB`
To insert dummy data: `node data/seed.js`

### To Start App
From the root directory and in different terminals
`npm run react-dev`
`npm run start:server`

## API 
### Get /products
```
[ 
  { 
    project: "interface",
    tasks: [
      {
        title: "commodi",
        description:
          "Dignissimos aliquam qui tempore aliquid. Similique sit dolorem dolorem velit reprehenderit illo consectetur ut. Nam eum omnis voluptatem ratione vitae quia natus sunt. Est itaque ut et hic eos.",
        priority: 3,
        deadline: "2021-09-20T12:57:22.439Z",
        isComplete: false,
        hoursNeeded: 10,
        createdAt: "2020-12-13T20:57:47.594Z",
      },
      {
        title: "qui",
        description:
          "Odio animi numquam sequi repellendus nisi doloremque odio quos totam. At ex optio. Qui beatae repellat qui esse. Recusandae quod tempore accusamus harum est dignissimos sit aut. Et accusantium natus quia eum molestiae enim accusantium.",
        priority: 1,
        deadline: "2021-10-30T16:22:33.803Z",
        isComplete: false,
        hoursNeeded: 2,
        createdAt: "2020-12-14T00:10:27.692Z",
      },
```


