import React from 'react'
import { TabNavigator} from 'react-navigation'

import Sell from './screens/sell'
import Buy from './screens/buy'

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
