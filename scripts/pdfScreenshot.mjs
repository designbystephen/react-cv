import puppeteer from 'puppeteer';
import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import util from 'util';

const {
  HOST = 'localhost', 
  PORT = '3000',
  PDF_OUTPUT_FILENAME = 'my-resume.pdf',
  PDF_OUTPUT_PATH = 'build'
} = process.env;


const execAsync = util.promisify(exec);

/**
 * Start server instance
 */
const startServer = async () => {
 execAsync('yarn start');
};

/**
 * Stop server instance
 */
const stopServer = async () => (
  execAsync('yarn stop')
);

/**
 * Create pdf output directory
 */
const createPdfDestination = async (p, filename) => {
  const exists = fs.existsSync(p);

  if (!exists) {
    await fs.promises.mkdir(p);
  }

  return path.join(p, filename);
}

/**
 * Print a pdf screenshot from browser
 */
const printPdf = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(`http://${HOST}:${PORT}`, { waitUntil: 'networkidle0' });

  const marginInches = 0.50;
  const marginPixels = marginInches * 96; 

  const pdfPath = await createPdfDestination(PDF_OUTPUT_PATH, PDF_OUTPUT_FILENAME);

  console.log(pdfPath);

  // Configure print options
  const pdfOptions = {
    path: pdfPath,
    format: 'LETTER',
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
  await startServer();
  
  console.info('Printing as a pdf...');
  const destination = await printPdf();

  console.info(`Successfully printed to ${destination}`);

  console.info('Stopping local server...');
  await stopServer();
})();
