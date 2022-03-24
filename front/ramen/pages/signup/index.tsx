import React, { useEffect, useState } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockIcon from "@mui/icons-material/Lock";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CakeIcon from "@mui/icons-material/Cake";
import WcIcon from "@mui/icons-material/Wc";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "next/router";
import FrontArrow from "../../components/signup/FrontArrow";
import SignupUserInfoForm from "../../components/signup/SignupUserInfoForm";
import GenderButton from "../../components/signup/GenderButton";

function Signup({ router: { query } }) {
  const [userInfo, setUserInfo] = useState({});
  // 이메일 형식 확인: "@" + ".com"
  const [inputEmail, setInputEmail] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputPwConfirm, setInputPwConfirm] = useState("");
  const [isSamePw, setIsSamePw] = useState(true);
  const [inputAge, setInputAge] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputGender, setInputGender] = useState("");
  const [canGoNext, setCanGoNext] = useState(false);

  // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
  const handleInputEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputEmail(event.target.value);
  };

  const handleInputPw = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputPw(event.target.value);
  };

  const handleInputPwConfirm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputPwConfirm(event.target.value);
  };

  const handleIsSamePw = (event: React.FocusEvent<HTMLInputElement>) => {
    const pwd = event.target.value;
    if (pwd === inputPw) {
      setIsSamePw(true);
    } else {
      setIsSamePw(false);
    }
  };

  const handleInputAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputAge(event.target.value);
  };

  const handleInputName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(event.target.value);
  };

  const handleInputGenderMale = () => {
    setInputGender("M");
  };

  const handleInputGenderFemale = () => {
    setInputGender("F");
  };

  useEffect(() => {
    setUserInfo((prevUserInfo) => {
      return {
        ...prevUserInfo,
        inputEmail: inputEmail,
        inputPw: inputPw,
        inputName: inputName,
        inputAge: Number(inputAge),
        inputGender: inputGender,
      };
    });
    if (
      isSamePw === true &&
      inputEmail !== "" &&
      inputName != "" &&
      inputAge !== "" &&
      inputGender !== "" &&
      inputPw === inputPwConfirm
    ) {
      setCanGoNext(true);
    } else {
      setCanGoNext(false);
    }
  }, [
    inputEmail,
    isSamePw,
    inputName,
    inputAge,
    inputGender,
    inputPw,
    inputPwConfirm,
  ]);

  useEffect(() => {
    if (query.userInfo) {
      const prevUserInfo = JSON.parse(query.userInfo);
      setInputEmail(prevUserInfo["inputEmail"]);
      setInputPw(prevUserInfo["inputPw"]);
      setInputAge(prevUserInfo["inputAge"]);
      setInputName(prevUserInfo["inputName"]);
      setInputGender(prevUserInfo["inputGender"]);
    }
  }, []);

  return (
    <>
      <div>
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <h2>회원 정보입력</h2>
              <Box sx={{ "& > :not(style)": { m: 1 } }}>
                <SignupUserInfoForm
                  infoName={"Email"}
                  infoId={"input_email"}
                  handleFunction={handleInputEmail}
                  value={inputEmail}
                  type={"text"}
                  icon={<MailOutlineIcon />}
                />
                <br />
                <SignupUserInfoForm
                  infoName={"Choose password"}
                  infoId={"input_pw"}
                  handleFunction={handleInputPw}
                  value={inputPw}
                  type={"password"}
                  icon={<LockIcon />}
                />
                <br />
                {isSamePw ? (
                  <FormControl variant="standard">
                    <InputLabel htmlFor="input_pw_confirm">
                      Confirm password
                    </InputLabel>
                    <Input
                      id="input_pw_confirm"
                      type="password"
                      value={inputPwConfirm}
                      onChange={handleInputPwConfirm}
                      onBlur={handleIsSamePw}
                      startAdornment={
                        <InputAdornment position="start">
                          <LockIcon />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                ) : (
                  <FormControl error variant="standard">
                    <InputLabel htmlFor="input_pw_confirm">
                      Confirm password
                    </InputLabel>
                    <Input
                      id="input_pw_confirm"
                      type="password"
                      value={inputPwConfirm}
                      onChange={handleInputPwConfirm}
                      onBlur={handleIsSamePw}
                      aria-describedby="component-error-text"
                      startAdornment={
                        <InputAdornment position="start">
                          <LockIcon />
                        </InputAdornment>
                      }
                    />
                    <FormHelperText id="component-error-text">
                      Error
                    </FormHelperText>
                  </FormControl>
                )}

                <br />
                <SignupUserInfoForm
                  infoName={"Name"}
                  infoId={"input_name"}
                  handleFunction={handleInputName}
                  value={inputName}
                  type={"text"}
                  icon={<PersonOutlineIcon />}
                />
                <br />
                <SignupUserInfoForm
                  infoName={"Ages"}
                  infoId={"input_age"}
                  handleFunction={handleInputAge}
                  value={inputAge}
                  type={"number"}
                  icon={<CakeIcon />}
                />
                <br />
                <div style={{ color: "rgba(0, 0, 0, 0.54)" }}>
                  <WcIcon />
                  <label htmlFor="input_gender">Gender </label>
                  <br />
                  <ButtonGroup
                    color="primary"
                    aria-label="medium secondary button group"
                  >
                    <GenderButton
                      inputGender={inputGender}
                      inputGenderFlag={"M"}
                      gender={"Male"}
                      handleFunction={handleInputGenderMale}
                    />
                    <GenderButton
                      inputGender={inputGender}
                      inputGenderFlag={"F"}
                      gender={"Female"}
                      handleFunction={handleInputGenderFemale}
                    />
                  </ButtonGroup>
                </div>
              </Box>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col></Col>
            <Col>
              <div>
                {canGoNext ? (
                  <FrontArrow
                    pathname={"/ramenpreference"}
                    userInfo={userInfo}
                  />
                ) : null}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default withRouter(Signup);