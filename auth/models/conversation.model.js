import mongoose, {Schema} from "mongoose";

const ConversationSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  messages: [{
    content: {
      type: String,
      required: true
    },
    isBot: {
      type: Boolean,
      required: true,
      default: false
    },
    timestamp: {
      type: Date,
      default: Date.now
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

ConversationSchema.pre("save", function(next){
  this.updatedAt = Date.now();
  next();
});

const ConversationModel = mongoose.model("conversations", ConversationSchema);

export {ConversationSchema, ConversationModel};

