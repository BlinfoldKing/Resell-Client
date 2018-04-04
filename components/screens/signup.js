import React from 'react'
import { View, Text, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export default class SignUp extends React.Component {

    render () {
        const { navigate } = this.props.navigation
        return (
            <View
                style={{
                    backgroundColor: '#fff',
                    padding: '10%',
                    height: '100%'
                }}    
            >

                <Text
                    style= {{
                        color: '#000',
                        fontSize: 20,
                        marginBottom: '5%',
                        marginTop: '25%'
                    }}
                >Sign Up</Text>
                <Text
                style={{
                    marginBottom: '20%',
                }}>Beli dan jual tiket anda dengan mudah disini sekarang !</Text>
                <TextInput
                    underlineColorAndroid='#6662dc'
                />
                <TextInput
                    style={{
                        marginBottom: '10%',
                    }}
                    underlineColorAndroid='#6662dc'
                />
                 <TextInput
                    style={{
                        marginBottom: '10%',
                    }}
                    underlineColorAndroid='#6662dc'
                />
                <View style={{marginBottom: "10%"}}>
                    <Button 
                        color='#6662dc'
                        title="SIGN UP"

                        onPress={() => navigate('Profile')}
                    />
                </View>
                <Text>{"Sudah punya akun? "}
                    <Text 
                    style={{
                        color: "#59B871"
                    }}
                    onPress={() => navigate('Login')}>
                        Login
                    </Text>
                </Text>
                
                
            </View>
        )
        
    }
}