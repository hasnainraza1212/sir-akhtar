import React, { useEffect, useState } from "react";
import EmailVerification from "../../Components/EmailVerification/EmailVerification";
import { useDispatch, useSelector } from "react-redux";
import useAxios from "../../API/useAxios/useAxios";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { handleAuth } from "../../Redux/Slice/UserSlice/UserSlice";
import { handleSnackAlert } from "../../Redux/Slice/SnackAlertSlice/SnackAlertSlice";

const VerifyEmail = () => {
  const auth = useSelector((state) => state.auth);
  const { emailVerificationStatus } = auth?.user;
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
              user: {
                ...auth.user,
                emailVerificationStatus:
                  response?.data?.verificationStatus?.emailVerificationStatus,
              },
            })
          );
          dispatch(
            handleSnackAlert({
              open: true,
              message: response?.data?.message,
              severity: "success",
            })
          );
          setIsDisabled(true);
          navigate("/playlists");
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
        console.log(response)
      }
    } catch (error) {
      console.error(error);
      setIsDisabled(true);
    }
  };

  const handleEmailVerification = async (id) => {
    setIsDisabled(false);

    try {
      await updateStatus();

      const response = await axiosInstance.get("/api/verification/status");
      if (response?.data?.status === 200) {
        if (response?.data?.verificationStatus?.emailVerified) {
          clearInterval(id);
          dispatch(
            handleSnackAlert({
              open: true,
              message: response?.data?.message,
              severity: "success",
            })
          );
          navigate("/playlists");
          setIsEmailVerified(true);
        }
      } else if (response?.data?.status === 404) {
        dispatch(
          handleSnackAlert({
            open: true,
            message: response?.data?.message,
            severity: "error",
          })
        );
      }
    } catch (error) {
      alert(error);
      console.log("error", error);
    }
  };

  useEffect(() => {
    if (params._id && params?.username && params?.emailVerificationStatus) {
      const intervalId = setInterval(() => {
        if (isDisabled) {
          handleEmailVerification(intervalId);
        }
      }, 1000);
      return () => clearInterval(intervalId);
    }
    handleEmailVerification("");
  }, []);

  if (emailVerificationStatus) {
    return <Navigate to="/playlists" replace={true} />;
  }

  return <EmailVerification isEmailVerified={isEmailVerified} />;
};

export default VerifyEmail;
