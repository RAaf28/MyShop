import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function formatRupiah(value) {
  return `Rp ${value.toLocaleString('id-ID')}`;
}

export default function CartItem({ item, onRemove, onIncrement, onDecrement }) {
  return (
    <View style={styles.row}>
      <Text style={styles.image}>{item.image}</Text>
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{formatRupiah(item.price)} / pcs</Text>
        <Text style={styles.subtotal}>Subtotal: {formatRupiah(item.price * item.quantity)}</Text>
      </View>

      <View style={styles.actions}>
        <View style={styles.qtyWrap}>
          <TouchableOpacity
            style={[styles.qtyButton, item.quantity <= 1 && styles.qtyButtonDisabled]}
            onPress={() => onDecrement(item.id)}
            disabled={item.quantity <= 1}
          >
            <Text style={styles.qtyButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.qtyText}>{item.quantity}</Text>
          <TouchableOpacity style={styles.qtyButton} onPress={() => onIncrement(item.id)}>
            <Text style={styles.qtyButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.removeButton} onPress={() => onRemove(item.id)}>
          <Text style={styles.removeText}>Hapus</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  image: {
    fontSize: 26,
    width: 38,
    textAlign: 'center',
  },
  info: {
    flex: 1,
  },
  actions: {
    alignItems: 'flex-end',
    gap: 8,
  },
  qtyWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#eff6ff',
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  qtyButton: {
    width: 26,
    height: 26,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1f6feb',
  },
  qtyButtonDisabled: {
    backgroundColor: '#9ca3af',
  },
  qtyButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 18,
  },
  qtyText: {
    minWidth: 20,
    textAlign: 'center',
    fontWeight: '700',
    color: '#111827',
  },
  name: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
  },
  price: {
    marginTop: 3,
    color: '#2563eb',
    fontWeight: '600',
  },
  subtotal: {
    marginTop: 2,
    color: '#374151',
    fontSize: 12,
  },
  removeButton: {
    backgroundColor: '#fee2e2',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 8,
  },
  removeText: {
    color: '#b91c1c',
    fontWeight: '700',
  },
});
