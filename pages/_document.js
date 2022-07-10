import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-BW8HRKG1M8"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '[G-BW8HRKG1M8]', { page_path: window.location.pathname });
            `,
            }}
          />
          {/* <!-- Global site tag (gtag.js) - Google ADS --> */}

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-933227426"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-933227426');
            `,
            }}
          />
          {/* <!-- Event snippet for Website traffic conversion page --> */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
  gtag('event', 'conversion', {'send_to': 'AW-933227426/rBNtCP7mwcwDEKLX_7wD'});
              `,
            }}
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
