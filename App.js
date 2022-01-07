import { StatusBar } from 'expo-status-bar';
import { disableExpoCliLogging } from 'expo/build/logs/Logs';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';

export default function App() {

  const [cnt, setCnt] = useState(0); 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Number Counter</Text> {/* title */}

      <Text style={styles.textTitle}>Current Number</Text> {/* subtitle */}

      <Text style={styles.cnt}>{cnt}</Text> {/* current number */}

      <View style={styles.buttonBox}> {/* counting logic */}
        <View style={styles.button1}>
          <Button color='white' stlye={styles.button1} title='더하기' onPress={ () => setCnt(cnt + 1) }/>
        </View>
        <View style={styles.button2}>
          <Button color='white' stlye={styles.button1} title='빼 기' onPress={ () => setCnt(cnt - 1) }/>
        </View>
      </View>
      
      <View style={styles.check}> {/* alert */}
        <Button color='white' title='Check' onPress={ () => Alert.alert('현재 숫자는 ' + cnt + ' 입니다.') }/>
      </View>
      

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    textAlign: 'center',
    paddingVertical: 20,
    color: 'white',
    width: '90%',
    backgroundColor: 'pink',
    fontSize: 35,
    marginBottom: 30
  },
  textTitle:{
    textAlign: 'center',
    backgroundColor: 'white',
    marginBottom: 15,
    fontSize: 25
  },
  cnt:{
    fontSize: 50,
    fontWeight: '300',
    borderColor: 'black',
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20

  },
  buttonBox:{
    marginTop: 30,
    flexDirection: 'row',
    width: '80%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button1:{
    backgroundColor: 'red',
    width: '30%',
    height: 40,
    borderWidth: 2,
    borderColor: 'black'
  },
  button2:{
    backgroundColor: 'blue',
    width: '30%',
    borderWidth: 2,
    borderColor: 'black'
  },
  check:{
    marginVertical: 20,
    backgroundColor: 'skyblue'
  }
});
