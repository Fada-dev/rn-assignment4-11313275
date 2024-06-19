import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home', { name, email });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.userName}>Jobizz</Text>
      <Text style={styles.welcomeMessage}>Welcome Back 👋</Text>
      <Text style={styles.subtitle}>Let's log in. Apply to jobs!</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#999"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>
      <View style={styles.otherOptions}>
        <View style={styles.divider} />
        <Text style={styles.continueWith}>or continue with</Text>
        <View style={styles.divider} />
      </View>

      <View style={styles.socialContainer}>
        <TouchableOpacity>
          <View style={[styles.socialButton, styles.appleButton]}>
            <Image source={require('./image/apple.png')} style={styles.socialIcon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[styles.socialButton, styles.googleButton]}>
            <Image source={require('./image/google.png')} style={styles.socialIcon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[styles.socialButton, styles.facebookButton]}>
            <Image source={require('./image/facebook.png')} style={styles.socialIcon} />
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={styles.accountText}>
          Haven't an account? <Text style={styles.registerText}>Register</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  userName: {
    fontSize: 22,
    fontWeight: '600',
    lineHeight: 33,
    textAlign: "left",
    color: "rgba(53, 104, 153, 1)",
    width: 150,
  },
  welcomeMessage: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
    color: "rgba(13, 13, 38, 1)",
    width: 207,
    height: 34,
    lineHeight: 34,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 24,
    lineHeight: 22,
    fontWeight: '400',
    color: "rgba(13, 13, 38, 1)",
    opacity: 0.4,
    letterSpacing: -0.7,
  },
  input: {
    width: "100%",
    height: 48,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  loginButton: {
    width: "100%",
    height: 48,
    backgroundColor: "rgba(53, 104, 153, 1)",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  otherOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  divider: {
    width: "35%",
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 16,
  },
  continueWith: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '400',
    color: "rgba(13, 13, 38, 1)",
    opacity: 0.4,
    letterSpacing: -0.7,
    top: 3,
  },
  socialContainer: {
    width: 216,
    height: 56,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 16,
    left: 75
  },
  socialButton: {
    width: 56,
    height: 56,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  appleButton: {},
  googleButton: {},
  facebookButton: {},
  socialIcon: {
    width: 76,
    height: 56,
  },
  accountText: {
    top: 15,
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '400',
    color: "rgba(13, 13, 38, 1)",
    opacity: 0.4,
  },
  registerText: {
    color: "#3b5998",
    fontSize: 14,
    textAlign: 'center',
  },
});

export default LoginScreen;
