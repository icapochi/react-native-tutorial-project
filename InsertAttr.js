import { StyleSheet, Text, TextInput, View } from "react-native";



export default function InsertAttr(props){
    return (<View style={{flexDirection: "row", paddingVertical: 3}}>
        <Text style={styles.inputLabel}>Insert {props.partOfSpeech}:</Text>
        <TextInput 
        placeholder={props.partPlaceholder ? props.partPlaceholder : props.partOfSpeech}
        style={styles.inputField} 
        onChangeText={newText => props.method(newText)}/>
    </View>);
}

const styles = StyleSheet.create({
inputField: {
  borderWidth: 3,
  borderColor: "black",
  borderRadius: 7,
  padding: 5,
},
inputLabel: {
    padding: 3,
  }
})