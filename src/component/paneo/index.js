import React from 'react';
import './style.scss';
import { faCog, faClipboard, faCheck, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import * as actions from './../Actions';

function Paneo(props) {
  const dispatch = useDispatch();

  const handleMenu = () => {
    dispatch(actions.menu());
  }

  return (
    <>
      <div className="Paneo">
        <div className="Paneo-name">
          <div className="text-left">
            <span>Chat</span>
          </div>
          <div className="icon-right">
            <div className="ic ic-left" onClick={handleMenu}>
              <FontAwesomeIcon icon={faCog} className="ic-hd" />
            </div>
            <div className="ic">
              <FontAwesomeIcon icon={faClipboard} className="ic-hd" />
            </div>
          </div>
        </div>
        <div className="Paneo-content">
          <div className="right-text">
            <span>name</span>
          </div>
          <div className="right-icon">
            <div className="ic-one">
              <FontAwesomeIcon icon={faCheck} className="ic-hd" />
            </div>
            <div className="ic-two">
              <FontAwesomeIcon icon={faInfoCircle} className="ic-hd" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Paneo;
