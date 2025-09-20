package tests;

import org.openqa.selenium.By;
import org.openqa.selenium.ElementClickInterceptedException;
import org.testng.Assert;
import org.testng.annotations.Test;

public class FromTest extends BaseClass {
    @Test(groups = { "smoke", "regression" })
    public void testBoxSubmission() {
        driver.get("https://demoqa.com/text-box");
        driver.findElement(By.id("userName")).sendKeys("krishna");
        driver.findElement(By.id("userEmail")).sendKeys("radhakrishna143@gmail.com");
        driver.findElement(By.id("submit")).click();
        String nameOutput = driver.findElement(By.id("name")).getText();
        String mailOutput = driver.findElement(By.id("email")).getText();
        Assert.assertEquals(nameOutput, "Name:krishna");
        Assert.assertEquals(mailOutput, "Email:radhakrishna143@gmail.com");
    }

    @Test(groups = { "regression" })
    public void checkBoxSubmission() {
        driver.get("https://demoqa.com/checkbox");
        // click icon button
        driver.findElement(By.cssSelector(".rct-icon.rct-icon-expand-close")).click();
        // select icon button
        driver.findElement(
                By.xpath("//label[@for='tree-node-documents']//span[@class='rct-checkbox']//*[name()='svg']")).click();

        String res = driver.findElement(By.id("result")).getText();
        Assert.assertTrue(res.contains("documents"));
    }
}
