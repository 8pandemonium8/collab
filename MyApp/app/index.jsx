import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Cat name="fig"/>
    </View>
  );
}

const Cat = (props) => {
  return <Text>Hello, I am your {props.name}!</Text>;
};


