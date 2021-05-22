const webdriver= require ('selenium-webdriver');
By = webdriver.By,
until = webdriver.until

const driver = new webdriver.Builder().forBrowser('firefox').build();

driver.get('https://easytrade-test-94748.web.app/login');

driver.findElement(By.xpath('//input[@name="mail"]')).sendKeys('info@kolectiv.tech');
driver.findElement(By.xpath('//input[@name="password"]')).sendKeys('TestPwd23$');
driver.findElement(By.css('.button')).click();





