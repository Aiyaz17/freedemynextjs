module.exports = () => {
  // console.log({ NODE_ENV: process.env.NODE_ENV });
  if (process.env.NODE_ENV === "development")
    return process.env.NEXT_PUBLIC_BASE_URL_PROD;
  if (process.env.NODE_ENV === "production")
    return process.env.NEXT_PUBLIC_BASE_URL_DEV;
};
