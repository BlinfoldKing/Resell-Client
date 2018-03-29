import React from 'react'
import { View, Text } from 'react-native'
import Hamburger from 'react-native-hamburger'


export default class Header extends React.Component{
    
    constructor(props) {
        super(props)
        this.state = {
            active: false
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
                    active={this.state.active}
                    type="cross"
                    color="#fff"
                    onPress={() => this.setState({active: !this.state.active})}
                />
                <Text style={{
                    fontSize: 20,
                    color: '#fff'
                }}>{this.props.currScreen}</Text>
            </View>
        )

    }
}