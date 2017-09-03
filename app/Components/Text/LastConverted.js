import React from "react"
import PropTypes from 'prop-types';
import {Text} from 'react-native'
import styles from "./styles"
import moment from "moment"


const LastConverted = (props) => (
    <Text style= {styles.text}>
        1 {props.base} = {props.conversionRate} {props.qoute} as of { moment(props.date).format('MMMM D, YYY')}
    </Text>


)

LastConverted.PropTypes = {
  date: PropTypes.object,
  base: PropTypes.string,
  qoute: PropTypes.string,
  conversionRate: PropTypes.number
}


export default LastConverted
