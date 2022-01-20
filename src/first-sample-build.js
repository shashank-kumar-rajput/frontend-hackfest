const {Builder, By, Key, until} = require("selenium-webdriver");
const username="Himanch"
const password="Hello@123"
// const assert = require(‘assert’);

describe("Test case for login",function(){
    
        it("Successfully added the test case",async function(){
            this.timeout(0);
            let driver=await new Builder().forBrowser("chrome").build();
            await driver.get("https://inrecord.netlify.app/");
            await driver.findElement(By.xpath('//*[@id="root"]/div/nav/ul/li/a')).click();
            await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div/div/div/form/div[2]/input')).sendKeys(username,Key.RETURN);
            await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div/div/div/form/div[4]/input')).sendKeys(password,Key.RETURN);
            if(password ==='Hello@123'){
                console.log('Logged In Successfully')
            
            }else{
                throw new Error('Login Test Failed')
            }
        })        

    
    
});
