import { StatusBar } from 'expo-status-bar';
import { DevSettings, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import InsertAttr from './InsertAttr';

const DisplayPrompt = (props)=>{
  return (<View style={styles.container}>
    <Text style={styles.title}>Your prompt:</Text>
    <Text style={styles.inputLabel}>{props.text}</Text>
  </View>);
}



export default function App() {
  const [person, setPerson] = useState("Boy");
  const [place, setPlace] = useState("New Zealand");
  const [pluralNoun, setPluralNoun] = useState("crocodiles");
  const [adverb, setAdverb] = useState("neatly");
  const [showPrompt, setShowPrompt] = useState(false);

  const prompt = `${person} says that ${pluralNoun} play the piano too ${adverb} in ${place}.`;
  return (
    !showPrompt ? 
    <View style={styles.container}>
      <Text
      style={styles.title}
      >GOOD DAY TO YOU!</Text>
      <StatusBar style="auto" />
      <View style={{flexDirection:"row", paddingVertical: 3}}> 
        <Text style={styles.inputLabel}>Enter a Person:</Text>
        <TextInput 
        placeholder="Johnny"
        style={styles.inputField} 
        onChangeText={newText => setPerson(newText)}/>
      </View>

      <View style={{flexDirection:"row", paddingVertical: 3}}> 
        <Text style={styles.inputLabel}>Enter a Place:</Text>
        <TextInput 
        placeholder="New York"
        style={styles.inputField} 
        onChangeText={newText => setPlace(newText)}/>
      </View>
      
      <InsertAttr partOfSpeech="a plural noun"  partPlaceholder="chickens" method={setPluralNoun}/>
      <InsertAttr partOfSpeech="an adverb"  partPlaceholder="boldly" method={setAdverb}/>

      <Pressable onPress={(variable)=>{setShowPrompt(!showPrompt)}}><Text style={styles.button}>Submit your parts of speech!</Text></Pressable>
    </View> : <DisplayPrompt text={prompt}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 8,
    borderColor: '#2C4E00'
  },
  title: {
    fontSize: 30,
    fontWeight: "700"
  },
  inputField: {
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 7,
    padding: 5,
  },
  inputLabel: {
    padding: 3,
    margin: 2,
  },
  button: {
    backgroundColor: "#2C4E00",
    borderRadius: 8,
    padding: 6,
    color: "#7BB992"
  }
});
