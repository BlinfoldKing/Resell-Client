import React from 'react'
import { View, Text } from 'react-native'


export default class BackHeader extends React.Component {
    render () {
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
                
                <Text
                    style={{
                        color: '#fff'
                    }}
                    onPress={() => {
                        this.props.navigation.navigate(this.props.prev)
                }}
                >{"<-"}</Text>
                <Text style={{
                    fontSize: 20,
                    color: '#fff'
                }}>{this.props.currScreen}</Text>
            </View>
    )
    }
}