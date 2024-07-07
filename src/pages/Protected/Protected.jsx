import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { handleSnackAlert } from '../../Redux/Slice/SnackAlertSlice/SnackAlertSlice'
import VerifyPhone from '../VerifyPhone/VerifyPhone'
import VerifyEmail from '../VerifyEmail/VerifyEmail'
import useAxios from '../../API/useAxios/useAxios'

const Protected = ({ children }) => {
    const auth = useSelector(state => state?.auth)
    const { phoneVerificationStatus, emailVerificationStatus }  = auth
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams()
    const params = {
     _id: searchParams.get("_id"),
     username: searchParams.get("username"),
     emailVerificationStatus: searchParams.get("emailVerificationStatus")
  
    }
    useEffect(() => {
        if (!auth?.authenticated) {
            dispatch(handleSnackAlert({ open: true, message: "You're not Authorized, Login first.", severity: "error" }))
            navigate("/", { replace: true })
        }
        
        else if (auth?.authenticated && !phoneVerificationStatus) {
            dispatch(handleSnackAlert({ open: true, message: "Please verify your phone number.", severity: "error" }))
            navigate("/verify-phone", { replace: true })
        } 
        
        else if (auth?.authenticated && !emailVerificationStatus) {
            if((!params?._id || !params?.username || !params?.emailVerificationStatus) && !pathname.includes("verify-email") ){
                dispatch(handleSnackAlert({ open: true, message: "Please verify your email.", severity: "error" }))
                    console.log("verify email page pr ni hon");
            }
           
        }
    }, [auth, phoneVerificationStatus, emailVerificationStatus, navigate, pathname, dispatch])

    if (!auth?.authenticated) {
        return null; // This will not render anything while navigate is in process
    } 
    if (auth?.authenticated && !phoneVerificationStatus) {
        return <Navigate to="/verify-phone" />
    }
    if (auth?.authenticated && !emailVerificationStatus) {
        return <Navigate to="/verify-email" />
    }
    return <div>{children}</div>
}

export default Protected
