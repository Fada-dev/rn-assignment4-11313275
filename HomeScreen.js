import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


function HomeScreen({ route }) {
  const { name, email } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <View style={styles.nameEmailContainer}>
          <Text style={styles.Name}>{name}</Text>
          <Text style={styles.Address}>{email}</Text>
        </View>
        <Image source={require('./image/Ellipse.png')} style={styles.profileimg} />
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <MaterialCommunityIcons
            name="magnify"
            size={20}
            color="gray"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search a job or position"
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Image source={require('./image/filter.png')} style={styles.filterIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: "#FAFAFD",
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  Name: {
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 36,
  },

  Address: {
    color: "gray",
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  nameEmailContainer: {
    flexDirection: 'column',
  },
  profileimg: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 30,
  },

  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    paddingHorizontal: 10,
    backgroundColor: "#F2F2F3",
  },

  searchIcon: {
    marginRight: 5,
  },

  searchInput: {
    height: 48,
    flex: 1,
    backgroundColor: "#F2F2F3",
  },

  filterButton: {
    backgroundColor: "#F2F2F3",
    height: 48,
    width: 48,
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  filterIcon: {
    width: '100%',
    height: '100%',
  },

});

export default HomeScreen;
