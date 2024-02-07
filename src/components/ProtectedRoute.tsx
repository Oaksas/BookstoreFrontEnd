import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils';


interface PrivateRouteProps {
    path: string;
    element: React.ReactNode;
}

const ProtectedRoute: React.FC<PrivateRouteProps> = ({ path, element }: PrivateRouteProps) => {
    const isAuth = isAuthenticated();

    return isAuth ? (
        <Route path={path} element={element} />
    ) : (
        <Navigate to="/login" replace={true} state={{ from: path }} />
    );
};

export default ProtectedRoute;
