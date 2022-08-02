import userService from "../service/userService.js";
import ValidationError from "../service/errorService.js";

const post = async (req, res) => {
    try {
      return res.json(await userService.createUser({...req.body}));
    } catch (error) {
      if (error instanceof ValidationError) {
        return res.status(400).json({message: error.message});
      } else {
        throw error;
      }
    }
  };

  
export default {
    post,
  };