const app = require("express")();
const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");

puppeteer.use(StealthPlugin());

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
    "name": "__Secure-1PSIDTS",
    "value": "sidts-CjIBLFra0vtoB5QGrGMx6vvZZ92aTpeC0wbN5dyrUDH1e_xwGnqRm_FB6c1koSEM_XtbaxAA",
    "domain": ".google.com",
    "path": "/",
    "expires": 1718723573.769679,
    "size": 94,
    "httpOnly": true,
    "secure": true,
    "session": false,
    "sameParty": true,
    "sourceScheme": "Secure",
    "sourcePort": 443
  },
  {
    "name": "NID",
    "value": "511=V4rmF9xBd7RnymzV0vLqpZctjM2mBCy8s03l1edGk32mhYF8hvy1QGhPkz3cACRmBVJl7UKSIzsc5BabNeHt3VLh0dTKBPdbowCVl0yRfgh0BGWOLHS91Y1uBprQSE92NWqtGjxHew1SRcBP83eRFDi7USx7c_BtUIvJyY8O2sLDQTBC78S806-ZexZuD18D-DuWzThKBqRO4P1zejj4TmlnG9Vw1BXyD7tPyNO1ruhCUejPtzYArT5qHarl3IDRk8bWNNBY",
    "domain": ".google.com",
    "path": "/",
    "expires": 1702998771.886834,
    "size": 271,
    "httpOnly": true,
    "secure": true,
    "session": false,
    "sameSite": "None",
    "sameParty": false,
    "sourceScheme": "Secure",
    "sourcePort": 443
  },
  {
    "name": "__Host-GMAIL_SCH_GMS",
    "value": "1",
    "domain": "mail.google.com",
    "path": "/",
    "expires": 1689779570.001537,
    "size": 21,
    "httpOnly": true,
    "secure": true,
    "session": false,
    "sameSite": "Strict",
    "sameParty": false,
    "sourceScheme": "Secure",
    "sourcePort": 443
  },
  {
    "name": "__Host-GMAIL_SCH_GMN",
    "value": "1",
    "domain": "mail.google.com",
    "path": "/",
    "expires": 1689779570.001393,
    "size": 21,
    "httpOnly": true,
    "secure": true,
    "session": false,
    "sameParty": false,
    "sourceScheme": "Secure",
    "sourcePort": 443
  },
  {
    "name": "__Secure-3PSIDTS",
    "value": "sidts-CjIBLFra0vtoB5QGrGMx6vvZZ92aTpeC0wbN5dyrUDH1e_xwGnqRm_FB6c1koSEM_XtbaxAA",
    "domain": ".google.com",
    "path": "/",
    "expires": 1718723573.769767,
    "size": 94,
    "httpOnly": true,
    "secure": true,
    "session": false,
    "sameSite": "None",
    "sameParty": false,
    "sourceScheme": "Secure",
    "sourcePort": 443
  },
  {
    "name": "OSID",
    "value": "XwhDtgUsSAt7Kp5wQIbeQosse1p9mgncdXgnveAJq06TC3oPtQflbDaxc-0mxIHrdnntnA.",
    "domain": "mail.google.com",
    "path": "/",
    "expires": 1750259568.516582,
    "size": 75,
    "httpOnly": true,
    "secure": true,
    "session": false,
    "sameParty": false,
    "sourceScheme": "Secure",
    "sourcePort": 443
  },
  {
    "name": "__Secure-1PSIDCC",
    "value": "AP8dLty9LOit86JOPv5zqJlum_RV6NziaJ8DyRjZ7b-fqW_w8CZnxoPtBl97diE_iwzdVwzT",
    "domain": ".google.com",
    "path": "/",
    "expires": 1718723577.331489,
    "size": 88,
    "httpOnly": true,
    "secure": true,
    "session": false,
    "sameParty": false,
    "sourceScheme": "Secure",
    "sourcePort": 443
  },
  {
    "name": "SIDCC",
    "value": "AP8dLtxJM3gFx4fcr7ggMIJlrHFcAnKlHAOdZGJgm0ncnUvorELoniqoAtHFFr53q1S7Bf-T",
    "domain": ".google.com",
    "path": "/",
    "expires": 1718723577.331276,
    "size": 77,
    "httpOnly": false,
    "secure": false,
    "session": false,
    "sameParty": false,
    "sourceScheme": "Secure",
    "sourcePort": 443
  },
  {
    "name": "SEARCH_SAMESITE",
    "value": "CgQIx5gB",
    "domain": ".google.com",
    "path": "/",
    "expires": 1702739571.886757,
    "size": 23,
    "httpOnly": false,
    "secure": false,
    "session": false,
    "sameSite": "Strict",
    "sameParty": false,
    "sourceScheme": "Secure",
    "sourcePort": 443
  },
  {
    "name": "__Secure-3PAPISID",
    "value": "w4x53p0EcG8ZF-ru/A7ZXwS-sPerCKhKMr",
    "domain": ".google.com",
    "path": "/",
    "expires": 1750259568.242481,
    "size": 51,
    "httpOnly": false,
    "secure": true,
    "session": false,
    "sameSite": "None",
    "sameParty": false,
    "sourceScheme": "Secure",
    "sourcePort": 443
  },
  {
    "name": "SAPISID",
    "value": "w4x53p0EcG8ZF-ru/A7ZXwS-sPerCKhKMr",
    "domain": ".google.com",
    "path": "/",
    "expires": 1750259568.242349,
    "size": 41,
    "httpOnly": false,
    "secure": true,
    "session": false,
    "sameParty": false,
    "sourceScheme": "Secure",
    "sourcePort": 443
  },
  {
    "name": "APISID",
    "value": "eLTwCKhW6Ug9_-lu/A9mBmIV5gdsQe2C4I",
    "domain": ".google.com",
    "path": "/",
    "expires": 1750259568.242292,
    "size": 40,
    "httpOnly": false,
    "secure": false,
    "session": false,
    "sameParty": false,
    "sourceScheme": "Secure",
    "sourcePort": 443
  },
  {
    "name": "SSID",
    "value": "AnTy7Us77qRGc6xqY",
    "domain": ".google.com",
    "path": "/",
    "expires": 1750259568.242236,
    "size": 21,
    "httpOnly": true,
    "secure": true,
    "session": false,
    "sameParty": false,
    "sourceScheme": "Secure",
    "sourcePort": 443
  },
  {
    "name": "__Secure-1PAPISID",
    "value": "w4x53p0EcG8ZF-ru/A7ZXwS-sPerCKhKMr",
    "domain": ".google.com",
    "path": "/",
    "expires": 1750259568.242418,
    "size": 51,
    "httpOnly": false,
    "secure": true,
    "session": false,
    "sameParty": true,
    "sourceScheme": "Secure",
    "sourcePort": 443
  },
  {
    "name": "HSID",
    "value": "Aa82lyfluu3S-UOZN",
    "domain": ".google.com",
    "path": "/",
    "expires": 1750259568.242176,
    "size": 21,
    "httpOnly": true,
    "secure": false,
    "session": false,
    "sameParty": false,
    "sourceScheme": "Secure",
    "sourcePort": 443
  },
  { 
    "name": "__Host-GMAIL_SCH_GML",
    "value": "1",
    "domain": "mail.google.com",
    "path": "/",
    "expires": 1689779570.001613,
    "size": 21,
    "httpOnly": true,
    "secure": true,
    "session": false,
    "sameSite": "Lax",
    "sameParty": false,
    "sourceScheme": "Secure",
    "sourcePort": 443
  },
  {
    "name": "__Secure-1PSID",
    "value": "XwhDtn-ISXKJ7C4mU7qOQ79KDIKGHyKaRtu6VulZIzPQPHHxX9klXQxgHFigBmPA1j-2WA.",
    "domain": ".google.com",
    "path": "/",
    "expires": 1750259568.241814,
    "size": 85,
    "httpOnly": true,
    "secure": true,
    "session": false,
    "sameParty": true,
    "sourceScheme": "Secure",
    "sourcePort": 443
  },
  {
    "name": "SID",
    "value": "XwhDtn-ISXKJ7C4mU7qOQ79KDIKGHyKaRtu6VulZIzPQPHHxP7GzNAuizrkUlhK0g8E6JQ.",
    "domain": ".google.com",
    "path": "/",
    "expires": 1750259568.241746,
    "size": 74,
    "httpOnly": false,
    "secure": false,
    "session": false,
    "sameParty": false,
    "sourceScheme": "Secure",
    "sourcePort": 443
  },
  {
    "name": "COMPASS",
    "value": "gmail=CqMBAAlriVfsdBPVT2B-8xW4yg79Xxxibb12bjWdSOI2SZmUKDuaf46TQFZ_C0hfLr0OQQNBOcFx2jzSWM8wftqY_lzuDoTnSdxklkb8n0aXqJBN68RzwioU6cdqvxdiNxcA6MdnWXKJi_hDuvU5oKttWpiTjll8KzGbmTcsMdlX49odfmTD2tAYG6qzNfIdWd8ooPflI9vqufmPEiM1i4IdtHfObRDa_MGkBhrKAQAJa4lXGxdum6xk9MmA5tSmU_iNv0XWF4vsSs0r61TgmnD4ecL8JskJyipvLvqDIRWKvMZFD-5Mi65WxmtMOvZ2Bq1SzWQjsatJIaqTNhe0qzFshJzNv-uKZVPiUHXDd5_833bEKBZ975Bcv46TugDeV19NYIDn351I1mxjmWbRG_Vjc19gELyxXdfl-gSgGNLpAN7Yt99lFr-QnvHtxvj9eqZIOVS2wGzscCnlCKrE8E-TJsZSNyGK6G9meIYqmacIunYUa1WPtCUwAQ:gmail_ps=CpABAAlriVd7UDpeS1eQ7WW2qPpexAAmqzNMaQ3EBKQY17VrBHN1xKRHiMP8AdUlqq427xm7UPwc7sY2IZSqpvTxv_OJVomN0uRknhRXiNGbVzlLc8CJIVTpclUT8KNyANgNjkJKHCZJm3BBCPaaVs3uPTBo7FQZOfZJN9ZpZyDJJf45CiLu_FDFu3F6mrYGUcFwEIz9waQGGsYBAAlriVevVrxg1EjuNoTTiuD6AW9WeaBB5L5VhTvoW-9ovuRqaqYy3wHsWI4sT5KYcXuxxs8A4q77c_ETLk5dTl_mbKbovzbrJX6LVNvZb2z3cKBak69hQfKEmntSiz83F-_9mb_GRT7rGZYAE4led0xpbT_N2f45yzLAQk7g3GIXmGuhylKEwM62x9_52JOp4KA53YGjkAzHXzk1bnsMUaBoPujhxU7vBsZuk1UNoMW76OBDJHHTIQdLaf5jLWYbkNtzxH4OMAE",
    "domain": "mail.google.com",
    "path": "/mail",
    "expires": 1688051569.424639,
    "size": 1004,
    "httpOnly": true,
    "secure": true,
    "session": false,
    "sameSite": "None",
    "sameParty": false,
    "sourceScheme": "Secure",
    "sourcePort": 443
  },
  {
    "name": "__Secure-OSID",
    "value": "XwhDtgUsSAt7Kp5wQIbeQosse1p9mgncdXgnveAJq06TC3oP2xRU0QU0mHESlIkSIACqkg.",
    "domain": "mail.google.com",
    "path": "/",
    "expires": 1750259568.516682,
    "size": 84,
    "httpOnly": true,
    "secure": true,
    "session": false,
    "sameSite": "None",
    "sameParty": false,
    "sourceScheme": "Secure",
    "sourcePort": 443
  },
  {
    "name": "__Secure-3PSID",
    "value": "XwhDtn-ISXKJ7C4mU7qOQ79KDIKGHyKaRtu6VulZIzPQPHHxkSUCTTpDDI-RG8F5WCpH4Q.",
    "domain": ".google.com",
    "path": "/",
    "expires": 1750259568.241924,
    "size": 85,
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

    await page.goto("https://www.gmail.com");
    //await page.type("#identifierId", "aymandemaroc@gmail.com", { delay: 150 });
    //await page.click("#identifierNext");
    await page.waitForTimeout(2000);

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
