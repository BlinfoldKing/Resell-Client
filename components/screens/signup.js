import React from 'react'
import { View, Text } from 'react-native'

export default class SignUp extends React.Component {

    render () {
        const { navigate } = this.props.navigation
        return (
            <View>
                <Text>
                    This is SignUp screen
                </Text>
                <Text onPress={() => navigate('Login')}>
                    login
                </Text>
            </View>
        )
        
    }
}