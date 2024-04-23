import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, FlatList, StyleSheet } from "react-native";
import axios from "axios";

interface IPost {
    title: string;
    content: string;
    author: string;
}

interface GetPostsProps {
    postsUpdated: boolean;
}

const GetPosts: React.FC<GetPostsProps> = ({ postsUpdated }) => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3000/post')
            .then((result) => setPosts(result.data))
            .catch((err) => console.log(err))
    }, [postsUpdated]);

    const handlePostClick = (post: IPost) => {
        console.log(post);
    };

    const renderItem = ({ item }: { item: IPost }) => (
        <TouchableOpacity onPress={() => handlePostClick(item)} style={{padding:10}}>
            <Text >{item.title}</Text>
            <Text >{item.content}</Text>
            <Text >Author: {item.author}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={{flex:1}}>
            <ScrollView>
                <FlatList
                    data={posts}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </ScrollView>
        </View>
    );
}


export default GetPosts;
