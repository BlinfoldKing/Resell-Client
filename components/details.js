import React from 'react'
import { View, Text, Image, Button } from 'react-native'
import Modal from 'react-native-modal'

export default class DetailView extends React.Component{
    
    state = {
        showThis : true
    }

    constructor(props) {
        super(props)
        this.state.showThis = false
    }

    render() {
        if(this.props.showModal)
            this.state.showThis = true
        return (
            <View style={{
                
            }}>
                <Modal
                    isVisible={this.state.showThis}
                    style={{
                        backgroundColor: '#fff',
                        flex: 0,
                    }}
                >
                    <Text style={{
                        fontSize: 30,
                        width: 30,
                        height: 30,
                        paddingLeft: 7,
                        paddingTop: 0,
                        marginBottom: 10,
                        //flex: 1
                    }}
                    onPress={() => this.state.showThis = false}
                    >&times;</Text>
                    <Image
                        style={{
                            paddingTop:0,
                            borderWidth: 4,
                            marginTop: 0,
                            width: '100%',
                            height: '40%',
                            borderWidth: 3
                        }}
                        source={{uri: this.props.pic}}
                    />
                    <View style={{
                            margin:0,
                            borderWidth: 3,
                            padding: '5%',
                            flex:0
                        }}>
                        <Text>{this.props.title}</Text>
                        <View>
                            <Text>Jumlah Tiket: </Text>
                            <Text>{this.props.total}</Text>
                        </View>
                        <View>
                            <Text>Harga Tiket: </Text>
                            <Text>{this.props.price}</Text>
                        </View>
                        <View>
                        <Button
                            style={{width: '100%'}}
                            color="#59B871"
                            title="Beli Sekarang"
                            onPress={() => console.log('  ')}
                            />
                        </View>
                    </View>
                   
                </Modal> 
            </View> 
        )
    }
}