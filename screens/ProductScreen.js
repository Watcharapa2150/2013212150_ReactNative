import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

import axios from "axios";
import { ImageBackground } from "react-native-web";
import { SafeAreaView } from "react-native-safe-area-context";

const ProductScreen = ({navigation}) => {

  const [Product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //getData()for get data from backend
  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://api.codingthailand.com/api/course");
      //alert(JSON.stringify(res.data.data));
      setProduct(res.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error.message}</Text>
        <Text>เกิดข้อผิดพลาด ไม่สามารถติดต่อ Server ได้</Text>
      </View>
    );
  }

  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );

  /*useEffect(() => {
    getData();
  }, []);*/

  if (loading === true) {
    return (
      <View>
        <ActivityIndicator color="#f4511e" size={"large"} />
      </View>
    );
  }

  const _onRefresh = () => {
    getData();
  };

  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#C8C8C8",
        }}
      />
    );
  };

  const _renderItem = ({ item }) => {
    return (
      <SafeAreaView>
        <TouchableOpacity
        style={styles.addButtonStyle}
        onPress = {()=>{
          navigation.navigate('Detail')
        }}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: "row", margin: 5 }}>
          <Image
            resizeMode="cover"
            style={styles.thumbnail}
            source={{ uri: item.picture }}
          />
          <View style={styles.dataContainer}>
            <View style={styles.dataContent}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.detail}>{item.detail}</Text>
            </View>
          </View>
        </View>
      </View>
      </TouchableOpacity>
      </SafeAreaView>
    );
  };
  return (
    <View>
      <FlatList
        data={Product}
        keyExtractor={(item, index) => item.id.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={_renderItem}
        refreshing={loading}
        onRefresh={_onRefresh}
      ></FlatList>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    height: 80,

    elevation: 3,

    borderColor: "gray",

    borderRadius: 5,

    flexDirection: "row",

    marginHorizontal: 20,
  },

  dataContainer: {
    flex: 1,
  },

  thumbnail: {
    width: 70,

    height: 70,
  },
  dataContent: {
    marginTop: 5,

    marginLeft: 15,
  },

  title: {
    color: "#444",

    fontSize: 18,

    fontWeight: "bold",
  },

  detail: {
    fontSize: 16,

    color: "#888",

    fontWeight: "700",
  },
  addButtonStyle: {

    width: '100%',
    
    marginBottom: 15,
    
    },
});
