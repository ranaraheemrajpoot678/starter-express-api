const Userschema = require("../Models/Userschema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.send({ message: "All fields are required" });
    }
    const checkuser = await Userschema.findOne({ email });
    if (checkuser) {
      return res.send({ message: "Email already exists" });
    }
    const hash = await bcrypt.hash(password, 10);
    const saveuser = await new Userschema({
      name,
      email,
      password: hash,
    }).save();
    if (saveuser) {
      return res.send({ message: "User Registration Success" });
    } else {
      return res.send({ message: "User Registration Failure" });
    }
  } catch (error) {
    console.log(error);
  }
};
const Login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.send({ message: "All Fields Required" });
  }
  const checkuser = await Userschema.findOne({ email });
  if (!checkuser) {
    return res.send({ message: "User not found" });
  }
  const user = await bcrypt.compare(password, checkuser.password);
  if (user) {
    const token = await jwt.sign({ token: checkuser._id }, "raheemQ");
    return res.send({ message: "User Login", token: token });
  } else {
    return res.send({ message: "Invalid Credentials" });
  }
};
module.exports = { registerUser, Login };
