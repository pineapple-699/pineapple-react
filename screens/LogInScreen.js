import React from 'react';
import {
  View,
  StatusBar,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import { connect } from 'react-redux';
import styles from '../constants/Style';

import { setAuthentication, setProfile } from '../reducers/login';

import iconLogo from '../assets/images/icon-logo.png';

class LogInScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  // componentDidMount() {
  //   const {
  //     setAuth, setProf, setProd
  //   } = this.props;

  //   const loggedInUser = {
  //     user_id: '0',
  //     username: 'Admin',
  //     email: 'admin@gmail.com',
  //     first_name: 'Admin',
  //     last_name: 'Administrator',
  //   };


  //   setProf(loggedInUser);
  //   setAuth(true);
  //   setProd();
  // }

  handleLogIn = async () => {
    // http://127.0.0.1:5000/users/name
    const { email } = this.state;
    const { navigation } = this.props;

    fetch('https://pineapple-rest-api.herokuapp.com/users')
      .then((response) => response.json())
      .then((responseJson) => {
        const userInfo = responseJson.users;

        // Needs to be re-written for validation
        userInfo.forEach((account) => {
          if (email === account.username) {
            const {
              setAuth, setProf,
            } = this.props;

            const loggedInUser = {
              user_id: account.id,
              username: account.username,
              email: `${account.username}@gmail.com`,
              first_name: 'Real',
              last_name: 'Person',
              addressOne: '105 S State St',
              addressTwo: 'Ann Arbor, MI 48109',
              cardNumber: 'VISA ****9178'
            };
            setProf(loggedInUser);
            setAuth(true);
            navigation.navigate('Activity');
          }
        });
      });
  }

  render() {
    const {
      email,
      password,
    } = this.state;
    return (
      <KeyboardAvoidingView style={styles.splashContainer} behavior="padding" enabled>
        <StatusBar barStyle="dark-content" />
        <View style={styles.logInHeader}>
          <Image
            // style={styles.logInLogo}
            source={iconLogo}
          />
          <Text style={styles.splashHeaderText}>Sign In</Text>
        </View>
        <View style={styles.logInInputs}>
          <TextInput
            placeholder="Email"
            style={styles.authInputs}
            autoCapitalize="none"
            value={email}
            onChangeText={(value) => { this.setState({ email: value }); }}
          />
          <TextInput
            placeholder="Password"
            style={styles.authInputs}
            autoCapitalize="none"
            value={password}
            onChangeText={(value) => { this.setState({ password: value }); }}
          />
        </View>
        <View style={styles.logInButtons}>
          <TouchableOpacity
            style={styles.largeButton}
            onPress={() => this.handleLogIn()}
            underlayColor="#fff"
          >
            <Text style={styles.largeButtonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapDispatchToProps = {
  setAuth: setAuthentication,
  setProf: setProfile,
};

export default connect(null, mapDispatchToProps)(LogInScreen);
