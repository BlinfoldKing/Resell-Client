import React from 'react'
import { View, Text, Image, Button } from 'react-native'
import Modal from 'react-native-modal'

export default class DetailView extends React.Component{
    
    state = {
        showThis : true
    }

    constructor(props) {
        super(props)

    }

    render() {

        return (
            <View style={{
                backgroundColor: '#fff',
                flex: 0,
                height: '100%'
            }}>
                    
                    <Text style={{
                            fontSize: 20,
                            marginTop: '1.5%',
                            marginLeft: '1.5%',
                            paddingHorizontal: 9,
                            zIndex: 10,
                            position: 'absolute',
                            backgroundColor: "#fff",
                            color: "#000",
                            borderRadius: 50
                        }}
                        onPress={() => this.props.navigation.navigate('Main')}
                    >
                        &times;
                    </Text>

                    <Image
                        style={{
                            paddingTop:0,
                            borderWidth: 4,
                            marginTop: 0,
                            width: '100%',
                            height: '40%',
                        }}
                        source={{uri: this.props.navigation.state.params.pic}}
                    />
                    <View style={{
                            margin:0,
                            padding: '5%',
                            flex:0
                        }}>
                        <Text
                            style={{
                                fontSize: 16,
                                color: '#000'
                            }}
                        >{this.props.navigation.state.params.title}</Text>
                        <View>
                            <Text>Jumlah Tiket: {this.props.navigation.state.params.total}</Text>
                        </View>
                        <View style={{
                            //flex: 1,
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'stretch'
                        }}>
                            <View> 
                                <Text
                                    style={{
                                        paddingTop: '2.5%'
                                    }}
                                >
                                    IDR {this.props.navigation.state.params.price}
                                </Text>  
                            </View>
                            <Button
                                style={{width: '100%'}}
                                color="#59B871"
                                title="Beli Sekarang"
                                onPress={() => this.props.navigation.navigate("Confirm", this.props.navigation.state.params)}
                            />
                        </View>
                    </View>
                   

            </View> 
        )
    }
}