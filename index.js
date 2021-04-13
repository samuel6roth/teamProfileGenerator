const inquirer = require('inquirer');
const fs = require('fs');

function initIndex() {
    addMember();
}

function addMember() {
    inquirer.prompt([{
        message: 'Please enter team members name',
        name: 'name'
    },
    {
        type: 'list',
        message: 'Select team members role',
        choices: [
            'Engineer',
            'Intern',
            'Manager'
        ],
        name: 'role'
    },
    {
        message: 'Please enter team members ID',
        name: 'id'
    },
    {
        message: 'Enter team members email address',
        name: 'email'
    }
    ])
}

initIndex();
