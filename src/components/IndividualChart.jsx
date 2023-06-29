import React, { useEffect, useState } from "react";
import { Text, View, Dimensions, StyleSheet} from "react-native";
import { LineChart } from "react-native-chart-kit";

const IndividualChart = (props) => {
  const [dateLabels, setDateLabels] = useState(null);
  const [strengthScores, setStrengthScores] = useState(null);
  const userId = props.userId;
  const strength = props.strength;
  const handPart = props.handPart;

  const fetchStrengthData = async () => {
    const response = await fetch(
      `http://192.168.0.29:3000/charts?userId=${userId}&handPart=${strength}`
    );
    const json = await response.json();
    return json;
  };

  useEffect(() => {
    var dateLabelsArray = [];
    var strengthScoresArray = [];
    fetchStrengthData().then((json) => {
      json.forEach((element) => {
        dateLabelsArray.push(element.date.slice(0, 10));
        strengthScoresArray.push(element.strength);
      });
      setDateLabels(dateLabelsArray);
      setStrengthScores(strengthScoresArray);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.chartTitle}>{handPart}</Text>
      {dateLabels && strengthScores && (
        <LineChart
          data={{
            labels: dateLabels,
            datasets: [
              {
                data: strengthScores,
              },
            ],
          }}
          verticalLabelRotation={30}
          width={Dimensions.get("window").width - 10} // from react-native
          height={300}
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  chartTitle: {
    alignSelf: "center",
    fontSize: 20,
    backgroundColor: "rgb(246, 164, 23)",
    paddingHorizontal: 20,
    borderRadius: 20,
    color: "#FFFFFF"
  },
  container: {
    alignItems: "center",
    marginTop:10
  }
});

export default IndividualChart;
