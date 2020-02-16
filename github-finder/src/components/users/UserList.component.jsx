import React from 'react';
import { UserItem } from './UserItem.component';
import { Spinner } from './../layout/Spinner.component';
import PropTypes from 'prop-types';

export const UserList = ({ github, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {github.map(gitUsers => {
          return <UserItem key={gitUsers.id} users={gitUsers} />;
        })}
      </div>
    );
  }
};

UserList.propTypes = {
  github: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};
