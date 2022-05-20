const gify = require('node-video-to-gif');
const fs = require('fs');

const arg = process.argv[2];
const inputPath = `./videos/${arg}`;
const outputPath = `./gifs/newGif.gif`;

const opts = {
  width: 680,
};

function removeVideo() {
  fs.unlink(inputPath, (err) => {
    if (err) {
      throw err;
    } else {
      console.log('Video deletado.');
    }
  });
}

function generateGif(inputPath, outputPath) {
  gify(inputPath, outputPath, opts, (err) => {
    if (err) {
      throw err;
    } else {
      removeVideo();
      console.log('Gif pronto!');
    }
  });
}

generateGif(inputPath, outputPath);
