import React from 'react'
import { View, Text } from 'react-native'


export default class BackHeader extends React.Component {
    
    constructor(props) {
        super (props)
        console.log(props)
    }
    
    render () {
        return (
            <View style={{
                backgroundColor: '#6662dc',
                width: '100%',
                alignContent: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: 5,
                paddingLeft: 20,
                paddingRight: 20,
                marginBottom: 10,
                paddingBottom: 5
            }}>      
                
                <Text
                    style={{
                        color: '#fff',
                        fontSize: 30
                    }}
                    onPress={() => {
                        this.props.navigation.navigate(this.props.prev, this.props.navigation.state.params)
                }}
                >&times;</Text>
                <Text style={{
                    fontSize: 20,
                    color: '#fff'
                }}>{this.props.currScreen}</Text>
            </View>
        )
    }
}