var fs = require('fs');

fs.readFile('my-file.txt', 'utf8', function(err, data) {  
    if (err) throw err;
    console.log(data);
});

try {  
    var data = fs.readFileSync('my-file.txt', 'utf8');
    console.log(data);    
} catch(e) {
    console.log('Error:', e.stack);
}