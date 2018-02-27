import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, Animated, Easing } from "react-native";
import Modal from "react-native-modal"

import Draggable from "./../Components/Draggable"
import { Button } from './../Components/Button'

import styles from "./Styles/LaunchScreenStyles";
import { Metrics } from '../Themes/'

export default class Screen extends Component {
  constructor(props) {
    super(props)
    this.animatedValue = new Animated.Value(-1)
    this.state = {
      isOpeningModal: false,
      tagNameInput: '',
      scale: new Animated.Value(1),
      fade: new Animated.Value(1),
      isLoopingAnimation: false
    }
  }

  openModal = () => {
    this.setState({isOpeningModal: true})
  }

  onChangeText = (text) => {
    this.setState({tagNameInput: text})
  }

  addTag = () => {
    this.props.addTag(this.state.tagNameInput)
    this.setState({
      isOpeningModal: false,
      tagNameInput: ''
    })
  }

  animateNext = () => {
    // this.animatedValue.setValue(-1)
    this.setState(prev => ({
      isLoopingAnimation: !prev.isLoopingAnimation
    }))
    console.log('set state ', this.state.isLoopingAnimation)
    while(!this.state.isLoopingAnimation) {
      console.log('loop')
      setTimeout(() => {
        // Animated.parallel([
          Animated.timing(this.animatedValue, {
            toValue: 0,
            duration: 500,
            easing: Easing.easeInOutQuint
          }).start()
          // Animated.timing(this.state.scale, {
          //   toValue: 1.5,
          //   duration: 500,
          //   easing: Easing.easeInOutQuint
          // }).start(),
          // Animated.timing(this.state.fade, {
          //   toValue: 0,
          //   duration: 500,
          //   easing: Easing.easeInOutQuint
          // }).start()
        // ])
        this.animatedValue.setValue(-1)
        // this.state.scale.setValue(1)
        // this.state.fade.setValue(1)
      }, 700);
    }
  }

  renderTags = (tags) => (
    tags.map((tag, index) => <Draggable key={index}  name={tag.name}/>)
  )

  render() {
    const top = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, Metrics.screenWidth * (-1.5)]
    })

    return (
      <View style={styles.mainContainer}>
        <View style={styles.buttonGroup}>
          <Button
            onPressButton={this.openModal}
            name={'New'}
          />
          <Button
            onPressButton={this.animateNext}
            name={'Animate'}
          />
        </View>
        <View style={styles.row}>
          {this.renderTags(this.props.tags)}
        </View>

        <Modal
          isVisible={this.state.isOpeningModal}
          backdropColor={"transparent"}
          backdropOpacity={1}
          animationInTiming={500}
          style={{
            justifyContent: "center",
          }}
        >
          <View style={styles.modalWrapper}>
            <Text style={styles.modalTitle}>{'New Tag'}</Text>
            <TextInput style={styles.modalInput}
              value={this.state.tagNameInput}
              onChangeText={this.onChangeText}
            />
            <Button
              onPressButton={this.addTag}
              name={'Save'}
            />
          </View>
        </Modal>

        <Animated.View
          style={[{
            opacity: this.state.fade,
            transform: [
              {scale: this.state.scale}
            ],
            width: 40,
            height: 40,
            backgroundColor: 'red',
            position: 'relative',
            left: 5
          },
          {top}]}
        />
      </View>
    );
  }
}
