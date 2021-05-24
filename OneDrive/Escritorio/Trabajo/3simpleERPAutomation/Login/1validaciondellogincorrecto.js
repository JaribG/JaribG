const { Builder, By, Key, until, } = require('selenium-webdriver');
const assert = require('assert');
const firefox = require("selenium-webdriver/firefox");
const options = new firefox.Options();


options.setProfile("./Seleniumprueba");


describe('Simple erp', function() {
  this.timeout(500000);
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').setFirefoxOptions(options).build();
    vars = {}
  })
 // afterEach(async function() {
 //  await driver.quit();
 // })  
  it('Simple erp', async function() {
    await driver.get("https://simple-erp-299814.web.app/ventas");
    await driver.manage().window().maximize();
    await driver.manage().setTimeouts( { implicit: 60000 } );
    await driver.wait(until.elementsLocated(By.css(".firebaseui-idp-icon")), 50000);
    await driver.findElement(By.css(".firebaseui-idp-icon")).click();
    await driver.wait(until.elementsLocated(By.id("identifierId")), 50000);
    await driver.findElement(By.id("identifierId")).sendKeys("jaribg24@gmail.com");
    await driver.findElement(By.css(".VfPpkd-LgbsSe-OWXEXe-k8QpJ > .VfPpkd-RLmnJb")).click();
    await driver.wait(until.elementsLocated(By.css(".VmOpGe")), 50000);
    await driver.findElement(By.css(".VmOpGe")).click();
    await driver.wait(until.elementsLocated(By.name("password")), 50000);
    await driver.findElement(By.name("password")).click()
    await driver.findElement(By.name("password")).sendKeys("Jarib0121")
    
    })
})