// Define a class named ApiResponse.
class ApiResponse {
    // Define a constructor function with parameters statusCode, data, and message with a default value of "Success".
    constructor(statusCode, data, message = "Success") {
        // StatusCode ko instance variable me store kiya
        this.statusCode = statusCode
        // Data ko instance variable me store kiya
        this.data = data
        // Message ko instance variable me store kiya
        this.message = message
        // Success variable ko true ya false set kiya base on statusCode
        // Agar statusCode 400 se kam hai toh success true otherwise false
        this.success = statusCode < 400
    }
}

// ApiResponse class ko export kiya
export { ApiResponse }
