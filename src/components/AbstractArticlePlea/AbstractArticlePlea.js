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
}) => {
  return (
    <div className={optionStyle.articlePleaContainer}>
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
        <a
          className={optionStyle.btnPlus}
          href="https://www.rappler.com/about-plus-membership-program"
          target="_blank"
        >
          <p className={optionStyle.label}>{btnLabel}</p>
          <p className={optionStyle.subLabel}>{btnSubLabel}</p>
        </a>

        <div className={optionStyle.donation}>
          <p>
            Or make a one off donation{" "}
            <a href="https://r3.rappler.com/plus/payment?campaign=3">here</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticlePlea;
