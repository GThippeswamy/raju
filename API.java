import java.beans.Transient;
import java.net.ResponseCache;

public class API {
    int skilled;
    @Test(priority=1)
    void createskill(){
        RestAssured.baseUri="https://dummy.skilltracker.io/api/v1";
        String  request="{\"name\": \"java\",\"level\":4,\"userid\":101}";
        Response  responce=give()
        .header("content-type'","application/json").body(request).when().post("/skills")
        .then().statusCode(201).extract().responce();
        skilled=responce.path("id");
        System.out.println(skilled);

    }
     @Test(priority=2)
     public void getskill(){
        given().when().get("https://dummy.skilltracker.io/api/v1/skills"+skillid).then()
        .statusCode(200).body("name",equalsTo("java"));
     }
     @Test(priority=3)
     void delectskill(){
        given().when().delete("https://dummy.skilltracker.io/api/v1/skills"+skillid)
        .then().statusCode(201);
     }

    
}
