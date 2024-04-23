import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, FlatList, StyleSheet } from "react-native";
import axios from "axios";

interface User {
    name: {
        first_name: string;
        middle_name: string;
        last_name: string;
    };
    email: string;
    phone_number: string;
    gender: string;
}

interface GetUsersProps {
    usersUpdated: boolean;
}

const GetUsers: React.FC<GetUsersProps> = ({ usersUpdated }) => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3000/user')
            .then((result) => setUsers(result.data))
            .catch((err) => console.log(err))
    }, [usersUpdated]);

    const handleUserClick = (user: User) => {
        console.log(user);
    };

    const renderItem = ({ item }: { item: User }) => (
        <TouchableOpacity onPress={() => handleUserClick(item)} style={{padding:10}}>
            <Text >{item.name.first_name} {item.name.middle_name} {item.name.last_name}</Text>
            <Text >Email: {item.email}</Text>
            <Text >Phone: {item.phone_number}</Text>
            <Text >Gender: {item.gender}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={{flex:1}}>
            <ScrollView>
                <FlatList
                    data={users}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </ScrollView>
        </View>
    );
}

export default GetUsers;
