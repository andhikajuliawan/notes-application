import React, { Component } from "react";
import { Button, Center, NativeBaseProvider } from "native-base";

class Notes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
    };
  }

  getDataNotes = () => {
    fetch("https://pab-ittelkomsby.000webhostapp.com/index")
      .then((response) => response.json())
      .then((json) => this.setState({ notes: json }, () => console.log(json)))
      .catch((err) => console.log(err));
  };

  createDataNotes = () => {
    fetch("https://pab-ittelkomsby.000webhostapp.com/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "percobaan react native",
        content: "percobaan react native",
        status: "2",
        category: "2",
      }),
    })
      .then(() => console.log("data berhasil dibuat"))
      .catch((err) => console.log(err));
  };

  editDataNotes = () => {
    fetch("https://pab-ittelkomsby.000webhostapp.com/update/6", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "percobaan react native baru 1",
        content: "percobaan react native",
        status: "2",
        category: "2",
      }),
    })
      .then(() => console.log("data berhasil diupdate"))
      .catch((err) => console.log(err));
  };

  deleteDataNotes = () => {
    fetch("https://pab-ittelkomsby.000webhostapp.com/delete/6", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(() => console.log("data berhasil dihapus"))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Center flex={1}>
        <Button onPress={() => this.getDataNotes()}>tes get data</Button>
        <Button onPress={() => this.createDataNotes()}>tes create data</Button>
        <Button onPress={() => this.editDataNotes()}>tes edit data</Button>
        <Button onPress={() => this.deleteDataNotes()}>tes delete data</Button>
      </Center>
    );
  }
}

export default Notes;
