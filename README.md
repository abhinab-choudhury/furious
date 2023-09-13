
<div style="display:flex;">
    <img width="100" height="100" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/>
    <img width="100" height="100" src="https://img.icons8.com/stickers/100/console.png" alt="console"/> 
</div>

---

# Furious

This CLI command Helps Organize File in Structured manner.

# Commands

- <strong> Organize Commmand </strong>: Organizes File in folder "Furious - Organized"
  
    ```bash
    furious -o <path>
    ```

    <strong> File Structure for folder Furious - Organized </strong>
    ```
    ├───Furious-Organized
    │      ├── Video
    │      │   ├── **/*.mp4
    │      │   ├── **/*.mkv
    │      │   ├── ....
    │      ├── Audio
    │      │   ├──  **/*.mp3
    │      │   ├── ....
    │      ├── pdf_file
    │      │   ├── **/*.pdf
    │      │   ├── ....
    │      ├── word_file
    │      │   ├── **/*.doc
    │      │   ├── **/*.docx
    │      │   ├── ....
    │      ├── excel_file
    │      │   ├── **/*.xls
    │      │   ├── **/*.xlsx
    │      │   ├── ....
    │      ├── Power_pointe
    │      │   ├── **/*.pptx
    │      │   ├── **/*.ppt
    │      │   ├── ....
    │      ├── image
    │      │   ├── **/*.jpg
    │      │   ├── **/*.png
    │      │   ├── ....
    │      ├── archives
    │      │   ├── **/*.zip
    │      │   ├── **/*.7z
    │      │   ├── ....
    │      ├── documents
    │      │   ├── **/*.txt
    │      │   ├── ....
    │      ├── app
    │      │   ├── **/*.exe
    │      │   ├── ....
    └─── 
    ```
    
- <strong> Tree Command</strong>: This Command returns the Tree Structure for the Path.
  ```bash
    furious -t <path>
    ``` 

- <strong> Version </strong>: Shows the Version for the CLI Command
  ```bash
    furious -ver 
    ```   

- <strong> Help Command </strong>  
   ```bash
    furious -h 
    ```    
        


## Instructions to Configure
1. Open command prompt and choose your desired directory to clone the repository
2. ` git clone https://github.com/abhinab-choudhury/furious.git `
3. ` cd furious`
4. ` npm link`