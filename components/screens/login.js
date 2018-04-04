import React from 'react'
import { View, Text, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

export default class Login extends React.Component {

    constructor (props) {
        super (props)
        this.state = ({
            username: '',
            password: '',
            isLogin: false
        })
    }


    login () {
        fetch(`http://resell-api.herokuapp.com/login/${this.state.username}/${this.state.password}`)
        .then(res => JSON.parse(res._bodyText))
        .then(res => this.setState({
            isLogin: res.status === 200
        }))

        console.log(this.state.isLogin)
    }

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
                        marginTop: '35%'
                    }}
                >Login</Text>
                <Text
                style={{
                    marginBottom: '20%',
                }}>Beli dan jual tiket anda dengan mudah disini sekarang !</Text>
                <TextInput
                    underlineColorAndroid='#6662dc'
                    onChange={(input) => this.setState({username: input.target.value})}
                />
                <TextInput
                    style={{
                        marginBottom: '10%',
                    }}
                    underlineColorAndroid='#6662dc'
                    onChange={(input) => this.setState({password: input.target.value})}
                />
                <View style={{marginBottom: "20%"}}>
                    <Button 
                        color='#6662dc'
                        title="LOGIN"

                        onPress={() => { 
                            if(!this.state.isLogin) this.login()
                            else
                                navigate('Main')
                        }}
                    />
                </View>
                <Text>{"Belum punya akun? "}
                    <Text 
                    style={{
                        color: "#59B871"
                    }}
                    onPress={() =>  navigate('SignUp')}>
                        Sign Up
                    </Text>
                </Text>
                
                
            </View>
        )
        
    }
}