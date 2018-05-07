import React from 'react';
import {connect} from 'react-redux';
import{Route, Redirect} from 'react-router-dom';
// import DashboardSidebar from '../Components/Dashboard/Dashboard.Sidebar';
import '../Styles/Dashboard/index.scss'
import '../Styles/Dashboard/sb-admin.scss'

export const PrivateRoute = ({isAuthenticated, component: Component, ...rest}) => (
    isAuthenticated ? (
        <Route {...rest} component={(props)=> (
            // <div className="fixed-nav sticky-footer bg-dark">
            <div>
                {/* <DashboardSidebar/>                 */}
                <Component {...props}/>
            </div>
        )}/>
    ) 
    :<Redirect to="/login"/>
)

const mapStateToProps = (state) => ({
    isAuthenticated: !!localStorage.getItem('auth')
})

export default connect(mapStateToProps)(PrivateRoute);