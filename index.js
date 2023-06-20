const app = require("express")();
const puppeteer = require("puppeteer");

var  a  ; 

/* app.use(session({
  name: 'sessionID',
  secret: 'your-secret-key',
  cookie: {
    maxAge: 24 * 60 * 60 * 1000, // 1 day (in milliseconds)
    secure: true, // Set to true if using HTTPS
    httpOnly: true, // Restrict access to cookies to HTTP(S) requests only
  },
})); */


app.get("/", async (req, res) => {


  
  
  const cookies = [
    {
      "name": "OSID",
      "value": "XwhDtgUsSAt7Kp5wQIbeQosse1p9mgncdXgnveAJq06TC3oPtQflbDaxc-0mxIHrdnntnA.",
      "domain": "mail.google.com",
      "httpOnly": true,
      "secure": true, 
    },
    {
      "name": "__Secure-1PSID",
      "value": "XwhDtn-ISXKJ7C4mU7qOQ79KDIKGHyKaRtu6VulZIzPQPHHxX9klXQxgHFigBmPA1j-2WA.",
      "domain": ".google.com",
      "httpOnly": true,
       "secure": true,
    
    },
    {
      "name": "SID",
      "value": "XwhDtn-ISXKJ7C4mU7qOQ79KDIKGHyKaRtu6VulZIzPQPHHxP7GzNAuizrkUlhK0g8E6JQ.",
      "domain": ".google.com",
    }
   
  ]


  

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
   // console.error(errorx);
    //res.send(screenshot);
    res.status(500).send(err);
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});

module.exports = app;
