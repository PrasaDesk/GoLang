import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setTokens } from "../../app/authReducer";
import { useNavigate } from "react-router-dom";
import { RouteConstants } from "../../constants/RouteConstants";
import TrestleLogo from "../../assets/trestle_logo.svg";
import OtpInput from "react-otp-input";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const token: any = useAppSelector((state: any) => state.authReducer.token);

  const [otp, setOtp] = useState("123456");

  const setToken = () => {
    dispatch(setTokens("sample_token_to_check_redux"));
  };

  return (
    <>
      <div className="p-5 bg-slate-800">
        <img src={TrestleLogo} alt="logo" className="h-10" />
      </div>
      <div onClick={setToken}>this is login screen</div>
      <div
        className="text-red-400 cursor-pointer"
        onClick={() => {
          navigate(RouteConstants.ROUTE_SIGNUP);
        }}
      >
        SignUp
      </div>
      <div>token: [ {token} ]</div>
      <div>{process.env.REACT_APP_API_URL}</div>

      <div className="p-10">
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span className="px-4" />}
          renderInput={(props) => <input {...props} type="text" />}
          inputStyle={{
            border: "1px solid red",
            backgroundColor: "#f5b9b9",
            padding: "10px 20px",
            borderRadius: "2px",
            color: "yellow",
          }}
          inputType="text"
        />
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
        />
      </div>
    </>
  );
};
