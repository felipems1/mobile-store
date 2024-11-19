import { Pressable, StyleSheet, Text } from 'react-native'

interface Props {
  title: string
  onPress: () => void
}

export function Button({ title, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  )
}

export const styles = StyleSheet.create({
  button: {
    backgroundColor: '#164e85',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
})
