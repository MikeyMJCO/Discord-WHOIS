// Discord WHOIS
// Workflow: BugDetection/File-Validator
console.log("Discord WHOIS\nBugDetection/File-Validator")
console.log("Beginning file validation...")
console.log("Importing modules...")

// Variables
let failedct = 0;
let missed = []

// Modules
const fs = require("fs");

// Scan directories
console.log("Scanning for critical directories...")

fs.readdir('./ci/', (err, files) => {
    if (err) {
        console.log("Failed to find ./ci/! [1/4]")
        failedct++
        missed.push('./ci/')
    } else {
        console.log("Found ./ci/! [1/4]")
    }
})
fs.readdir('./commands/', (err, files) => {
    if (err) {
        console.log("Failed to find ./commands/! [2/4]")
        failedct++
        missed.push('./commands/')
    } else {
        console.log("Found ./commands/! [2/4]")
    }
})
fs.readdir('./data/', (err, files) => {
    if (err) {
        console.log("Failed to find ./data/! [3/4]")
        failedct++
        missed.push('./data/')
    } else {
        console.log("Found ./data/! [3/4]")
    }
})
fs.readdir('./node_modules/', (err, files) => {
    if (err) {
        console.log("Failed to find ./node_modules/! [4/4]")
        failedct++
        missed.push('./node_modules/')
    } else {
        console.log("Found ./node_modules/! [4/4]")
    }
})

// Scan for critical files
console.log("Beginning critical file scan...")
fs.readFile('./index.js', (err, contents) => {
    if (err) {
        console.log("Failed to find ./index.js! [1/3]")
        failedct++
        missed.push('./index.js')
    } else {
        console.log("Found ./index.js! [1/3]")
    }
})
fs.readFile('./package.json', (err, contents) => {
    if (err) {
        console.log("Failed to find ./package.json! [2/3]")
        failedct++
        missed.push('./package.json')
    } else {
        console.log("Found ./package.json! [2/3]")
    }
})
fs.readFile('./package-lock.json', (err, contents) => {
    if (err) {
        console.log("Failed to find ./package-lock.json! [3/3]")
        failedct++
        missed.push('./package-lock.json')
    } else {
        console.log("Found ./package-lock.json! [3/3]")
    }
})

// Scan for critical commands
console.log("Beginning scan for missing critical commands...")
fs.readFile('./commands/help.js', (err, contents) => {
    if (err) {
        console.log("Failed to find ./commands/help.js [1/2]")
        failedct++
        missed.push('./commands/help.js')
    } else {
        console.log("Found ./commands/help.js! [1/2]")
    }
})
fs.readFile('./commands/eval.js', (err, contents) => {
    if (err) {
        console.log("Failed to find ./commands/eval.js [2/2]")
        failedct++
        missed.push('./commands/eval.js')
    } else {
        console.log("Found ./commands/eval.js! [2/2]")
    }
})

