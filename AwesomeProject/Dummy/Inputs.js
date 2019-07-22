import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Picker
} from "react-native";

class Inputs extends Component {
  state = {
    SSID: "",
    password: "",
    user: ""
  };
  handleEmail = text => {
    this.setState({ SSID: text });
  };
  handlePassword = text => {
    this.setState({ password: text });
  };
  login = (SSID, pass) => {
    alert("SSID: " + SSID + " password: " + pass);
  };
  updateUser = user => {
    this.setState({ user: user });
  };
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={{ fontSize: 32, textAlign: "center" }}>
            Wifi_Settings
          </Text>
        </View>
        <Text  style={styles.label}>SSID:</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="SSID"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleEmail}
        />
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handlePassword}
          secureTextEntry={true}
        />
        <View>
          <Picker
            selectedValue={this.state.user}
            onValueChange={this.updateUser}
          >
            <Picker.Item label="Wifi_Mode" />
            <Picker.Item label="Wifi_ON" value="Wifi Turned On" />
            <Picker.Item label="Wifi_OFF" value="Wifi-Turned Off " />
          </Picker>
          <Text style={styles.text}>{this.state.user}</Text>
        </View>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.login(this.state.SSID, this.state.password)}
        >
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Inputs;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40
  },
  submitButtonText: {
    color: "white",
    textAlign: "center"
  },
  text: {
    fontSize: 12,
    alignSelf: "center",
    color: "red",
    },
    label:{
      margin:15
    }
    
});
