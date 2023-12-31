import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { RotatingLines } from  'react-loader-spinner'

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <>
        <div className='flex items-center justify-center my-[40vh]'>
        <RotatingLines
        strokeColor="orange"
        strokeWidth="6"
        animationDuration="0.75"
        width="120"
        visible={true}
      />
        </div>
        </>
    }
    if(user?.email){ 
        return children;
    }
    return (
        <Navigate state={location.pathname} to='/login' replace></Navigate>
    );
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
};

export default PrivateRoute;