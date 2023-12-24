// import * as React from 'react';
import {FC} from "react";
// import {useDispatch, useSelector} from "react-redux";
// import AppDispatch from "../../store";
// import {useNavigate} from "react-router-dom";
// import {AuthErrorSelector, AuthPendingSelector} from "./store/auth.selector";
// import {RegisterInterface} from "./types/register.interface";
// import {clearErrors, fetchRegister} from "./store/auth.slice";
import RegisterFormComp from "../../components/register-form.comp";
//
// export const checkTokenStatus = (
//     requestStatus: string,
//     tokenPayload: string,
//     navigate: (path: string) => void
// ) => {
//     if (requestStatus !== 'rejected') {
//         localStorage.setItem("token", tokenPayload);
//         navigate("/products");
//     } else return;
// }
//
const RegisterPage: FC = () => {
//     const dispatch = useDispatch<AppDispatch>();
//
//     const navigate = useNavigate();
//     const fetchingErrors = useSelector(AuthErrorSelector);
//     const fetchingPending = useSelector(AuthPendingSelector);
//
//     const handleRegister = async (data: RegisterInterface) => {
//         dispatch(clearErrors());
//
//         const newToken = await dispatch(fetchRegister(data));
//         checkTokenStatus(newToken.meta.requestStatus, newToken.payload, navigate);
//     }
//
    return (
        <RegisterFormComp />
    );
}
//
export default RegisterPage;