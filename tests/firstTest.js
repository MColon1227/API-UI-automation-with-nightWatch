module.exports = {
    'My first test': function (browser) {
        browser
            .url('https://www.google.com/')
            .waitForElementVisible('.gNO89b', 1000)
            .assert.title('Google')
    }
}