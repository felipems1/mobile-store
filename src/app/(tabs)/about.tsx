import { Image, StyleSheet, Text, View } from 'react-native'

export default function About() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://github.com/felipems1.png' }}
        alt=""
        style={styles.avatar}
      />
      <Text style={styles.title}>
        Criado por <Text style={{ fontWeight: 'bold' }}>felipe.dev</Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 1000,
  },
  title: {
    marginVertical: 20,
    fontSize: 16,
  },
})
