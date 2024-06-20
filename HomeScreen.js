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

const jobs = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Facebook",
    icon: "facebook",
    backgroundColor: "#5386E4",
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Google",
    icon: "google",
    backgroundColor: "#04284A",
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "Amazon",
    icon: "amazon",
    backgroundColor: "#FF9900",
  },
  // Add more jobs as needed
];

const popularJobs = [
  {
    id: 1,
    title: "UX Designer",
    salary: "$100,000",
    company: "Apple",
    location: "Cupertino, CA",
    icon: "apple",
    backgroundColor: "white",
  },
  {
    id: 2,
    title: "Frontend Developer",
    salary: "$90,000",
    company: "Microsoft",
    location: "Redmond, WA",
    icon: "microsoft",
    backgroundColor: "white",
  },
  {
    id: 3,
    title: "Marketing Manager",
    salary: "$110,000",
    company: "Tesla",
    location: "Palo Alto, CA",
    icon: "tesla",
    backgroundColor: "white",
  },
  // Add more jobs as needed
];

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
              <MaterialCommunityIcons name={job.icon} size={30} color="#000" />
            </View>
            <View style={styles.jobInfo}>
              <Text style={styles.jobTitle}>{job.title}</Text>
              <Text style={styles.companyName}>{job.company}</Text>
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
              <MaterialCommunityIcons name={job.icon} size={25} color="#fff" />
            </View>
            <View style={styles.popularJobInfo}>
              <View style={styles.titleSalary}>
                <Text style={styles.popularJobTitle}>{job.title}</Text>
                <Text style={styles.popularJobSubtitle}>{job.salary}</Text>
              </View>
              <View style= {styles.nameLocation}>
                <Text style={styles.popularJobName}>{job.company}</Text>
                <Text style={styles.popularJobSubtitle}>{job.location}</Text>
              </View>
            </View>

          </View>
        ))}
      </ScrollView>
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
    color: "#95969D",
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
    color: "#555",
    color: "white",
  },

  verticalScrollContainer: {
    flex: 1,
  },
  popularJobCard: {
    height: 74,
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
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 30,
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
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
