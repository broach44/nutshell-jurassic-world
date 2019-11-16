import firebase from 'firebase/app';
import 'firebase/auth';
import $ from 'jquery';
import dinosaurs from '../../components/dinos/dinos';
import rides from '../../components/rides/rides';
import vendors from '../../components/vendors/vendors';
import allStaff from '../../components/allStaff/allStaff';


const logInButton = $('#logButtons');
const logOutButton = $('#logOutButton');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      logOutButton.removeClass('hide');
      logInButton.addClass('hide');
      dinosaurs.userModeToggle();
      rides.rideLoginStatus();
      vendors.vendorLoginStatus();
      allStaff.staffModeToggle();
    } else {
      logOutButton.addClass('hide');
      logInButton.removeClass('hide');
      dinosaurs.userModeToggle();
      rides.rideLoginStatus();
      vendors.vendorLoginStatus();
      allStaff.staffModeToggle();
    }
  });
};

export default { checkLoginStatus };
