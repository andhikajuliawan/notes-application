import { Text, View, Box, Center } from "native-base";
import React, { Component } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import HeaderComponent from "../components/HeaderComponent";

class InformationScreen extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <View flex={1} backgroundColor={"#CEDEE5"}>
        <HeaderComponent title="information" buttonBack={false} />
        <Center>
          <Box
            width={"95%"}
            mt={5}
            height={600}
            bgColor={"#FFFFFF"}
            rounded={"xl"}
          >
            <Center mt={10} mb={5}>
              <Ionicons
                name="ios-information-circle-outline"
                color={"#132552"}
                size={110}
              />
              <Text fontSize={20} fontWeight={"bold"} color={"#132552"}>
                About This Application
              </Text>
            </Center>
            <Box mx={5} mt={5} mb={20}>
              <Text mb={5} fontSize={15}>
                Aplikasi ini dirancang untuk sebagai projek pembelajaran mata
                kuliah pengembangan aplikasi bergerak program studi sistem
                informasi ITTelkom Surabaya.
              </Text>
              <Text mb={5} fontSize={15}>
                Aplikasi To do List adalah sebuah bagian dari perencanaan yang
                berupa sekumpulan daftar tugas yang perlu diselesaikan dalam
                rentan waktu tertentu. Dibuat dalam rentan waktu tertentu
                (harian, mingguan atau bulanan). Dengan aplikasi ini diharapkan
                pengguna dapat mengelola atau memenejemen waktu.
              </Text>
            </Box>
            <Center mt={10}>
              <Text>Version 1.0.0</Text>
            </Center>
          </Box>
        </Center>
      </View>
    );
  }
}

export default InformationScreen;
