#! usr/bin/env node

import inquirer from "inquirer";

let para = await inquirer.prompt([
    {
        name : "paragraph",
        type : "string",
        message: "Enter your paragraph",
},

])

let answer = para.paragraph.trim().split(" ")
console.log(answer)
console.log(answer.length)