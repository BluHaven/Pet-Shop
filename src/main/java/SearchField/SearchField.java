package SearchField;
import io.restassured.response.Response;

class ApiTestUtils {

    public static void checkStatusCodeOfAPI(Response response, int expectedStatusCode) {
        int actualStatusCode = response.getStatusCode();
        if (actualStatusCode != expectedStatusCode) {
            throw new AssertionError("Expected status code: " + expectedStatusCode +
                    ", but received: " + actualStatusCode);
        }
    }
}