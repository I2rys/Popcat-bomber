//Dependencies
const Puppeteer = require("puppeteer")

//Functions
async function Main(){
    const browser = await Puppeteer.launch({ headless: false, args: ["--no-sandbox", "--disable-setuid-sandbox"] })
    const page = await browser.newPage()

    await page.goto("https://popcat.click/", { waitUntil: "domcontentloaded" })

    setInterval(async function(){
        await page.keyboard.press("a")
        await page.keyboard.press("a")
        await page.keyboard.press("a")
        await page.keyboard.press("a")
        await page.keyboard.press("a")
        await page.keyboard.press("a")
        await page.keyboard.press("a")
        await page.keyboard.press("a")
        await page.keyboard.press("a")
        await page.keyboard.press("a")
        await page.keyboard.press("a")
        await page.keyboard.press("a")
        await page.keyboard.press("a")
        await page.keyboard.press("a")
        await page.keyboard.press("a")
        await page.keyboard.press("a")
        await page.keyboard.press("a")
        await page.keyboard.press("a")
        await page.keyboard.press("a")
        await page.keyboard.press("a")
        await page.keyboard.press("a")
        await page.keyboard.press("a")
        await page.keyboard.press("a")
        await page.keyboard.press("a")
        await page.keyboard.press("a")
        await page.keyboard.press("a")
        await page.keyboard.press("a")
        await page.keyboard.press("a")
    }, 1000)
}

//Main
Main()
