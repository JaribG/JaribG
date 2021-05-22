const { Builder, By, Key, until, } = require('selenium-webdriver')
const assert = require('assert')


describe('Filtrodebusqueda', function() {
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
  it('Filtrodebusqueda', async function() {
    await driver.get("https://preciosrd.do/items/preciosdr")
    await driver.manage().window().maximize();
    //await driver.navigate().refresh();
    await driver.manage().setTimeouts( { implicit: 30000 } ) 
    await driver.wait(until.elementsLocated(By.xpath("//input[@name='ion-input-0']")), 50000)
    await driver.findElement(By.xpath("//input[@name='ion-input-0']")).click()
    await driver.wait(until.elementsLocated(By.xpath("//input[@name='ion-input-0']")), 50000)
    await driver.findElement(By.xpath("//input[@name='ion-input-0']")).click()  
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button/div`)), 50000)
    await driver.findElement(By.xpath(`//button/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("(//button[@type='button'])[20]")), 30000);
    await driver.findElement(By.xpath("(//button[@type='button'])[20]")).click();

    await driver.wait(until.elementsLocated(By.css(`.md:nth-child(2) > .select`)), 50000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[3]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[3]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("(//button[@type='button'])[20]")), 30000);
    await driver.findElement(By.xpath("(//button[@type='button'])[20]")).click();
    
    await driver.wait(until.elementsLocated(By.css(`.md:nth-child(2) > .select`)), 50000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[4]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[4]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("(//button[@type='button'])[20]")), 30000);
    await driver.findElement(By.xpath("(//button[@type='button'])[20]")).click();
    
    await driver.wait(until.elementsLocated(By.css(`.md:nth-child(2) > .select`)), 50000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[5]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[5]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("(//button[@type='button'])[20]")), 30000);
    await driver.findElement(By.xpath("(//button[@type='button'])[20]")).click();
    
    await driver.wait(until.elementsLocated(By.css(`.md:nth-child(2) > .select`)), 50000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[6]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[6]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("(//button[@type='button'])[20]")), 30000);
    await driver.findElement(By.xpath("(//button[@type='button'])[20]")).click();

    await driver.wait(until.elementsLocated(By.css(`.md:nth-child(2) > .select`)), 50000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[7]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[7]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("(//button[@type='button'])[20]")), 30000);
    await driver.findElement(By.xpath("(//button[@type='button'])[20]")).click();
    
    await driver.wait(until.elementsLocated(By.css(`.md:nth-child(2) > .select`)), 50000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[8]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[8]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("(//button[@type='button'])[20]")), 30000);
    await driver.findElement(By.xpath("(//button[@type='button'])[20]")).click();
    
    await driver.wait(until.elementsLocated(By.css(`.md:nth-child(2) > .select`)), 50000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[9]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[9]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("(//button[@type='button'])[20]")), 30000);
    await driver.findElement(By.xpath("(//button[@type='button'])[20]")).click();
    
    await driver.wait(until.elementsLocated(By.css(`.md:nth-child(2) > .select`)), 50000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[10]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[10]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("(//button[@type='button'])[20]")), 30000);
    await driver.findElement(By.xpath("(//button[@type='button'])[20]")).click();
    
    await driver.wait(until.elementsLocated(By.css(`.md:nth-child(2) > .select`)), 50000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[11]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[11]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("(//button[@type='button'])[20]")), 30000);
    await driver.findElement(By.xpath("(//button[@type='button'])[20]")).click();
    
    await driver.wait(until.elementsLocated(By.css(`.md:nth-child(2) > .select`)), 50000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[12]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[12]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("(//button[@type='button'])[20]")), 30000);
    await driver.findElement(By.xpath("(//button[@type='button'])[20]")).click();
    
    await driver.wait(until.elementsLocated(By.css(`.md:nth-child(2) > .select`)), 50000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[13]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[13]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("(//button[@type='button'])[20]")), 30000);
    await driver.findElement(By.xpath("(//button[@type='button'])[20]")).click();

    await driver.wait(until.elementsLocated(By.css(`.md:nth-child(2) > .select`)), 50000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[14]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[14]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("(//button[@type='button'])[20]")), 30000);
    await driver.findElement(By.xpath("(//button[@type='button'])[20]")).click();
    
    await driver.wait(until.elementsLocated(By.css(`.md:nth-child(2) > .select`)), 50000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[15]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[15]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("(//button[@type='button'])[20]")), 30000);
    await driver.findElement(By.xpath("(//button[@type='button'])[20]")).click();
    
    await driver.wait(until.elementsLocated(By.css(`.md:nth-child(2) > .select`)), 50000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[16]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[16]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("(//button[@type='button'])[20]")), 30000);
    await driver.findElement(By.xpath("(//button[@type='button'])[20]")).click();
    
   
