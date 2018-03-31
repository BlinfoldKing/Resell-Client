import React from 'react'
import { View, Text } from 'react-native'

export default class Login extends React.Component {

    render () {
        const { navigate } = this.props.navigation
        return (
            <View>
                <Text onPress={() => navigate('Main')}>
                    This is login screen
                </Text>
                <Text onPress={() => navigate('SignUp')}>
                    Sign Up
                </Text>
            </View>
        )
        
    }
}