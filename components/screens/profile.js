import React from 'react'
import {View, Text, Image, StyleSheet, Button, ScrollView} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Header from '../header'
import BackHeader from '../backHeader'

export class Profile extends React.Component {
    render () {
        return (
            <View style={{
                //alignItems: 'center',
                //padding: '10%',
                backgroundColor: '#fff',
                height: '100%',
            }}>
                <BackHeader/>
                <ScrollView>
                    <View style={{padding: '10%'}}>
                        <Image
                            style={{
                                width: 100,
                                height: 100,
                                borderRadius: 50,
                                marginBottom: '10%',
                                marginLeft: 'auto',
                                marginRight: 'auto'
                            }} 
                            source={{uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}}/>
                        <Text
                            style= {{
                                textAlign: 'left'
                            }}
                        >Nama Lengkap</Text>
                        <TextInput
                            style={styles.textInput}
                            underlineColorAndroid='transparent'
                        />
                        <Text
                            style= {{
                                textAlign: 'left'
                            }}
                        >Email</Text>
                        <TextInput
                            style={styles.textInput}
                            underlineColorAndroid='transparent'
                        />
                        <Text
                            style= {{
                                textAlign: 'left'
                            }}
                        >Nomor Handphone</Text>
                        <TextInput
                            style={styles.textInput}
                            underlineColorAndroid='transparent'
                        />
                        <Text
                            style= {{
                                textAlign: 'left'
                            }}
                        >Nomor Rekening Bank</Text>
                        <TextInput
                            style={styles.textInput}
                            underlineColorAndroid='transparent'
                        />
                         <Text
                            style= {{
                                textAlign: 'left'
                            }}
                        >Alamat</Text>
                        <TextInput
                            style={styles.textArea}
                            multiline={true}
                            underlineColorAndroid='transparent'
                        />
                        <View style={{paddingTop: '10%'}}>
                            <Button
                                color="#59B871"
                                title="simpan"
                                onPress={() => this.props.navigation.navigate('Main')}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
            
        )
    }
}

export class ProfileWithHeader extends React.Component {
    render () {
        return ( 
            <View style={{
                //alignItems: 'center',
                //padding: '10%',
                margin:0,
                backgroundColor: '#fff',
                height: '100%'
            }}>
                <Header navigation={this.props.navigation}
                    style={{margin: 0,}}
                />
                <ScrollView>
                    <View style={{padding: '10%', paddingTop: 0}}>
                        <Image
                            style={{
                                width: 100,
                                height: 100,
                                borderRadius: 50,
                                marginBottom: '10%',
                                marginLeft: 'auto',
                                marginRight: 'auto'
                            }} 
                            source={{uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}}/>
                        <Text
                            style= {{
                                textAlign: 'left'
                            }}
                        >Nama Lengkap</Text>
                        <TextInput
                            style={styles.textInput}
                            underlineColorAndroid='transparent'
                        />
                        <Text
                            style= {{
                                textAlign: 'left'
                            }}
                        >Email</Text>
                        <TextInput
                            style={styles.textInput}
                            underlineColorAndroid='transparent'
                        />
                        <Text
                            style= {{
                                textAlign: 'left'
                            }}
                        >Nomor Handphone</Text>
                        <TextInput
                            style={styles.textInput}
                            underlineColorAndroid='transparent'
                        />
                        <Text
                            style= {{
                                textAlign: 'left'
                            }}
                        >Nomor Rekening Bank</Text>
                        <TextInput
                            style={styles.textInput}
                            underlineColorAndroid='transparent'
                        />
                         <Text
                            style= {{
                                textAlign: 'left'
                            }}
                        >Alamat</Text>
                        <TextInput
                            style={styles.textArea}
                            multiline={true}
                            underlineColorAndroid='transparent'
                        />
                        <View style={{paddingTop: '10%'}}>
                            <Button
                                color="#59B871"
                                title="simpan"
                                onPress={() => this.props.navigation.navigate('Main')}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
            
        )
    }
}

const styles = new StyleSheet.create({
    textInput: {
        marginTop: '5%',
        marginBottom: '5%',
        padding: 2,
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