//farmacia------------------------------------------------------------------------------------------------------------


    await driver.wait(until.elementsLocated(By.linkText("Farmacia")), 20000)
    await driver.findElement(By.linkText("Farmacia")).click()
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button/div`)), 50000)
    await driver.findElement(By.xpath(`//button/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 50000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();

    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[3]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[3]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 50000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();

    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[4]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[4]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
        
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[5]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[5]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
        
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[6]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[6]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
        
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[7]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[7]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
        
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[8]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[8]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
        
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[9]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[9]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
        
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[10]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[10]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();

        
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[11]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[11]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click(); 

    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[12]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[12]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
        
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[13]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[13]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();

        
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[14]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[14]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();

        
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[15]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[15]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();

        
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[16]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[16]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
        
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[17]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[17]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();

        
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[18]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[18]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
        
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[20]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[20]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
        
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[21]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[21]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
        
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[22]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[22]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
        
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[23]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[23]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
        
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[24]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[24]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
        
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[25]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[25]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
        
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[26]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[26]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
        
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[27]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[27]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
        
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[28]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[28]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
        
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[29]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[29]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
        
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[30]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[30]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
        
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[31]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[31]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
        
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[32]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[32]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
        
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[33]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[33]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
        
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[34]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[34]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
        
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[35]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[35]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
        
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[36]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[36]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
        
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[37]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[37]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
        
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[38]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[38]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
        
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[39]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[39]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
        
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[40]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[40]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
        
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[41]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[41]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
        
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[42]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[42]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
        
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[43]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[43]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click(); 

    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[44]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[44]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
        
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[45]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[45]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
        
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[46]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[46]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
        
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[47]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[47]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
        
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[48]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[48]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
        
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[49]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[49]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
        
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[50]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[50]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click(); 
    
//Ferreteria-----------------------------------------------------------------------------------------------------------

