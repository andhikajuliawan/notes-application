import {
  Box,
  Button,
  CheckIcon,
  Center,
  Input,
  ScrollView,
  Select,
  Text,
  TextArea,
  View,
  StatusBar,
  Pressable,
} from "native-base";

import React, { Component } from "react";
import HeaderComponent from "../components";

class AddScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      statuses: [],
      inputTitle: "",
      inputContent: "",
      inputStatus: "",
      inputCategory: "",
    };
  }

  getDataCategories = () => {
    fetch("https://pab-ittelkomsby.000webhostapp.com/categories")
      .then((response) => response.json())
      .then((json) => this.setState({ categories: json.categories }))
      .catch((err) => console.log(err));
  };
  getDataStatuses = () => {
    fetch("https://pab-ittelkomsby.000webhostapp.com/statuses")
      .then((response) => response.json())
      .then((json) => this.setState({ statuses: json.statuses }))
      .catch((err) => console.log(err));
  };

  createDataNotes = () => {
    const { inputTitle, inputContent, inputCategory } = this.state;
    // cegah agar data yang di input tidak kosong
    if (inputTitle === "" || inputContent === "" || inputCategory === "") {
      console.log("Isi judul dan content serta kategori");
      return;
    }

    fetch("https://pab-ittelkomsby.000webhostapp.com/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: this.state.inputTitle,
        content: this.state.inputContent,
        status: "2",
        category: this.state.inputCategory,
      }),
    })
      .then(() => console.log("data berhasil dibuat"))
      .catch((err) => console.log(err));
    this.props.navigation.navigate("HomeScreen");
  };

  componentDidMount = () => {
    this.getDataCategories();
    this.getDataStatuses();
  };

  render() {
    return (
      <>
        <HeaderComponent title="Add List" buttonBack={false} />
        <ScrollView bgColor="#CEDEE5">
          <Box
            bgColor="#fff"
            width="95%"
            borderRadius={10}
            my={5}
            m="auto"
            px={7}
            py={5}
          >
            <Text fontWeight="medium" my={1}>
              Title
            </Text>
            <Input
              variant="underlined"
              placeholder="Masukkan Title"
              onChangeText={(inputTitle) =>
                this.setState({ inputTitle: inputTitle })
              }
              p={0}
            />
            <Text fontWeight="medium" mt={2} my={1}>
              Content
            </Text>
            <TextArea
              h={20}
              placeholder="Masukkan Content"
              w="100%"
              onChangeText={(inputContent) =>
                this.setState({ inputContent: inputContent })
              }
            />
            <Text fontWeight="medium" mt={2}>
              Status
            </Text>
            <Select
              selectedValue={this.state.inputStatuses}
              minWidth="200"
              accessibilityLabel="Pilih Status"
              placeholder="Pilih Status"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(inputValue) =>
                this.setState({ inputStatus: inputValue })
              }
            >
              {this.state.statuses.map((status) => {
                return (
                  <Select.Item
                    label={status.status}
                    value={status.id}
                    key={status.id}
                  />
                );
              })}
            </Select>
            <Text fontWeight="medium" mt={2}>
              Category
            </Text>
            <Select
              selectedValue={this.state.inputCategories}
              minWidth="200"
              accessibilityLabel="Pilih Category"
              placeholder="Pilih Category"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(inputValue) =>
                this.setState({ inputCategory: inputValue })
              }
            >
              {this.state.categories.map((categorie) => {
                return (
                  <Select.Item
                    label={categorie.category}
                    value={categorie.id}
                    key={categorie.id}
                  />
                );
              })}
            </Select>

            <View>
              {/* Menggunakan pressable agar dapat menerapkan custom bgColor dan masih dapat feedback
                  kalau pakai button di set bgColor maka tidak dapat feeback saat button ditekan
               */}
              <Pressable onPress={() => this.createDataNotes()} mt={10}>
                {({ isPressed }) => {
                  return (
                    <Box
                      bg={isPressed ? "#016a91" : "#0185B7"}
                      px={3}
                      py={3}
                      borderRadius="full"
                    >
                      <Text color="white" textAlign="center">
                        Submit
                      </Text>
                    </Box>
                  );
                }}
              </Pressable>
            </View>
          </Box>
        </ScrollView>
      </>
    );
  }
}

export default AddScreen;
