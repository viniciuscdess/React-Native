import React from 'react';
import { View, Text } from 'react-native';

import Modal from "react-native-modal";

export default function ModalComponente() {
 return (
    <View>
        <Modal isVisible={false}>
            <View style={{ flex: 1 }}>
                <Text>I am the modal content!</Text>
            </View>
        </Modal>
    </View>
  );
}