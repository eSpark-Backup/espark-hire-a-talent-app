import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
class MyDocument extends Document {
  render() {
    return (
      <Html lang="zxx">
        <Head>
          {/* Google tag (gtag.js) */}
          <script
            dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '280994521493192');
              fbq('track', 'PageView');`,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-N43EVHZHXM');`,
            }}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': 
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], 
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); 
              })(window,document,'script','dataLayer','GTM-5JWLG8J2')`,
            }}
          />
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-N43EVHZHXM"
          />
          <link rel="icon" href="/images/finalFavIcon.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
          />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-N43EVHZHXM"
          ></script>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=280994521493192&ev=PageView&noscript=1"
            />
          </noscript>
          <script
            type="text/javascript"
            src="//static.klaviyo.com/onsite/js/klaviyo.js?company_id=XCSapi"
          ></script>
        </Head>
        <body>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-5JWLG8J2"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
