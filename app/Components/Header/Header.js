import React from "react";
import PropTypes from 'prop-types';
import { Image, TouchableOpacity, View} from 'react-native';
import styles from './styles'

const Header = ({onPress}) => (
  <View style= {styles.container}>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image resizeMode="contain" style={styles.icon} source= {require('./images/gear.png')}/>
    </TouchableOpacity>
  </View>
)
Header.PropTypes ={
  onPress: PropTypes,
}
export default Header;
