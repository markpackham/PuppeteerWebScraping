const puppeteer = require("puppeteer");

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.traversymedia.com");

  // This site page has less to scrape so saves time
  // await page.goto("https://www.ed.ac.uk/about/our-history");

  // This site page has less to scrape so saves time
  // await page.goto("https://www.google.com/");

  //  screenshot of the page
  // await page.screenshot({ path: 'example.png', fullPage: true });

  //  PDF of the page
  // await page.pdf({ path: "example.pdf", format: "A4" });

  // const html = await page.content();
  // console.log(html);

  // const title = await page.evaluate(() => document.title);
  // console.log(title);

  // text of the page
  const text = await page.evaluate(() => document.body.innerText);
  console.log(text);

  await browser.close();
}

run();
