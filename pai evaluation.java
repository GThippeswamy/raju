import java.io.File;
import java.io.IOException;
import java.nio.channels.SelectableChannel;
import java.sql.Driver;
import java.time.Duration;
import java.util.Set;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class PaiEvaluation {
	WebDriver driver;
	@BeforeClass
	void lunch() {
		driver=new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
		driver.get("https://demo.skillvault.in/register");
		driver.manage().window().maximize();
		
	};
    @Test
     void login() {
    	driver.findElement(By.id("name")).sendKeys("krishna");
    	driver.findElement(By.name("email")).sendKeys("krishna123");
//    	3
    	
    	driver.findElement(By.xpath("//input[@value='male']")).click();
    	driver.findElement(By.cssSelector("select")).sendKeys("automation Testing");
    	driver.findElement(By.id("availble")).click();
    	driver.findElement(By.xpath("//input[text='immediate']")).click();
    	
    }
//    4 dropdown
    @Test
     void drop() throws InterruptedException {
   	WebElement check = driver.findElement(By.id("country"));
   	Select sel=new Select(check);
   	sel.selectByValue("india");
   	Thread.sleep(3000);
    	 
     }
    @Test
    void action() {
    	WebElement actions = driver.findElement(By.xpath("//input[@type='submit']"));
    	Actions res=new Actions(driver);
    	res.doubleClick(actions).build().perform();
    	
    }
    @Test
    void handleWindow() throws InterruptedException, IOException {
    	
     WebElement frame = driver.findElement(By.id("phones"));
     driver.switchTo().frame(frame);
     
    	Thread.sleep(2000);
    	String parent = driver.getWindowHandle();
    	Set<String> child = driver.getWindowHandles();
    	for(String mas:child) {
    		driver.switchTo().window(mas);
    		driver.findElement(By.linkText("link")).click();
    		Thread.sleep(3000);
    		driver.switchTo().window(parent);
    		driver.findElement(By.id("null")).click();
    		
    	}
    	File ss = frame.getScreenshotAs(OutputType.FILE);
    	File fs = new File("C:\\Users\\Dell\\OneDrive\\Desktop\\logos\\dmk.png");
    	FileUtils.copyFile(ss, fs);
    	
    	
    	
    }
  
	
}

