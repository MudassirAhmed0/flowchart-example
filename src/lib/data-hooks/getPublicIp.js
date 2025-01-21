const getPublicIP = async () => {
  try {
    const response = await fetch("https://api64.ipify.org?format=json");
    if (response.ok) {
      const data = await response.json();
      return data.ip;
    } else {
      throw new Error("Unable to fetch IP address");
    }
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

export default getPublicIP;
