import React from 'react';
import { Text } from 'react-native';
import { Container } from 'native-base';

const filterLink = (text, current, cb) => {
  if (text === current)
    return <Text>{text}</Text>
  return(
    <Text
      onPress={() => cb(text)}
      style={{textDecoration: 'underline', color: 'blue'}}
    >
      {text}
    </Text>
  )
}

const Footer = ({ activeFilter, changeFilter }) => (
  <Container>
    <Text>
      { filterLink('All', activeFilter, changeFilter) }
      {' '}
      { filterLink('Friends', activeFilter, changeFilter) }
    </Text>
  </Container>
)

export default Footer;