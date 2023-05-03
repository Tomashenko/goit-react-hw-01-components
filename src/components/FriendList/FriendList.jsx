import PropTypes from 'prop-types';
import {FriendListItem} from './FriendListItem';
import { FriendBoard } from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return (
        <FriendBoard>
            {friends.map(friend => (
            <FriendListItem key={friend.id}    
               avatar={friend.avatar}
               name={friend.name}
               isOnline={friend.isOnline}
               id= {friend.id}
             >
            </FriendListItem>    
            ))}            
        </FriendBoard>        
        );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
    ),
};
