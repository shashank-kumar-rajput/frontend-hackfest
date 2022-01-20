const {Builder, By, Key, until} = require("selenium-webdriver");
const username="Himanch"
const password="Hello@1234"
describe("Test case for login",function(){
    
    it("Successfully added the test case",async function(){
        this.timeout(0);
        let driver=await new Builder().forBrowser("chrome").build();
        await driver.get("https://inrecord.netlify.app/");
        await driver.findElement(By.xpath('//*[@id="root"]/div/nav/ul/li/a')).click();
        await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div/div/div/form/div[2]/input')).sendKeys(username,Key.RETURN);
        await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div/div/div/form/div[4]/input')).sendKeys(password,Key.RETURN);
       
       
        let elements = await driver.findElements(By.tagName('a'));
            for(let e of elements) {
                console.log(await e.getText());
            }
          
            
    }
    )
});
