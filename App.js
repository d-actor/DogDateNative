import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { StyleSheet, Text, View } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Bottom,
  Left,
  Right,
  Body,
  Icon,
  Drawer,
  Button,
} from 'native-base';
import { NativeRouter, Route, Switch } from 'react-router-native';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Profile from './components/Profile';
import Dates from './components/Dates';
import RealFooter from './components/Footer';

class App extends React.Component {
  state = { drawerOpen: false }
  
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf')
    });
  }

  toggleDrawer = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen }, () => {
      if (this.state.drawerOpen)
        this.openDrawer();
      else
        this.closeDrawer();
    })
  }

  closeDrawer = () => {
    this.drawer._root.close();
  }

  openDrawer = () => {
    this.drawer._root.open();
  }

  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <Container style={{backgroundColor: 'teal'}}>
            <Header>
              <Left>
              <Button 
                transparent 
                iconLeft 
                title='Home'
                onPress={this.toggleDrawer}
              >
                <Icon name='home' />
              </Button>
              </Left>
              <Body>
                <Title>Dog Dates</Title>
                <Text>Dates For Dogs!</Text>
              </Body>
              <Right />
            </Header>
            <Content>
              <Drawer
                ref={ ref => { this.drawer = ref }}
                content={
                  <Sidebar
                    close={this.toggleDrawer}
                    navigator={this._navigator}
                  />
                }
                onClose={this.closeDrawer}
              >
              </Drawer>
              { this.state.drawerOpen ? null :
                <View>
                  <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/profile' component={Profile} />
                    <Route exact path='/dates' component={Dates} />
                  </Switch>
                </View>
              }
            </Content>
            <Footer>
              <RealFooter />
            </Footer>
          </Container>
        </NativeRouter>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
