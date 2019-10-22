import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types'
import api from '../../services/api';
import {
  Container, Hearder, Avatar, Name, Bio, Stars,
  Starred, OwnerAvatar, Info, Title, Author,
} from './styles';


export default class User extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name
  });

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func
    }).isRequired
  }

  state = {
    user: '',
    starts: [],
    loading: false,
    page: 0
  }
  async componentDidMount() {
    this.setState({ loading: false })
    const { navigation } = this.props;
    const user_ = navigation.getParam('user');
    const response = await api.get(`/users/${user_.login}/starred?page=0`);
    this.setState({ stars: response.data, user: user_, loading: false })
  }

  render() {
    const { stars, user, loading } = this.state;
    return (
      <Container>
        <Hearder>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>



        </Hearder>
        {loading ? (<ActivityIndicator color="#999" />) : (
          <Stars
            data={stars}
            keyExtractor={star => String(star.id)}
            renderItem={({ item }) => (
              <Starred>
                <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                <Info>
                  <Title>{item.name}</Title>
                  <Author>{item.owner.login}</Author>
                </Info>
              </Starred>
            )}
          >

          </Stars>
        )}


      </Container>

    );
  }

}
