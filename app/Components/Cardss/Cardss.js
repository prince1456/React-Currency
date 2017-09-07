import React from 'react';
import PropTypes from 'prop-types';
import {View, Image, Text } from 'react-native';
import styles from './styles'

const Cardss =  (props) => {

return (
        <View style={styles.container}>
          <View style={styles.titleBar}>
            <Text style= {styles.title}> {props.title}</Text>
          </View>
          <Image style={styles.image} source={{uri: props.src}}/>
          <View style={styles.description}>
            <Text style= {styles.desText}>{props.description}</Text>
          </View>
        </View>
      );
    };

Cardss.PropTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
  description: PropTypes.string,
};


export default Cardss;
