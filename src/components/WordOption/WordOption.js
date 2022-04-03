import React from "react";
import { Pressable, Text } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

//Component to render a pressable option for the fill blank type of questions
const WordOption = ({ text, onPress, isSelected }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.root, isSelected ? styles.containerSelected : {}]}
    >
      {
        <Text style={[styles.text, isSelected ? styles.textSelected : {}]}>
          {text}
        </Text>
      }
    </Pressable>
  );
};

//PropTypes setup
WordOption.propTypes = {
  isSelected: PropTypes.bool,
  onPress: PropTypes.func,
  text: PropTypes.string,
};

export default WordOption;
