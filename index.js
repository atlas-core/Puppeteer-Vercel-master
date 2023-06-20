const app = require("express")();
const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");

puppeteer.use(StealthPlugin());

app.get("/", async (req, res) => {
  try {
    let options = {};

    if (process.env.AWS_LAMBDA_FUNCTION_VERSION) {
      const chrome = require("chrome-aws-lambda");
      options = {
        args: [...chrome.args, "--hide-scrollbars", "--disable-web-security"],
        defaultViewport: chrome.defaultViewport,
        executablePath: await chrome.executablePath,
        headless: false,
        ignoreHTTPSErrors: true,
      };
    }

    const browser = await puppeteer.launch(options);
    const page = await browser.newPage();

    await page.goto("https://www.gmail.com");
    await page.type("#identifierId", "aymandemaroc@gmail.com", { delay: 150 });
    await page.click("#identifierNext");
    await page.waitForTimeout(3000);
   /*  await page.waitForSelector("#password", { visible: true });
    await page.type(
      "#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input",
      "your-password",
      { delay: 150 }
    );
    await page.click("#passwordNext > div > button");
    await page.waitForNavigation();
 */
    const screenshot = await page.screenshot();

    res.set("Content-Type", "image/png");
    res.send(screenshot);

    await browser.close();
  } catch (err) {
    console.error(err);
    res.status(500).send("Error capturing screenshot");
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});

module.exports = app;
