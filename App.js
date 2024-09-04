import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleLogin = async () => {
    if (username === 'admin' && password === 'password') {
      setMessage('Authentication Success. You\'re being redirected...');
      setUsername('');
      setPassword('');
    }
  }

  return (
    <View style={styles.container}>
      <Image source={require('./assets/aviao.png')} style={styles.image} />
      <View>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View>
        {message !== "" ? (<Text>{message}</Text>) : (<Text> </Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6', // Azul bebê
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: 200,
  },
  button: {
    backgroundColor: '#1E90FF', // Cor do botão (Azul)
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25, // Arredondando o botão
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
