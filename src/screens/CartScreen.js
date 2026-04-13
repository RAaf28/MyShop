import React from 'react';
import { Alert, View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import CartItem from '../components/CartItem';
import { clearCart, decrementItem, incrementItem, removeItem } from '../store/cartSlice';

function formatRupiah(value) {
  return `Rp ${value.toLocaleString('id-ID')}`;
}

export default function CartScreen() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);

  const handleRemove = (id) => {
    Alert.alert('Hapus item', 'Yakin ingin menghapus item ini dari cart?', [
      { text: 'Batal', style: 'cancel' },
      {
        text: 'Hapus',
        style: 'destructive',
        onPress: () => dispatch(removeItem(id)),
      },
    ]);
  };

  const handleIncrement = (id) => {
    dispatch(incrementItem(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementItem(id));
  };

  const handleClear = () => {
    Alert.alert('Kosongkan cart', 'Semua item di cart akan dihapus. Lanjut?', [
      { text: 'Batal', style: 'cancel' },
      {
        text: 'Kosongkan',
        style: 'destructive',
        onPress: () => dispatch(clearCart()),
      },
    ]);
  };

  if (!items.length) {
    return (
      <View style={[styles.container, styles.emptyCenter]}>
        <Text style={styles.emptyText}>Cart masih kosong</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CartItem
            item={item}
            onRemove={handleRemove}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
        )}
        contentContainerStyle={styles.listContent}
      />

      <View style={styles.footer}>
        <Text style={styles.totalText}>Total: {formatRupiah(total)}</Text>
        <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
          <Text style={styles.clearText}>Kosongkan Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  emptyCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#6b7280',
  },
  listContent: {
    padding: 16,
    paddingBottom: 120,
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderColor: '#e5e7eb',
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  clearButton: {
    backgroundColor: '#dc2626',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  clearText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 13,
  },
});
