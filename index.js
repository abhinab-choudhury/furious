/* 
1. import dependencies
2. get the path and function
    1.-o: organize
       - create directory 'Furious - Organized Folder' 
       - get files only which are not in folder   
       - identify Category of Files
       - Move files into there respective folder.

    2.-t: Tree
           Use a  Super basic Recursion.

           function  recursion(basepath, spacing){
                for(file_folder in range(all_files)) {
                        // check if the Present element is a File or
                        //  a folder.  
                    check = fs.lstatSync(<path>).isFile()
                    if(check):
                        print("this File like a tree using Unicode Characters")
                    else:
                        print(the Folder Name)
                        basePath = join the path with the folder and then
                        call the function again

                        recursion(basePath(which you updated), Spacing + '\t'(this will add vertical space
                            between file and Folder.))
                    
                    end if        
                }
            }
    3.-ver: Version
        - Console.log() the necessary information.
    4.-h: Help
        - Console.log() the necessary information. 
*/

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
    console.log(' - To Force Organize: furious -fo <basePath> ')
    console.log(' - To get Tree Structure for the Folder: furious -fo <basePath> ')
}