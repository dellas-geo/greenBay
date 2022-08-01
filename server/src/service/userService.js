import models from "../db/models";
const {User} = models;

const isInputValid = async (details) => {
    if (!isUsernameValid(details.username)) {
      return 'Invalid username';
    } else if (!isPasswordValid(details.password)) {
      return 'Invalid password';
    } else if (!isEmailValid(details.email)) {
      return 'Invalid email';
    } else if (await isEmailAlreadyInUse(details.email)) {
      return 'We already have this email';
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