import axiosRequest from "./axiosRequest";

const postForm = async (states) => {
  try {
    const formData = new FormData();
    formData.append("explanation", states.message);
    formData.append("name", states.name);
    formData.append("image_attachment", states.uploadCV ? states.uploadCV : []);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://backend.saudibanks.com.sa/!/forms/share_experience",
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
      data: formData,
    };

    const data = await axiosRequest(config);

    // console.log(data);
  } catch (error) {
    console.error(error);
  }
};

export default postForm;
