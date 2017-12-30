import React from 'react';
import { ListItem } from 'native-base';

const styles = {
  standard: { color: 'blue' },
  friend: { textDecoration: 'underline', color: 'green' },
}

const Dog = ({ name, id, toggleFriend }) => (
  <ListItem
    onPress={() => toggleFriend(id)}
    style={friend ? { ...styles.standard, ...styles.complete} : styles.standard }
  >
    {name}
  </ListItem>
)

export default Dog;