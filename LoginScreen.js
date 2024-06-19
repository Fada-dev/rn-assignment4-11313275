import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  Text,
  View,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    navigation.navigate("Home", { name, email });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Jobizz</Text>
        <Text style={styles.welcomeMessage}>Welcome Back</Text>
        <Text style={styles.message}>Let's Login. Apply to Jobs?</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <View style={styles.loginButton}> 
          <Button title="Login" onPress={handleLogin} color={'white'}/>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(250, 250, 253, 1)",
  },

  content: {
    margin: 10,
  },

  welcomeMessage: {
    fontSize: 24,
    fontWeight: 600,
  },

  title: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: "left",
    color: "rgba(53, 104, 153, 1)",
    lineHeight: 33,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
  },

  loginButton: {
    width: 'auto',
    borderWidth: 1,
    borderColor: "#000000",
    borderStyle: "solid",
    backgroundColor: 'blue'
  },
});
