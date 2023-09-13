#!/usr/bin/env node

let Organize = require("./commands/organize");
let Tree = require("./commands/tree")

const command = process.argv.slice(2)


switch (command[0]) {
    case '-o':        
        try {
            Organize.organizeFun(command[1])

        } catch (error) {
            console.log(`${error}`)
        }
        break;

    case '-t':
        Tree.TreeFun(command[1])
        break;

    case '-ver':
        Version()
        break;

    case '-h':
        Help()
        break;

    default:
        console.log(process.cwd())
        console.log(' for Help:  furious -h ')
        break;
}

function Version() {
    console.log('furious 1.6.0 ⚡⚡')
}

function Help() {
    console.log('Furious - File Manager(CLI)')
    console.log(' - for Help: furious -h ')
    console.log(' - for Version: furious -ver ')
    console.log(' - To Organize: furious -o <basePath> ')
    console.log(' - To get Tree Structure for the Folder: furious -t <basePath> ')
}