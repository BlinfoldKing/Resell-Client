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
                            color: "#6662dc",
                            borderRadius: 50
                        }}
                        onPress={() => this.props.navigation.navigate('Main', this.props.navigation.state.params)}
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
                            flex:1
                        }}>
                        <Text
                            style={{
                                fontSize: 16,
                                color: '#333'
                            }}
                        >{this.props.navigation.state.params.title}</Text>
                        
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{marginRight: '15%', fontSize: 10}}>Jumlah Tiket: {this.props.navigation.state.params.total}</Text>
                            <Text style={{fontSize: 10}}>Harga Tiket: IDR {this.props.navigation.state.params.price},-</Text>
                        </View>
                        
                        <View style={{marginTop: '10%'}}>
                            <Text style={{color: '#333'}}>Deskripsi</Text>
                            <Text style={{fontSize: 11}}>{this.props.navigation.state.params.desc}</Text>
                        </View>
                        
                        <View style={{marginTop: '10%', marginBottom: '5%',}}>
                            <Text style={{color: '#333'}}>Penjual</Text>
                            <View style={{padding: '1%',}}>
                                <Image
                                    style={{
                                        width : 32,
                                        height: 32,
                                        borderRadius: 50
                                    }} 
                                    source={{uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}}/>
                            </View>
                            <Text style={{fontSize: 11}}>{this.props.navigation.state.params.seller}</Text>
                        </View>

                    </View>
                <Button
                        style={{width: '100%'}}
                        color="#59B871"
                        title="Beli Sekarang"
                        onPress={() => this.props.navigation.navigate("Confirm", this.props.navigation.state.params)}
                />
            
            </View> 
        )
    }
}