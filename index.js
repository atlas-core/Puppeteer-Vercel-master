const app = require("express")();
const puppeteer = require("puppeteer");




const cookies = [
  {
    "name": "__Secure-3PSIDCC",
    "value": "AP8dLtyGKV7yGcfdqE8yVt11yLhs3oYRBzFeA_RCPIIuinHvPjEIULvk6-zP8uE5PRhybaOAzg",
    "domain": ".google.com",
    "path": "/",
    "expires": 1718723577.331593,
    "size": 90,
    "httpOnly": true,
    "secure": true,
    "session": false,
    "sameSite": "None",
    "sameParty": false,
    "sourceScheme": "Secure",
    "sourcePort": 443
  },
   {
    "name": "GMAIL_AT",
    "value": "AF6bupMGWAjbK0b77YC8mkiv2hK1J8MaWw",
    "domain": "mail.google.com",
    "path": "/mail/u/0",
    "expires": -1,
    "size": 42,
    "httpOnly": false,
    "secure": true,
    "session": true,
    "sameParty": false,
    "sourceScheme": "Secure",
    "sourcePort": 443
  }
]






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
    

   for (const cookie of cookies) {
      await page.setCookie(cookie);
    }
 
    await page.goto("https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox");
   
    //await page.type("#identifierId", "aymandemaroc@gmail.com", { delay: 150 });
    //await page.click("#identifierNext");
   // await page.waitForTimeout(2000);

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
    //res.send(screenshot);
    res.status(500).send(err);
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});

module.exports = app;
