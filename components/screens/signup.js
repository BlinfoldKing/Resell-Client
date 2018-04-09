import React from 'react'
import { View, Text, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export default class SignUp extends React.Component {

    constructor (props) {
        super (props)

        this.state = {
            username : 'Username',
            password : 'Password',
            Repassword : 'Re-Enter Password',
            passCheck: false,
            activeUser: {}
        }
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
                        marginTop: '25%'
                    }}
                >Sign Up</Text>
                <Text
                style={{
                    marginBottom: '20%',
                }}>Beli dan jual tiket anda dengan mudah disini sekarang !</Text>
                <TextInput
                    value={this.state.username}
                    underlineColorAndroid='#6662dc'
                    onChange={input => this.setState({username: input.nativeEvent.text})}
                />
                <TextInput
                    value={this.state.password}
                    style={{
                        marginBottom: '10%',
                    }}
                    underlineColorAndroid='#6662dc'
                    onChange={input => this.setState({password: input.nativeEvent.text})}
                />
                 <TextInput
                    value={this.state.Repassword}
                    style={{
                        marginBottom: '10%',
                    }}
                    underlineColorAndroid='#6662dc'
                    onChange={input => {
                        this.state.Repassword
                        this.state.passCheck = input.nativeEvent.text === this.state.password
                    }}
                />
                <View style={{marginBottom: "10%"}}>
                    <Button 
                        color='#6662dc'
                        title="SIGN UP"

                        onPress={() => {
                            console.log(`http://resell-api.herokuapp.com/signup/${this.state.username}/${this.state.password}`)
                            fetch(`http://resell-api.herokuapp.com/signup/${this.state.username}/${this.state.password}`,{
                                method: 'POST'
                            })
                            navigate('Login')
                        }}
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