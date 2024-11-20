import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { Product } from '../types/product'
import { router } from 'expo-router'

interface Props {
  data: Product
}

export function ProductItem({ data }: Props) {
  const handleClick = () => {
    router.push(`/product/${data.id}`)
  }
  return (
    <Pressable onPress={handleClick} style={styles.container}>
      <Image
        source={{ uri: data.image }}
        alt=""
        style={styles.img}
        resizeMode="cover"
      />
      <View style={styles.info}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.description}>{data.description}</Text>
        <Text style={styles.price}>
          R$ {data.price.toFixed(2).replace('.', ',')}
        </Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 8,
    backgroundColor: '#ccc',
    marginRight: 20,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 12,
    color: '#555',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
})