await driver.wait(until.elementsLocated(By.linkText("Ferreteria")), 20000)
    await driver.findElement(By.linkText("Ferreteria")).click()
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button/div`)), 50000)
    await driver.findElement(By.xpath(`//button/div`)).click()
    await driver.findElement(By.xpath(`//button/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();

    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[3]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[3]/div/div`)).click()
    await driver.findElement(By.xpath(`//button[3]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();

    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[4]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[4]/div/div`)).click()
    await driver.findElement(By.xpath(`//button[4]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();

    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[5]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[5]/div/div`)).click()
    await driver.findElement(By.xpath(`//button[5]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();

    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[6]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[6]/div/div`)).click()
    await driver.findElement(By.xpath(`//button[6]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();

    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[7]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[7]/div/div`)).click()
    await driver.findElement(By.xpath(`//button[7]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();

    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[8]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[8]/div/div`)).click()
    await driver.findElement(By.xpath(`//button[8]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();

    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[9]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[9]/div/div`)).click()
    await driver.findElement(By.xpath(`//button[9]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();

    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[10]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[10]/div/div`)).click()
    await driver.findElement(By.xpath(`//button[10]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();

    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[11]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[11]/div/div`)).click()
    await driver.findElement(By.xpath(`//button[11]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();

    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[12]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[12]/div/div`)).click()
    await driver.findElement(By.xpath(`//button[12]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();

    await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[13]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[13]/div/div`)).click()
    await driver.findElement(By.xpath(`//button[13]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();

    // Por comercios---------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------
 // Meracado
  await driver.wait(until.elementsLocated(By.linkText("Mercados")), 20000)
    await driver.findElement(By.linkText("Mercados")).click() 
    await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button/div`)), 50000)
    await driver.findElement(By.xpath(`//button/div`)).click()
    await driver.findElement(By.xpath(`//button/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("(//button[@type='button'])[20]")), 30000);
    await driver.findElement(By.xpath("(//button[@type='button'])[20]")).click();
    await driver.wait(until.elementsLocated(By.css(".md:nth-child(3) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(3) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button/div/div`)).click()
    await driver.findElement(By.xpath(`//button/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click()

    await driver.wait(until.elementsLocated(By.css(".md:nth-child(3) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(3) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[2]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[2]/div/div`)).click()
    await driver.findElement(By.xpath(`//button[2]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click()

    await driver.wait(until.elementsLocated(By.css(".md:nth-child(3) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(3) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[3]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[3]/div/div`)).click()
    await driver.findElement(By.xpath(`//button[3]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click()

    await driver.wait(until.elementsLocated(By.css(".md:nth-child(3) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(3) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[4]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[4]/div/div`)).click()
    await driver.findElement(By.xpath(`//button[4]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click()

    await driver.wait(until.elementsLocated(By.css(".md:nth-child(3) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(3) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[5]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[5]/div/div`)).click()
    await driver.findElement(By.xpath(`//button[5]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click()

    await driver.wait(until.elementsLocated(By.css(".md:nth-child(3) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(3) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[6]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[6]/div/div`)).click()
    await driver.findElement(By.xpath(`//button[6]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click()

    await driver.wait(until.elementsLocated(By.css(".md:nth-child(3) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(3) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[7]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[7]/div/div`)).click()
    await driver.findElement(By.xpath(`//button[7]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click()

    await driver.wait(until.elementsLocated(By.css(".md:nth-child(3) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(3) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[8]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[8]/div/div`)).click()
    await driver.findElement(By.xpath(`//button[8]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click()

    await driver.wait(until.elementsLocated(By.css(".md:nth-child(3) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(3) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[9]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[9]/div/div`)).click()
    await driver.findElement(By.xpath(`//button[9]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click()

    await driver.wait(until.elementsLocated(By.css(".md:nth-child(3) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(3) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[10]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[10]/div/div`)).click()
    await driver.findElement(By.xpath(`//button[10]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click()

    await driver.wait(until.elementsLocated(By.css(".md:nth-child(3) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(3) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[11]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[11]/div/div`)).click()
    await driver.findElement(By.xpath(`//button[11]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click()

    await driver.wait(until.elementsLocated(By.css(".md:nth-child(3) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(3) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[12]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[12]/div/div`)).click()
    await driver.findElement(By.xpath(`//button[12]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click()

    await driver.wait(until.elementsLocated(By.css(".md:nth-child(3) > .select")), 30000)
    await driver.findElement(By.css(".md:nth-child(3) > .select")).click()
    await driver.wait(until.elementsLocated(By.xpath(`//button[13]/div/div`)), 50000)
    await driver.findElement(By.xpath(`//button[13]/div/div`)).click()
    await driver.findElement(By.xpath(`//button[13]/div/div`)).click()
    await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
    await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click()  

  // Ferreteria
  await driver.wait(until.elementsLocated(By.linkText("Ferreteria")), 20000)
  await driver.findElement(By.linkText("Ferreteria")).click()
  await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 40000)
  await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
  await driver.wait(until.elementsLocated(By.xpath(`//button/div/div`)), 50000)
  await driver.findElement(By.xpath(`//button/div/div`)).click()
  await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 70000);
  await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();

  await driver.wait(until.elementsLocated(By.css(".md:nth-child(3) > .select")), 30000)
  await driver.findElement(By.css(".md:nth-child(3) > .select")).click()
  await driver.wait(until.elementsLocated(By.xpath(`//button/div/div`)), 50000)
  await driver.findElement(By.xpath(`//button/div/div`)).click()
  await driver.findElement(By.xpath(`//button/div/div`)).click()
  await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
  await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click() 
  
  await driver.wait(until.elementsLocated(By.css(".md:nth-child(3) > .select")), 30000)
  await driver.findElement(By.css(".md:nth-child(3) > .select")).click()
  await driver.wait(until.elementsLocated(By.xpath(`//button[2]/div/div`)), 50000)
  await driver.findElement(By.xpath(`//button[2]/div/div`)).click()
  await driver.findElement(By.xpath(`//button[2]/div/div`)).click()
  await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
  await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click() 

  await driver.wait(until.elementsLocated(By.css(".md:nth-child(3) > .select")), 30000)
  await driver.findElement(By.css(".md:nth-child(3) > .select")).click()
  await driver.wait(until.elementsLocated(By.xpath(`//button[3]/div/div`)), 50000)
  await driver.findElement(By.xpath(`//button[3]/div/div`)).click()
  await driver.findElement(By.xpath(`//button[3]/div/div`)).click()
  await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
  await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click() 
    
  await driver.wait(until.elementsLocated(By.css(".md:nth-child(3) > .select")), 30000)
  await driver.findElement(By.css(".md:nth-child(3) > .select")).click()
  await driver.wait(until.elementsLocated(By.xpath(`//button[4]/div/div`)), 50000)
  await driver.findElement(By.xpath(`//button[4]/div/div`)).click()
  await driver.findElement(By.xpath(`//button[4]/div/div`)).click()
  await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
  await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click()
    
  await driver.wait(until.elementsLocated(By.css(".md:nth-child(3) > .select")), 30000)
  await driver.findElement(By.css(".md:nth-child(3) > .select")).click()
  await driver.wait(until.elementsLocated(By.xpath(`//button[5]/div/div`)), 50000)
  await driver.findElement(By.xpath(`//button[5]/div/div`)).click()
  await driver.findElement(By.xpath(`//button[5]/div/div`)).click()
  await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
  await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click()
    
  await driver.wait(until.elementsLocated(By.css(".md:nth-child(3) > .select")), 30000)
  await driver.findElement(By.css(".md:nth-child(3) > .select")).click()
  await driver.wait(until.elementsLocated(By.xpath(`//button[6]/div/div`)), 50000)
  await driver.findElement(By.xpath(`//button[6]/div/div`)).click()
  await driver.findElement(By.xpath(`//button[6]/div/div`)).click()
  await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
  await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click()
    
  await driver.wait(until.elementsLocated(By.css(".md:nth-child(3) > .select")), 30000)
  await driver.findElement(By.css(".md:nth-child(3) > .select")).click()
  await driver.wait(until.elementsLocated(By.xpath(`//button[7]/div/div`)), 50000)
  await driver.findElement(By.xpath(`//button[7]/div/div`)).click()
  await driver.findElement(By.xpath(`//button[7]/div/div`)).click()
  await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
  await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click()
    
  await driver.wait(until.elementsLocated(By.css(".md:nth-child(3) > .select")), 30000)
  await driver.findElement(By.css(".md:nth-child(3) > .select")).click()
  await driver.wait(until.elementsLocated(By.xpath(`//button[8]/div/div`)), 50000)
  await driver.findElement(By.xpath(`//button[8]/div/div`)).click()
  await driver.findElement(By.xpath(`//button[8]/div/div`)).click()
  await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
  await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click()
    
  await driver.wait(until.elementsLocated(By.css(".md:nth-child(3) > .select")), 30000)
  await driver.findElement(By.css(".md:nth-child(3) > .select")).click()
  await driver.wait(until.elementsLocated(By.xpath(`//button[9]/div/div`)), 50000)
  await driver.findElement(By.xpath(`//button[9]/div/div`)).click()
  await driver.findElement(By.xpath(`//button[9]/div/div`)).click()
  await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
  await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click()
    
  await driver.wait(until.elementsLocated(By.css(".md:nth-child(3) > .select")), 30000)
  await driver.findElement(By.css(".md:nth-child(3) > .select")).click()
  await driver.wait(until.elementsLocated(By.xpath(`//button[10]/div/div`)), 50000)
  await driver.findElement(By.xpath(`//button[10]/div/div`)).click()
  await driver.findElement(By.xpath(`//button[10]/div/div`)).click()
  await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
  await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click()
    
  await driver.wait(until.elementsLocated(By.css(".md:nth-child(3) > .select")), 30000)
  await driver.findElement(By.css(".md:nth-child(3) > .select")).click()
  await driver.wait(until.elementsLocated(By.xpath(`//button[11]/div/div`)), 50000)
  await driver.findElement(By.xpath(`//button[11]/div/div`)).click()
  await driver.findElement(By.xpath(`//button[11]/div/div`)).click()
  await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
  await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click()
    
  await driver.wait(until.elementsLocated(By.css(".md:nth-child(3) > .select")), 30000)
  await driver.findElement(By.css(".md:nth-child(3) > .select")).click()
  await driver.wait(until.elementsLocated(By.xpath(`//button[12]/div/div`)), 50000)
  await driver.findElement(By.xpath(`//button[12]/div/div`)).click()
  await driver.findElement(By.xpath(`//button[12]/div/div`)).click()
  await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
  await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click()
    
  await driver.wait(until.elementsLocated(By.css(".md:nth-child(3) > .select")), 30000)
  await driver.findElement(By.css(".md:nth-child(3) > .select")).click()
  await driver.wait(until.elementsLocated(By.xpath(`//button[13]/div/div`)), 50000)
  await driver.findElement(By.xpath(`//button[13]/div/div`)).click()
  await driver.findElement(By.xpath(`//button[13]/div/div`)).click()
  await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
  await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click()
    
  await driver.wait(until.elementsLocated(By.css(".md:nth-child(3) > .select")), 30000)
  await driver.findElement(By.css(".md:nth-child(3) > .select")).click()
  await driver.wait(until.elementsLocated(By.xpath(`//button[14]/div/div`)), 50000)
  await driver.findElement(By.xpath(`//button[14]/div/div`)).click()
  await driver.findElement(By.xpath(`//button[14]/div/div`)).click()
  await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
  await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click()
    
  await driver.wait(until.elementsLocated(By.css(".md:nth-child(3) > .select")), 30000)
  await driver.findElement(By.css(".md:nth-child(3) > .select")).click()
  await driver.wait(until.elementsLocated(By.xpath(`//button[15]/div/div`)), 50000)
  await driver.findElement(By.xpath(`//button[15]/div/div`)).click()
  await driver.findElement(By.xpath(`//button[15]/div/div`)).click()
  await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
  await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click()  

