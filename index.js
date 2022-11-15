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
  // const text = await page.evaluate(() => document.body.innerText);
  // console.log(text);

  // all links on a page
  // const links = await page.evaluate(() =>
  //   Array.from(document.querySelectorAll("a"), (e) => e.href)
  // );
  // console.log(links);

  // Get Traversy Media courses info
  // const courses = await page.evaluate(() =>
  //   Array.from(document.querySelectorAll("#courses .card"), (e) => ({
  //     title: e.querySelector(".card-body h3").innerText,
  //     level: e.querySelector(".card-body .level").innerText,
  //     url: e.querySelector(".card-footer a").href,
  //     promo: e.querySelector(".card-footer .promo-code .promo").innerText,
  //   }))
  // );
  // console.log(courses);

  // Get Traversy Media courses info (same as above but using $$eval instead of evaluate)
  const courses = await page.$$eval("#courses .card", (elements) =>
    elements.map((e) => ({
      title: e.querySelector(".card-body h3").innerText,
      level: e.querySelector(".card-body .level").innerText,
      url: e.querySelector(".card-footer a").href,
      promo: e.querySelector(".card-footer .promo-code .promo").innerText,
    }))
  );
  console.log(courses);

  await browser.close();
}

run();
