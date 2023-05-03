import styled from "@emotion/styled";

export const FriendBoard = styled.ul`
display: flex;
flex-direction: column;
padding: 0;
width: 350px;
`;

export const Item = styled.li`
display: flex;
align-items: center;
padding: 10px;
margin-bottom: 15px;
box-shadow: 0px 4px 3px 0px rgba(0, 0, 0, 0.2),
      0px 3px 3px 0px rgba(0, 0, 0, 0.14),
      0px 3px 5px 0px rgba(0, 0, 0, 0.12);
border-radius: 4px;
background-color: ivory;

&:last-child{
    margin-bottom: 0;
  }
`;

export const Name = styled.p`
margin-left: 10px;
font-weight: bold;
font-size: 20px;
`;

const setBgColor = props => {
  switch (props.friendStatus) {
      case true:
          return 'green';
      case false:
          return 'red';}
  };

export const Status = styled.span`
  height: 20px;
  width: 20px;
  background-color: black;
  border-radius: 100%;
  margin-right: 10px;

 background-color: ${setBgColor};
`;