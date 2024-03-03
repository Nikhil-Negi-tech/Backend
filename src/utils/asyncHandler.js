// asyncHandler naam ka ek constant function define kiya gaya hai jo ek requestHandler function ko accept karta hai
const asyncHandler = (requestHandler) => {
    // asyncHandler ek naya function return karta hai jo req, res, aur next ko accept karta hai
    return (req, res, next) => {
        // requestHandler ko Promise.resolve ke through resolve kiya gaya hai, jisse ek Promise return hota hai
        // agar koi error aata hai to usko catch karke next function ko call kiya jata hai
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}

// asyncHandler constant ko export kiya gaya hai
export { asyncHandler }






















// const asyncHandler = (fn) => async (req,res,next) => {{
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }}