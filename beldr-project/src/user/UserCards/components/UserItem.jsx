import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../../shared/UIElements/Avatar';
import Card from '../../../shared/UIElements/Card';
import './UserItem.css';

const UserItem = props => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${props.id}/profile`}>
          <div className="user-item__image">
            <Avatar image={`${process.env.REACT_APP_ASSET_URL}/${props.image}`} alt={props.name} />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.skill}
            </h3>

         
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
