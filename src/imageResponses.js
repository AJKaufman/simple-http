const fs = require('fs');

const spongegarImg = fs.readFileSync(`${__dirname}/../client/spongegar.png`);


const dankmemes = (request, response) => {
        
    response.writeHead(200, { 'Content-Type': 'image/png' });
    response.write(spongegarImg);
    response.end();
};


module.exports.dankmemes = dankmemes;
