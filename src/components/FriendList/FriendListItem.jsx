import PropTypes from "prop-types";
import { Item, Name, Status } from './FriendList.styled';

export const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <Item>
    <Status friendStatus={isOnline}>{isOnline}</Status>
    <img  src={avatar} alt="User avatar" width="48" />
    <Name>{name}</Name>
  </Item>
  )
  }
  
  FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };

