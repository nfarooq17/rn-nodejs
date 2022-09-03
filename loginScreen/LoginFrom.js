import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup';
import Validator from 'email-validator';


const LoginFrom = () => {
    const LoginFromSchema = Yup.object().shape({
        email: Yup.string().required('An email is required'),
        password: Yup.string()
            .required()
            .min(7, 'Your password has to have at least 7 characters')
    })
    return (
        <View style={styles.wrapper}>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={values => {
                    onLogin(values.email, values.password)
                }}
                validationSchema={LoginFromSchema}
                validateOnMount={true}
            >
                {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (


                    <>
                        <View style={[styles.inputField,
                        {
                            borderColor: values.email.length < 1 || Validator.validate(values.email) ? '#ccc' : '#ccc',
                        }

                        ]}>
                            <TextInput
                                placeholderTextColor='gray'
                                placeholder='Phone number, username or email'
                                autoCapitalize='none'
                                keyboardType='email-address'
                                textContentType='emailAddress'
                                autoFocus={true}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                        </View>
                        <View style={[styles.inputField,
                        {
                            borderColor: 1 > values.password.length || values.password.length > 6 ? '#ccc' : '#ccc',
                        }

                        ]}>
                            <TextInput
                                placeholderTextColor='gray'
                                placeholder='Password'
                                autoCapitalize='none'
                                autoCorrect={false}
                                secureTextEntry={true}
                                textContentType='password'
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                            />
                        </View>

                        <Pressable titleSize={20}
                            style={styles.button(isValid)}
                            onPress={handleSubmit}
                            disabled={!isValid}
                        >
                            <Text style={styles.buttonText}>Log In</Text>
                        </Pressable>
                    </>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 50,
        height: 410
    },
    inputField: {
        borderRadius: 6,
        padding: 1,
        width: 330,
        marginTop: 10,
        borderWidth: 1,
        marginHorizontal: 32,
        backgroundColor: '#f5f5f5',
        height: 45,

    },
    button: isValid => ({
        backgroundColor: isValid ? '#0096F6' : '#9ACAF7',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 40,
        borderRadius: 4,
        top: 23,
        width: 330,
        marginHorizontal: 32,
    }),
    buttonText: {
        fontWeight: '600',
        color: '#fff',
        fontSize: 15,
    }
})

export default LoginFrom