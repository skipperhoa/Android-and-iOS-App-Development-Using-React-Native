import React from 'react'
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native'

type AlertProps = {
  visible: boolean
  title?: string
  message?: string
  confirmText?: string
  cancelText?: string
  onConfirm?: () => void
  onCancel?: () => void
}

function Alert({
  visible,
  title = 'Thông báo',
  message = '',
  confirmText = 'OK',
  cancelText = 'Hủy',
  onConfirm,
  onCancel,
}: AlertProps) {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={onCancel}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          {title ? <Text style={styles.title}>{title}</Text> : null}
          {message ? <Text style={styles.message}>{message}</Text> : null}

          <View style={styles.buttonRow}>
            {onCancel ? (
              <TouchableOpacity style={[styles.button, styles.cancel]} onPress={onCancel}>
                <Text style={styles.cancelText}>{cancelText}</Text>
              </TouchableOpacity>
            ) : null}

            {onConfirm ? (
              <TouchableOpacity style={[styles.button, styles.confirm]} onPress={onConfirm}>
                <Text style={styles.confirmText}>{confirmText}</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginLeft: 10,
  },
  cancel: {
    backgroundColor: '#eee',
  },
  confirm: {
    backgroundColor: '#007bff',
  },
  cancelText: {
    color: '#333',
    fontWeight: '600',
  },
  confirmText: {
    color: '#fff',
    fontWeight: '600',
  },
})

export default Alert
