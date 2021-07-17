#!/usr/bin/env node

const chalk = require('chalk');
const figlet = require('figlet');
const boxen = require('boxen');

console.log(
  boxen(
    `${chalk.cyanBright(figlet.textSync('  Anuj Verma', {font: 'Star Wars', horizontalLayout: 'full' }))}
    ${chalk.whiteBright('')}
    ${chalk.whiteBright('Welcome to Anuj\'s Resume ')}
    ${chalk.whiteBright('Thank you for visiting, here is my resume, let me introduct myself first ')}
    ${chalk.whiteBright('')}
    ${chalk.bgCyan.whiteBright(' Name: ')}${chalk.whiteBright(' Anuj Verma')}
    ${chalk.bgCyan.whiteBright(' Summary : ')}${chalk.whiteBright(' Detailed oriented and self motivated software professional with experience of overa decade in analysis, design and development.')}
    ${chalk.whiteBright('Passionate for result-oriented approach with a focus on quality and user experience.')}
    ${chalk.whiteBright('')}
    ${chalk.bgBlackBright.whiteBright(' Github: ')} https://github.com/anujverma000
    ${chalk.bgBlackBright.whiteBright(' Twitter: ')} https://twitter.com/anujverma000
    ${chalk.bgBlackBright.whiteBright(' Linkedin: ')} https://linkedin.com/in/anujverma000
    ${chalk.bgBlackBright.whiteBright(' Blog: ')} https://anujverma.netlify.app 
    ${chalk.whiteBright('')}
    ${chalk.bgCyan.whiteBright(' Experience : ')}
    ${chalk.whiteBright('')}
    ${chalk.blackBright(' • 2021 - Tech Lead / TribalScale / Dubai, UAE')}
    ${chalk.blackBright(' • 2016 - 2021 Senior Frontend Developer / dubizzle / Dubai, UAE')}
    ${chalk.blackBright(' • 2014 - 2016 Senior Software Engineer / CDK Global / Pune, India')}
    ${chalk.blackBright(' • 2012 - 2014 Senior Software Engineer / Entrib Technologies / Pune, India')}
    ${chalk.blackBright(' • 2008 - 2012 Software Engineer / Infosys / Pune, India')}
    ${chalk.whiteBright('')}
    ${chalk.bgCyan.whiteBright(' Skills : ')}
    ${chalk.whiteBright(' • NodeJs, Express, NextJs')}
    ${chalk.whiteBright(' • Angular, React, Redux')}
    ${chalk.whiteBright(' • React Native, ElectronJS')}
    ${chalk.whiteBright(' • Javascript, ES6, D3')}
    ${chalk.whiteBright(' • CSS, SASS, Styled Components')}
    ${chalk.whiteBright(' • HTML5, Pug, Handlebars')}
    ${chalk.whiteBright(' • Webpack, Rollup, Grunt, Gulp')}
    ${chalk.whiteBright(' • Jest, Cypress, Detox')}
    ${chalk.whiteBright(' • GraphQL, MongoDB')}
    ${chalk.whiteBright(' • Docker, Microservices')}
    ${chalk.whiteBright(' • AWS, Serverless')}
    ${chalk.whiteBright(' • Python, Java, Shell')}
    ${chalk.whiteBright(' • CI & CD')}
    ${chalk.whiteBright(' • Atomic Design')}
    ${chalk.whiteBright(' • SEO and AdOps')}`,
    {
      padding: 1, 
      borderStyle: 'classic',
      borderColor: 'yellow',
      dimBorder: true,
      float: 'center',
    }
  )
);
