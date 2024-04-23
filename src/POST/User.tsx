/* import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from "axios";
import { User } from '../models/user';


interface CreateUserProps {
   updateUserList: () => void;
}

function CreateUser({ updateUserList }: CreateUserProps) {
   const [first_name, setFirstName] = useState('');
   const [middle_name, setMiddleName] = useState('');
   const [last_name, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [phone_number, setPhoneNumber] = useState('');     
   const [gender, setGender] = useState('');
   const [error, setError] = useState('');

   const validateForm = () => {
       if (!first_name.trim()) {
           setError('First Name is required');
           return false;
       }
       setError('');
       return true;
   }
   
   /* const Submit = () => {
       const user: User = {
           name: {
               first_name: first_name,
               middle_name: middle_name,
               last_name: last_name,
           },
           email: email,
           phone_number: phone_number,
           gender: gender
           
       };

      //axios.post("'http://10.192.160.200:3000/user", user)
        axios.post('http://localhost:3000/user',console.log(user)   )
        .then(result => {
            console.log(result)
            updateUserList();

            setFirstName('');
            setMiddleName('');
            setLastName('');
            setEmail('');
            setPhoneNumber('');
            setGender('');
        })
        .catch(err => console.log(err));
        console.log("el usuario es:",user);
    }
       
    return (
        <View>
            <View>
                <Text>First Name</Text>
                <TextInput
                    value={first_name}
                    onChangeText={setFirstName}
                    style={{ borderWidth: 1, borderColor: 'black', padding: 5 }}
                />
            </View>
            <View>
                <Text>Middle Name</Text>
                <TextInput
                    value={middle_name}
                    onChangeText={setMiddleName}
                    style={{ borderWidth: 1, borderColor: 'black', padding: 5 }}
                />
            </View>
            <View>
                <Text>Last Name</Text>
                <TextInput
                    value={last_name}
                    onChangeText={setLastName}
                    style={{ borderWidth: 1, borderColor: 'black', padding: 5 }}
                />
            </View>
            <View>
                <Text>Email</Text>
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    style={{ borderWidth: 1, borderColor: 'black', padding: 5 }}
                />
            </View>
            <View>
                <Text>Phone Number</Text>
                <TextInput
                    value={phone_number}
                    onChangeText={setPhoneNumber}
                    style={{ borderWidth: 1, borderColor: 'black', padding: 5 }}
                />
            </View>
            <View>
                <Text>Gender</Text>
                <TextInput
                    value={gender}
                    onChangeText={setGender}
                    style={{ borderWidth: 1, borderColor: 'black', padding: 5 }}
                />
            </View>
            {error && <Text style={{ color: 'red' }}>{error}</Text>}
            <Button title="Añadir" onPress={Submit} />
        </View>
    )  */


    /* const Submit = (e: any) => {
        e.preventDefault();
        const user : User = {
            name: {
                first_name: first_name ,
                middle_name: middle_name,
                last_name: last_name,
            },
            email: email,
            phone_number: phone_number,
            gender: gender
    
        };

        axios.post("http://localhost:3000/user", user)
        .then(result => {
            console.log(result)
            updateUserList();

            setFirstName('');
            setMiddleName('');
            setLastName('');
            setEmail('');
            setPhoneNumber('');
            setGender('');

        })
        .catch(err => console.log(err));
        console.log(user);
    }
        
    return (
        <div>
            <form onSubmit={Submit}>
                <div>
                    <label>First Name</label>
                    <input type="text" value={first_name} onChange={(e: any) => setFirstName(e.target.value)}/> 
                </div>
                <div>
                    <label>Middle Name</label>
                    <input type="text" value={middle_name} onChange={(e: any) => setMiddleName(e.target.value)}/> 
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" value={last_name} onChange={(e: any) => setLastName(e.target.value)}/> 
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" value={email} onChange={(e: any) => setEmail(e.target.value)}/> 
                </div>
                <div>
                    <label>Phone Number</label>
                    <input type="text" value={phone_number} onChange={(e: any) => setPhoneNumber(e.target.value)}/> 
                </div>
                <div>
                    <label>Gender</label>
                    <input type="text" value={gender} onChange={(e: any) => setGender(e.target.value)}/> 
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button>Submit</button>
            </form>
        </div>
    )
  
export default CreateUser; 
} */

import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { User } from '../models/user';

interface CreateUserProps {
    updateUserList: () => void;
 }
 
 function CreateUser({ updateUserList }: CreateUserProps) {
  const [first_name, setFirstName] = React.useState('');
  const [middle_name, setMiddleName] = React.useState('');
  const [last_name, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone_number, setPhoneNumber] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [error, setError] = React.useState('');

  const validateForm = () => {
    if (!first_name.trim()) {
      setError('First Name is required');
      return false;
    }
    setError('');
    return true;
  }

  const Submit = () => {
    if (!validateForm()) return;
    
    const user : User = {
      name: {
        first_name: first_name,
        middle_name: middle_name,
        last_name: last_name,
      },
      email: email,
      phone_number: phone_number,
      gender: gender
    };

    //axios.post("'http://192.168.56.1:3000/user", user)
    axios.post('http://localhost:3000/user', user)
      .then(response => {
        Alert.alert("Success", "User added successfully");
        updateUserList();
        setFirstName('');
        setMiddleName('');
        setLastName('');
        setEmail('');
        setPhoneNumber('');
        setGender('');
      })
      .catch(error => {
        console.error("Failed to add user", error);
        Alert.alert("Error", "Failed to add user");
      });
  };

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder="First Name"
        value={first_name} 
        onChangeText={setFirstName} 
        style={styles.input} 
      />
      <TextInput 
        placeholder="Middle Name"
        value={middle_name} 
        onChangeText={setMiddleName} 
        style={styles.input} 
      />
      <TextInput 
        placeholder="Last Name"
        value={last_name} 
        onChangeText={setLastName} 
        style={styles.input} 
      />
      <TextInput 
        placeholder="Email"
        value={email} 
        onChangeText={setEmail} 
        style={styles.input} 
      />
      <TextInput 
        placeholder="Phone Number"
        value={phone_number} 
        onChangeText={setPhoneNumber} 
        style={styles.input} 
      />
      <TextInput 
        placeholder="Gender"
        value={gender} 
        onChangeText={setGender} 
        style={styles.input} 
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <View style={styles.buttonContainer}>
        <Button title="Añadir usuario" onPress={Submit} color="#007bff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 10,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});

export default CreateUser;


