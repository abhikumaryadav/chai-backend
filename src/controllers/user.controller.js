import { asyncHandler } from "../utils/asynHandler.js";


const registerUser = asyncHandler( async (req, res) => {
   return res.status(200).json({
        message: "ok"
    })
} )

export {registerUser}