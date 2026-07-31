import React from 'react';


const footerCss = `
          .wrapper-footer {
            position: relative;
            bottom: -20vh;
            background-color: #283940 !important;
            color: #ffffff !important;
            padding: 40px 24px 36px;
            font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
          }

          #footer * {
            color: #ffffff !important;
            font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
          }

          .footer__inner {
            max-width: 1130px;
            margin: 0 auto;
          }

          .footer__logos {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 32px;
            margin-bottom: 38px;
          }

          .footer__logo {
            display: block;
            height: auto;
            object-fit: contain;
          }

          .footer__logo--hexafret {
            width: 170px;
          }

          .footer__logo--rle {
            width: 110px;
          }

          .footer__separator {
            width: 100%;
            height: 1px;
            background: rgba(255, 255, 255, 0.9) !important;
            margin-bottom: 22px;
          }

          .footer__nav {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 120px;
          }

          .footer__link {
            color: #ffffff;
            text-decoration: none;
            font-size: 18px;
            line-height: 1.4;
            font-weight: 400;
          }

          .powered-area *,
          .copyright-site {
            color: #ffffff !important;
          }

          .footer__link:hover,
          .footer__link:focus {
            text-decoration: underline;
          }

          @media (max-width: 768px) {
            .footer {
              padding: 32px 20px;
            }

            .footer__logos {
              justify-content: center;
              gap: 24px;
              margin-bottom: 30px;
            }

            .footer__logo--hexafret {
              width: 145px;
            }

            .footer__logo--rle {
              width: 95px;
            }

            .footer__nav {
              flex-direction: column;
              gap: 14px;
            }

            .footer__link {
              font-size: 16px;
              text-align: center;
            }
          }
`;


export const CustomFooter = ({}) => (
    <>
     <style>{footerCss}</style>

      <footer className="wrapper-footer">
        <div className="footer__inner">
         <div className="footer__logos">
          <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <img src="https://decouverte-metiers.sncf.hexafret.net/static/indigo/images/logo-white.png" alt="Hexafret" className="footer__logo footer__logo--hexafret" />
              <div style={{ fontSize: '12px', display: 'flex', flexWrap: 'nowrap', flexDirection: 'row', alignItems: 'center'}}>
                <p>Une marque de :</p>
                <img src="https://decouverte-metiers.sncf.hexafret.net/static/indigo/images/logo-rl_eu.png" alt="Rail Logistics Europe" className="footer__logo footer__logo--rle" />
              </div>
              <p style={{ textAlign: 'justify', fontSize: '12px', maxWidth: '75%'}}> Rail Logistics Europe est une société du groupe SNCF </p>
          </div>
        </div>

          <div className="footer__separator" />

          <nav className="footer__nav" aria-label="Liens légaux">
            <a
              style={{ color: "#ffffff" }}
              href="https://decouverte-metiers.sncf.hexafret.net/tos"
              className="footer__link"
            >
              Mentions légales
            </a>


          </nav>
        </div>



        <div className="footer-top">

        </div>

        <span className="copyright-site">
          Copyrights ©2026. All Rights Reserved.
        </span>


      </footer>
    </>
);


export default CustomFooter;
