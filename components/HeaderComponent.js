import React, { Component } from "react";
import { Button, Text, View, HStack } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  render() {
    return (
      <View bgColor="#fff" px={4} py={4}>
        <Text fontSize={18} fontWeight="bold" ml={2}>
          {this.props.title}
        </Text>
      </View>
    );
  }
}

export default Header;