//---------------------------------------------------------------------------------------------------------------
// Farmacia 

await driver.wait(until.elementsLocated(By.linkText("Farmacia")), 20000)
await driver.findElement(By.linkText("Farmacia")).click()
await driver.wait(until.elementsLocated(By.css(".md:nth-child(2) > .select")), 30000)
await driver.findElement(By.css(".md:nth-child(2) > .select")).click()
await driver.wait(until.elementsLocated(By.xpath(`//button/div`)), 50000)
await driver.findElement(By.xpath(`//button/div`)).click()
await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 50000);
await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click()

await driver.wait(until.elementsLocated(By.css(".md:nth-child(3) > .select")), 30000)
await driver.findElement(By.css(".md:nth-child(3) > .select")).click()
await driver.wait(until.elementsLocated(By.xpath(`//button/div/div`)), 50000)
await driver.findElement(By.xpath(`//button/div/div`)).click()
await driver.findElement(By.xpath(`//button/div/div`)).click()
await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click()

await driver.wait(until.elementsLocated(By.css(".md:nth-child(3) > .select")), 30000)
await driver.findElement(By.css(".md:nth-child(3) > .select")).click()
await driver.wait(until.elementsLocated(By.xpath(`//button[2]/div/div`)), 50000)
await driver.findElement(By.xpath(`//button[2]/div/div`)).click()
await driver.findElement(By.xpath(`//button[2]/div/div`)).click()
await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click()

