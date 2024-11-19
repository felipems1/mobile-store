import { Image, SafeAreaView, StyleSheet, Text } from 'react-native'
import { Button } from '../components/button'
import { router } from 'expo-router'

export default function Presentation() {
  const handleStart = () => {
    router.replace('/home')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        alt=""
        style={styles.logo}
        resizeMode="cover"
      />
      <Text style={styles.h1}>Mobile Store</Text>
      <Text style={styles.h2}>Aqui você encontra tudo que quiser.</Text>
      <Button title="Começar as compras" onPress={handleStart} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  h1: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  h2: {
    fontSize: 16,
    marginBottom: 28,
  },
})
