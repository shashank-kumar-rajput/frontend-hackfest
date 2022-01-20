
const {Builder, By, Key, until} = require("selenium-webdriver");
const username="Himanch"
const password="Hello@123"
async function login(){
    let driver=await new Builder().forBrowser("chrome").build();
    await driver.get("https://inrecord.netlify.app/");
    await driver.findElement(By.xpath('//*[@id="root"]/div/nav/ul/li/a')).click();
    await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div/div/div/form/div[2]/input')).sendKeys(username,Key.RETURN);
    await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div/div/div/form/div[4]/input')).sendKeys(password,Key.RETURN);
    await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div/div/div/form/button')).click()
}
login()