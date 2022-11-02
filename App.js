import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    // View, text Component
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Životopis</Text>
        <Image style={styles.slika} source={require("./assets/slika.jpg")} />
      </View>

      {/* Flexbox layout */}
      <View style={styles.jumbotron}>
        <View style={styles.container}>
          <Text style={styles.info}>Osnovne informacije</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.tekst}>Katarina Mataija</Text>
          <Text style={styles.tekst}>Školska 13, 31220 Višnjevac</Text>
          <Text style={styles.tekst}>kmataija@ffos.hr</Text>
        </View>
      </View>

 <View style={styles.jumbotron}>
        <View style={styles.container}>
          <Text style={styles.info}>Obrazovanje</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.podnaslov}>Filozofski fakultet u Osijeku</Text>
          <Text style={styles.tekst}>Informatologija i Informacijske tehnologije (2022 - )</Text>
          <Text style={styles.podnaslov}>Filozofski fakultet u Osijeku</Text>
          <Text style={styles.tekst}>Informatologija (2017 - 2022)</Text>
        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
   backgroundColor: "#8D9EFF",
    fontFamily: "Roboto",
  },
  header: {
    borderBottomWidth: 1,
    paddingBottom: 20,
   backgroundColor: "#8D72E1"
  },
  title: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: 700,
    paddingBottom: 20,
    color: "#B9E0FF",
    paddingTop: 20
  },
  jumbotron: {
    flexDirection: "row",
    margin: 20,
  },
  slika: {
    margin: "auto",
    width: 100,
    height: 100,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  info: {
    fontSize: 16,
    fontWeight: 700,
    color: "#C6C4AB6"
  },
    tekst: {
    fontSize: 12,
    color: "white",
  },
    podnaslov: {
    fontSize: 12,
    fontWeight: 600,
    color: "white",
  }
});