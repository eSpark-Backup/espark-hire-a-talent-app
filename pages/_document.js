import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
class MyDocument extends Document {
  render() {
    return (
      <Html lang="zxx">
        <Head>
          <link
            rel="dns-prefetch"
            href="//t.visitorqueue.com"
            style={{ display: 'none' }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              function vqTrackId(){return '50055173-4b1d-4458-b3ca-e5bc55743460';}
              (function(d, e) {
                var el = d.createElement(e);
                el.sa = function(an, av){this.setAttribute(an, av); return this;};
                el.sa('id', 'vq_tracking').sa('src', '//t.visitorqueue.com/p/tracking.min.js?id='+vqTrackId()).sa('async', 1).sa('data-id', vqTrackId());
                d.getElementsByTagName(e)[0].parentNode.appendChild(el);
              })(document, 'script');
            `,
            }}
          ></script>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://p.visitorqueue.com/styles/50055173-4b1d-4458-b3ca-e5bc55743460.css"
            id="vq_flick_styles"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              function vqTrackPc(){return 1;}
            `,
            }}
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(d, e) {
                var el = d.createElement(e);
                el.sa = function(an, av){this.setAttribute(an, av); return this;};
                el.sa('id', 'vq_personalisation').sa('src', '//personalisation.visitorqueue.com/p/personalisation.min.js?id='+vqTrackId()).sa('async', 1).sa('data-id', vqTrackId());
                d.getElementsByTagName(e)[0].parentNode.appendChild(el);
              })(document, 'script');
            `,
            }}
          ></script>
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
              fbq('init', '826312182531681');
              fbq('track', 'PageView');`,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/652e6141f2439e1631e53883/1hcuinq3o';
              s1.charset='UTF-8';
              s1.setAttribute('crossrigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();`,
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
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap"
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
              src="https://www.facebook.com/tr?id=826312182531681&ev=PageView&noscript=1"
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