await driver.wait(until.elementsLocated(By.css(".md:nth-child(3) > .select")), 30000)
await driver.findElement(By.css(".md:nth-child(3) > .select")).click()
await driver.wait(until.elementsLocated(By.xpath(`//button[3]/div/div`)), 50000)
await driver.findElement(By.xpath(`//button[3]/div/div`)).click()
await driver.findElement(By.xpath(`//button[3]/div/div`)).click()
await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click()

await driver.wait(until.elementsLocated(By.css(".md:nth-child(3) > .select")), 30000)
await driver.findElement(By.css(".md:nth-child(3) > .select")).click()
await driver.wait(until.elementsLocated(By.xpath(`//button[4]/div/div`)), 50000)
await driver.findElement(By.xpath(`//button[4]/div/div`)).click()
await driver.findElement(By.xpath(`//button[4]/div/div`)).click()
await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click()

await driver.wait(until.elementsLocated(By.css(".md:nth-child(3) > .select")), 30000)
await driver.findElement(By.css(".md:nth-child(3) > .select")).click()
await driver.wait(until.elementsLocated(By.xpath(`//button[5]/div/div`)), 50000)
await driver.findElement(By.xpath(`//button[5]/div/div`)).click()
await driver.findElement(By.xpath(`//button[5]/div/div`)).click()
await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click()

