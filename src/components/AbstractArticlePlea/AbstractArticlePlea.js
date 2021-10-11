import React from "react";
import "./AbstractArticlePlea.module.scss";

const ArticlePlea = ({
  image,
  title,
  paragraph1,
  paragraph2,
  paragraph3,
  paragraph4,
  btnLabel,
  btnSubLabel,
  optionStyle,
  donation,
  here,
  rapplerPlusLogo,
  donationLink,
  rapplerPlusLink,
}) => {
  console.log(rapplerPlusLink);
  return (
    <div className={optionStyle.articlePleaContainer}>
      <div className={optionStyle.contentWrapper}>
        <div className={optionStyle.headerWrapper}>
          <div className={optionStyle.image}>
            <img src={image} />
          </div>
          <h3 className={optionStyle.titlePlea}>{title}</h3>
        </div>

        <p className={optionStyle.content}>{paragraph1}</p>

        <p className={optionStyle.content}>{paragraph2}</p>

        <p className={optionStyle.content}>{paragraph3}</p>

        <p className={optionStyle.content}>{paragraph4}</p>
        <div className={optionStyle.buttonWrapper}>
          <div className={optionStyle.donation}>
            <p>
              {donation}
              <a href="" onClick={() => donationLink()}>
                {here}
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <div className={optionStyle.logoContainer}>
        <img src={rapplerPlusLogo} className={optionStyle.logo} />
      </div>

      <div className={optionStyle.buttonHanging}>
        <a className={optionStyle.btnPlus} onClick={() => rapplerPlusLink()}>
          <p className={optionStyle.label}>{btnLabel}</p>
          <p className={optionStyle.subLabel}>{btnSubLabel}</p>
        </a>
      </div>
    </div>
  );
};

export default ArticlePlea;
