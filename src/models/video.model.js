import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema (
    {
      videofile: {
        type: String, //cloudinary url
        required: true
      },
      thumbnail: {
        type: String, //cloudinary url
        required: true
      },
      title: {
        type: String, 
        required: true
      },
      
      deccription: {
        type: String, 
        required: true
      },
      duration: {
        type: Number, 
        required: true
      },
      views: {
        type: Number, 
        default: 0
      },
      idPublished: {
        type: Boolean, 
        default: true
      },
      owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
      
    },
    {
        timestamps: true
    }
    )

    videoSchema.plugin(mongooseAggregatePaginate)

    export const video = mongoose.model("video", videoSchema)