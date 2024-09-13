const express = require("express");
const mongodb = require("mongoose");

const app = express();

app.use(express.json());

mongodb
  .connect(
    "mongodb+srv://samuel:QNPNQnGaTI8Qh7R0@cluster1.abvnt.mongodb.net/sam?retryWrites=true&w=majority&appName=Cluster1"
  )
  .then(() => {
    console.log("MongoDB Connnected");
  })
  .catch((e) => {
    console.log(`Connection Error:${e.message}`);
  });

const schema = new mongodb.Schema(
  {
    internDetails: {
      internName: {
        type: String,
        required: true,
        trim: true,
      },
      internEmail: {
        type: String,
        unique: true,
        required: true,
        trim: true,
      },
      internPhoneNumber: {
        type: Number,
        required: true,
      },
    },
  },
  {
    courseDetails: {
      courses: {
        type: String,
        enum: ["FSD", "DM"],
        required: true,
      },
      courseFee: {
        type: Number,
        required: true,
      },
      courseDuration: {
        type: String,
        reuired: true,
      },
    },
  },
  { timestamps: true }
);

const internship = mongodb.model("Intern", schema);

app.post("/internship", async (req, res) => {
  try {
    let {internEmail} = req.body;
    const checkEmail = await internship.findOne({internEmail});
    if(checkEmail) {
        return res.status(409).json({Message: "userEmail exists already..."})
    }
    let data = {
      ...req.body,
      created: "Success",
    };
    let intern = await internship.create(req.body);
    res.json({
      intern,
      message: "details successfully sent",
    });
  } catch (error) {
    res.json({
      Error: error,
    });
  }
});

const port = 7002;
app.listen(port, () => {
  console.log(port);
});