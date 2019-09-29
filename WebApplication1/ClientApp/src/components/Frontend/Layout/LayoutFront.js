//import '../../../assets/front/css/bootstrap.css';
//import '../../../assets/front/css/animate.css';
//import '../../../assets/front/css/owl.carousel.min.css';
//import '../../../assets/front/fonts/ionicons/css/ionicons.min.css';
//import '../../../assets/front/fonts/fontawesome/css/font-awesome.min.css';
//import '../../../assets/front/fonts/flaticon/font/flaticon.css';
//import '../../../assets/front/css/style.css';

//import '../../../assets/front/js/jquery-3.2.1.min.js';
//import '../../../assets/front/js/jquery-migrate-3.0.0.js';
//import '../../../assets/front/js/popper.min.js';
//import '../../../assets/front/js/bootstrap.min.js';
//import '../../../assets/front/js/owl.carousel.min.js';
//import '../../../assets/front/js/jquery.waypoints.min.js';
//import '../../../assets/front/js/jquery.stellar.min.js';
//import '../../../assets/front/js/main.js';



import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import Header from '../Navigations/Header';
import Footer from '../Footer/Footer';

export default props => (
    <div>
        <div class="wrap">
            <Header />
            {props.children}
            <Footer />
        </div>
        <div id="loader" class="fullscreen"><svg class="circular" width="48px" height="48px"><circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"></circle><circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#f4b214"></circle></svg></div>
    </div>
);
