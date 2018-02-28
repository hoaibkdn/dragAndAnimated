import React, { Component } from "react";
import {
  StyleSheet,
  View,
  PanResponder,
  Animated,
  Text
} from "react-native";

export default class Draggable extends Component {
  constructor() {
    super();
    this.state = {
      pan: new Animated.ValueXY(),
    };
  }
  componentWillMount() {
    // Add a listener for the delta value change
    this._val = { x: 0, y: 0 }
    this.state.pan.addListener((value) => this._val = value);

    // Initialize PanResponder with move handling
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => true,
      onPanResponderMove: Animated.event([null, {
        dx : this.state.pan.x,
        dy : this.state.pan.y
      }]),
      onPanResponderRelease: (e, gesture) => {
        this.props.savePosition({x: gesture.dx, y: gesture.dy})
        this.state.pan.flattenOffset()
      }
    });
  }

  render() {
    const panStyle = {
      transform: this.state.pan.getTranslateTransform()
    }

    return (
        <Animated.View
          {...this.panResponder.panHandlers}
          style={[this.state.pan.getLayout(), styles.circle]}
        >
          <Text style={styles.text}>{this.props.name}</Text>
        </Animated.View>
    );
  }
}

// Define size of tag
let CIRCLE_RADIUS = 30;
let styles = StyleSheet.create({
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "skyblue",
    width: CIRCLE_RADIUS * 3,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS
  }
});
