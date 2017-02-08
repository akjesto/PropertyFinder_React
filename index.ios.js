'use strict';
var React = require('react')
var ReactNative = require('react-native')
var SearchPage = require('./SearchPage.js');
var styles = ReactNative.StyleSheet.create({
  text:{
    color: 'black',
    backgroundColor: 'white',
    fontSize: 14,
    margin: 80
  },
  container:{
  	flex:1
  }
});

class HelloWorld extends React.Component {
  render() {
  return (<ReactNative.Text style={styles.text}>Hello World (Again)</ReactNative.Text>);
  }
}
class PropertyFinderApp extends React.Component {
  render() {
    return (
      <ReactNative.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}/>
    );
  }
}
ReactNative.AppRegistry.registerComponent('PropertyFinder',function() {return PropertyFinderApp});
