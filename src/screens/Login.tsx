// @Vendors
import React from 'react';
import { Controller, useForm } from "react-hook-form";
import { Button, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import UserIconSvg from '../assets/icons/userIcon.svg';
import AppStyledTitle from '../components/AppTitle';
import { fetchAuthLogin } from '../store/authSlice';
// @Styles
import styles from '../styles/PublicStyles';
import colors from '../theme/colors';
// @Types
import { IUserData } from '../types/UserDataType';

const Login = () => {
    const dispatch = useDispatch();
    const onSubmit = (data: IUserData) => dispatch(fetchAuthLogin(data));

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            email: ''
        }
    });

    return (
        <View style={styles.containerLogin}>
            <UserIconSvg width={45} height={45} style={{ marginBottom: 15 }} />

            <AppStyledTitle showSecond/>

            <View style={styles.formLogin}>
                {/* Field Name // PASAR A COMPONENTE StyledInput */}
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.control}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="Name"
                        />
                    )}
                    name="name"
                />
                {errors.name && <Text>The name is required.</Text>}

                {/* Field Email // PASAR A COMPONENTE StyledInput */}
                <Controller
                    control={control}
                    rules={{
                        maxLength: 100,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.control}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="Email"
                        />
                    )}
                    name="email"
                />
                {errors.email && <Text>The email is required.</Text>}

                <Button color={colors.green} title='Submit' onPress={handleSubmit(onSubmit)} />
            </View>
        </View>
    )
}

export default Login;