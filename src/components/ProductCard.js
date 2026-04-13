import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function formatRupiah(value) {
  return `Rp ${value.toLocaleString('id-ID')}`;
}

export default function ProductCard({ product, onAdd }) {
  return (
    <View style={styles.card}>
      <Text style={styles.image}>{product.image}</Text>
      <View style={styles.info}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{formatRupiah(product.price)}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => onAdd(product)}>
        <Text style={styles.buttonText}>Tambah ke Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  image: {
    fontSize: 30,
    width: 44,
    textAlign: 'center',
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  price: {
    marginTop: 4,
    fontSize: 14,
    color: '#2563eb',
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#1f6feb',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 12,
  },
});
