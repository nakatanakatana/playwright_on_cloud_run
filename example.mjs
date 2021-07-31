import playwright from 'playwright-core';

// const endpointURL = "ws://localhost:4444"
const endpointURL = "wss://playwright-chrome-xxxxxxxxxx-uc.a.run.app"
console.log(endpointURL)
const browser = await playwright.chromium.connect({ wsEndpoint: endpointURL })
console.log('browser');
const page = await browser.newPage();
console.log('page');
await page.goto('http://zenn.dev/')
console.log('goto')
await page.screenshot({ path: 'screenshot.png' })
console.log('screenshot')
browser.close()
