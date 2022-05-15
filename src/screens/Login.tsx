// @Vendors
import React from 'react'
import { Button, Image, Text, TextInput, View } from 'react-native'
import { useDispatch } from 'react-redux';
import { fetchAuthLogin } from '../store/authSlice';
import { useForm, Controller } from "react-hook-form";

// @Styles
import styles from '../styles/PublicStyles';
import colors from '../theme/colors';
import fonts from '../theme/fonts';
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
            <Image
                style={styles.authLogo}
                source={{
                    uri: 'https://images.dog.ceo/breeds/waterdog-spanish/20180706_194432.jpg'
                }}
            />

            <View style={styles.boxLoginTitle}>
                <Text style={styles.titleLogin}>BreedsApp</Text>
                <Text style={{ fontSize: fonts.size.font16, color: colors.gray, fontWeight: '600' }}>Sign In</Text>
            </View>

            <View style={styles.formLogin}>
                {/* Field Name */}
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
                {errors.name && <Text>This field is required.</Text>}

                {/* Field Email */}
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
                <Button color={colors.green} title='Submit' onPress={handleSubmit(onSubmit)} />
            </View>
        </View>
    )
}

export default Login;