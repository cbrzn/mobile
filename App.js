import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';

export default class ButtonBasics extends Component {
  _onPressUp() {
    return fetch(`http://192.168.1.2:3000/todos?title=up`, {
      method: 'POST',
         headers: {
           Accept: 'application/json',
           'Content-Type': 'application/json',
         },
       }).then((data) => data.json())
              .then((dataJSON) => {
                console.log(dataJSON);
            }).catch((error) => {
              console.log(error)
            })
    }
  _onPressDown() {
    return fetch(`http://192.168.1.2:3000/todos?title=down`, {
      method: 'POST',
         headers: {
           Accept: 'application/json',
           'Content-Type': 'application/json',
         },
       }).then((data) => data.json())
              .then((dataJSON) => {
                console.log(dataJSON);
            }).catch((error) => {
              console.log(error)
            })
    }

  _onPressLeft() {
    return fetch(`http://192.168.1.2:3000/todos?title=left`, {
      method: 'POST',
         headers: {
           Accept: 'application/json',
           'Content-Type': 'application/json',
         },
       }).then((data) => data.json())
              .then((dataJSON) => {
                console.log(dataJSON);
            }).catch((error) => {
              console.log(error)
            })
    }

  _onPressRight() {
    return fetch(`http://192.168.1.2:3000/todos?title=right`, {
      method: 'POST',
         headers: {
           Accept: 'application/json',
           'Content-Type': 'application/json',
         },
       }).then((data) => data.json())
              .then((dataJSON) => {
                console.log(dataJSON);
            }).catch((error) => {
              console.log(error)
            })
    }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressUp}
            title="Up"
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressLeft}
            title="Left"
          />
          <Button
            onPress={this._onPressRight}
            title="Right"
            color="#841584"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressDown}
            title="Down"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
