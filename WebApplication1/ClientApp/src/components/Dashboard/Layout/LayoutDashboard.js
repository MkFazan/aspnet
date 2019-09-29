import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
//Admin LTE
//css
import 'admin-lte/bower_components/bootstrap/dist/css/bootstrap.min.css';
import 'admin-lte/bower_components/font-awesome/css/font-awesome.min.css';
import 'admin-lte/bower_components/Ionicons/css/ionicons.min.css';
import 'admin-lte/dist/css/AdminLTE.min.css';
import 'admin-lte/dist/css/skins/_all-skins.min.css';
import 'admin-lte/bower_components/morris.js/morris.css';
import 'admin-lte/bower_components/jvectormap/jquery-jvectormap.css';
//import 'admin-lte/bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css';
import 'admin-lte/bower_components/bootstrap-daterangepicker/daterangepicker.css';
import 'admin-lte/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css';
//js
import 'admin-lte/bower_components/jquery-ui/jquery-ui.min.js';
import 'admin-lte/bower_components/bootstrap/dist/js/bootstrap.min.js';
import 'admin-lte/bower_components/raphael/raphael.min.js';
import 'admin-lte/bower_components/morris.js/morris.min.js';
import 'admin-lte/bower_components/jquery-sparkline/dist/jquery.sparkline.min.js';
import 'admin-lte/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js';
import 'admin-lte/plugins/jvectormap/jquery-jvectormap-world-mill-en.js';
import 'admin-lte/bower_components/jquery-knob/dist/jquery.knob.min.js';
import 'admin-lte/bower_components/moment/min/moment.min.js';
import 'admin-lte/bower_components/bootstrap-daterangepicker/daterangepicker.js';
import 'admin-lte/bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js';
//import 'admin-lte/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js';
import 'admin-lte/bower_components/jquery-slimscroll/jquery.slimscroll.min.js';
import 'admin-lte/bower_components/fastclick/lib/fastclick.js';
import 'admin-lte/dist/js/adminlte.min.js';
//import 'admin-lte/dist/js/pages/dashboard.js';
import 'admin-lte/dist/js/demo.js';

import React from 'react';
import NavMenu from '../Navigations/NavMenu';
import Footer from '../Footer/Footer';

export default props => (
    <div>
        <NavMenu />
        {props.children}
        <Footer />
    </div>
);
