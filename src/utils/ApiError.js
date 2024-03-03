// Define a class named ApiError that extends the Error class.
class ApiError extends Error {
    // Define a constructor function with parameters statusCode, message, error, and stack.
    constructor (
        statusCode, // StatusCode ki value ko store karne ke liye parameter
        message = "Something went wrong", // Default message set kiya "Something went wrong"
        error = [], // Errors ko store karne ke liye array ka parameter
        stack = "" // Stack trace ko store karne ke liye parameter
    ){
        // Super method call kiya Error class ka constructor function jisme message pass kiya
        super(message)
        // StatusCode ko instance variable me store kiya
        this.statusCode = statusCode
        // Data ko null me initialize kiya
        this.data = null
        // Message ko instance variable me store kiya
        this.message = message
        // Success ko false me initialize kiya
        this.success = false;
        // Errors ko instance variable me store kiya
        this.errors = errors
        // Agar stack ki value milti hai, to instance variable me store kiya
        if (stack) {
            this.stack = stack
        } else {
            // Agar stack ki value nahi milti hai, to current stack trace ko capture kiya
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

// ApiError class ko export kiya
export { ApiError }
