import axiosRequest from "./axiosRequest";
import getPublicIP from "./getPublicIp";

const postQuiz = async (quiz, result, formStates) => {
  const ip = await getPublicIP();

  try {
    const formData = new FormData();
    formData.append("user_ip", ip);
    formData.append("your_name", formStates.name);
    formData.append("age", formStates.age);
    formData.append("city", formStates.cityValue);
    formData.append("gender", formStates.gender);
    formData.append("hear_about_campaign", formStates.hearAboutCampaignValue);
    formData.append("preferred_platform", formStates.preferredPlatformValue);
    formData.append("preferred_platform_username", formStates.socialName);
    quiz.forEach((entry, index) => {
      formData.append(`quiz[${index}][question]`, entry.question);
      formData.append(`quiz[${index}][answer]`, entry.answer);
      formData.append(`quiz[${index}][type]`, entry.type);
    });

    formData.append("quiz_result", result);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://backend.saudibanks.com.sa/!/forms/survey_results",
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
      data: formData,
    };
    localStorage.setItem("submitIP", ip);
    localStorage.setItem("socialName", formStates.socialName);
    const data = await axiosRequest(config);

    // console.log(data);
  } catch (error) {
    console.error(error);
  }
};

export default postQuiz;
