//<input value="Google Search" aria-label="Google Search" name="btnK" type="submit" jsaction="sf.chk">

const webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until;
  
  let driver = new webdriver.Builder()
      .forBrowser('chrome')
      .build();
  
      driver.get('https://google.com');
      
      driver.findElement(By.id('lst-ib'))
            .sendKeys('picture of cats');
            
      driver.findElement(By.name('btnK')).click();
      
      driver.findElement(By.className('iu-card-header')).click();

      
      
      // driver.sleep(1000)
      // driver.quit();