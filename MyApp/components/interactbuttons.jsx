import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Pressable
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const InteractButtons = ({phNumber, email}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <View style={styles.actionButtonsRow}>
        <TouchableOpacity style={styles.squareButton}>
          <Ionicons name="chatbubble-outline" size={24} color="white" />
          <Text style={styles.squareButtonText}>Chat</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.squareButton}>
          <MaterialIcons name="bookmark-border" size={24} color="white" />
          <Text style={styles.squareButtonText}>Save</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.squareButton} onPress={() => setModalVisible(true)}>
          <Ionicons name="call-outline" size={24} color="white" />
          <Text style={styles.squareButtonText}>Contact</Text>
        </TouchableOpacity>
      </View>
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Contact Info</Text>
            <Text selectable style={styles.modalText}>📞 Phone: {phNumber}</Text>
            <Text selectable style={styles.modalText}>📧 Email: {email}</Text>

            <Pressable style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  actionButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 10,
  },
  squareButton: {
    width: 90,
    height: 90,
    backgroundColor: '#004aad',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  squareButtonText: {
    marginTop: 5,
    fontSize: 14,
    color: 'white',
    fontWeight: '500',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 300,
    padding: 25,
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalText: {
    fontSize: 16,
    marginVertical: 4,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#004aad',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default InteractButtons;
