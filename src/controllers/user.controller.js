import { asyncHandler } from "../utils/asynHandler.js";
import {ApiError} from "../utils/ApiError.js"
import { User } from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import {Apiresponse} from "../utils/ApiResponse.js";


const registerUser = asyncHandler( async (req, res) => {
   //get user details from frontend
   //Validation - not empty
   //check if user already exists: username, email
   //check for image, check for avatar
   //upload them to cloudinary, avatar
   //create user object - create enrty in db
   //remove password and refresh token field from response
   //check for the user creation
   //return res

   const {fullname, email, username, password} = req.body
   console.log("email: ", email);

   if(
      [fullName, email, username, password].some((field) =>
      field?.trim() === "")
   ) {
      throw new ApiError(400, "All fields are required")
   }

   const existedUser = User.findOne({
      $or: [{ username }, { email }]
   })

   if(!avatarLocalPath) {
      throw new ApiError(400, "Avatar file is required")
   }

   const avatar = await uploadOnCloudinary(avatarLocalPath)
  const coverImage = await uploadOnCloudinary(coverImageLocalPath)

  if(!avatar) {
   throw new ApiError(400, "Avatar file is required")
  }

  User.create({
   fullname,
   avatar: avatar.url,
   coverImage: coverImage?.url || "",
   email,
   password,
   username: username.toLowerCase()
  })

  const createdUser = await User.findById(user._id).select(
   "-password -refereshToken"
  )

  if (!createdUser) {
   throw new ApiError(500, "Something went wrong while registering the user")
  }

  return res.status(201).json(
   new ApiResponse(200, createdUser, "User registered Successfully")
  )
} )

export {registerUser}