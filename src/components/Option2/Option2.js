import React from "react";
import ArticlePlea from "../AbstractArticlePlea/AbstractArticlePlea";
import logo from "./mixed.png";
import styles from "./Option2.module.scss";

const Option2 = () => {
  return (
    <ArticlePlea
      title="Our online world is broken."
      paragraph1="The battle is no longer about access, but about who takes hold of the narrative. Despite the abundance of information, we can no longer discuss freely without fear of getting trolled, threatened, or attacked. Our minds have been co-opted by the attention economy, and our deepest vulnerabilities have been exploited for profit through disinformation and propaganda."
      paragraph2="In this climate and as we prepare for the May 2022 presidential election in the Philippines, we need stories that provide clarity, context and perspective. Stories that understand how power is used and abused. Stories that drive communities to action."
      paragraph3="Rappler is powered by its readers. It is independent and fearless because it’s supported and inspired by you"
      btnLabel="Join Rappler+"
      btnSubLabel="for P3500 / $75 a year"
      rapplerPlusLogo={logo}
      optionStyle={styles}
    />
  );
};

export default Option2;
