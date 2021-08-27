import React from "react";
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
  return (
    <ArticlePlea
      title="Our online world is broken."
      paragraph1="The battle is no longer just about access, but about who takes hold of the narrative. Despite the massive flow of information, we can no longer discuss issues and topics close to our hearts without fear of getting trolled, threatened, or attacked. Our minds have been co-opted by the attention economy, and our deepest vulnerabilities have been exploited for profit through disinformation and propaganda."
      paragraph2="In this climate and as we prepare for the May 2022 presidential election in the Philippines, we need stories that provide clarity, context and perspective. Stories that understand how power is used and abused. Stories that drive communities to action."
      paragraph3="Rappler is powered by its readers. It is independent and fearless because it’s supported and inspired by you"
      btnLabel="Join Rappler+"
      btnSubLabel="for P3500 / $75 a year"
      donation="Join Rappler+ and pushback on disinformation, propaganda, and lies or make a one off donation "
      rapplerPlusLink={handleLink}
      donationLink={handleDonationLink}
      rapplerPlusLogo={logo}
      optionStyle={styles}
    />
  );
};

export default Option2;
