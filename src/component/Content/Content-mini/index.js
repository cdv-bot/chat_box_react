import React from 'react';
import './style.scss';
function Item({ name, content, handerClickList, id }) {
  const handerClick = (id) => {
    handerClickList(id);
  }
  return (
    <>
      <div onClick={() => handerClick(id)} className=" you_send">
        <div className="avt">
          <img alt="hoa" src="https://scontent.fhan2-5.fna.fbcdn.net/v/t1.0-9/45992161_2229190843993449_8479856749162004480_o.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=RIrJB7WXXw8AX_o0z-r&_nc_ht=scontent.fhan2-5.fna&oh=843c891c0cbde26b0e369c7e6d598359&oe=5FF30C81" />
        </div>
        <div className="name">
          <div className="name-you">{name}</div>
          <div className="name-text">{content}</div>
        </div>
      </div>
    </>
  );
}

export default Item;
