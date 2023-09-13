const fs = require('fs');
const path = require('path');
const fileType = require('../fileType')

const FILETYPE = fileType.Types

function organize(basepath) {
    if (basepath == undefined) {
        basepath = process.cwd();
    }    

    if (fs.existsSync(basepath)) {
        const organize_path = path.join(basepath, 'Furious - Organized')
        const exits = fs.existsSync(organize_path)
        if (!exits) {
            fs.mkdirSync(organize_path)
            console.log('Create: \'Furious - Organized \' Folder ✅ ')
        } else {
            console.log('Already Created: \'Furious - Organized \' Folder ✅ ')
        }
        const read_basepath = fs.readdirSync(basepath)
        const files = Find_Files(read_basepath, basepath)

        console.log('Files Extracted. ✅ ')
        moveFiles(basepath, organize_path, files)
        console.log("")

    } else {
        console.log('Error: Path Error ❌❌')
    }

}

function Find_Files(allFiles, basePath) {
    let files = [];
    for (let i = 0; i < allFiles.length; i++) {
        let eachPath = path.join(basePath, allFiles[i])
        if (fs.lstatSync(eachPath).isFile()) {
            files.push(allFiles[i])
        }
    }
    return files
}

function moveFiles(basePath, newBasePath, allFiles) {
    for (let i = 0; i < allFiles.length; i++) {

        let file_type = getFileType(allFiles[i]) + ""

        const folderPath = path.join(newBasePath, file_type)
        let exists = fs.existsSync(folderPath)
        if (!exists) {
            fs.mkdirSync(folderPath)
        }

        const filename = path.basename(allFiles[i])
        const oldpath = path.join(basePath, filename)
        const newpath = path.join(folderPath, filename)

        fs.copyFileSync(oldpath, newpath)
        fs.unlinkSync(oldpath) 

        // update the current value in your application..
        console.log(`${allFiles[i]} ✅`)

    }
}

function getFileType(name) {

    let ext = path.extname(name)
    ext = ext.slice(1).toLowerCase()


    for (let Folder in FILETYPE) {
        let exts = FILETYPE[Folder]
        for (let i = 0; i < exts.length; i++) {
            if (ext === exts[i]) {
                return Folder
            }
        }
    }
    return "Other"
}

module.exports = {
    organizeFun: organize,
}