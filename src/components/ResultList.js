import react from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultDetail from "./ResultsDetail";

const ResultList = (props) => {
  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>
      <FlatList
        horizontal={true}
        data={props.result}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultDetail result={item} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default ResultList;