import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import ProtectedRoute from './ProtectedRoute';

import SingleUserPage from "../components/app_components/UserPage/SingleUserPage";
import UserProjectLayoutPage from "../components/app_components/UserPage/UserProjectLayoutPage";
import SingleVoucherPage from "../components/app_components/VoucherPage/SingleVoucherPage";
import VoucherProjectLayoutPage from "../components/app_components/VoucherPage/VoucherProjectLayoutPage";
//  ~cb-add-import~

const AppRouter = () => {
    return (
        <Routes>
            {/* ~cb-add-unprotected-route~ */}
<Route path="/user/:singleUserId" exact element={<SingleUserPage />} />
<Route path="/user" exact element={<UserProjectLayoutPage />} />
<Route path="/voucher/:singleVoucherId" exact element={<SingleVoucherPage />} />
<Route path="/voucher" exact element={<VoucherProjectLayoutPage />} />
            <Route element={<ProtectedRoute redirectPath={'/login'} />}>{/* ~cb-add-protected-route~ */}</Route>
        </Routes>
    );
};

const mapState = (state) => {
    const { isLoggedIn } = state.auth;
    return { isLoggedIn };
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data)
});

export default connect(mapState, mapDispatch)(AppRouter);
