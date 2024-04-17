#! /usr/bin/env node

import inquirer from 'inquirer'

const answer = await inquirer.prompt(
    {
        name: 'sentence',
        type: 'input',
        message: 'Enter the sentence or paragraph to count the words: '
    }
)

const words = answer.sentence.trim().split(" ");

console.log(`Your sentence word count is ${words.length}`);