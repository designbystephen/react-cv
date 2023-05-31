const puppeteer = require('puppeteer');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const {
  HOST = 'localhost', 
  PORT = '3000',
  PDF_OUTPUT_FILENAME = 'my-resume.pdf',
  PDF_OUTPUT_PATH = 'build'
} = process.env;

/**
 * Start server instance
 */
const start = () => (
  new Promise((resolve, reject) => {
    exec('yarn run start', (error, stdout, stderr) => {
      if (error) {
        console.error(`Error starting the server: ${error}`);
        reject(error);
      }

      resolve();
    })
  })
);

/**
 * Stop server instance
 */
const stop = () => (
  new Promise((resolve, reject) => {
    exec('yarn run stop', (error, stdout, stderr) => {
      if (error) {
        console.error(`Error stopping the server: ${error}`);
        reject(error);
      }
      
      resolve();
    })
  })
);

/**
 * Create pdf output directory
 */
const createPdfDestination = async (p, filename) => {
  const exists = await fs.existsSync(p);

  if (!exists) {
    await fs.promises.mkdir(p);
  }

  return path.join(p, filename);
}

/**
 * Print a pdf screenshot from browser
 */
const print = async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  await page.goto(`http://${HOST}:${PORT}`, { waitUntil: 'networkidle0' });

  const marginInches = 0.50;
  const marginPixels = marginInches * 96; 

  const pdfPath = await createPdfDestination(PDF_OUTPUT_PATH, PDF_OUTPUT_FILENAME);

  console.log(pdfPath);

  // Configure print options
  const pdfOptions = {
    path: pdfPath,
    format: 'Letter',
    printBackground: true,
    margin: {
      top: `${marginPixels}px`,
      bottom: `${marginPixels}px`,
      left: `${marginPixels}px`,
      right: `${marginPixels}px`,
    },
  };

  // Print webpage as PDF
  await page.pdf(pdfOptions);

  await browser.close();

  return pdfPath;
};

(async () => {
  console.info('Starting local server...');
  await start();
  
  console.info('Printing as a pdf...');
  const destination = await print();

  console.info(`Sucessfully printed to ${destination}`);

  console.info('Stopping local server...');
  await stop();
})();
