import React from "react";
import ReactHtmlParser from "react-html-parser";
import ArticlePlea from "../AbstractArticlePlea/AbstractArticlePlea";
import image from "./glenda.png";
import logo from "./mixed.png";
import styles from "./Option1.module.scss";

const Option1 = () => {
  const handleLink = () => {
    console.log("test");
    window.deep.event({ "event.type": "article_plea_option1_plus_click" });
    window.dataLayer.push({ event: "article_plea_option1_plus_click" });

    window.open(
      "https://www.rappler.com/about-plus-membership-program?utm_source=rappler_plus&utm_medium=article_plea&utm_campaign=option1_plus"
    );
  };

  const handleDonationLink = () => {
    window.deep.event({
      "event.type": "article_plea_option1_crowdfunding_click",
    });
    window.dataLayer.push({ event: "article_plea_option1_crowdfunding_click" });

    window.open(
      "https://r3.rappler.com/plus/payment?campaign=3&utm_source=rappler_plus&utm_medium=article_plea&utm_campaign=option1_crowdfunding"
    );
  };
  const boldText =
    "<strong>For what is journalism without its public? What is storytelling without a community that is inspired or moved to action by it?</strong>";

  return (
    <ArticlePlea
      image={image}
      title="A message from Glenda M. Gloria, executive editor:"
      paragraph1="When we launched Rappler+ in 2018, the Rappler newsroom was on edge. We
      were battling nearly a dozen cases against the company and its leaders
      even as our journalists were attacked online with threats and hate
      messages."
      paragraph2="In our darkest hours, the very first members gave us hope. They not only
      showed support through an annual fee that helped us tide things over,
      they also boosted our morale and assured us that we were not alone in
      this battle for an independent media."
      paragraph3={ReactHtmlParser(boldText)}
      paragraph4="The reason we’ve been able to stay the course is readers like you who
      believe that public good is best served when power is checked by those
      who speak truth to it."
      donation="Help us continue our work by joining Rappler+ or making a one off donation "
      here="here"
      rapplerPlusLink={handleLink}
      donationLink={handleDonationLink}
      rapplerPlusLogo={logo}
      btnLabel="Join Now"
      btnSubLabel="for P3500 / $75 a year"
      optionStyle={styles}
    />
  );
};

export default Option1;
