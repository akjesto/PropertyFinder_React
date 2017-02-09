'use strict';
var React = require('react')
var ReactNative = require('react-native')
var SearchPage = require('./SearchPage.js');
var SearchResults = require('./SearchResults.js');
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
       return (<ReactNative.Navigator tintColor='#FF6600' initialRoute={{
           id: 'SearchPage'
       }} renderScene={this.renderScene}/>);
}
   renderScene(route, _navigator) {
         switch (route.id) {
           case 'SearchPage':
               return (<SearchPage navigator={_navigator}/>);
           case 'SearchResults':
               return (<SearchResults navigator={_navigator}/>);


       }
   }

}
ReactNative.AppRegistry.registerComponent('PropertyFinder',function() {return PropertyFinderApp});
