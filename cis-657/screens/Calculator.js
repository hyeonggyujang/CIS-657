import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import React from "react";

const Calculator = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.currentVal}> 0 </Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.modifierButton}>
          <Text style={styles.text}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.modifierButton}>
          <Text style={styles.text}>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.modifierButton}>
          <Text style={styles.text}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton}>
          <Text style={styles.text}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.dataButton}>
          <Text style={styles.text}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dataButton}>
          <Text style={styles.text}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dataButton}>
          <Text style={styles.text}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton}>
          <Text style={styles.text}>X</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.dataButton}>
          <Text style={styles.text}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dataButton}>
          <Text style={styles.text}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dataButton}>
          <Text style={styles.text}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton}>
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.dataButton}>
          <Text style={styles.text}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dataButton}>
          <Text style={styles.text}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dataButton}>
          <Text style={styles.text}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={ [styles.dataButton, { flex: 2, marginLeft: 2 }] }>
          <Text style={styles.text}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dataButton}>
          <Text style={styles.text}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton}>
          <Text style={styles.text}>=</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const buttonStyle = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 2,
};

// parent container css
// {
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3D3A3A",
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 2,
  },
  currentVal: {
    flex: 1,
    color: "#fff",
    fontSize: 50,
    textAlign: 'right',
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  modifierButton: {
    ...buttonStyle,
    backgroundColor: "#4D4B4B",
  },
  operatorButton: {
    ...buttonStyle,
    backgroundColor: "#FF9225",
  },
  dataButton: {
    ...buttonStyle,
    backgroundColor: "#696970",
  },
  text: {
    color: "#fff",
    fontSize: 30,
  },
});

export default Calculator;
