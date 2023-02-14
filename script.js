const puppeteer = require('puppeteer');
const fs = require('fs');

async function scrapeDivTextAndDownloadPDF(url, className) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const textContent = await page.$$eval(`.${className}`, elements => elements.map(el => el.textContent.trim()).join('\n'));

  await page.pdf({path: 'output.pdf'});

  console.log('PDF downloaded');

  await browser.close();
}

scrapeDivTextAndDownloadPDF('https://geekflare.com/web-scraping-in-javascript/', 'x-article-content'); // replace example.com with your target website and 'my-div-class' with the appropriate class
