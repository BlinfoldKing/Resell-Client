import React from 'react'
import { View, Text } from 'react-native'
import Hamburger from 'react-native-hamburger'
import { NavigationAction } from 'react-navigation'

export default class Header extends React.Component{
    
    constructor(props) {
        super(props)
        this.state = {
            active: true
        }
    }
    
    render() {
        return (
            <View style={{
                backgroundColor: '#6662dc',
                width: '100%',
                alignContent: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: 10,
                paddingLeft: 20,
                paddingRight: 20,
                marginBottom: 10,
                paddingBottom: 10
            }}>      
                
                <Hamburger
                    active={false}
                    type="cross"
                    color="#fff"
                    onPress={() => {
                        this.props.navigation.navigate('DrawerOpen')
                }}
                />
                <Text style={{
                    fontSize: 20,
                    color: '#fff'
                }}>{this.props.currScreen}</Text>
            </View>
        )

    }
}