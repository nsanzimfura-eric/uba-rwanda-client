// BASE URL
const baseUrl = process.env.BASE_URL;

// DEFINE API
const SEND_OPT = `${baseUrl}/___`;
const VERIFY_OTP = (otp: string): string => `${baseUrl}/___${otp}`;

// EXPORT API
export const appAPI = {
  SEND_OPT,
  VERIFY_OTP,
};
