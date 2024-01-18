import { StyleSheet, Text, View } from "react-native";
import { MenuComponent } from "./MenuComponent";

export const MenuComponent23 = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>c</Text>
        <Text>c</Text>
        <Text>c</Text>
        <Text>c</Text>
        <Text>c</Text>
        <Text>c</Text>
        <Text>c</Text>
        <Text>c</Text>
        <Text>c</Text>
        <Text>c</Text>
        <Text>c</Text>
        <Text>c</Text>
        {/* Otro contenido si es necesario */}
      </View>
      <MenuComponent navigation={navigation} customTop='0%'/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Alinea los elementos al final
  },
  content: {
    flex: 1, // Asegura que el contenido se expanda y ocupe todo el espacio
    paddingHorizontal: 10, // Espaciado horizontal, ajusta según sea necesario
    paddingBottom: 10, // Espaciado inferior, ajusta según sea necesario
  },
});
