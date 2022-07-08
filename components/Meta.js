import Head from "next/head";

const Meta = ({
  title,
  keywords,
  description,
  ogTitle,
  ogType,
  ogUrl,
  ogImage,
}) => {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <meta name="keywords" content={keywords}></meta>
      <meta name="description" content={description}></meta>
      <meta property="og:title" content={ogTitle} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUlr} />
      <meta property="og:image" content={ogImage} />
      <meta charSet="utf-8"></meta>
      <link rel="icon" href="/favicon.ico"></link>
      <title>{title}</title>
    </Head>
  );
};
Meta.defaultProps = {
  title: "Get All Top FREE Udemy and Google Courses | Freedemy",
  keywords:
    "udemy courses, udemy coupon code, udemy coupon,udemy coupons, Free Udemy Courses,udemy free courses, udemylogin , Free Google Courses,udemy, udemy courses online, udemy classes, get udemy paid courses for free, google certificate program, udemy, free course udemy, Freedemy, freedemy, udemy coupon code, course hacking",
  description:
    "Search Among more than 5000+ free Udemy courses and 150+ Google Courses and Enroll now.",
  ogTitle: "Get All Top FREE Udemy and Google Courses | Freedemy",
};
export default Meta;
