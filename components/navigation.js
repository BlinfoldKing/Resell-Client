import React from 'react'
import { TabNavigator, DrawerNavigator, StackNavigator} from 'react-navigation'

import Sell from './screens/sell'
import Buy from './screens/buy'
import Login from './screens/login'
import SignUp from './screens/signup'

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
    Logout: {
        screen: Login
    }
},{
    drawerWidth: 300
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
    }
},
{
    headerMode: "none",
    navigationOptions: {
        headerVisible: false
    }
})
