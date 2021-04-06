const langs = require('langs'); // require the langs npm
const franc = require('franc'); // require the franc npm
const args = process.argv.slice(2); // create args variable and slice off first two arguments
const colors = require('colors') // require colors npm

try {
    const langCode = franc(args[0]); // pass args into franc and save as langCode
    const language = langs.where("3", langCode); // pass langCode into langs to get Language
    console.log(`That looks like: ${language.name}`.green); // output the language
}
catch (err) {
    console.log('Sorry. Can\'t detect the language. Please try a larger sample.'.underline.red) // catch if no language is found
}