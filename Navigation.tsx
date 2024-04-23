import React, { useState } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import GetUsers from './src/GET/User';
import CreateUser from './src/POST/User';
import GetPosts from './src/GET/Posts';
import CreatePost from './src/POST/Post'; // Added missing import

const Tab = createBottomTabNavigator();

export default function Navigation() {
    const [usersUpdated, setUsersUpdated] = useState(false);
    const [postsUpdated, setPostsUpdated] = useState(false);

    const updateUserList = () => {
        setUsersUpdated(!usersUpdated);
    };

    const updatePostList = () => {
        setPostsUpdated(!postsUpdated);
    }

    function MyTabs() {
        return (
            <Tab.Navigator initialRouteName='Home'>
                <Tab.Screen name="Lista de usuarios">
                    {() => <GetUsers usersUpdated={usersUpdated} />}
                </Tab.Screen>
                <Tab.Screen name="Usuario nuevo">
                    {() => <CreateUser updateUserList={updateUserList} />}
                </Tab.Screen>
                <Tab.Screen name="Lista de Posts">
                    {() => <GetPosts postsUpdated={postsUpdated} />}
                </Tab.Screen>
                <Tab.Screen name="Post nuevo">
                    {() => <CreatePost updatePostList={updatePostList} />}
                </Tab.Screen>
            </Tab.Navigator>
        );
    }

    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}
