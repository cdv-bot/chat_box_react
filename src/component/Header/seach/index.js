import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Seach({ handerEmails }) {
  const onChangeSeach = (e) => {
    const value = e.target.value;
    handerEmails(value);
  }
  return (
    <>
      <div className="item-ip">
        <FontAwesomeIcon icon={faSearch} className="icon-search" />
        <div className="ip-focus">
          <input onChange={onChangeSeach} className="ip" placeholder="Tìm kiếm trên Facebook" />
        </div>
      </div>
    </>
  );
}

export default Seach;
