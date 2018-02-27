import React from "react"
import PropTypes from "prop-types"
import {
  TouchableWithoutFeedback,
  View,
  Text
} from "react-native"

import styles from './Styles/ButtonStyles'


export const Button = ({ onPressButton, name }) => (
  <TouchableWithoutFeedback onPress={onPressButton}>
    <View style={styles.buttonWrapper}>
      <Text>{name}</Text>
    </View>
  </TouchableWithoutFeedback>
)

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onPressButton: PropTypes.func,
}

Button.defaultProps = {
  name: "",
  onPressButton: () => {}
}


