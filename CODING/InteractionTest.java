package tests;

import java.sql.Driver;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.testng.Assert;
import org.testng.annotations.Test;

public class InteractionTest extends BaseClass {

    @Test(groups = { "smoke" })
    public void handleAlerts() {
        driver.get("https://demoqa.com/alerts");
        driver.findElement(By.id("confirmButton")).click();
        Alert alert = driver.switchTo().alert();
        alert.accept();
        String res = driver.findElement(By.id("confirmResult")).getText();
        Assert.assertEquals(res, "You selected Ok");
    }

    @Test(groups = { "regression" })
    public void Handleframes() {
        driver.get("https://demoqa.com/frames");
        driver.switchTo().frame("frame1");
        String res = driver.findElement(By.id("sampleHeading")).getText();
        Assert.assertEquals(res, "This is a sample page");
        driver.switchTo().defaultContent();
    }
}
