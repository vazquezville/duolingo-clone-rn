import React from "react";
import { Text, Image, View } from "react-native";
import PropTypes from "prop-types";
import ProgressBar from "../ProgressBar";
import styles from "./styles";
import heart from "../../../assets/images/heart.png";

//App's header, render the progress and lifes as a props
const Header = ({ progress, lifes }) => {
  return (
    <View style={styles.root}>
      {/* Progress bar */}
      <ProgressBar progress={progress} />

      {/* Lifes counter */}
      <Image source={heart} style={styles.icon} resizeMode="contain" />
      <Text style={styles.lives}>{lifes}</Text>
    </View>
  );
};

//PropTypes setup
Header.propTypes = {
  lifes: PropTypes.number,
  progress: PropTypes.number,
};

export default Header;
