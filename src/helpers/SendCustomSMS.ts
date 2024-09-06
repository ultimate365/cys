import axios from "axios";
export const SendCustomSMS = async (phone: string, message: string) => {
  try {
    const response = await axios.post(
      "https://www.fast2sms.com/dev/bulkV2",
      {
        route: "q",
        numbers: phone,
        message: message,
        language: "english",
      },
      {
        headers: {
          Authorization: process.env.CYS_FAST2SMS_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.message;
  } catch (error) {
    console.error({ success: false, message: "Failed to send OTP." }, error);
  }
};
