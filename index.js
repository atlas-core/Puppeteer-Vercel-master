const app = require("express")();
const StealthPlugin = require('puppeteer-extra-plugin-stealth');


let chrome = {};
let puppeteer;
puppeteer.use(StealthPlugin());

if (process.env.AWS_LAMBDA_FUNCTION_VERSION) {
  chrome = require("chrome-aws-lambda");
  puppeteer = require("puppeteer-core");
  puppeteer = require('puppeteer-extra');
  


} else {
  puppeteer = require("puppeteer");
}



app.get("/", async (req, res) => {
  let options = {};

  if (process.env.AWS_LAMBDA_FUNCTION_VERSION) {
    options = {
      args: [...chrome.args, "--hide-scrollbars", "--disable-web-security"],
      defaultViewport: chrome.defaultViewport,
      executablePath: await chrome.executablePath,
      headless: false,
      ignoreHTTPSErrors: true,
    };
  }

  try {
    let browser = await puppeteer.launch(options);
    const page = await browser.newPage();

    //load cookies
     /* const cookiesString = await fs.readFile("./cookies.json");
     const test = await fs.readFile("./test.txt");
    const cookies = JSON.parse(cookiesString);
     await page.setCookie(...cookies);
  
    await page.goto("https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox");
    await page.click('[role="button"][gh="cm"]');
     
      await page.waitForNavigation();
     // await sleep(2);
     
     await page.waitForTimeout(1000);
  
      // Fill in the recipient, subject, and message body
      await page.type('[name="to"]', "aymandemaroc@gmail.com",{delay: 100});
      await page.type('[name="subjectbox"]', "Hello!",{delay: 100});
  
      await page.type('[role="textbox"]', "This is a message for headless puppet",{delay: 100});
  
      // Send the message
      await page.click('[role="button"][aria-label*="Send"]');
      await page.waitForNavigation();
      await browser.close();
  
      res.send("Message sent successfully!"); 
  
  */
      // Create a new SQLite database instance
      //const db = new sqlite3.Database('cookies.db');
      
      /* async function storeCookies(cookies) {
        try {
          // Open the database connection
          db.serialize();
      
          // Create the "cookies" table if it doesn't exist
          db.run(`
            CREATE TABLE IF NOT EXISTS cookies (
              cookie_name TEXT PRIMARY KEY,
              cookie_value TEXT
            )
          `);
      
          // Store the cookies in the "cookies" table
          const insertStatement = db.prepare('INSERT INTO cookies (cookie_name, cookie_value) VALUES (?, ?)');
          for (const cookie of cookies) {
            insertStatement.run(cookie.name, cookie.value);
          }
          insertStatement.finalize();
      
          console.log('Cookies stored successfully');
        } catch (err) {
          console.error('Error storing cookies:', err);
        } finally {
          // Close the database connection
          db.close();
        }
      }
       */
    await page.goto("https://www.gmail.com");
    await page.type("#identifierId", "yukamichiba@gmail.com",{delay: 150});
     await page.click("#identifierNext");
  
    /*await page.waitForSelector("#password", {
      visible: true,
      hidden: false,
    });
    await page.type(
      "#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input",
      "QAWQAWA13@",
      {delay: 150}
    );
    await sleep(1000);
    await page.click("#passwordNext > div > button");
  
    await sleep(2000); */
   // await page.goto("https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox");
/*     await page.click('[role="button"][gh="cm"]'); */
   
    //await page.waitForNavigation();
   // await sleep(2);
   
   //await page.waitForTimeout(1000);

    // Fill in the recipient, subject, and message body
    /* await page.type('[name="to"]', "aymandemaroc@gmail.com",{delay: 100});
    await page.type('[name="subjectbox"]', "Hello!",{delay: 100});

    await page.type('[role="textbox"]', "This is a try",{delay: 100});
 */
    // Send the message
    /* await page.click('[role="button"][aria-label*="Send"]');
    await page.waitForNavigation(); */
    const screenshot = await page.screenshot();
    res.set("Content-Type", "image/png");
    res.send(screenshot);


    
    // res.send(await page.title());
    // storeCookies();
      
   
  // res.send(await page.title());
   
    
    
   
  } catch (err) {
    console.error(err);
    return null;
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});

module.exports = app;
