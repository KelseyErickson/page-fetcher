const args = process.argv.slice(2);
const URL = args[0];
const PATH = args[1];

const request = require('request');
const fs = require('fs');


if (PATH[0] !== '.' || PATH[1] != '/') {
  console.log('Invalid local path');
  return;

};

request(URL, (error, response, body) => {

  console.error('error:', error);
  console.log('statusCode:', response && response.statusCode);

  if (response.statusCode != 200) {
    console.log(`Received status code ${response.statusCode}. Error Occurred.`)
    return;

  }

  fs.writeFile(PATH, body, (err) => {
    if (err) {
      console.log(err);
    }

    console.log(`Downloaded and saved ${body.length} bytes to ${PATH}`);

  });

})

