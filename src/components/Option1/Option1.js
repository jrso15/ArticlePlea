import React from "react";
// import styles from "./ArticlePlea.module.scss";
import ArticlePlea from "../AbstractArticlePlea/AbstractArticlePlea";
import image from "./glenda.png";
import styles from "./Option1.module.scss";

const Option1 = () => {
  return (
    <ArticlePlea
      image={image}
      title="A message from Glenda M. Gloria, executive editor:"
      paragraph1="When we launched Rappler+ in 2018, the Rappler newsroom was on edge. We
      were battling nearly a dozen cases against the company and its leaders
      even as our journalists were attacked online with threats and hate
      messages."
      paragraph2="In our darkest hour, the very first members gave us hope. They not only
      showed support through an annual fee that helped us tide things over,
      they also boosted our morale and assured us that we were not alone in
      this battle for an independent media."
      paragraph3="For what is journalism without its public? What is storytelling without
      a community that is inspired or moved to action by it?"
      paragraph4="The reason we’ve been able to stay the course is readers like you who
      believe that public good is best served when power is checked by those
      who speak truth to it."
      btnLabel="Join Rappler+"
      btnSubLabel="for P3500 / $75 a year"
      optionStyle={styles}
    />
  );
};

export default Option1;
