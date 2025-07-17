import mongoose, {Schema} from "mongoose";

const MessageSchema = new Schema({
  content: {type: String, required: true},
  email: {type: String, required: true},
  createdAt: {
    type: Date,
    default: Date.now
  },
  sent: {
    type: Boolean,
    default: true
  }
});

MessageSchema.pre("save", function(next){
  this.createdAt = Date.now();

  next();
})

const MessageModel = mongoose.model("messages", MessageSchema);

export {MessageSchema, MessageModel};
