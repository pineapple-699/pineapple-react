import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  // General Styles
  splashContainer: {
    flex: 1,
    backgroundColor: '#FEF0D7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 0.094,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#FCB742',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 0.916,
    width: '100%',
    backgroundColor: '#eee',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  headerText: {
    fontSize: 21,
    fontWeight: '600',
    color: '#fff',
    marginTop: 20,
  },
  headerTextWithBackButton: {
    fontSize: 21,
    fontWeight: '600',
    color: '#fff',
    marginTop: 20,
    marginRight: 160,
  },
  appSectionHeader: {
    fontSize: 14,
    marginVertical: 2,
    fontWeight: 'bold',
    color: '#333',
  },
  appText: {
    fontSize: 17,
    color: '#333',
  },
  linkText: {
    fontSize: 12,
    marginHorizontal: 10,
    color: '#333',
  },
  authInputs: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#9f9f9f',
    fontSize: 20,
    height: 40,
    width: '60%',
    marginVertical: 5,
    paddingHorizontal: 10,
  },

  // Button Style
  largeButton: {
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: '95%',
    backgroundColor: '#FCB742',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FCB742',
    shadowColor: 'rgba(0,0,0, .5)', // IOS
    shadowOffset: { height: 2, width: 2 }, // IOS
    shadowOpacity: 2, // IOS
    shadowRadius: 2, // IOS
    elevation: 4, // Android
  },
  largeButtonOutline: {
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: '95%',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#FCB742',
    shadowColor: 'rgba(0,0,0, .5)', // IOS
    shadowOffset: { height: 2, width: 2 }, // IOS
    shadowOpacity: 2, // IOS
    shadowRadius: 2, // IOS
    elevation: 4, // Android
  },
  largeButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  largeButtonOutlineText: {
    color: '#FCB742',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10
  },

  // Splash Screen Styles
  splashHeader: {
    flex: 0.55,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: 10,
  },
  splashCTA: {
    flex: 0.35,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 10,
  },
  splashButtons: {
    flex: 0.1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: 10,
  },
  splashLogo: {
    marginVertical: 10,
  },
  splashHeaderText: {
    fontSize: 42,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 10,
  },
  splashText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },

  // Log In Screen Styles
  logInHeader: {
    flex: 0.58,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logInInputs: {
    flex: 0.3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logInButtons: {
    flex: 0.12,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  logInLogo: {
    height: '50%',
    width: '28%',
  },

  // Sign Up Styles
  signUpHeader: {
    flex: 0.385,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  signUpInputs: {
    flex: 0.55,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  signUpButtons: {
    flex: 0.065,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  signUpLogo: {
    margin: 10,
    height: 110,
    width: 62,
  },

  // Activity Page Styles

  activityHeader: {
    flex: 0.1,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  activityHeaderText: {
    fontSize: 32,
    fontWeight: '500',
    marginLeft: 15,
    marginTop: 30,
  },
  activityContent: {
    flex: 0.75,
    width: '100%',
  },
  activityProductBackground: {
    flexDirection: 'row',
    width: '100%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  activityProductHeader: {
    fontSize: 20,
    fontWeight: '700',
    marginHorizontal: 15,
  },
  activityButton: {
    flex: 0.15,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },

  // Scanner Screen Styles
  scanScreenMessage: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },

  // Profile Screen Styles
  profileHeaderBackground: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FCB742',
    shadowColor: 'rgba(0,0,0, .5)', // IOS
  },
  profileHeader: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userPicBackground: {
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    position: 'absolute',
    marginTop: 15,
    marginLeft: 15,
  },
  userPic: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    resizeMode: 'contain',
    borderRadius: 100,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#333',
  },
  userInfo: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    marginBottom: 10,
    marginLeft: 130,
  },
  usernameText: {
    fontSize: 32,
    fontWeight: '700',
    color: '#fff',
  },
  profileOptions: {
    flex: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
  },
  userEmail: {
    flex: 0.05,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 10,
    marginLeft: 260,
  },
  userEmailText: {
    fontSize: 14,
    fontWeight: '500'
  },
  settingsBackground: {
    flex: 0.95,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 40,
  },
  settingsOptionsBackground: {
    flexDirection: 'row',
    width: '100%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  lastSettingsOptionsBackground: {
    flexDirection: 'row',
    width: '100%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#eee',
    shadowColor: 'rgba(0,0,0, .5)', // IOS
    shadowOffset: { height: 2, width: 2 }, // IOS
    shadowOpacity: 2, // IOS
    shadowRadius: 2, // IOS
    elevation: 4, // Android
  },
  settingsOptionsText: {
    fontSize: 20,
    fontWeight: '700',
    marginHorizontal: 15,
  },

  // Setting Screen Styles
  settingBackground: {
    flexDirection: 'row',
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  settingText: {
    fontSize: 18,
    marginHorizontal: 15,
  },
  settingSectionHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 15,
    marginTop: 30,
    marginBottom: 15,
  },
  cameraMessage: {
    fontSize: 12,
    color: '#B4B4B4',
    marginHorizontal: 15,
    marginTop: 10,
  },

  // ######
  // BELOW NEEDS TO BE EDITED
  // ######

  // Product Screen Styles
  productHeader: {
    flex: 0.35,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#222',
    borderBottomWidth: 1,
  },
  productImage: {
    height: '90%',
    width: '90%',
    resizeMode: 'contain'
  },
  productContent: {
    flex: 0.65,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productInfo: {
    flex: 0.75,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productName: {
    flex: 0.2,
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  productAbout: {
    flex: 0.8,
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productDescription: {
    flex: 0.6,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  productAttributes: {
    flex: 0.4,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  productOptions: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productDropdown: {
    width: '47.5%'
  },
  productAttribute: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  productButtons: {
    flex: 0.25,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical: 10,
  },
  // Cart screen styles
  cartList: {
    flex: 0.9175,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartItem: {
    flex: 0.2,
    flexDirection: 'row',
    marginTop: 30,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4',
  },
  cartEmpty: {
    flex: 0.8,
    backgroundColor: 'orange',
  },
  cartImage: {
    flex: 0.35,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartInfo: {
    flex: 0.65,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  cartSectionHeader: {
    fontSize: 17,
    marginVertical: 2,
    marginHorizontal: 10,
    fontWeight: 'bold',
    color: '#222',
  },
  cartButtons: {
    flex: 0.0825,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical: 10,
  },
  // Payment screen styles

  // paymentModal: {
  //   flex: 0.5,
  //   width: '75%',
  //   backgroundColor: '#222',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // modalContent: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // }

  // Confirmation Screen Styles:
  confirmationIcon: {
    color: '#FCB742',
  },
  orderNumText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#222',
    margin: 10,
  },
  thankYouText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#222',
    margin: 10,
  },
  confirmationText: {
    fontSize: 17,
    textAlign: 'center',
    color: '#222',
    margin: 10,
  }

});

export default styles;
