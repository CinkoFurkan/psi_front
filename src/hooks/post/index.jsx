import axios from "axios";

const usePost = (url) => {
  const postData = async (data) => {
    try {
      await axios.post(`/psinous_app/api/${url}`, data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return { postData };
};

export default usePost;
