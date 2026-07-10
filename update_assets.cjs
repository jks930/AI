const fs = require('fs');
const path = require('path');

function walk(dir, done) {
  let results = [];
  fs.readdir(dir, function(err, list) {
    if (err) return done(err);
    let pending = list.length;
    if (!pending) return done(null, results);
    list.forEach(function(file) {
      file = path.resolve(dir, file);
      fs.stat(file, function(err, stat) {
        if (stat && stat.isDirectory()) {
          walk(file, function(err, res) {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          results.push(file);
          if (!--pending) done(null, results);
        }
      });
    });
  });
}

walk('c:/itmc/Ai/src', function(err, results) {
  if (err) throw err;
  results.filter(f => f.endsWith('.jsx')).forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Replace src="/<something>" but not src="/ai/"
    content = content.replace(/src="\/(?!ai\/)/g, 'src="/ai/');
    // Replace poster="/<something>" but not poster="/ai/"
    content = content.replace(/poster="\/(?!ai\/)/g, 'poster="/ai/');
    // Replace url('/<something>') but not url('/ai/')
    content = content.replace(/url\(['"]\/(?!ai\/)/g, "url('/ai/");

    if (content !== original) {
      fs.writeFileSync(file, content);
      console.log('Updated ' + file);
    }
  });
});
