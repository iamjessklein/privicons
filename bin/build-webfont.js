var fs = require('fs');

var webfontsGenerator = require('webfonts-generator');

webfontsGenerator({
  files: fs.readdirSync('svg').map(function(filename) {
    return 'svg/' + filename;
  }),
  dest: 'font/',
  fontName: 'privicons',
  html: true,
  templateOptions: {
    classPrefix: 'pi-',
    baseClass: 'pi'
  }
}, function(err) {
  if (err) throw err;
  console.log("Yay!");
});
