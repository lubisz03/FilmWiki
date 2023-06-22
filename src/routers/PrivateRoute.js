import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ isAuthenticated, children }) => {
  if (isAuthenticated) {
    return children;
  }

  return <Navigate to='/' />;
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.uid,
});

export default connect(mapStateToProps)(PrivateRoute);
