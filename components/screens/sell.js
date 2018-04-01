import React from 'react'
import { View, Text, StyleSheet, Button, CameraRoll } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

import ticket from '../../model/ticket';
import Header from '../header';

import ImagePicker from 'react-native-image-picker';

require("json-circular-stringify")

export default class Sell extends React.Component{

    state = ({
        fileEmpty: true,
        file: undefined,
        title: '',
        price: '',
        location: '',
        seller: 'lorem',
        desc: '',
        total: '',
        photouri: ''
    })

    submit() {
        const data = new FormData()
        data.append('title', this.state.title)
        data.append('price', this.state.price)
        data.append('seller', this.state.seller)
        data.append('location', this.state.location)
        data.append('total', this.state.total)
        data.append('desc', this.state.desc)
        data.append('files', {
            uri: this.state.file.uri,
            type: 'image/jpeg', // or photo.type
            name: 'test.jpg'
        }, `${this.state.title}.jpg`)
        console.log(data)

        fetch(' https://resell-api.herokuapp.com/', {
                method: 'post',
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                body: data,
            })
            .then(res => console.log(res))
            .then(this.setState({
                fileEmpty: true,
                file: undefined,
                title: '',
                price: '',
                location: '',
                seller: 'lorem',
                desc: '',
                total: '',
                photouri: ''
            }))
            .catch(err => console.error(err))
    }

    showPicker() {

        const options = {
            title: 'Pilih Foto',
            customButtons: [
              {name: 'fb', title: 'Choose Photo from Facebook'},
            ],
            storageOptions: {
              skipBackup: true,
              path: 'images'
            }
          };

          ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            }
            else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            }
            else {
              let source = { uri: response.uri };
              console.log(source)
              // You can also display the image using data:
              // let source = { uri: 'data:image/jpeg;base64,' + response.data };
          
              this.setState({
                fileEmpty: false,
                file: response
              });
            }
          });
    }

    constructor(props) {
        super(props)
        
    }

    render() {
        return (
            <View style={{
                backgroundColor: '#fff',
                height: '100%'
            }}>

                <Header 
                     navigation={this.props.navigation}
                    currScreen="Jual Tiket"
                />
                <View style={{
                    margin: 20,
                    padding: 10,
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}>
                    <View style={{
                        width: '100%',
                        marginBottom: 10
                        }}>
                        
                        <Text style={{marginBottom: 10}}>Nama Tiket</Text>
                        <TextInput
                            value={this.state.title}
                            style={styles.textInput}
                            underlineColorAndroid='transparent'
                            onChange={(title) => this.setState({title: title.nativeEvent.text})}
                        />
                    </View>
                    <View style={{
                        width: '45%',
                        marginRight: '5%',
                        marginTop: 10,
                        marginBottom: 10
                    }}>
                        <Text style={{marginBottom: 10}}>Harga ticket</Text>
                        <TextInput
                            value={this.state.price}
                            style={styles.textInput}
                            underlineColorAndroid='transparent'
                            onChange={(price) => this.setState({price: price.nativeEvent.text})}
                        />
                    </View>
                    <View style={{
                        width: '45%',
                        marginLeft: '5%',
                        marginTop: 10
                    }}>
                        <Text style={{marginBottom: 10}}>Jumlah Tiket</Text>
                        <TextInput
                            value={this.state.total}
                            style={styles.textInput}
                            underlineColorAndroid='transparent'
                            onChange={(total) => this.setState({total: total.nativeEvent.text})}
                        />
                    </View>
                    <View style={{
                        width: '100%',
                        marginBottom: 10
                        }}>
                        
                        <Text style={{marginBottom: 10}}>Deskripsi</Text>
                        <TextInput
                            value={this.state.desc}
                            style={styles.textArea}
                            underlineColorAndroid='transparent'
                            multiline={true}
                            onChange={(desc) => this.setState({desc: desc.nativeEvent.text})}
                        />
                    </View>
                    <View style={{
                        width: '100%',
                        marginTop: 10
                    }}>
                        <Text style={{marginBottom: 10}}>Jumlah Tiket</Text>
                        <Text
                            style={styles.textInput}
                            onPress={this.showPicker.bind(this)}
                        >{this.state.fileEmpty ? '          .png/.jpg' : this.state.file.uri}</Text>
                    </View>
                    <View style={{
                        width: '100%',
                        marginTop: 10
                    }}>
                        <Button
                            style={{width: '100%'}}
                            color="#59B871"
                            title="Jual Sekarang"
                            onPress={this.submit.bind(this)}
                        />
                    </View>
                </View>
            </View>
        )

    }
}

const styles = new StyleSheet.create({
    textInput: {
        padding: 5,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
    },
    textArea: {
        padding: 1,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        height: 70,
        fontSize: 12,
    }
})