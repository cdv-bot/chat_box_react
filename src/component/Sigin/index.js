import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Closes } from '../Actions';
import firebase from './../firebase';
import './style.scss';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { useHistory } from 'react-router';

const SignupSchema = yup.object().shape({
  lastName: yup.string().required().trim(),
  firstName: yup.string().required().trim(),
  password: yup.string().min(6),
  email: yup.string().email(),
  sex: yup.number().required()
});

function Sigin(props) {
  let history = useHistory();
  let db = firebase.firestore(firebase);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(SignupSchema)
  });

  const onSubmit = (data) => {
    const { email, password, ...info } = data;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        db.collection("users").add({ email: email, ...info })
          .then(function (docRef) {
            toast.success("Đã đăng ký thành công :)");
            handClose();
            history.push("/chat");
          })
          .catch(function (error) {
            toast.error("Lỗi save ");
          });
      })
      .catch((error) => {
        var errorMessage = error.message;
        if (errorMessage) {
          toast.error("Email đã được tạo. Mời tạo email khác!!!");
        }
      });
  };

  const dispatch = useDispatch();
  const handClose = () => {
    dispatch(Closes());
  };


  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)} className='form_sg'>
        <div className="form_title">
          <div className="closes">
            <b>Đăng ký</b>
            <button onClick={handClose}>x</button>
          </div>
          <p>Nhanh chóng và dễ dàng.</p>
          <hr width="100%" align="center" />
        </div>
        <div className="form_ip">
          <div className="ip-first ip-one">
            <input name="firstName" type="text" placeholder="Họ" className='one one_first' ref={register} />
            <FontAwesomeIcon icon={faExclamationCircle} className={classNames({ icon_hide: !errors.firstName }, { icon_warning: errors.firstName })} />
          </div>
          <div className="ip-first ip-one ip-three">
            <input name="lastName" type="text" placeholder="Tên" className='one' ref={register} />
            <FontAwesomeIcon icon={faExclamationCircle} className={classNames({ icon_hide: !errors.lastName }, { icon_warning: errors.lastName })} />
          </div>
          <div className="ip-first">
            <input ref={register} name="email" type="email" placeholder="Mời nhâp email" className='two' />
            <FontAwesomeIcon icon={faExclamationCircle} className={classNames({ icon_hide: !errors.email }, { icon_warning: errors.email })} />
          </div>
          <div className="ip-first">
            <input ref={register} name="password" type="text" placeholder="Mật khẩu mới" className='two' />
            <FontAwesomeIcon icon={faExclamationCircle} className={classNames({ icon_hide: !errors.password }, { icon_warning: errors.password })} />
          </div>
        </div>
        <div className="form_birth">
          <p>
            Ngày sinh
          </p>
          <select ref={register} name="birthDay" id="day" className="sl one" >
            <option value="1" >01</option>
            <option value="2">02</option>
            <option value="3">03</option>
            <option value="4" >04</option>
            <option value="5">05</option>
            <option value="6">06</option>
            <option value="7" >07</option>
            <option value="8">08</option>
            <option value="9">09</option>
            <option value="10" >10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13" >13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16" >16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
          </select>
          <select ref={register} name="month" id="month" className="sl two" >
            <option value="01">Tháng 1</option>
            <option value="02">Tháng 2</option>
            <option value="03" >Tháng 3</option>
          </select>
          <select ref={register} name="year" id="year" className="sl" defaultValue={'1999'} >
            <option value="1999">1999</option>
            <option value="2000">2000</option>
            <option value="2001" >2001</option>
          </select>
        </div>
        <div className="form_sex">
          <p>
            Giới tính
             <FontAwesomeIcon icon={faExclamationCircle} className={classNames({ icon_hide: !errors.sex }, { icon_warning: errors.sex })} />
          </p>
          <span className="two">
            <label htmlFor="nu">Nữ</label>
            <input id="nu" name="sex" type="radio" value="1" ref={register} />
          </span>
          <span className="two">
            <label htmlFor="nam">Nam</label>
            <input id="nam" name="sex" type="radio" value="2" ref={register} />
          </span>
          <span>
            <label htmlFor="tc">Tùy chọn</label>
            <input id="tc" name="sex" type="radio" value="3" ref={register} />
          </span>
        </div>
        <div className="form_text">
          <span>
            Bằng cách nhấp vào Đăng ký, bạn đồng ý với Điều khoản, Chính sách dữ liệu và Chính sách cookie của chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS và hủy nhận bất kỳ lúc nào.
          </span>
        </div>
        <div className="form_bt">
          <button type="submit">Đăng ký</button>
        </div>
      </form>
    </div >
  );
}

export default Sigin;
