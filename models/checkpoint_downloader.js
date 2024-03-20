// USE NODE JS TO DOWNLOAD CHECKPOINT FILES

const https = require('https');
const fs = require('fs');
const path = require('path');

const MANIFEST_FNAME = 'weights_manifest.json';
const CONFIG_FNAME = 'config.json';

function joinUrl(...parts) {
  return parts.join('/');
}

function downloadFile(url, outputDir, filename) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      const filePath = path.join(outputDir, filename);
      const fileStream = fs.createWriteStream(filePath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(filePath);
      reject(err.message);
    });
  });
}

async function downloadCheckpoint(checkpointUrl, outputDir) {
    try {
        // Check if output directory exists, if not create it
        if (!fs.existsSync(outputDir)){
            fs.mkdirSync(outputDir);
        } else {
            // Empty the output directory
            fs.readdirSync(outputDir).forEach(file => {
                fs.unlinkSync(path.join(outputDir, file));
            });
        }

        await downloadFile(joinUrl(checkpointUrl, MANIFEST_FNAME), outputDir, MANIFEST_FNAME);
        console.log('Downloaded weights manifest.');

        const manifest = JSON.parse(fs.readFileSync(path.join(outputDir, MANIFEST_FNAME)));
        for (const p of manifest[0]['paths']) {
            console.log(`Downloading weights: ${p}.`);
            await downloadFile(joinUrl(checkpointUrl, p), outputDir, p);
        }

        console.log('Downloading config.');
        await downloadFile(joinUrl(checkpointUrl, CONFIG_FNAME), outputDir, CONFIG_FNAME);
    } catch (error) {
        console.log(`Download failed, quitting: ${error}`);
    }

 
    console.log('Done.');
}


const MODEL_TYPE = 'music_rnn';
const MODEL_NAME = 'basic_rnn';

// Replace with your checkpoint URL and output directory
downloadCheckpoint(`https://storage.googleapis.com/magentadata/js/checkpoints/${MODEL_TYPE}/${MODEL_NAME}`, `.models/${MODEL_NAME}`);