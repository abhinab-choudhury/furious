const fs = require('fs')
const path = require('path')

function Tree(basePath) {
    if (basePath === undefined) {
        basePath = process.cwd()
    }

    let exists = fs.existsSync(basePath)
    if (exists) {
        TreePrinter(basePath, "")
        console.log('└─── END')


    } else {
        console.log('Error: Path Error ❌❌')
    }
}

function TreePrinter(basePath, Indent) {
    const FOLDER_DATA = fs.readdirSync(basePath)

    for (let i = 0; i < FOLDER_DATA.length; i++) {
        let check = fs.lstatSync(path.join(basePath, FOLDER_DATA[i])).isFile()
        if (check) {
            console.log(`│${Indent}├───────➔  ${FOLDER_DATA[i]}`)
        } else {
            console.log(`│${Indent}└────➔  ${FOLDER_DATA[i]}`)
            let newPath = path.join(basePath, FOLDER_DATA[i])
            TreePrinter(newPath, Indent + '\t')
        }
    }
}

module.exports = {
    TreeFun: Tree
}