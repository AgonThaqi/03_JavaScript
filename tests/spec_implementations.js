const {openBrowser, goto} = require("taiko")

step("hello world", async () => {
    await openBrowser({headless: true})
    await goto("https://agonthaqi.github.io/03_JavaScript/")
})
