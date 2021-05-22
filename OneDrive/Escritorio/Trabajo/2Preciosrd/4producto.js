const { Builder, By, Key, until, } = require('selenium-webdriver')
const assert = require('assert')


describe('Productos', function() {
  this.timeout(500000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
   await driver.quit();
  })  
  it('Productos', async function() {
    await driver.get("https://preciosrd.do/items/preciosdr")
    await driver.manage().window().maximize();
    await driver.navigate().refresh();
    await driver.manage().setTimeouts( { implicit: 30000 } ) 
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button/div`)), 50000)
    await driver.findElement(By.xpath(`//button/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("(//button[@type='button'])[20]")), 30000);
    await driver.findElement(By.xpath("(//button[@type='button'])[20]")).click();
    await driver.wait(until.elementsLocated(By.xpath("//input[@name='ion-input-0']")),)
    await driver.findElement(By.name("ion-input-0")).sendKeys("carne de res california")
    await driver.findElement(By.css(".card-col:nth-child(1) #showMore strong")).click()
    await driver.manage().window().setRect({ width: 414, height: 846 });
    await driver.findElement(By.id("closeIcon")).click()
    await driver.wait(until.elementLocated(By.xpath("(//ion-fab-button[@id='btnAdd']/ion-icon)[1]")), 20000)
    await driver.findElement(By.xpath("(//ion-fab-button[@id='btnAdd']/ion-icon)[1]")).click()

  })
})