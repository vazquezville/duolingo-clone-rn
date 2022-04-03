import React from "react";
import { Text, Image, Pressable } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

//Images are pressable items, state selected and unselected, onPress function comes from parent
const ImageOption = ({ image, text, isSelected, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.optionContainer,
        isSelected ? styles.selectedContainer : {},
      ]}
    >
      {/* Image source */}
      <Image
        source={{
          uri: image,
        }}
        resizeMode="contain"
        style={styles.optionImage}
      />
      {/* Image's text */}
      <Text style={isSelected ? styles.selectedText : styles.optionText}>
        {text}
      </Text>
    </Pressable>
  );
};

//PropTypes setup
ImageOption.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onPress: PropTypes.func,
};

ImageOption.defaultProps = {
  isSelected: false,
  onPress: () => {},
};

export default ImageOption;
