//README Generator-index.js

//Import NPM package inquirer
const inquirer = require('inquirer');

//Import FS
const fs = require('fs');


//User Questions to gather info needed to complete README blank inputs
const promptUser =
    inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'projectDescription',
            message: 'Describe your project briefly',
        },
        {
            type: 'input',
            name: 'projectLink',
            message: 'What is url for deployed application?',
        },
        {
            type: 'input',
            name: 'pic1',
            message: 'What is file path for first screenshot?',
        },
        {
            type: 'input',
            name: 'pic2',
            message: 'What is file path for the second screenshot?',
        },
        {
            type: 'checkbox',
            message: 'What technologies were used to complete this project?',
            name: 'technologiesUsed',
            choices: ['HTML', 'CSS', 'JavaScript', 'JQuery'],
        },
        {
            type: 'input',
            name: 'creditLink1',
            message: 'Provide link to a resource used to help in completing this application?',
        },
        {
            type: 'input',
            name: 'creditLink2',
            message: 'Provide link to a resource used to help in completing this application?',
        },
        {
            type: 'input',
            name: 'creditLink3',
            message: 'Provide link to a resource used to help in completing this application?',
        },
        {
            type: 'input',
            name: 'licenseName',
            message: 'What is the name of your applications license?',
        },
        {
            type: 'input',
            name: 'feature1',
            message: 'Describe main feature of application',
        },
        {
            type: 'input',
            name: 'contact1',
            message: 'What is a good way for people to contact you with questions and or contributions?',
        },
        {
            type: 'input',
            name: 'test1',
            message: 'Provide a test if any for your application.',
        },
    ])
        .then((data) => {
            const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

            fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
                err ? console.log(err) : console.log('Success!')
            );
        });




// // TODO: Create a function to write README file
const generateMarkdown = (answers) =>
    ` #  ${answers.projectName}
      ## ${answers.name}
      ## Description-${answers.projectDescription}
                
      ## Table of Contents
        1. Installation
        2. Usage
        3. Technologies Used
        4. Credits
        5. License
        6. Badges
        7. Features
        8. Questions and Contributions
        9. Tests
                
        ##  Installation-
            ${answers.projectLink}

        ##  Usage- 
        ${answers.pic1}
        ${answers.pic2}

        ## Technologies Used-
        ${answers.technologiesUsed}

        ## Credits-  
        ${answers.credit1}
        ${answers.credit2}
        ${answers.credit3}

        ## License-
        ${answers.licenseName} 

        ## Features-
        ${answers.feature1}

        ## Questions and Contributions-  
        ${answers.contact1}

        ## Tests-  
        ${answers.test1}`;

const init = () => {
    promptUser().then((answers) => {
        try {
            const markdown = generateMarkdown(answers);
            fs.writeFileSync('README.md', markdown);
            console.log('Successfully wrote to README.md');
        } catch (error) {
            console.log(error);
        }
    });
};


// 

//  }

// TODO: Create a function to initialize app
///function init() { }

// Function call to initialize app
//init();