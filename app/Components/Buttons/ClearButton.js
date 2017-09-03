import React  from 'react'
import PropTypes from 'prop-types';
import {TouchableOpacity, View, Text, Image} from 'react-native'
import styles from './styles'


const ClearButton = (props)=> (
    <TouchableOpacity style = {styles.container}>
        <View style = {styles.wrapper}>
            <Image resizeMode= 'contain' style={styles.icon} source={require('./images/icon.png')} />
            <Text style= {styles.text} > {props.text} </Text>
        </View>
    </TouchableOpacity>
);


ClearButton.PropTypes ={
  text: PropTypes.string,
  onPress: PropTypes.func,
};


export default ClearButton
