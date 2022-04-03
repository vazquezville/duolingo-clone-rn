import React from "react";
import { Pressable, Text } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

//Button component, a pressable for all the questions, changes style according to its state
const Button = ({ text, onPress, disabled }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, disabled ? styles.disabledContainer : {}]}
      disabled={disabled}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

//PropTypes setup
Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  onPress: () => {},
  disabled: false,
};

export default Button;
