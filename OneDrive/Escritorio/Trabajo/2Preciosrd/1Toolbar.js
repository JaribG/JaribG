
const { Builder, By, Key, until, } = require('selenium-webdriver')
const assert = require('assert')


describe('Toolbar', function() {
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
  it('Toolbar', async function() {
    await driver.get("https://preciosrd.do/items/preciosdr");
    //await driver.manage().window().setRect(1382, 784)
    await driver.manage().window().maximize();
    await driver.manage().setTimeouts( { implicit: 30000 } );
    await driver.wait(until.elementsLocated(By.xpath("//input[@name='ion-input-0']")), 50000)
    await driver.findElement(By.xpath("//input[@name='ion-input-0']")).click()
    await driver.wait(until.elementLocated(By.css(".md:nth-child(2) > .select")), 30000);
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click();
    await driver.wait(until.elementsLocated(By.id("alert-input-1-0")), 70000)
    await driver.findElement(By.id("alert-input-1-0")).click()
    await driver.wait(until.elementsLocated(By.xpath("(//button[@type='button'])[20]")), 30000);
    await driver.findElement(By.xpath("(//button[@type='button'])[20]")).click();
    await driver.wait(until.elementsLocated(By.xpath("//input[@name='ion-input-0']")),)
    await driver.findElement(By.name("ion-input-0")).sendKeys("carne")
    await driver.findElement(By.css(".card-col:nth-child(8) #showMore strong")).click()
    await driver.manage().window().setRect({ width: 414, height: 846 });
    await driver.findElement(By.id("closeIcon")).click()
    await driver.wait(until.elementLocated(By.xpath("(//ion-fab-button[@id='btnAdd']/ion-icon)[8]")), 20000)
    await driver.findElement(By.xpath("(//ion-fab-button[@id='btnAdd']/ion-icon)[8]")).click()
   

    await driver.manage().window().maximize();
    await driver.navigate().refresh();
    await driver.wait(until.elementsLocated(By.linkText("Ferreteria")), 20000)
    await driver.findElement(By.linkText("Ferreteria")).click()
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button/div`)), 50000)
    await driver.findElement(By.xpath(`//button/div`)).click()
    await driver.findElement(By.xpath(`//button/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("(//button[@type='button'])[15]")), 30000);
    await driver.findElement(By.xpath("(//button[@type='button'])[15]")).click();
    await driver.wait(until.elementsLocated(By.xpath("//input[@name='ion-input-0']")),)
    await driver.findElement(By.name("ion-input-0")).sendKeys("pintura")
    await driver.findElement(By.xpath("(//div[@id='showMore']/button)[5]")).click()
    await driver.manage().window().setRect({ width: 414, height: 846 });
    await driver.findElement(By.id("closeIcon")).click()
    await driver.wait(until.elementLocated(By.xpath("(//ion-fab-button[@id='btnAdd']/ion-icon)[8]")), 20000)
    await driver.findElement(By.xpath("(//ion-fab-button[@id='btnAdd']/ion-icon)[8]")).click()


    await driver.manage().window().maximize();
    await driver.navigate().refresh();
    await driver.wait(until.elementsLocated(By.linkText("Farmacia")), 20000)
    await driver.findElement(By.linkText("Farmacia")).click()
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button/div`)), 50000)
    await driver.findElement(By.xpath(`//button/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
    await driver.wait(until.elementsLocated(By.xpath("//input[@name='ion-input-0']")),)
    await driver.findElement(By.name("ion-input-0")).sendKeys("aspirina")
    await driver.findElement(By.xpath("(//div[@id='showMore']/button)[2]")).click()
    await driver.manage().window().setRect({ width: 414, height: 846 });
    await driver.findElement(By.id("closeIcon")).click()
    await driver.wait(until.elementLocated(By.xpath("(//ion-fab-button[@id='btnAdd']/ion-icon)[2]")), 20000)
    await driver.findElement(By.xpath("(//ion-fab-button[@id='btnAdd']/ion-icon)[2]")).click()

  })
})