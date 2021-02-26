import { 
  StatusBar 
} from 'expo-status-bar';

import 
  React,
  {
    useState
  } from 'react';

import { 
  Button, 
  Image, 
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  RefreshControl,
  SafeAreaView, 
  ScrollView, 
  StyleSheet, 
  Switch,
  Text, 
  TextInput,
  TouchableWithoutFeedback,
  View, 
} from 'react-native';

//RefreshControl
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

function App() {
  const pressButtonApp = () => {
    console.log('Botão pressionado');
    console.log('log');
  }

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  //RefreshControl
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={ styles.safeViewStyle }>
      <ScrollView 
        contentContainerStyle={ styles.scrollViewStyle} 
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>

        <View style={styles.container}>
          <Text style={styles.title}>
            Hello 
            <Text style={styles.subTitle}>
              World
            </Text>
          </Text>
          <Image style={styles.logoImage} source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}} />

          <TextInput
            style={styles.colInput}
            defaultValue="naotenhologin"
            autoCompleteType="username"
          />
          <TextInput
            style={styles.colInput}
            defaultValue="1234567890"
            autoCompleteType="password"
          />
          <View style={styles.colElementSwitch} >
            <View style={styles.elementSwitch}>
              <Text>Permanecer Logado {"\n"} </Text>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            <Button style={styles.colButton} title="Logar" onPress={pressButtonApp} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  safeViewStyle: {
    flex: 1,
  },
  scrollViewStyle: {
    flex: 1,
    backgroundColor: '#71C9E4',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '90%',
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: 'Arial',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 15,
    color: 'white',
    paddingLeft: 5,
  },
  logoImage: {
    width: 100,
    height: 100,
    marginTop: 10,
    marginBottom: 30,
    justifyContent: 'center',
  },
  colInput: {
    height: 45,
    width: '100%',
    borderWidth: 1,
    color: 'white',
    paddingLeft: 15,
    marginBottom: 15,
    borderRadius: 10,
    borderColor: '#333333',
  },
  colButton: {
    height: 35,
    marginTop: 10,
  },
  colElementSwitch: {
    color: 'white',
    fontSize: 15,
    width: '100%',
  },
  elementSwitch: {
    paddingTop: 5,
    marginBottom: 10,
  }
});
