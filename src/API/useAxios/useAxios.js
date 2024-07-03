import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleAuth } from "../../Redux/Slice/UserSlice/UserSlice";

const useAxios = () => {
  const auth = useSelector((state) => state?.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = auth.accessToken;
  const refreshToken = auth.refreshToken;
  const axiosInstance = axios.create({
    baseURL: "http://localhost:5000",
    validateStatus: function (status) {
      return status >= 200 && status < 300; // default
    }
  });
  axiosInstance.interceptors.request.use(
    (config) => {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
      return config;
    },
    (error) => Promise.reject(error)
  );
  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      if (error?.response?.status === 401 && !originalRequest?._retry) {
        originalRequest._retry = true;
        try {
          let response = await axios.post(
            "http://localhost:5000/api/auth/refresh-access-token",
            { refreshToken },
            { withCredentials: true }
          );
          response = response.data;
          if (response.success) {
            const data = {
              accessToken: response.accessToken,
            };
            dispatch(handleAuth(data));
            axiosInstance.defaults.headers['Authorization'] = 'Bearer ' + response.data.accessToken;
            return await axiosInstance(originalRequest);
            //set the auth state with response user
          }
        } catch (error) {
          console.log("error", error)
          if (error?.response && error?.response?.status === 403) {
            dispatch(
              handleAuth({
                user: null,
                accessToken: null,
                refreshToken: null,
                authenticated: false,
              })
            );
            navigate("/", { replace: true });
            // set the auth state null
            //navigate to / clear histroy
          }
        }
      }
      // if(error.response.status===404){
      //   throw ({message:error.response.data.message})

      // }
    }
  );
  return axiosInstance;
};
export default useAxios;
