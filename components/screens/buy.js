import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

import Card from '../card'
import Header from '../header'
import ticket from '../../model/ticket';

export default class Buy extends React.Component{
    
    state = {
        data: [],
        modalProps:{
            isVisible: false
        }
    }


    getData () {
        fetch(' https://resell-api.herokuapp.com/')
        .then(res => JSON.parse(res._bodyText))
        .then(res => this.setState({
            data: res.data
        }))
        .catch(err => console.error(err))
    }

    constructor(props) {
        super(props)
        this.getData()
    }
    
    showModal() {

    }

    render() {
        this.getData()
        // this.setState({modalProps : {
        //     isVisible: false
        // }
        return (
            <View style={{
                backgroundColor: '#fff',
                height: '100%'
            }}>
                <Header 
                    navigation={this.props.navigation}
                    currScreen="Beli Tiket"
                />
                <View style={{
                    flex: 1/16,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    margin: 20,
                    marginTop: 0,
                    borderBottomWidth: 1,
                    borderColor: '#ccc',
                    paddingBottom: 10
                }}>
    
                    <Text style={styles.disableText}> Baru </Text>
                    <Text style={styles.activeText}> Semua Ticket </Text>
                    <Text style={styles.disableText}> Filter </Text>

                </View>
                <ScrollView>
                    <View style={{
                        marginLeft: 15,
                        marginTop: 0,
                        flex: 1, 
                        flexDirection:'row',
                        flexWrap: 'wrap',
                    }}>
                        {this.state.data.map(
                            (ticket, i) => 
                                <View
                                    key={i}
                                    onTouchStart={() => this.setState({modalProps : {
                                        title: ticket.title,
                                        price: ticket.price,
                                        location: ticket.location,
                                        seller: ticket.seller,
                                        pic: ticket.pic,
                                        total: ticket.total,
                                        id:  ticket.id
                                    }})}
                                    onTouchEnd={() => this.props.navigation.navigate('Details', this.state.modalProps)}
                                >
                                    <Card 
                                        key={i} 
                                        title={ticket.title}
                                        price={ticket.price}
                                        location={ticket.location}
                                        pic={ticket.pic}
                                    />
                                </View>)}
                    </View>
                    <Text style={{
                            marginBottom: '15%',
                        }}></Text>
                </ScrollView>
            </View>
        )

    }
}

const styles = new StyleSheet.create ({
    activeText: { 
        color: '#000',
    },
    disableText: {
        color: '#ccc'
    }
})