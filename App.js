import { StyleSheet, Text, View, TouchableOpacity, Image, SectionList, } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const datasource = [
  {
    type: 'Grass',
    bgcolor: 'lightgreen',
    color: 'green',
    icon: 'grass',
    data: [
      { image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_166-2x.png', name: 'Bulbasaur' },
      { image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_198-2x.png', name: 'Venusaur' }
    ]
  },
  {
    type: 'Water',
    bgcolor: 'lightblue',
    color: 'blue',
    data: [
      { image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_9-2x.png', name: 'Blastoise' },
      { image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_54-2x.png', name: 'Psyduck' }
    ]
  },
  {
    type: 'Electric',
    bgcolor: 'lightyellow',
    color: 'gold',
    data: [
      { image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_192-2x.png', name: 'Zaptos' },
      { image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_25-2x.png', name: 'Pikachu' }
    ]
  },
]

function PokemonCard({ name, image }) {
  return (
    <View>
      <View style={styles.cardContainer}>
        <Text style={styles.cardName}>{name}</Text>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
    </View>
  );
}

const RenderItem = ({ item }) => {
  return <PokemonCard name={item.name} image={item.image} />;
};


export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add Pokemon</Text>
        </TouchableOpacity>
      </View>
      <SectionList
        sections={datasource}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => <RenderItem item={item} />}
        renderSectionHeader={({ section: { type, bgcolor, color } }) => (
          <Text style={[styles.headerText, { backgroundColor: bgcolor, color: color }]}>{type}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  buttonContainer: {
    marginTop: 50,
    textAlign: 'center',
    marginBottom: 15
  },

  button: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 10
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    padding: 10,
    textAlign: 'center',
    borderWidth: 1
  },
  cardContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'lightgray'
  },
  cardName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },
});
