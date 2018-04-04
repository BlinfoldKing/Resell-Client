import React from 'react'
import { View, StyleSheet, Text, Button, Image } from 'react-native'
import BackHeader from '../backHeader'

export default class Confirm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 1
        }
    }
    
    render () {
        return ( 
            <View
             style={{
                backgroundColor: '#fff',
                flex: 1,
                justifyContent: 'space-between'
             }}   
            >
                <View>
                    <BackHeader
                        currScreen="Konfirmasi Barang"
                        prev="Main"
                        navigation={this.props.navigation}
                    />
                    <View style={{
                        padding: '5%',
                        flexDirection: 'row'
                        }}>
                        <Image
                            style={{
                                paddingTop:0,
                                borderWidth: 4,
                                marginTop: 0,
                                width: 100,
                                height: 100,
                                borderRadius: 5
                            }}
                            source={{uri: this.props.navigation.state.params.pic}}
                        />
                        <View style={{
                            paddingHorizontal: '10%'
                        }}>
                            <Text style={{
                                color: '#000',
                                fontSize: 15
                            }}>
                                {this.props.navigation.state.params.title}
                            </Text>
                            <Text style={{
                                marginBottom: '30%',
                                fontSize: 10,
                            }}>
                                {this.props.navigation.state.params.location}
                            </Text>
                            <View style={{flexDirection: 'row'}}>
                                <Image 
                                    style={{width: 24, height: 24, borderRadius: 50}}
                                    source={{uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}}
                                />
                                <View style={{paddingHorizontal: '10%'}}>
                                    <Text style={{fontSize: 11}}>
                                        {this.props.navigation.state.params.seller}
                                    </Text>
                                    <Text style={{fontSize: 9}}>
                                        Lorem, Ipsum
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={{
                        backgroundColor: '#fff',
                        borderTopColor: '#aaa',
                        borderTopWidth: 1,
                        padding: '2%',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <Text style={{color: "#59B871"}}>Rp. {this.props.navigation.state.params.price},-</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text 
                                style={this.state.count > 1 ? style.radialButton : style.disabledRadialButton}
                                onPress={() => {if(this.state.count > 1) this.setState({count: this.state.count - 1})}}
                            >-</Text>
                            <Text style={{paddingHorizontal: 10}}>{this.state.count}</Text>
                            <Text
                                style={this.state.count < this.props.navigation.state.params.total ? style.radialButton : this.props.disabledRadialButton}
                                onPress={() => {if(this.state.count < this.props.navigation.state.params.total) this.setState({count: this.state.count + 1})}}
                            >+</Text>
                        </View>

                    </View>
                    <Button
                        style={{width: '100%'}}
                        color="#59B871"
                        title="Konfirmasi"
                        onPress={() => fetch(`https://resell-api.herokuapp.com/deleteData/${this.props.navigation.state.params.id}`,{
                            method: 'DELETE'
                        })}
                    />
                </View>
            </View>
        )
    }
}

let style = StyleSheet.create({
    radialButton: {
        backgroundColor: "#59B871",
        paddingHorizontal: 7,
        borderRadius: 50,
        color: '#fff'
    },
    disabledRadialButton: {
        backgroundColor: "#bbb",
        paddingHorizontal: 7,
        borderRadius: 50,
        color: '#fff'
    }
})