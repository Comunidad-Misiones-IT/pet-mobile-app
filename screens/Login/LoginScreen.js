import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { fbLogin, googleLogin } from '../../utils/FacebookLogin';
import * as Facebook from 'expo-facebook';
import { FB_APP_ID } from '../../config/constants';
import { Controller, useForm } from "react-hook-form";
import Input from '../../core/components/Input/Input';
import { styles } from './styles';
// import { Icon } from 'react-native-vector-icons/Icon';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function LoginScreen({ navigation }) {

    const { handleSubmit, control, formState: { errors } } = useForm();

    const login = (data) => {
        console.log(data);
    }
    const initSocialLogin = async () => {
        try {
            await Facebook.initializeAsync(FB_APP_ID);
        } catch (e) {
            console.log(e);
        }
    };

    const handleFBLoginPress = async () => {
        const { type, token, user, error } = await fbLogin();

        if (type && token) {
            if (type === 'success') {
                // DISPATCH TOKEN AND USER DATA
                // TO HANDLE NAVIGATION TO HOME AND DISPLAY USER INFO
                dispatch({ type: 'FB_LOGIN', token, user });
            }
        } else if (error) {
            console.log('The login attempt was cancelled');
        }
    };

    const handleGoogleLoginPress = async () => {
        try {
            const { type, token, user, error } = await googleLogin();

            if (type === 'success') {
                // DISPATCH TOKEN AND USER DATA
                // TO IMPLEMENT NAVIGATION AND USER INFO DISPLAYS
                dispatch({ type: 'GOOGLE_LOGIN', token: accessToken, user });
            }
        } catch (e) {
            console.log('error', e);
        }
    };

    const handleStartPress = () => {

    }

    useEffect(() => {
        // initSocialLogin();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Iniciar Sesión </Text>
            <View style={styles.form}>
                {/* <Form onSubmit={handleSubmit(login)}> */}
                <Controller name="email" control={control} rules={{ required: { value: true, message: 'Email is required' } }}
                    render={({ field: { onChange, value } }) => (
                        <Input
                            onChangeText={(text) => onChange(text)}
                            error={errors?.email}
                            errorText={errors?.email?.message}
                            value={value}
                            placeholder="Email" />)
                    } />
                <Controller name="password" control={control} rules={{ required: { value: true, message: 'Password is required' } }}
                    render={({ field: { onChange, value } }) => (
                        <Input
                            secureTextEntry={true}
                            onChangeText={(text) => onChange(text)}
                            error={errors?.password}
                            errorText={errors?.password?.message}
                            value={value}
                            placeholder="Password" />)
                    } />
                {/* <TextInput type="email" {...register("email")} /> */}
                {/* <TextInput type="password" {...register("password")} /> */}
                <Button type="submit" title="Entrar" onPress={handleSubmit(login)} />
                {/* </form> */}
            </View>
            <View style={styles.social}>
                <Button
                    onPress={handleFBLoginPress}
                    title="Facebook" />
                    <Icon name="rocket" size={30} color="#900" />
                <Button
                    onPress={handleGoogleLoginPress}
                    title="Google" />
            </View>
        </View>
    )
}