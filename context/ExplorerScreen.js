import React from "react";
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const categories = [
  { name: "Pizza", image: require("../assets/pizza.png") },
  { name: "Burgers", image: require("../assets/burgers.png") },
  { name: "Steak", image: require("../assets/steak.png") },
];

const popularItems = [
  { name: "Food 1", author: "By Viet Nam", price: "$1", image: require("../assets/bundau.png") },
  { name: "Food 2", author: "By Chef A", price: "$3", image: require("../assets/pho.png") },
];

const ExplorerScreen = () => {
  return (
    <ScrollView style={styles.container}>5
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={20} color="#aaa" style={styles.searchIcon} />
        <TextInput placeholder="Search for meals or area" style={styles.searchInput} />
      </View>
      
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Top Categories</Text>
        <TouchableOpacity>
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
        {categories.map((item, index) => (
          <View key={index} style={styles.categoryItem}>
            <Image source={item.image} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
      
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Items</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.popularContainer}>
        {popularItems.map((item, index) => (
          <View key={index} style={styles.popularItem}>
            <Image source={item.image} style={styles.popularImage} />
            <Text style={styles.popularText}>{item.name}</Text>
            <Text style={styles.popularAuthor}>{item.author}</Text>
            <Text style={styles.popularPrice}>{item.price}</Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, paddingVertical: 8 },
  sectionHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 },
  sectionTitle: { fontSize: 18, fontWeight: "bold" },
  filterText: { color: "orange" },
  categoryContainer: { flexDirection: "row" },
  categoryItem: { alignItems: "center", marginRight: 15 },
  categoryImage: { width: 70, height: 70, borderRadius: 10 },
  categoryText: { marginTop: 5 },
  viewAll: { color: "orange" },
  popularContainer: { flexDirection: "row" },
  popularItem: { backgroundColor: "#f9f9f9", padding: 10, borderRadius: 10, marginRight: 15 },
  popularImage: { width: 100, height: 100, borderRadius: 10 },
  popularText: { fontWeight: "bold" },
  popularAuthor: { color: "gray", fontSize: 12 },
  popularPrice: { fontSize: 16, fontWeight: "bold", marginTop: 5 },
});

export default ExplorerScreen;
