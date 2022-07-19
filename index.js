const inquirer = require('inquirer')
const fs = require('fs')
const data = [{
    type: "input",
    name: "title",
    message: "what is the title of your project?"
},
{
    type: "input",
    name: "description",
    message: "give a description of your project"
},

{
    type: "input",
    name: "installation",
    message: "give instructions for your application's installation"
},
{
    type: "input",
    name: "usage",
    message: "give instructions for your application's use"
},
{
    type: "input",
    name: "credits",
    message: "list contributors to your application"
},
{
    type: "input",
    name: "tests",
    message: "write tests for your application and provide examples for how to run them"
},
{
    type: "input",
    name: "features",
    message: "describe the features of your application"
},
{
    type: "checkbox",
    name: "licenses",
    message: "licenses?",
    choices: [
        'ISC', 'BSD-3-CLAUSE', 'MIT', 'APACHE 2.0'
    ]
},
{
    type: "checkbox",
    name: "badges",
    message: "badges?",
    choices: [
        'badge 1', 'badge 2', 'badge 3', 'badge 4'
    ]
},
{
    type: "input",
    name: "github",
    message: "provide your github @"
},
{
    type: "input",  
    name: "email",
    message: "provide your email adress"
}
]
inquirer.prompt(data).then(data => {
    console.log(data)
    const {title, description, installation, usage, credits,
        tests, licenses, badges, features, github, email} = data;
    fs.writeFile(
'README.md',
`# ${title}
## ${description}
-[INSTALLATION](#istallation)
-[USAGE](#usage)
-[CONTRIBUTING](@contributing)
-[TESTS](#tests)
-[QUESTIONS](#questions)
## INSTALLATION
${installation}
## USAGE
${usage}
## CONTRIBUTING
${credits}
## TESTS
${tests}
## FEATURES
${features}
## LICENSES
${licenses}
## BADGES
${badges}
## QUESTIONS
${github}
${email}`,
        err => (err ? console.error(err) : console.log("README GENERATED! GOOD JOB! :)"))
    )
})

// function init() {}
// init();