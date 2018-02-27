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
    // this._val = { x:0, y:0 }
    // this.state.pan.addListener((value) => this._val = value);

    // Initialize PanResponder with move handling
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => true,
      onPanResponderMove: Animated.event([null, {
        dx : this.state.pan.x,
        dy : this.state.pan.y
      }]),
      onPanResponderRelease: (e, gesture) => {
        console.log('e release ', e)
        console.log('gesture release ', gesture)
        // this.state.pan.setValue({ x:0, y:0})
      }
      // onPanResponderRelease: (e, gesture) => {

      //   if (this.isDropArea(gesture)) {
      //     Animated.timing(this.state.opacity, {
      //     toValue: 0,
      //     duration: 1000
      //   }).start(() =>
      //     this.setState({
      //       showDraggable: false
      //     })
      //   );
      //   } else {
      //     Animated.spring(this.state.pan, {
      //       toValue: { x: 0, y: 0 },
      //       friction: 5
      //     }).start();
      //   }
        // adjusting delta value
      // this.state.pan.setValue({ x:0, y:0})
      // }
    });
    // this.state.pan.setValue({ x: 0, y: 0})
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
