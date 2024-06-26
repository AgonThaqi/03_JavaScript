const {openBrowser, goto} = require("taiko")

step("hello world", async () => {
    await openBrowser({headless: false})
    await goto("http://localhost:8080")
})
