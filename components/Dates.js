import React from 'react';
import { Text } from 'react-native';
import { 
  List, 
  ListItem, 
  Container,
  Header,
  Title,
  Content,
  Bottom,
  Left,
  Right,
  Body,
} from 'native-base';
import DogList from './DogList';
import Footer from './Footer';

class Dates extends React.Component {
  state = { dogs: [], filter: 'All' }

  setFilter = (filter) => {
    this.setState({ filter });
  }

  filteredDogs = () => {
    const { filter, dogs } = this.state;
    switch(filter) {
      case 'All':
        return dogs;
      case 'Friends':
        return dogs.filter( d => d.friend);
      default:
        return dogs;
    }
  }

  toggleFriend = (id) => {
    let dogs = this.state.dogs.map( dogs => {
      if (dogs.id === id) {
        return {
          ...dog,
          friend: !dog.friend
        }
      }
      return dog;
    });
    this.setState({ dogs });
  }

  render() {
    return(
      <Container>
        <DogList toggleFriend={this.toggleFriend} dogs={this.filteredDogs()} />
        <Footer changeFilter={this.setFilter} activeFilter={this.state.filter} />
      </Container>
    )
  }
}

export default Dates;