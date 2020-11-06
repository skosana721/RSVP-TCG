import axios from "axios";

export const saveUser = async (formInformation) => {
  
  try {
    const { data } = await axios.post(
      "http://localhost:4100/User",formInformation
    );
  } catch (e) {
    console.log(e);
  }
};
