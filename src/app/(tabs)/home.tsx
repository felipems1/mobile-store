import { FlatList, StyleSheet, View } from 'react-native'
import { getAllProducts } from '../../services/product'
import { ProductItem } from '../../components/product-item'

export default function Home() {
  const products = getAllProducts()

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem data={item} />}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    width: '100%',
    padding: 20,
    marginBottom: 20,
  },
})
