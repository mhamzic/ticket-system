const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    product: {
      type: String,
      required: [true, "Please select product"],
      enum: ["iPhone", "Macbook Pro", "iMac", "iPad"],
    },
    description: {
      type: String,
      required: [true, "Please add description od the issue"],
    },
    status: {
      type: String,
      required: true,
      enum: ["new", "open", "closed"],
      default: "new",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ticket", ticketSchema);
