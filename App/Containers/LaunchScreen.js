// Libs
import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, Animated, Easing, PanResponder, Image } from "react-native";
import Modal from "react-native-modal"

// Custome Components
import Draggable from './../Components/Draggable'
import { Button } from './../Components/Button'

// Style
import styles from "./Styles/LaunchScreenStyles"

// Themes
import { Metrics, Images } from '../Themes/'

export default class Screen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpeningModal: false,
      tagNameInput: '',
      animatedValue: new Animated.Value(-1),
      isLoopingAnimation: false,
    }
  }

  openModal = () => {
    this.setState({isOpeningModal: true})
  }

  // Change text input tag name
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

  runAnimation = () => {
    this.state.animatedValue.setValue(-1)
      Animated.timing(this.state.animatedValue, {
        toValue: 0,
        duration: 1000,
        easing: Easing.easeInOutQuint
      }).start(() => this.runAnimation())
  }

  stopAnimation = () => {
    Animated.timing(this.state.animatedValue).stop()
  }

  toggleAnimation = () => {
    if(!this.state.isLoopingAnimation) {
      this.runAnimation()
    }
    else {
      this.stopAnimation()
    }
    this.setState(prev => ({
      isLoopingAnimation: !prev.isLoopingAnimation
    }))
  }

  // Render list of tags
  renderTags = (tags) => (
    tags.map((tag, index) =>
      <Draggable
        tag={tag}
        key={index}
        name={tag.name}
        savePosition={(position) => this.props.savePosition(tag.id, position)}
      />
  ))

  render() {
    const top = this.state.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, Metrics.screenWidth * (-1.5)]
    })

    return (
      <View style={styles.mainContainer}>
        <Image
          resizeMode={'cover'}
          source={Images.mainBackground}
          style={[styles.backgroundImage, styles.backgroundSize]}
        />
        <View style={styles.content}>
          <View style={styles.buttonGroup}>
            <Button
              onPressButton={this.openModal}
              name={'New'}
            />
            <Button
              onPressButton={this.toggleAnimation}
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
          {
            this.state.isLoopingAnimation &&
            <Animated.View
              style={[{
                width: 40,
                height: 40,
                borderRadius: 100,
                backgroundColor: 'red',
                position: 'relative',
                left: 5
              },
              {top}]}
            />
          }
        </View>
      </View>
    );
  }
}
