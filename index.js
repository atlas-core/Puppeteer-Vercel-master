const app = require("express")();
const puppeteer = require("puppeteer");






app.get("/", async (req, res) => {

  
/* const cookies = [
  {
    "name": "__Secure-3PSIDCC",
    "value": "AP8dLty-csTSdBEphMf0tByPOmaD0lgQxBDtE2GDOAhw9Calq65PQH4r-LkpDaN8rgfD7CxJNQ",
    "domain": ".google.com",
    "path": "/",
    "expires": 1718794134.908307,
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
    "value": "sidts-CjEBLFra0h1OW8JvtN6KbNeZ90fgELND70VQ81IGlNq0l0xDgybqtKUeTUJJwElHD0r8EAA",
    "domain": ".google.com",
    "path": "/",
    "expires": 1718794131.72947,
    "size": 93,
    "httpOnly": true,
    "secure": true,
    "session": false,
    "sameParty": true,
    "sourceScheme": "Secure",
    "sourcePort": 443
  },
  {
    "name": "NID",
    "value": "511=qspo_XSZ83JwuZNBUHR8BVXxVEmCT92k5t3OTokkSh8pb1CEcACJclg0_geFT1Yo8jsSiGv9VV7VjKJilrt0dhUpMR9KXlSlQlrSWj61zIF5GLXIlhf_OJwkgym7Tji0zaCYVOOgYHoExLYp4_1-sUs8gsYo-xWerDHuLrxIkGFPOizj390wCV9TV6voiIT6ev03mOvGUW71v2IZKX9E44pyymWR428B_qUfl-NxG4jpr85qlGmcg-tHI_iQC1CWSK32F5At",
    "domain": ".google.com",
    "path": "/",
    "expires": 1703069329.515658,
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
    "expires": 1689850127.423117,
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
    "expires": 1689850127.423026,
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
    "value": "sidts-CjEBLFra0h1OW8JvtN6KbNeZ90fgELND70VQ81IGlNq0l0xDgybqtKUeTUJJwElHD0r8EAA",
    "domain": ".google.com",
    "path": "/",
    "expires": 1718794131.729536,
    "size": 93,
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
    "value": "XwhDtpgRwc3WW0aIYkRtE63yS0ymk4xGQv_LxQKQAZh8vN0COWLypHwQuWTnr0uQvOEaHA.",
    "domain": "mail.google.com",
    "path": "/",
    "expires": 1750330126.083463,
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
    "value": "AP8dLtzB3VIx4MylpyWiHDJuy82SwyIy87JP7j9gYmUy7H12rCzO1HROrPxQE0F-rFR3L5O0uQ",
    "domain": ".google.com",
    "path": "/",
    "expires": 1718794134.908205,
    "size": 90,
    "httpOnly": true,
    "secure": true,
    "session": false,
    "sameParty": false,
    "sourceScheme": "Secure",
    "sourcePort": 443
  },
  {
    "name": "SIDCC",
    "value": "AP8dLtzNeSteq_pQJundTiZNACegDA5MRYusKISOz_acTyv_3urU_42LFxZ_OiTPPJrrDKlD6Q",
    "domain": ".google.com",
    "path": "/",
    "expires": 1718794134.908002,
    "size": 79,
    "httpOnly": false,
    "secure": false,
    "session": false,
    "sameParty": false,
    "sourceScheme": "Secure",
    "sourcePort": 443
  },
  {
    "name": "SEARCH_SAMESITE",
    "value": "CgQIyJgB",
    "domain": ".google.com",
    "path": "/",
    "expires": 1702810129.51559,
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
    "value": "3EawhNGDSoKS2T7l/Auqw2cYuppAsN16sU",
    "domain": ".google.com",
    "path": "/",
    "expires": 1750330125.861465,
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
    "value": "3EawhNGDSoKS2T7l/Auqw2cYuppAsN16sU",
    "domain": ".google.com",
    "path": "/",
    "expires": 1750330125.861367,
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
    "value": "2Y3GgJn7hUHOKF6N/AicI4sR3j4JoSUaKW",
    "domain": ".google.com",
    "path": "/",
    "expires": 1750330125.861324,
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
    "value": "AUJWG3KqepAEmFLvJ",
    "domain": ".google.com",
    "path": "/",
    "expires": 1750330125.861281,
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
    "value": "3EawhNGDSoKS2T7l/Auqw2cYuppAsN16sU",
    "domain": ".google.com",
    "path": "/",
    "expires": 1750330125.861418,
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
    "value": "A8IwSasLmXuPoUWgx",
    "domain": ".google.com",
    "path": "/",
    "expires": 1750330125.861235,
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
    "expires": 1689850127.423189,
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
    "value": "XwhDtobqC9fAxf08l6VtIFoSdL11jiwEY1iD8Obgz9vQTzHl_HbCvql9mx4c5guGxnyq9Q.",
    "domain": ".google.com",
    "path": "/",
    "expires": 1750330125.860976,
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
    "value": "XwhDtobqC9fAxf08l6VtIFoSdL11jiwEY1iD8Obgz9vQTzHl98542sgN4Ys3bMUqZqMywQ.",
    "domain": ".google.com",
    "path": "/",
    "expires": 1750330125.860925,
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
    "value": "gmail=CqMBAAlriVf14ubeRhvJkSlJwC4Q78QJWyBFHWoYYZwRsA2TlsyD22Ce1eYUWTAU_3YbG2fLkf0hn3udcZJVJ1KysDSFMc2yYwD28e7GHV5uIxJdZoDd_Ia83bSD1QZpYv_H0yKdZYaRvckpNj-NGg2uKXHxNR5WRTvxhcyGSlYs9UQaI8QjtzqmDgiQEyltw-bU0DgNoWnXC9lRvBdLZlYqevrFeBD9o8akBhrKAQAJa4lXKc2LimMD8UynYP-7c4o2GFWtpdXH8cCym_-n4t5BC389-4Xdjci0IF5H4bY0zcT00uDsSlWIeAlVBWHwsMq1aoY3sP5jEjcAT4jcVwq99eGdyHk8SwK1zaLz7oKVu8CQ2Pzr-Qmxh7nLpraLxiExH8b1RL0XjPtskSiAy_hDnsE66xau3u98T42DB-S1si_pJYZzsFypxdyZ0J1z14EqkqnIWzMaPy2L85HL_Y2SpXZr1oqiMLAj4xz0HM1QdcnUMTmUDN8wAQ:gmail_ps=CpABAAlriVd7UDpeS1eQ7WW2qPpexAAmqzNMaQ3EBKQY17VrBHN1xKRHiMP8AdUlqq427xm7UPwc7sY2IZSqpvTxv_OJVomN0uRknhRXiNGbVzlLc8CJIVTpclUT8KNyANgNjkJKHCZJm3BBCPaaVs3uPTBo7FQZOfZJN9ZpZyDJJf45CiLu_FDFu3F6mrYGUcFwENSkxqQGGsYBAAlriVd1RSP-Lqfb4Us7Xr-PQIOOAvQaNx8HHgbFG0Eq2lUEK6uFhfwB-WI60tBkJt6sLCthNzdVhxxef5QM3pdSyWMCTJYSc6V7K1JAMT-fiqMp8mG3-UQkl_7SUyUVQ88GjhPWEM50bxyPUQ4BCNg4oRCtN8DFaqCH0ZTNzfZcWJ3HONC--ZSAoDVxoSjpAkYhyeAAED_GW2zlOHgr6-1gs9ToYekksIbdAobRW4f2OLLexiNOn4YvhjsfIheC9KNomvvGMAE",
    "domain": "mail.google.com",
    "path": "/mail",
    "expires": 1688122126.947481,
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
    "value": "XwhDtpgRwc3WW0aIYkRtE63yS0ymk4xGQv_LxQKQAZh8vN0CMTRd4WA0IEsNVJhio47pIA.",
    "domain": "mail.google.com",
    "path": "/",
    "expires": 1750330126.08355,
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
    "value": "XwhDtobqC9fAxf08l6VtIFoSdL11jiwEY1iD8Obgz9vQTzHl4AwttK-0Alj6HWoSimz2SQ.",
    "domain": ".google.com",
    "path": "/",
    "expires": 1750330125.861055,
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
    "value": "AF6bupO_Z9ySg1rIkdH_5flJTNsdPPMmIg",
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
 */
  

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
   /*  for (const cookie of cookies) {
      await page.setCookie(cookie);
    }    
 */
  
 
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
