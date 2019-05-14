const countryData = './countries.json';
const fs = require('fs');
const fileReader = require('./json-file-reader')
const inputFromTerminal = process.argv[2];



fileReader('./countries.json', function (filename) {
  for (let j = 0; j < filename.length; j++) {
    if (filename[j].name === inputFromTerminal) {
      console.log(`Country: ${filename[j].name}`)
      console.log(`Top Level Domain: ${filename[j].topLevelDomain}`)
    }
  }
})


// fs.readFile(countryData, 'utf-8', (error, data) => {
//   if (error) throw error

//   else {
//     let parsedData = JSON.parse(data);
//     for (let j = 0; j < parsedData.length; j++) {
//       if (parsedData[j].name === inputFromTerminal) {
//         console.log(`Country: ${parsedData[j].name}`)
//         console.log(`Top Level Domain: ${parsedData[j].topLevelDomain}`)
//       }
//     }
//   }
// })