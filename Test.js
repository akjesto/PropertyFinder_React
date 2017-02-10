'use strict'
import React, {Component} from 'react'
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  ListView,
  Text
}from 'react-native';
var PropertyView = require('./PropertyView');
var styles = StyleSheet.create({
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height:1,
    backgroundColor: '#dddddd'
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  title:{
    fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  }
}
)



class Test extends React.Component {
  render() {
  return (<ReactNative.Text style={styles.text}>Hello World (Again)</ReactNative.Text>);
  }
}
module.exports = Test;
