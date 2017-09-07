import React, {Component} from 'react';
import { View, Text,Keyboard, Image, Animated, Platform} from 'react-native';

import styles from './styles';

class Logo extends Component {
  constructor(props){
    super();
    this.containerImageWidth = new Animated.Value(styles.$largeContainerSize)
    this.imageWidth = new Animated.Value(styles.$largeImageSize);
    this.textSize = new Animated.Value(styles.$largeText)

  }
  componentDidMount(){
    let showListener = "keyboardWillShow"
    let hideListener = "keyboardWillHide"
    if (Platform.OS === "android"){
      showListener = "keyboardDidShow"
      HideListener = "keyboardDidHide"
    }
    this.keyboardShowListener = Keyboard.addListener(showListener, this.keyboardShow)
    this.keyboardHideListener = Keyboard.addListener(hideListener, this.keyboardHide)

  }
  componentWillUnmount(){
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();

  }
  keyboardShow =() =>{
    Animated.timing(this.containerImageWidth, {
      toValue: styles.$smallContainerSize,
      duration: 250,
    }).start();
    Animated.timing(this.imageWidth, {
      toValue: styles.$smallImageSize,
      duration: 250,
    }).start();
    Animated.timing(this.textSize, {
      toValue: styles.$smallText,
      duration:250,
    }).start();

  }
  keyboardHide = () => {
    Animated.timing(this.containerImageWidth, {
      toValue: styles.$largeContainerSize,
      duration: 250,
    }).start();
    Animated.timing(this.imageWidth, {
      toValue: styles.$largeImageSize,
      duration: 250,
    }).start();
    Animated.timing(this.textSize,{
      toValue: styles.$largeText,
      duration: 250,
    }).start()
  }
  render(){
    const containerImageStyle = [
      styles.containerImage,
      { width: this.containerImageWidth, height: this.containerImageWidth}
    ];
    const imageStyle =[ styles.logo, {width: this.imageWidth}]
    const textStyle =[ styles.text, {fontSize: this.textSize}]
    return (
  <View style={styles.container}>
    <Animated.Image
      resizeMode="contain"
      style={containerImageStyle}
      source={require('./images/background.png')}
    >
      <Animated.Image resizeMode="contain" style={imageStyle} source={require('./images/logo.png')} />
    </Animated.Image>
    <Animated.Text style={textStyle}>Currency Converter</Animated.Text>
  </View>
 )};
};

export default Logo;
