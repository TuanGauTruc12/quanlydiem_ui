import axios from "../axios";

export const login = (formData) =>
  new Promise(async (resolve, reject) => {
    try {
      const reponse = await axios({
        url: `/login`,
        data: formData,
        headers: { accept: "application/json"  },
        method: "post",
      });
      resolve(reponse);
    } catch (error) {
      reject(error);
    }
  });

export const getDataScoreByMSSV = (formData) =>
  new Promise(async (resolve, reject) => {
    try {
      const reponse = await axios({
        url: `/score`,
        data: formData,
        method: "post",
      });
      resolve(reponse);
    } catch (error) {
      reject(error);
    }
  });
