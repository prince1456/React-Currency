import React from 'react';
import PropTypes from 'prop-types';
import {View, Image, Text } from 'react-native';

const Cardss =  (props) => {

return (
        <View>
          <View>
            <Text> {props.title}</Text>
          <View>
          <Image Source={{uri: props.src}}/>
          <View>
            <Text>{props.description}</Text>
          </View>
        </View>
      );
    };

    Cardss.PropTypes = {
      title: PropTypes.string,
      src: PropTypes.string,
      description: PropTypes.bool,};


export default Cardss;
