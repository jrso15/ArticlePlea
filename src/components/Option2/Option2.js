import React from "react";
import ReactHtmlParser from "react-html-parser";
import ArticlePlea from "../AbstractArticlePlea/AbstractArticlePlea";
import logo from "./white_1.png";
import styles from "./Option2.module.scss";

const Option2 = () => {
  const handleLink = () => {
    window.deep.event({ "event.type": "article_plea_option2_plus_click" });
    window.dataLayer.push({ event: "article_plea_option2_plus_click" });

    window.open(
      "https://www.rappler.com/about-plus-membership-program?utm_source=rappler_plus&utm_medium=article_plea&utm_campaign=option2_plus"
    );
  };

  const handleDonationLink = () => {
    window.deep.event({
      "event.type": "article_plea_option2_crowdfunding_click",
    });
    window.dataLayer.push({ event: "article_plea_option2_crowdfunding_click" });

    window.open(
      "https://r3.rappler.com/plus/payment?campaign=3&utm_source=rappler_plus&utm_medium=article_plea&utm_campaign=option2_crowdfunding"
    );
  };

  const italicText =
    "<em> Without truth, you can’t have trust. Without trust, we have no shared reality. </em>";

  const italicText2 =
    "<em> What does a world without a shared reality look like? Globally, It becomes impossible to deal with our existential problems. For communities, it means they can no longer engage in constructive discourse because dissenters are tagged as terrorists or criminals. For individuals, it means feeling more alone, anxious, disconnected, and disempowered. </em>";

  const italicText3 =
    "<em>Our vision for Rappler+ is to create a place where we could keep talking to each other about the future we want to shape. A place where we could engage in conversation without the toxicity and vitriol on social media. An opportunity to deepen our relationship with our readers and supporters in a space where we could discuss today’s most pressing issues – together.</em>";

  const italicText4 = "<em>Courage on. Hold the line</em>";

  return (
    <ArticlePlea
      title="Ride the wave of freedom"
      paragraph1="Rappler CEO Maria Ressa invites you to join Rappler+ and engage in a global discourse on democracy, independent media, human rights, and civic engagement."
      paragraph2={ReactHtmlParser(italicText)}
      paragraph3={ReactHtmlParser(italicText2)}
      paragraph4={ReactHtmlParser(italicText3)}
      donation={ReactHtmlParser(italicText4)}
      btnLabel="Join our community"
      btnSubLabel="for P3500 / $75 a year"
      rapplerPlusLink={handleLink}
      donationLink={handleDonationLink}
      rapplerPlusLogo={logo}
      optionStyle={styles}
    />
  );
};

export default Option2;
