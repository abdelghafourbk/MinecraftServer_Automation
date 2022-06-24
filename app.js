const puppeteer = require('puppeteer-extra');
require('dotenv').config();
// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

async function main() {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto('https://www.aternos.org/servers/');
    await page.type('input[id="user"]',process.env.user );
    await page.type('input[id="password"]',process.env.password );
 
    await page.waitForTimeout(3000); // wait for 5 seconds
    await page.click('div[id="login"]');
//    const serversPage =  (await browser.pages())[1];
//     console.log(serversPage.content());
    // const serversPage = await page.content();
    // const element = await serversPage.$("[class='server-name']")
    // console.log(element);
    //obtain text
    // const text = await (await element.getProperty('textContent')).jsonValue();
    // console.log(text.length);
    
    // await browser.close();
}
main();