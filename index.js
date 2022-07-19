// MISE EN PLACE
const inquirer = require('inquirer')
const fs = require('fs')
const questions = [{
    type: "input",
    name: "title",
    message: "what is the title of your application?",
    validate: (value) => {if (value){return true} else {return 'please enter input'}}
},
{
    type: "input",
    name: "description",
    message: "give a description of your application",
    validate: (value) => {if (value){return true} else {return 'please enter input'}}
},

{
    type: "input",
    name: "installation",
    message: "give instructions for your application's installation",
    validate: (value) => {if (value){return true} else {return 'please enter input'}}
},
{
    type: "input",
    name: "usage",
    message: "give instructions for your application's use",
    validate: (value) => {if (value){return true} else {return 'please enter input'}}
},
{
    type: "input",
    name: "credits",
    message: "list contributors to your application",
    validate: (value) => {if (value){return true} else {return 'please enter input'}}
},
{
    type: "input",
    name: "tests",
    message: "write tests for your application and provide examples for how to run them",
    validate: (value) => {if (value){return true} else {return 'please enter input'}}
},
{
    type: "input",
    name: "features",
    message: "describe the features of your application",
    validate: (value) => {if (value){return true} else {return 'please enter input'}}
},
{
    type: "list",
    name: "licenses",
    message: "licenses?",
    choices: [
        'ISC', 'BSD-3-CLAUSE', 'MIT', 'APACHE 2.0'
    ],
},
{
    type: "input",
    name: "github",
    message: "provide your github @",
    validate: (value) => {if (value){return true} else {return 'please enter input'}}
},
{
    type: "input",  
    name: "email",
    message: "provide your email adress",
    validate: (value) => {if (value){return true} else {return 'please enter input'}}
}]
// PROCESS RAW INGREDIENTS TO PREPARE FRESH README DISH
inquirer.prompt(questions).then(data => {
    console.log(data)
    const {title, description, installation, usage, credits,
        tests, licenses, badges, features, github, email} = data;
    fs.writeFile('README.md',
`# ${title}
## ${description}
-[INSTALLATION](##installation)
-[USAGE](##usage)
-[CREDITS](##credits)
-[TESTS](##tests)
-[FEATURES](##features)
-[LICENSES](##licenses)
-[QUESTIONS](##questions)
## INSTALLATION
${installation}
## USAGE
${usage}
## CREDITS
${credits}
## TESTS
${tests}
## FEATURES
${features}
## LICENSES
${licenses}
## QUESTIONS
[GITHUB](https://www.github.com/${github})
${email}`,
        err => (err ? console.error(err) : console.log("ORDER UP"))
    )
})
