import React from 'react'
import { View, Text, Button, KeyboardAvoidingView } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

export default class Login extends React.Component {

    constructor (props) {
        super (props)
        this.state = {
            username: '',
            password: '',
            isLogin: false,
            activeUser: {}
        }
    }


    login () {
        console.log(`http://resell-api.herokuapp.com/login/${this.state.username}/${this.state.password}`)
        return fetch(`http://resell-api.herokuapp.com/login/${this.state.username}/${this.state.password}`)
        .then(res => JSON.parse(res._bodyText))
        .then(res => {this.setState({
                activeUser: res.user,
                isLogin: res.status === 200
            }) 
        console.log(res)
        })

        console.log(this.state.isLogin)
    }

    render () {
        const { navigate } = this.props.navigation
        let star = this.state.password.split('')
        return (
            <KeyboardAvoidingView
                style={{
                    backgroundColor: '#fff',
                    padding: '10%',
                    height: '100%',
                }}
                behavior="position"    
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
                    value={this.state.username}
                    underlineColorAndroid='#6662dc'
                    placeholder="Username"
                    onChange={(input) => this.setState({username: input.nativeEvent.text})}
                />
                <TextInput
                    value={this.state.password}
                    style={{
                        marginBottom: '10%',
                    }}
                    caretHidden={true}
                    secureTextEntry={true}
                    placeholder="Password"
                    underlineColorAndroid='#6662dc'
                    onChange={(input) => {
                        this.setState({password: input.nativeEvent.text})
                        console.log(this.state.password)
                    }}
                />
                <View style={{marginBottom: "20%"}}>
                    <Button 
                        color='#6662dc'
                        title="LOGIN"

                        onPress={() => { 
                            console.log(this.state.activeUser)
                            if(!this.state.isLogin) this.login().then(() => {if (this.state.isLogin) navigate('Main', this.state.activeUser)})
                                             
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
                
                
            </KeyboardAvoidingView>
        )
        
    }
}