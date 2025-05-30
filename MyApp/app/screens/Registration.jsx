import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';
import Footer from '../../components/footer';
import Header from '../../components/header';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

const Registration = () => {
  const [step, setStep] = useState(0);

  const [form, setForm] = useState({
    diplayName: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    dob : null,
    description : '',
    currentHash : '',
  });

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
    
  };

  const [hashtags,setHashTags] = useState([]);



  const [showDatePicker, setShowDatePicker] = useState(false);

  const addHashtag = () => {
    console.log(form.currentHash);
    console.log(hashtags);
    setHashTags([...hashtags, 
      {Id: uuid() , hash : form.currentHash}
    ]);
    handleChange('currentHash', '');
    console.log(hashtags);
  }
    

  const renderStep = () => {
    if (step === 0) {
      return (
        <View style={styles.centered}>
          <TouchableOpacity style={styles.button} onPress={() => setStep(1)}>
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
        </View>
      );
    }

    if (step === 1) {
      return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>Basic Info</Text>
                    <TextInput
            style={styles.input}
            placeholder="Display Name"
            placeholderTextColor="#999"
            value={form.diplayName}
            onChangeText={(text) => handleChange('diplayName', text)}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="First Name"
            placeholderTextColor="#999"
            value={form.firstName}
            onChangeText={(text) => handleChange('firstName', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            placeholderTextColor="#999"
            value={form.lastName}
            onChangeText={(text) => handleChange('lastName', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#999"
            value={form.email}
            onChangeText={(text) => handleChange('email', text)}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Phone"
            placeholderTextColor="#999"
            value={form.phone}
            onChangeText={(text) => handleChange('phone', text)}
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="City"
            placeholderTextColor="#999"
            value={form.city}
            onChangeText={(text) => handleChange('city', text)}
          />
          <Text style={styles.label}>Date of Birth</Text>
      <TouchableOpacity
        style={styles.dateButton}
        onPress={() => setShowDatePicker(true)}
      >
        <Text style={styles.dateButtonText}>
          {form.dob ? form.dob.toDateString() : 'Select Date'}
        </Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={form.dob || new Date()}
          mode="date"
          onChange={(event, selectedDate) => {
            setShowDatePicker();
            if (selectedDate) {
              handleChange('dob', selectedDate);
            }
          }}
        />
      )}
          <TouchableOpacity style={styles.button} onPress={() => setStep(2)}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </ScrollView>
      );
    }

    if (step === 2) {
      return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>Contact Info</Text>
          <TextInput
            style={styles.input}
            placeholder="Description"
            placeholderTextColor="#999"
            value={form.description}
            onChangeText={(text) => handleChange('description', text)}
          />
          <View style = {styles.hashtagInputContainer}>
            <TextInput
            style={styles.hashInput}
            placeholder="#"
            placeholderTextColor="#999"
            value={form.currentHash}
            onChangeText={(text) => handleChange('currentHash', text)}
          />
          <TouchableOpacity style={styles.hashtagButton} onPress={addHashtag}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.allHashtagContainer}>
          {hashtags.map((item) => (
            <View style={styles.hashtagContainer}>
              <Text style= {styles.buttonText}>#{item.hash}</Text>
              <TouchableOpacity style={styles.hashtagDeleteIcon} onPress={() => {
            console.log(item.Id);
            setHashTags(
              hashtags.filter(h => h.Id !== item.Id)
            )}}>
                <Ionicons name="trash-outline" size={18} color="white" />
              </TouchableOpacity>
            </View>
          ))}
          </View>
          <TouchableOpacity style={styles.button} onPress={() => setStep(3)}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </ScrollView>
      );
    }

    if (step === 3) {
      return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>Other Details</Text>
          <TouchableOpacity style={styles.button} onPress={() => alert('Form Submitted!')}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </ScrollView>
      );
    }
  };

  return (<SafeAreaView style={styles.container}>
    <Header/>
            {renderStep()}
    <Footer/>
          </SafeAreaView>);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    padding: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#3b82f6',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  dateButton: {
  backgroundColor: '#eee',
  padding: 12,
  borderRadius: 8,
  alignItems: 'center',
  marginBottom: 15,
},

dateButtonText: {
  color: '#333',
},
hashtagInputContainer : {
  flexDirection : 'row',
  width : '100%',
  flex : 1,
  justifyContent : 'space-between'
},
  hashInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    width: '83%'
  },
hashtagButton : {
  backgroundColor: '#3b82f6',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent : 'center',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    width: '15%'
},
hashtagContainer : {
  backgroundColor: '#3b82f6',
  paddingVertical: 8,
  paddingHorizontal: 20,
  borderRadius: 10,
  alignSelf: 'center',
  height: 40,
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 8,
  paddingHorizontal: 10,
  marginBottom: 15,
  flexDirection : 'row',
  alignItems : 'center'
},
allHashtagContainer : {
  flex : 1,
  flexDirection : 'row',
  justifyContent : 'start',
  flexWrap: 'wrap'
},
hashtagDeleteIcon : {
  paddingRight: 0,
  paddingLeft: 8,    
}
});

export default Registration;
