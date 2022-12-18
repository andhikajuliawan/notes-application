import { View, Text, Button } from "native-base";
import React, { Component } from "react";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <View>
        <Text>Home Screen</Text>
        <Button onPress={() => this.props.navigation.navigate("EditScreen")}>
          edit
        </Button>
      </View>
    );
  }
}

export default HomeScreen;
