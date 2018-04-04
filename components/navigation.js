import React from 'react'
import { View } from 'react-native'
import { TabNavigator, DrawerNavigator, StackNavigator} from 'react-navigation'

import Sell from './screens/sell'
import Buy from './screens/buy'
import Login from './screens/login'
import SignUp from './screens/signup'
import { Profile, ProfileWithHeader } from './screens/profile'
import DetailView from './screens/details'
import Header from './header'
import Confirm from './screens/confirmation'

export const Tabs = TabNavigator({
    Beli: {
        screen: Buy
    },
    Jual: {
        screen: Sell
    }
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: '#ddd',
        labelStyle: {
            color: '#000'
        },
        indicatorStyle: {
           backgroundColor: '#000',
           bottom: '95%'
        },
        style: {
            backgroundColor: '#fff'
        }
    }
})


export const Drawer = DrawerNavigator({
    Beranda: {
        screen: Tabs
    },
    Profile: {
        screen: ProfileWithHeader
    },
    Logout: {
        screen: Login
    }
},{
    drawerWidth: 200
})

export const LoginScreen = StackNavigator({
    Login: {
        screen: Login,
    },
    SignUp: {
        screen: SignUp
    },
    Main: {
        screen: Drawer
    },
    Profile: {
        screen : Profile
    },
    Details: {
        screen: DetailView
    },
    Confirm: {
        screen: Confirm
    }
},
{
    headerMode: "none",
    navigationOptions: {
        headerVisible: false
    }
})