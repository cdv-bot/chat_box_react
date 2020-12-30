import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Sigins } from '../Actions';
import firebase from './../firebase';
import './style.scss';

function Login(props) {
  let history = useHistory();
  const { register, handleSubmit } = useForm();

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      return <Redirect to="/chat" />
    } else {
      history.push("/");
    }
  });

  const onSubmit = data => {
    firebase.auth().signInWithEmailAndPassword(data.email, data.password)
      .then((user) => {
        history.push("/chat");
      })
      .catch((error) => {
        var errorMessage = error.message;
        toast.error(errorMessage)
      });
  };

  const dispatch = useDispatch();
  const handerLogin = () => {
    dispatch(Sigins());
  };

  return (
    <div className="login">
      <div className='login-ip'>
        <div className='ts'>
          <img className="fb_logo _8ilh img" src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="Facebook" />
          <div className='tt'>
            Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.
          </div>
        </div>
        <div className="login_from">
          <div className="from_input">
            <form className="from_nhap" onSubmit={handleSubmit(onSubmit)}>
              <input type='text' name="email" placeholder='Email hoặc số điện thoại' ref={register} />
              <input type='password' name="password" placeholder='Mật khẩu' ref={register} />
              <button>Đăng nhập</button>
            </form>
            <div className='forget'>
              <span><a href="/#">Quên mật khẩu ?</a></span>
              <hr width="90%" align="center" />
              <button onClick={handerLogin} className="forget_bt">
                Tạo tài khoản mới
              </button>
            </div>
          </div>
          <div className="text_view">
            <a href="/#">Tạo trang </a> dành cho người nổi tiếng, nhãn hiệu hoặc doanh nghiệp.
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer_lg">
          <a href="/#">Tiếng Việt</a>
          <a href="/#">English (UK)</a>
          <a href="/#">Tiếng Việt</a>
          <a href="/#">Tiếng Việt</a>
          <a href="/#">Tiếng Việt</a>
          <a href="/#">Tiếng Việt</a>
          <a href="/#">Tiếng Việt</a>
          <a href="/#">Tiếng Việt</a>
          <a href="/#">Tiếng Việt</a>
          <button>+</button>
        </div>
        <hr width="99%" align="center" />
      </div>
    </div>
  );
}

export default Login;
