var fs = require('fs');

// asynchronous read

fs.readFile('my-file.txt', 'utf8', function(err, data) {  
    if (err) throw err;
    console.log(data);
});

// synchronous read

try {  
    var data = fs.readFileSync('my-file.txt', 'utf8');
    console.log(data);    
} catch(e) {
    console.log('Error:', e.stack);
}

// reading a file and creating a copy

// copy a file

const readableStream = fs.createReadStream('my-file.txt')
var writableStream = fs.createWriteStream('my-file-copy.txt')

readableStream.pipe(writableStream)