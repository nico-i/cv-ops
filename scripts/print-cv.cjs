const puppeteer = require("puppeteer");

(async () => {
  // start the browser with at least 1024x768
  const browser = await puppeteer.launch({
    headless: true,
  });

  const languages = [
    ["en", "pdf"],
    ["de", "de/pdf"],
  ];
  const themes = ["light", "dark"];

  // create directory
  const fs = require("fs");
  const dir = "docs/cv";
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  for (const [language, path] of languages) {
    for (const theme of themes) {
      const page = await browser.newPage();

      await page.setViewport({
        width: 818,
        height: 768,
        deviceScaleFactor: 1,
      });

      await page.emulateMediaFeatures([
        {
          name: "prefers-color-scheme",
          value: theme,
        },
      ]);

      // Navigate to the webpage you want to print
      await page.goto(`http://localhost:4321/${path}`);

      const totalPage = await page.$("body");
      const boundingBox = await totalPage.boundingBox();

      await page.pdf({
        path: `docs/cv/${language}-${theme}.pdf`,
        printBackground: true,
        height: `${boundingBox.height}px`,
      });
    }
  }

  // Close the browser
  await browser.close();
})();
