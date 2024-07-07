import React, { useEffect, useState } from "react";
import EmailVerification from "../../Components/EmailVerification/EmailVerification";
import { useDispatch, useSelector } from "react-redux";
import useAxios from "../../API/useAxios/useAxios";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { handleAuth } from "../../Redux/Slice/UserSlice/UserSlice";
import { handleSnackAlert } from "../../Redux/Slice/SnackAlertSlice/SnackAlertSlice";

const VerifyEmail = () => {
  const auth = useSelector((state) => state.auth);
  const { emailVerificationStatus, phoneVerificationStatus } = auth
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const axiosInstance = useAxios();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isDisabled, setIsDisabled] = useState(true);

  const params = {
    _id: searchParams.get("_id"),
    username: searchParams.get("username"),
    emailVerificationStatus: searchParams.get("emailVerificationStatus"),
  };

  const updateStatus = async () => {
    if (!params?._id) {
      return dispatch(
        handleSnackAlert({
          open: true,
          message: "ID not found. Please confirm the email from Gmail.",
          severity: "error",
        })
      );
    }
    
    if (!params?.username) {
      return dispatch(
        handleSnackAlert({
          open: true,
          message: "Email verification status not found. Please confirm the email from Gmail.",
          severity: "error",
        })
      );
    }
    
    if (!params?.username) {
      return dispatch(
        handleSnackAlert({
          open: true,
          message: "Username not found. Please confirm the email from Gmail.",
          severity: "error",
        })
      );
    }
    
    try {
      const response = await axiosInstance.get(
        `/api/verification/update-status`,
        {
          params: {
            _id: params?._id,
            username: params?.username,
            emailVerificationStatus: params?.emailVerificationStatus,
          },
        }
      );
      if (response) {
        if (response.status === 200) {
          dispatch(
            handleAuth({
                emailVerificationStatus:
                  response?.data?.verificationStatus?.emailVerificationStatus,
            
            })
          );
          console.table({
                  ...auth,
                  emailVerificationStatus:
                    response?.data?.verificationStatus?.emailVerificationStatus,
              
              })
          dispatch(
            handleSnackAlert({
              open: true,
              message: response?.data?.message,
              severity: "success",
            })
          );
          setIsDisabled(true);
          navigate("/courses");
        } else if (response.status === 404) {
          setIsDisabled(true);
          dispatch(
            handleSnackAlert({
              open: true,
              message: response?.data?.message,
              severity: "error",
            })
          );
        }
      }
      else{
      }
    } catch (error) {
      console.error(error);
      setIsDisabled(true);
    }
  };
  useEffect(()=>{
    (async()=>{
          await updateStatus();
    })()
  },[])
  if(!auth.authenticated){
   dispatch(handleSnackAlert({ open: true, message: "You're not Authorized, Login first.", severity: "error" }))

    return <Navigate to="/"/>
  }
  if(!phoneVerificationStatus ){
    return <Navigate to="/verify-phone" replace={true} />;

  }
  if(!phoneVerificationStatus && emailVerificationStatus){
    return <Navigate to="/verify-phone" replace={true} />;

  }
  if (phoneVerificationStatus && emailVerificationStatus) {
    return <Navigate to="/courses" replace={true} />;
  }

  return <EmailVerification isEmailVerified={isEmailVerified} />;
};

export default VerifyEmail;
