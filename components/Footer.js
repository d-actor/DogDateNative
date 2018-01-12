import React from 'react';
import { Text } from 'react-native';
import { 
  FooterTab,
  Button,
  Icon,
 } from 'native-base';

const Footer = () => (
  <FooterTab>
    <Button vertical onPress={() => this.toggleDrawer()}>
      <Icon name='ios-people' />
      <Text>Swipe</Text>
    </Button>
    <Button vertical onPress={()=> this.openDescription}>
      <Icon name='ios-contact' />
      <Text>Profile</Text>
    </Button>
    <Button vertical>
      <Icon name='paw' />
        <Text>Friends</Text>
    </Button>
  </FooterTab>
)

export default Footer;