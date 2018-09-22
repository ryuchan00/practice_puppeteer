const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch({
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox'
        ]
    });
    const page = await browser.newPage();
    await page.goto('http://xxx.com'); // 表示したいURL

    /*（何か処理）*/

    browser.close();
})();
