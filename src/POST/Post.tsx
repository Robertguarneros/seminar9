import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { IPost } from '../models/post';

interface CreatePostProps {
    updatePostList: () => void;
}

interface FormErrors {
    [key: string]: string;
}

const CreatePost: React.FC<CreatePostProps> = ({ updatePostList }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [errors, setErrors] = useState<FormErrors>({});

    const validateField = (fieldName: string, value: string) => {
        let errorMessage = '';

        switch (fieldName) {
            case 'title':
                errorMessage = value.trim() === '' ? 'Title is required' : '';
                break;
            case 'content':
                errorMessage = value.trim() === '' ? 'Content is required' : '';
                break;
            case 'author':
                errorMessage = value.trim() === '' ? 'Author is required' : '';
                break;
            default:
                break;
        }

        setErrors(prevErrors => ({
            ...prevErrors,
            [fieldName]: errorMessage
        }));
    };

    const handleSubmit = () => {
        const isFormValid = validateForm();
        if (isFormValid) {
            const post: IPost = {
                title: title,
                content: content,
                author: author
            };
            axios.post("http://localhost:3000/post", post)
                .then(result => {
                    console.log(result);
                    updatePostList();
                    setTitle('');
                    setContent('');
                    setAuthor('');
                })
                .catch(err => console.error(err));
        }
    };

    const validateForm = () => {
        let isValid = true;

        validateField('title', title);
        validateField('content', content);
        validateField('author', author);

        for (const error in errors) {
            if (errors[error] !== '') {
                isValid = false;
                break;
            }
        }

        return isValid;
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.label}>Title</Text>
                <TextInput 
                    placeholder="Title"
                    value={title} 
                    onChangeText={(text) => { setTitle(text); validateField('title', text); }} 
                    style={styles.input} 
                />
                {errors.title && <Text style={styles.errorText}>{errors.title}</Text>}
            </View>
            <View>
                <Text style={styles.label}>Content</Text>
                <TextInput 
                    placeholder="Content"
                    value={content} 
                    onChangeText={(text) => { setContent(text); validateField('content', text); }} 
                    style={styles.input} 
                />
                {errors.content && <Text style={styles.errorText}>{errors.content}</Text>}
            </View>
            <View>
                <Text style={styles.label}>Author</Text>
                <TextInput 
                    placeholder="Author"
                    value={author} 
                    onChangeText={(text) => { setAuthor(text); validateField('author', text); }} 
                    style={styles.input} 
                />
                {errors.author && <Text style={styles.errorText}>{errors.author}</Text>}
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Submit" onPress={handleSubmit} color="#007bff" />
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
    label: {
        marginBottom: 5,
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
        marginTop: 5,
    },
});

export default CreatePost;
