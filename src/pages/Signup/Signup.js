import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { color } from 'styles/color';
import StyledInput from 'components/CommonStyled/StyledInput';
import StyledButton from 'components/CommonStyled/StyledButton';
import axios from 'axios';
import { SIGN_UP_API, EMAIL_DUPE_CHECK, PHONE_MATCH_CHECK } from 'config';

const Signup = () => {
  const location = useLocation();
  const history = useHistory();
  const checkedList = location.state.checked;

  const [values, setValues] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    repassword: '',
    phone_auth: '',
  });

  const [disablePhoneBtn, setDisablePhoneBtn] = useState(false);
  const [disableEmailBtn, setDisableEmailBtn] = useState(false);

  const [isHidden, setIsHidden] = useState(true);
  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(0);
  const time = useRef(180);
  const timerId = useRef(null);

  const [emailValidation, setEmailValidation] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(false);
  const [repasswordValidation, setRepasswordValidation] = useState(false);

  const validationResults = {
    emailValidation,
    passwordValidation,
    repasswordValidation,
  };

  useEffect(() => {
    if (!isHidden && time.current > 0) {
      timerId.current = setInterval(() => {
        setMinutes(parseInt(time.current / 60));
        setSeconds(time.current % 60);
        time.current -= 1;
      }, 1000);

      return () => {
        clearInterval(timerId.current);
      };
    }
  }, [isHidden, time]);

  useEffect(() => {
    if (time.current < 0) {
      clearInterval(timerId.current);
    }
  }, [seconds]);

  useEffect(() => {
    if (!values.email.length) return;
    checkEmailValidation(values.email);
  }, [values.email]);

  useEffect(() => {
    if (!values.password.length) return;
    checkPasswordValidation(values.password);
  }, [values.password]);

  useEffect(() => {
    if (!values.repassword.length) return;
    const condition = values.repassword !== values.password;
    setRepasswordValidation(condition);
  }, [values.password, values.repassword]);

  const disableBtn = data => {
    if (data === 'phone') {
      setDisablePhoneBtn(!disablePhoneBtn);
    } else {
      setDisableEmailBtn(!disableEmailBtn);
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSignup = () => {
    axios
      .post(SIGN_UP_API, {
        name: values.name,
        phone: values.phone,
        email: values.email,
        password: values.password,
        agree_service: checkedList.ckbox3,
        agree_maketing: checkedList.ckbox4,
      })
      .then(res => {
        console.log(res);
        alert('??????????????? ?????????????????????.');
        history.push('/welcome');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const checkEmailDuplication = () => {
    axios
      .post(EMAIL_DUPE_CHECK, {
        email: values.email,
      })
      .then(res => {
        if (res.data.message === 'NOT_DUPLICATE_EMAIL') {
          const confirmBox = window.confirm('?????? ???????????? ?????????????????????????');
          if (confirmBox === true) {
            disableBtn('email');
          }
        }
      })
      .catch(err => {
        if (err.response.data.message === 'DUPLICATE_EMAIL') {
          alert('????????? ??????????????????.');
        } else if (err.response.data.message === 'INVALID_EMAIL_FORMAT') {
          alert('????????? ????????? ???????????? ????????????.');
        }
      });
  };

  const checkPhoneAuthentication = () => {
    axios
      .post(PHONE_MATCH_CHECK, {
        certification: values.phone_auth,
      })
      .then(res => {
        console.log(res);
        alert('????????? ????????? ?????????????????????.');
      })
      .catch(err => {
        console.log(err);
        if (err.response.data.MESSAGE === 'DISCORD') {
          alert('??????????????? ???????????? ????????????.');
        }
      });
  };

  const isHiddenChange = () => {
    setIsHidden(!isHidden);
  };

  const checkEmailValidation = email => {
    const regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    setEmailValidation(!regExp.test(email));
  };

  const checkPasswordValidation = password => {
    const regExp =
      /^(?=.*[0-9a-zA-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/i;
    setPasswordValidation(!regExp.test(password));
  };

  return (
    <Container>
      <InputContainer>
        <InputTitle>
          ??????<InputNecessary>*</InputNecessary>
        </InputTitle>
        <Input
          name="name"
          type="text"
          placeholder="????????? ??????????????????"
          onChange={handleChange}
        />
      </InputContainer>
      <InputContainer>
        <InputTitle>
          ?????????<InputNecessary>*</InputNecessary>
        </InputTitle>
        <CertificationWrapper>
          <ShortInput
            name="phone"
            type="text"
            placeholder="????????? ????????? ??????????????????"
            onChange={handleChange}
            disabled={disablePhoneBtn}
          />
          <CertificationBtn1
            disabled={disablePhoneBtn}
            onClick={() => {
              isHiddenChange();
              disableBtn('phone');
            }}
          >
            ????????????
          </CertificationBtn1>
        </CertificationWrapper>
        <CertificationWrapper>
          <CertificationHidden isHidden={isHidden}>
            <ShortInput type="text" name="phone_auth" onChange={handleChange} />
            <CertificationTimer>
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </CertificationTimer>
            <CertificationDeleteBtn>
              <i className="fas fa-times-circle"></i>
            </CertificationDeleteBtn>
            <CertificationBtn2
              onClick={() => {
                checkPhoneAuthentication();
              }}
            >
              ???????????? ??????
            </CertificationBtn2>
          </CertificationHidden>
        </CertificationWrapper>
      </InputContainer>
      <InputContainer>
        <InputTitle>
          ?????????(?????????)<InputNecessary>*</InputNecessary>
        </InputTitle>
        <InputDescription>
          ???????????? ?????? ???, ????????? ?????????????????? <br />
          ?????? ??????????????? ???????????? ??????????????????
        </InputDescription>
        <CertificationWrapper>
          <ShortInput
            name="email"
            type="text"
            placeholder="???????????? ??????????????????"
            onChange={handleChange}
            disabled={disableEmailBtn}
          />
          <CertificationBtn1
            disabled={disableEmailBtn}
            onClick={() => {
              checkEmailDuplication();
            }}
          >
            ????????????
          </CertificationBtn1>
        </CertificationWrapper>
        {validationResults['emailValidation'] && (
          <ConfirmMessage>????????? ????????? ????????? ??????????????????.</ConfirmMessage>
        )}
      </InputContainer>
      <InputContainer>
        <InputTitle>
          ????????????<InputNecessary>*</InputNecessary>
        </InputTitle>
        <Input
          name="password"
          type="password"
          placeholder="??????????????? ??????????????????"
          onChange={handleChange}
        />
        {validationResults['passwordValidation'] && (
          <ConfirmMessage>
            ??????????????? ??????, ??????, ??????????????? ????????? ?????? 8?????? ???????????????
            ?????????.
          </ConfirmMessage>
        )}
        <Input
          name="repassword"
          type="password"
          placeholder="??????????????? ?????? ??? ?????????????????????"
          onChange={handleChange}
        />
        {validationResults['repasswordValidation'] && (
          <ConfirmMessage>??????????????? ???????????? ????????????.</ConfirmMessage>
        )}
      </InputContainer>
      <SignupBtn onClick={handleSignup}>????????????</SignupBtn>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1024px;
  margin: 9rem auto 5rem;
`;

const InputContainer = styled.div`
  margin-bottom: 3rem;
`;

const InputTitle = styled.p`
  font-size: 1.2rem;
`;

const InputDescription = styled.p`
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;
`;

const InputNecessary = styled.span`
  color: red;
`;

const Input = styled(StyledInput)``;

const ShortInput = styled(StyledInput)`
  width: 550px;

  background: ${props =>
    props.disabled ? `${color.DISABLED}` : `${color.WHITE}`};
  color: ${props => (props.disabled ? `${color.GRAY}` : `${color.DARKGRAY}`)};
`;

const CertificationWrapper = styled.div`
  display: flex;
  position: relative;
`;

const CertificationBtn1 = styled(StyledButton)`
  width: 230px;
  height: 58px;
  margin: 0.5rem 0 0 1rem;
  padding: 0.4rem 0.8rem;
  font-size: 1rem;
  border: 1px solid ${color.LIGHTGRAY};

  background: ${props =>
    props.disabled ? `${color.DISABLED}` : `${color.WHITE}`};
  color: ${props => (props.disabled ? `${color.GRAY}` : `${color.GRAY}`)};
`;

const CertificationHidden = styled.div`
  display: ${props => (props.isHidden ? 'none' : 'flex')};
`;

const CertificationTimer = styled.span`
  position: absolute;
  top: 1.7rem;
  left: 29rem;
`;

const CertificationBtn2 = styled(StyledButton)`
  width: 230px;
  height: 58px;
  margin: 0.5rem 0 0 1rem;
  padding: 0.4rem 0.8rem;
  font-size: 1rem;
  color: ${color.GRAY};
  background: ${color.WHITE};
  border: 1px solid ${color.LIGHTGRAY};
`;

const CertificationDeleteBtn = styled.div`
  position: absolute;
  top: 1.6rem;
  left: 32rem;
  font-size: 1.2rem;
  color: ${color.LIGHTGRAY};
  cursor: pointer;
`;

const ConfirmMessage = styled.p`
  margin: 0.5rem 0 0 0.7rem;
  font-size: 0.8rem;
  color: red;
`;

const SignupBtn = styled(StyledButton)`
  display: block;
  margin: 3rem auto 0;
  padding: 1.4rem 10rem;
`;

export default Signup;
