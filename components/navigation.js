import React from 'react'
import { TabNavigator, DrawerNavigator, StackNavigator} from 'react-navigation'

import Sell from './screens/sell'
import Buy from './screens/buy'
import Login from './screens/login'
import SignUp from './screens/signup'
import Profile from './screens/profile'
import DetailView from './screens/details';

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
    }
},
{
    headerMode: "none",
    navigationOptions: {
        headerVisible: false
    }
})