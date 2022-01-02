// Read file in js module
// const fs = require("fs");
// // let file_content = fs.readFileSync('text.txt','utf-8');
// // console.log(file_content);

// // file_content = file_content.replace('Contrary','Afridi');

// // // # write new file

// // fs.writeFileSync('new_file.txt',file_content);
// let new_file_content = fs.readFileSync('new_file.txt','utf-8');
// console.log(new_file_content);

// Os Module in js module
const os = require("os");
// let kb = os.freemem()/1000
// let mb = kb/1000

// console.log(`${mb} MB are Free Memory in your System (RAM)!`)
// console.log(os.homedir())
// console.log(os.hostname())
// console.log(os.networkInterfaces())
// console.log(os.platform())
// console.log(os.release())
console.log(Math.round(os.uptime()/60),"Minutes")