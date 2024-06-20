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

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Facebook",
      salary: "$120,00",
      location: "Menlo Park, CA",
      icon: require('./image/facebook.png'),
      backgroundColor: "#5386E4",
    },
    {
      id: 2,
      title: "Product Manager",
      company: "Google",
      salary: "$150,00",
      location: "Mountain View, CA",
      icon: require('./image/google.png'),
      backgroundColor: "#04284A",
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "Amazon",
      salary: "$130,00",
      location: "Seattle, WA",
      icon: require('./image/burger.png'),
      backgroundColor: "#FF9900",
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "Amazon",
      salary: "$130,00",
      location: "Seattle, WA",
      icon: require('./image/burger.png'),
      backgroundColor: "black",
    },
    {
      id: 5,
      title: "Data Scientist",
      company: "Amazon",
      salary: "$130,00",
      location: "Seattle, WA",
      icon: require('./image/burger.png'),
      backgroundColor: "pink",
    },
    {
      id: 6,
      title: "Data Scientist",
      company: "Amazon",
      salary: "$130,00",
      location: "Seattle, WA",
      icon: require('./image/burger.png'),
      backgroundColor: "violet",
    },
    // Add more jobs as needed
  ];

  const popularJobs = [
    {
      id: 1,
      title: "UX Designer",
      salary: "$100,000/y",
      company: "Apple",
      location: "Cupertino, CA",
      icon: require('./image/burger.png'),
      backgroundColor: "white",
    },
    {
      id: 2,
      title: "Frontend Developer",
      salary: "$190,000/y",
      company: "Microsoft",
      location: "Redmond, WA",
      icon: require('./image/bingo.png'),
      backgroundColor: "white",
    },
    {
      id: 3,
      title: "Marketing Manager",
      salary: "$110,000/y",
      company: "Tesla",
      location: "Palo Alto, CA",
      icon: require('./image/facebook.png'),
      backgroundColor: "white",
    },
    {
      id: 4,
      title: "Frontend Developer",
      salary: "$90,000/y",
      company: "Google",
      location: "Redmond, WA",
      icon: require('./image/google.png'),
      backgroundColor: "white",
    },
    {
      id: 5,
      title: "Frontend Developer",
      salary: "$9,000/y",
      company: "Facebook",
      location: "Redmond, WA",
      icon: require('./image/apple.png'),
      backgroundColor: "white",
    },
    // Add more jobs as needed
  ];

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

      <View style={styles.sectionTitleContainer}>
        <Text style={styles.sectionTitle}>Featured Jobs</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <ScrollView
        horizontal
        style={styles.scrollContainer}
        showsHorizontalScrollIndicator={false}
      >
        {jobs.map((job) => (
          <View
            key={job.id}
            style={[styles.jobCard, { backgroundColor: job.backgroundColor }]}
          >
            <View style={styles.iconContainer}>
              <Image source={job.icon} style={styles.jobIcon} />
            </View>
            <View style={styles.jobInfo}>
              <Text style={styles.jobTitle}>{job.title}</Text>
              <Text style={styles.companyName}>{job.company}</Text>
              <View style={styles.jobDetails}>
                <Text style={styles.jobDetailsText}>{job.salary}</Text>
                <Text style={styles.jobDetailsText}>{job.location}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.sectionTitleContainer}>
        <Text style={styles.sectionTitle}>Popular Jobs</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <ScrollView style={styles.verticalScrollContainer}>
        {popularJobs.map((job) => (
          <View
            key={job.id}
            style={[
              styles.popularJobCard,
              { backgroundColor: job.backgroundColor },
            ]}
          >
            <View style={styles.popularJobiconContainer}>
              <Image source={job.icon} style={styles.popularJobIcon} />
            </View>
            <View style={styles.popularJobInfo}>
              <View style={styles.titleSalary}>
                <Text style={styles.popularJobTitle}>{job.title}</Text>
                <Text style={[styles.popularJobSubtitle, { fontWeight: 'bold', color: 'black' }]}>{job.salary}</Text>
              </View>
              <View style={styles.nameLocation}>
                <Text style={styles.popularJobName}>{job.company}</Text>
                <Text style={styles.popularJobSubtitle}>{job.location}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

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
  sectionTitleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    color: "#0D0D26",
    fontWeight: "bold",
    lineHeight: 20.8,
  },
  seeAll: {
    color: "#3b5998",
    fontSize: 13,
    lineHeight: 20.8,
  },
  scrollContainer: {
    height: 0,
  },
  jobCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 24,
    marginRight: 15,
    width: 280,
    height: 186,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
    elevation: 5,
  },
  iconContainer: {
    height: 46,
    width: 46,
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 12,
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  jobIcon: {
    width: 60,
    height: 50,
    resizeMode: 'contain',
  },
  jobInfo: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  companyName: {
    fontSize: 14,
    color: "white",
  },
  jobDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    width: 220
  },
  jobDetailsText: {
    fontSize: 14,
    color: 'white',
    top: 80,
    right: 50
  },
  verticalScrollContainer: {
    flex: 1,
  },
  popularJobCard: {
    height: 94, 
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
    elevation: 5,
  },
  popularJobiconContainer: {
    padding: 10,
    borderRadius: 30,
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  popularJobIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  popularJobInfo: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  titleSalary: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameLocation: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  popularJobTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  popularJobSubtitle: {
    fontSize: 14,
    color: "#555",
  },
  popularJobName: {
    fontSize: 14,
    color: "#555",
  },
});

export default HomeScreen;
