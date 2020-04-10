import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

// Redux Imports
import { connect } from 'react-redux';
import { getAuthInfo } from '../reducers/login';

// Style Imports
import styles from '../constants/Style';

class CartScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: []
    };
  }

  componentDidMount = async () => {
    const { authInfo } = this.props;
    const userID = authInfo.user_id;

    const rawResponse = await fetch(`https://pineapple-rest-api.herokuapp.com/cart/${userID}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
    await rawResponse.json().then((data) => {
      const newData = data.cart.products[0];
      this.setState({
        cart: newData.product_info,
      });
    });
  }

  handleProductsInCart = (user_id, product_upc, type, quantity) =>{
    //check cart.py in the backend for types
    const rawResponse = await fetch(`https://pineapple-rest-api.herokuapp.com/cart/${user_id}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          product_upc:product_upc,
          type:type,
          quantity:quantity
        })
      });

      const content = await rawResponse.json();
      console.log(content); //eslint-disable-line
  }


  render() {
    const { navigation } = this.props;
    const { cart } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.cartList}>
          <View style={styles.cartItem}>
            <View style={styles.cartImage}>
              <Image
                style={styles.productImage}
                source={{ uri: cart.picture }}
              />
            </View>
            <View style={styles.cartInfo}>
              <Text style={styles.cartSectionHeader}>{cart.description}</Text>
              <Text style={styles.linkText}>
                Size:
                {cart.size}
              </Text>
              <Text style={styles.linkText}>
                Color:
                {cart.color}
              </Text>
              <Text style={styles.linkText}>Quantity: 1</Text>
              <Text style={styles.linkText}>
                Price: $
                {cart.price}
              </Text>
            </View>
          </View>
          <View style={styles.cartEmpty} />
        </View>
        <View style={styles.cartButtons}>
          <TouchableOpacity
            style={styles.largeButton}
            onPress={() => navigation.navigate('Payment')}
            underlayColor="#fff"
          >
            <Text style={styles.largeButtonText}>Proceed to Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  authInfo: getAuthInfo(state)
});

export default connect(mapStateToProps, null)(CartScreen);



// const rawResponse = await fetch(`https://pineapple-rest-api.herokuapp.com/history/purchase/${userid}`, {
//       method: 'GET',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json'
//       },
//     });

// const rawResponse = fetch(`https://pineapple-rest-api.herokuapp.com/history/purchase/${userid}`, {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         product_id: "WHATEVERPRODUCTIDYOUHAVE"
//       })
//     });

//     rawResponse.json().then((data)=>{
//       console.log(data)
//     })