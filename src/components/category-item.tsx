import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { Category } from '../types/category'
import { router } from 'expo-router'

interface Props {
  data: Category
}

export function CategoryItem({ data }: Props) {
  const handleClick = () => {
    router.push(`/categories/${data.id}`)
  }

  return (
    <Pressable onPress={handleClick} style={styles.container}>
      <Image
        source={{ uri: data.cover }}
        alt=""
        style={styles.img}
        resizeMode="cover"
      />
      <View style={styles.bg}></View>
      <View style={styles.box}>
        <Text style={styles.title}>{data.title}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    backgroundColor: '#333',
    borderRadius: 12,
  },
  img: {
    width: '100%',
    height: 150,
    borderRadius: 12,
  },
  bg: {
    height: 150,
    marginTop: -150,
    backgroundColor: 'black',
    opacity: 0.6,
    borderRadius: 12,
  },
  box: {
    height: 150,
    marginTop: -150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
  },
})
