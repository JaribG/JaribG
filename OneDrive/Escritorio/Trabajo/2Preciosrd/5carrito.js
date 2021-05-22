const { Builder, By, Key, until, } = require('selenium-webdriver')
const assert = require("assert");
const { elementLocated } = require('selenium-webdriver/lib/until');

describe('Carrito', function() {
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
    it('Carrito', async function() {


      try {

        await driver.get("https://preciosrd.do")
        await driver.manage().setTimeouts( { implicit: 10000 } );
        driver.manage().window().maximize();
        await driver.wait(until.elementsLocated(By.name("ion-input-0")), 30000)
        await driver.findElement(By.name("ion-input-0")).click()
        await driver.wait(until.elementsLocated(By.name("ion-input-0")), 30000)
        await driver.findElement(By.name("ion-input-0")).click()
        await driver.wait(until.elementsLocated(By.css(".virtual-item:nth-child(1) > .card-col:nth-child(1) #btnAdd > .md")), 80000)
        await driver.findElement(By.css(".virtual-item:nth-child(1) > .card-col:nth-child(1) #btnAdd > .md")).click()
        await driver.wait(until.elementsLocated(By.css(".virtual-item:nth-child(1) > .card-col:nth-child(2) #btnAdd > .md")), 80000)
        await driver.findElement(By.css(".virtual-item:nth-child(1) > .card-col:nth-child(2) #btnAdd > .md")).click()
        var items_inicio =  await driver.findElement(By.xpath("//div[@id=\'total_amount\']/span[3]")).getText()
    
         var enlaze ="RD" + items_inicio
         console.log(enlaze)
    
        await driver.manage().window().setRect({ width: 414, height: 846 });
        await driver.navigate().refresh();
        await driver.wait(until.elementsLocated(By.css(".virtual-item:nth-child(1) > .card-col:nth-child(1) #btnAdd > .md")), 80000)
        await driver.findElement(By.css(".virtual-item:nth-child(1) > .card-col:nth-child(1) #btnAdd > .md")).click()
        await driver.wait(until.elementLocated(By.css(`.md:nth-child(3) > .shopping_cart`)), 50000)
        await driver.findElement(By.css(`.md:nth-child(3) > .shopping_cart`)).click()
        await driver.wait(until.elementLocated(By.css(`app-header:nth-child(2) > #header > #cart strong`)), 50000)
        await driver.findElement(By.css(`app-header:nth-child(2) > #header > #cart strong`)).click()
        assert(await driver.findElement(By.css(`app-header:nth-child(2) > #header > #cart strong`)).getText() == enlaze)  
        await driver.manage().window().maximize();
        await driver.wait(until.elementsLocated(By.xpath("//ion-segment-button[@value='PRO']")), 30000)
        await driver.findElement(By.xpath("//ion-segment-button[@value='PRO']")).click()
        await driver.findElement(By.xpath("//ion-segment-button[@value='PRO']")).click()
        assert(await driver.findElement(By.css(".paragraphFontColor")).getText() == "Más barato")
        await driver.findElement(By.xpath("//ion-segment-button[@value='COM']")).click()
        await driver.findElement(By.xpath("(//div[@id=\'header\']/app-header-footer-main/div/ion-grid/ion-row/ion-col/ion-select)[3]")).click()
        await driver.wait(until.elementsLocated(By.xpath("//button/div/div")), 30000)
        await driver.findElement(By.xpath("//button/div/div")).click()
        await driver.wait(until.elementsLocated(By.xpath("(//button[@type=\'button\'])[5]")), 30000)
        await driver.findElement(By.xpath("(//button[@type=\'button\'])[5]")).click()
        await driver.findElement(By.xpath("(//div[@id=\'header\']/app-header-footer-main/div/ion-grid/ion-row/ion-col/ion-select)[3]")).click()
        await driver.wait(until.elementsLocated(By.xpath("//button[2]/div/div")), 30000)
        await driver.findElement(By.xpath("//button[2]/div/div")).click()
        await driver.wait(until.elementsLocated(By.xpath("(//button[@type=\'button\'])[5]")), 30000)
        await driver.findElement(By.xpath("(//button[@type=\'button\'])[5]")).click()
        await driver.findElement(By.xpath("(//div[@id=\'header\']/app-header-footer-main/div/ion-grid/ion-row/ion-col/ion-select)[3]")).click()
        await driver.wait(until.elementsLocated(By.xpath("//button[3]/div/div")), 30000)
        await driver.findElement(By.xpath("//button[3]/div/div")).click()
        await driver.wait(until.elementsLocated(By.xpath("(//button[@type=\'button\'])[5]")), 30000)
        await driver.findElement(By.xpath("(//button[@type=\'button\'])[5]")).click()


        await driver.wait(until.elementsLocated(By.css("app-header-footer-main:nth-child(3) .md:nth-child(2) > .select")), 30000)
        await driver.findElement(By.css("app-header-footer-main:nth-child(3) .md:nth-child(2) > .select")).click()
        await driver.wait(until.elementsLocated(By.xpath("//button/div/div")), 30000)
        await driver.findElement(By.xpath("//button/div/div")).click()
        await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000)
        await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click()

        await driver.wait(until.elementsLocated(By.xpath("(//div[@id=\'header\']/app-header-footer-main/div/ion-grid/ion-row/ion-col[3]/ion-select)[2]")), 30000)
        await driver.findElement(By.xpath("(//div[@id=\'header\']/app-header-footer-main/div/ion-grid/ion-row/ion-col[3]/ion-select)[2]")).click()       
        await driver.wait(until.elementsLocated(By.xpath("//button/div/div")), 30000)
        await driver.findElement(By.xpath("//button/div/div")).click()
        await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000)
        await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click()


      } 
      catch (error) {
        console.log(error)
      }

    })
})
