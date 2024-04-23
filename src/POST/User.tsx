import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';
import axios from 'axios';

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
    };

    const Submit = () => {
        if (!validateForm()) return;

        const user = {
            name: {
                first_name: first_name,
                middle_name: middle_name,
                last_name: last_name,
            },
            email: email,
            phone_number: phone_number,
            gender: gender,
        };

        axios
            .post('http://localhost:3000/user', user)
            .then(() => {
                Alert.alert('Success', 'User added successfully');
                updateUserList();
                setFirstName('');
                setMiddleName('');
                setLastName('');
                setEmail('');
                setPhoneNumber('');
                setGender('');
            })
            .catch((error) => {
                console.error('Failed to add user', error);
                Alert.alert('Error', 'Failed to add user');
            });
    };

    return (
        <ScrollView>
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
        </ScrollView>
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
