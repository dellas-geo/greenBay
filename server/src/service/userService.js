import models from "../db/models/user.js";
const { User } = models;
import hashPassword from "./encryptionService.js";
import ValidationError from "./errorService.js";
import Sequelize from "sequelize";

const sequelize = new Sequelize("greenbay", "root", "password", {
  host: "127.0.0.1",
  dialect: "mysql",
});

const createUser = async (details) => {
  const message = await isInputValid(details);

  if (message != undefined) {
    throw new ValidationError(message);
  }

  details.password = await hashPassword(details.password);

  sequelize
    .query(
      `INSERT INTO Users (username, password, createdAt, updatedAt) 
      VALUES ("${details.username}", "${details.password}","2022-08-01 22:26:38","2022-08-01 22:26:38")`
    )
    .then(function (result) {
      console.log(result);
    });

  // return User.create(details);
};

const isInputValid = async (details) => {
  if (!isUsernameValid(details.username)) {
    return "Invalid username";
  } else if (!isPasswordValid(details.password)) {
    return "Invalid password";
    // } else if (!isEmailValid(details.email)) {
    //   return "Invalid email";
    // } else if (await isEmailAlreadyInUse(details.email)) {
    //   return "We already have this email";
    // }
  }
};

const isUsernameValid = (username) => {
  const format = /[ `!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/;

  if (username.length < 4 || format.test(username)) {
    return false;
  }

  return true;
};

const isPasswordValid = (password) => {
  const format = /[ `!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/;
  const last = password.charAt(password.length - 1);
  if (
    password.length < 8 ||
    !format.test(password) ||
    !/\d/.test(password) ||
    format.test(last) ||
    /\d/.test(last)
  ) {
    return false;
  }

  return true;
};

const isEmailValid = (mail) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
};

const isEmailAlreadyInUse = async (mail) => {
  const found = await User.findAll({
    where: {
      email: mail,
    },
  });
  if (found.length == 0) {
    return false;
  }
  return true;
};

export default {
  createUser,
};
export { isUsernameValid, isPasswordValid, isEmailValid, isEmailAlreadyInUse };
