import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'

export default class Card extends React.Component {
    
    constructor(props) {
        super(props)
        console.log(props.pic)
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{
                        width: 120, 
                        height: 120,
                        margin: 'auto'
                    }}
                    source={{uri: this.props.pic}}
                />
                <Text style={{
                    fontSize: 15
                }}> {this.props.title} </Text>
                <Text style={{color: '#59B871'}}> Rp.{this.props.price},- </Text>

                <Text style={{
                    color: '#ccc',
                    marginTop: 10,
                    fontSize: 11
                }}> {this.props.seller}  </Text>
                <Text style={{
                    marginTop: 0,
                    fontSize: 11
                }}> {this.props.location} </Text>


            </View>
        )
    }
}


const styles = new StyleSheet.create({
    container: {
        padding: 7,
        margin: '3%',
        width: 150,      
    }
})
