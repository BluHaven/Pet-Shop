package SearchFieldUITests;

import org.junit.jupiter.api.Test;
import io.restassured.RestAssured;
import io.restassured.response.Response;

import static org.junit.jupiter.api.Assertions.*;


class ApiTest01 {
    @Test
    // Test 1: Verify Status Code is 200 OK
    void checkStatusCodeOfAPI() {
        RestAssured.baseURI = "http://localhost:3001";
        RestAssured.basePath = "/pets";

        Response response = RestAssured.get("/");

        if (response.getStatusCode() == 200) {
            System.out.println("API has Status Code of 200");
        } else {
            System.out.println("API does not have Status Code of 200");
        }
    }

    @Test
        // Test 2: Verify Response Body is a JSON Array
    void checkThatJSONArray() {
        RestAssured.baseURI = "http://localhost:3001";
        RestAssured.basePath = "/pets";

        Response response = RestAssured.get("/");

        assertTrue(response.contentType().equalsIgnoreCase("application/json; charset=utf-8"));
        assertTrue(response.body().asString().startsWith("["));
        assertTrue(response.body().asString().endsWith("]"));

        System.out.println("API Response Body is a JSON Array");
    }
}
