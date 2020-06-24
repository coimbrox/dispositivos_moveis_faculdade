import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  InputAccessoryView,
  Button,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  
  Permissions,
  Location,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MapView from 'react-native-maps';


class HomeScreen extends Component {
  render() {
    return (
      <View style={StyleSheet.container}>
        <Image
          style={{ width: -100, height: 200 }}
          source={require('./assets/Ifome2.png')}
        />

        <TextInput style={styles.input} placeholder="Digite seu email" />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Digite sua senha"
        />
        <TouchableOpacity style={{ margin: 20 }}
        styles = { styles.botao }>
          <Button
            title="Login"
            onPress={() => this.props.navigation.navigate('Details')}
          />

          <Text style={styles.botaoText}> Login </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class Miguel extends Component {
  render() {
    return (
      <View style={StyleSheet.container}>
        <Image
          style={{ width: -200, height: 200 }}
          source={require('./assets/Ifome3.png')}
        />

        <TextInput style={styles1.input1} placeholder="Digite o alimento" />

        <TouchableOpacity style={{ margin: 20 }}
        style1 = { styles.botao }>
          <Button
            title="Pesquise aqui"
            onPress={() => this.props.navigation.navigate('Maps')}
          />

          <Text style={styles.botaoText}> Pesquise aqui </Text>
        </TouchableOpacity>
      </View>
    );
  }
}



class Maps extends Component {
  render() {
    return (
      <MapView
        initialRegion={{
          latitude: -12.9708409,
          longitude: -38.4762857,
          latitudeDelta: 0.0042,
          longitudeDelta: 0.0031,
        }}
        style={styles3.mapView}
      />
    );
  }
}
class DetailsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 50 }}>Tela de Detalhes</Text>
        </View>

        <View style={{ margin: 20 }}>
          <Button
            title="Pesquisar"
            onPress={() => this.props.navigation.navigate('Miguel')}
          />
        </View>

        <View style={{ margin: 20 }}>
          <Button
            title="Ir para Tela Inicial"
            onPress={() => this.props.navigation.popToTop()}
          />
        </View>

        <View style={{ margin: 20 }}>
          <Button
            title="Voltar"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },

    Details: {
      screen: DetailsScreen,
    },
    
    Miguel: {
      screen: Miguel,
    },
    Maps: {
      screen: Maps,
    },
  },

  {
    initialRouteName: 'Home',
  }
);

const styles = StyleSheet.create({
  input: {
    marginTop: 80,
    padding: 10,
    width: 300,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3,
  },
  
  botaoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
const styles1 = StyleSheet.create({
  input1: {
    marginTop: 100,
    padding: 10,
    width: 300,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3,
  },
});


const styles3 = StyleSheet.create({
  mapView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}