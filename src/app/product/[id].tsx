import { router, Stack, useLocalSearchParams } from 'expo-router'
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { Button } from '../../components/button'
import { getProductById } from '../../services/product'

export default function Product() {
  const { id } = useLocalSearchParams()
  const idProduct = parseInt(id as string)

  const product = getProductById(idProduct)

  if (!product) {
    router.back()
  }

  const handleBuyButton = () => {
    alert('Você clicou no item: ' + 4)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: '' }} />
      <ScrollView style={styles.content}>
        <Image
          style={styles.img}
          source={{ uri: product?.image }}
          alt=""
          resizeMode="cover"
        />
        <Text style={styles.title}>{product?.title}</Text>
        <Text style={styles.description}>{product?.description}</Text>
        <Text style={styles.price}>
          R$ {product?.price.toFixed(2).replace('.', ',')}
        </Text>
      </ScrollView>
      <View style={styles.buttonContent}>
        <Button title="Comprar Agora" onPress={handleBuyButton} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 12,
  },
  img: {
    width: '100%',
    height: 250,
    borderRadius: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 16,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContent: {
    padding: 12,
  },
})
