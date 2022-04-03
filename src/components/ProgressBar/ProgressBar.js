import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

//Render the progress bar, take the progress dividing the total question's length by the current question's index
const ProgressBar = ({ progress }) => {
  return (
    <View style={styles.background}>
      <View style={[styles.foreground, { width: `${progress * 100}%` }]}>
        <View style={styles.highlight}></View>
      </View>
    </View>
  );
};

//PropTypes setup
ProgressBar.propTypes = {
  progress: PropTypes.number,
};

export default ProgressBar;
