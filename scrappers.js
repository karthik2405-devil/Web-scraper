const scrapeButton = document.querySelector('#scrape-button');
// const puppeteer = require('puppeteer');
// const fs = require('fs');
scrapeButton.addEventListener('click', async () => {
  const url = 'https://geekflare.com/web-scraping-in-javascript/';
  const className = 'x-article-content';
  const name = prompt('What is your name?');
  alert(`Thank you, ${name}! Your download will begin shortly.`);

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const scrapedText = await page.$$eval(`.${className}`, elements => elements.map(el => el.textContent.trim()).join('\n'));
  console.log(scrapedText);
  await page.pdf({path: 'output.pdf'});

  console.log('PDF downloaded');

  await browser.close();
});
