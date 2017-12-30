import React from 'react';
import { Text } from 'react-native';
import Dog from './Dog';
import { H1, H2, List, ListItem } from 'native-base';

class DogList extends React.Component {
  render() {
    let listDogs = this.props.dogs.map( dog => {
      return (<Todo key={dog.id} {...dog} toggleFriend={this.props.toggleFriend} />)
    });

      if( listDogs.length > 0 ){
        return(
          <List>
            <H2>{listDogs}</H2>
          </List>
        )
      }else {
        return(
        <H1>Nothing Here</H1>
        )
    }
  }
}

export default DogList;