import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

// DevApp Styles
import { AppStyles } from '../styles/AppStyles';
import { HeaderStyles } from '../styles/HeaderStyles';

export default class Header extends Component {
  render() {
    const { font20, font24, p16, pL72, white } = AppStyles;
    return (
      <View style={HeaderStyles.container} >

        {/* Time bar */}
        <View style={{height: 25, backgroundColor: '#0004'}} />
        {/* / Time bar */}

        {/* Header content */}
        <View style={HeaderStyles.header} >

          {/* Header left icon */}
          <View style={{flex: 1}}>
            <Icon name='menu'
              style={[white, font24, p16]} />
          </View>
          {/* / Header left icon */}

          {/* Header Text */}
          <View style={{flex: 4}} >
            <Text style={[white, font20, pL72]} >
              DevApp
            </Text>
          </View>
          {/* / Header Text */}

          {/* Header right icon */}
          <View style={{flex: 1}} >
              <Icon name='magnify'
                style={[font24, white]} />
          </View>
          {/* / Header right icon */}

        </View>
        {/* / Header content */}

      </View>
    );
  }
}