await driver.wait(until.elementsLocated(By.css(".md:nth-child(3) > .select")), 30000)
await driver.findElement(By.css(".md:nth-child(3) > .select")).click()
await driver.wait(until.elementsLocated(By.xpath(`//button[6]/div/div`)), 50000)
await driver.findElement(By.xpath(`//button[6]/div/div`)).click()
await driver.findElement(By.xpath(`//button[6]/div/div`)).click()
await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click()

await driver.wait(until.elementsLocated(By.css(".md:nth-child(3) > .select")), 30000)
await driver.findElement(By.css(".md:nth-child(3) > .select")).click()
await driver.wait(until.elementsLocated(By.xpath(`//button[7]/div/div`)), 50000)
await driver.findElement(By.xpath(`//button[7]/div/div`)).click()
await driver.findElement(By.xpath(`//button[7]/div/div`)).click()
await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click()

await driver.wait(until.elementsLocated(By.css(".md:nth-child(3) > .select")), 30000)
await driver.findElement(By.css(".md:nth-child(3) > .select")).click()
await driver.wait(until.elementsLocated(By.xpath(`//button[8]/div/div`)), 50000)
await driver.findElement(By.xpath(`//button[8]/div/div`)).click()
await driver.findElement(By.xpath(`//button[8]/div/div`)).click()
await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click()

await driver.wait(until.elementsLocated(By.css(".md:nth-child(3) > .select")), 30000)
await driver.findElement(By.css(".md:nth-child(3) > .select")).click()
await driver.wait(until.elementsLocated(By.xpath(`//button[9]/div/div`)), 50000)
await driver.findElement(By.xpath(`//button[9]/div/div`)).click()
await driver.findElement(By.xpath(`//button[9]/div/div`)).click()
await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click()

await driver.wait(until.elementsLocated(By.css(".md:nth-child(3) > .select")), 30000)
await driver.findElement(By.css(".md:nth-child(3) > .select")).click()
await driver.wait(until.elementsLocated(By.xpath(`//button[10]/div/div`)), 50000)
await driver.findElement(By.xpath(`//button[10]/div/div`)).click()
await driver.findElement(By.xpath(`//button[10]/div/div`)).click()
await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click()

await driver.wait(until.elementsLocated(By.css(".md:nth-child(3) > .select")), 30000)
await driver.findElement(By.css(".md:nth-child(3) > .select")).click()
await driver.wait(until.elementsLocated(By.xpath(`//button[11]/div/div`)), 50000)
await driver.findElement(By.xpath(`//button[11]/div/div`)).click()
await driver.findElement(By.xpath(`//button[11]/div/div`)).click()
await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click()

await driver.wait(until.elementsLocated(By.css(".md:nth-child(3) > .select")), 30000)
await driver.findElement(By.css(".md:nth-child(3) > .select")).click()
await driver.wait(until.elementsLocated(By.xpath(`//button[12]/div/div`)), 50000)
await driver.findElement(By.xpath(`//button[12]/div/div`)).click()
await driver.findElement(By.xpath(`//button[12]/div/div`)).click()
await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click()

await driver.wait(until.elementsLocated(By.css(".md:nth-child(3) > .select")), 30000)
await driver.findElement(By.css(".md:nth-child(3) > .select")).click()
await driver.wait(until.elementsLocated(By.xpath(`//button[13]/div/div`)), 50000)
await driver.findElement(By.xpath(`//button[13]/div/div`)).click()
await driver.findElement(By.xpath(`//button[13]/div/div`)).click()
await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click()

await driver.wait(until.elementsLocated(By.css(".md:nth-child(3) > .select")), 30000)
await driver.findElement(By.css(".md:nth-child(3) > .select")).click()
await driver.wait(until.elementsLocated(By.xpath(`//button[14]/div/div`)), 50000)
await driver.findElement(By.xpath(`//button[14]/div/div`)).click()
await driver.findElement(By.xpath(`//button[14]/div/div`)).click()
await driver.wait(until.elementsLocated(By.xpath("//button[contains(.,'OK')]")), 30000);
await driver.findElement(By.xpath("//button[contains(.,'OK')]")).click()

  })
})