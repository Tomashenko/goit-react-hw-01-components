import styled from "@emotion/styled";

export const ProfileStyle = styled.div`
padding-top: 15px;  
width: 300px;
box-shadow: 0px 4px 3px 0px rgba(0, 0, 0, 0.2),
      0px 3px 3px 0px rgba(0, 0, 0, 0.14),
      0px 3px 5px 0px rgba(0, 0, 0, 0.12);
border-radius: 4px;
background-color: ivory;
`;

export const Description = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const Avatar = styled.img`
background-color: aliceblue;
border-radius: 100%;
`;

export const Name = styled.p`
margin-top: 25px;
font-size: 20px;
font-weight: bold;
`;

export const Tag = styled.p`
margin-top: 10px;
color: rgba(140, 140, 140, 1);
`;

export const Location = styled.p`
margin-top: 10px;
color: rgba(140, 140, 140, 1);
`;

export const Stats = styled.ul`
margin-top: 15px;
border: 2px solid rgba(140, 140, 140, 1);
margin-bottom: 0;
padding: 0;
display: flex;
justify-content: center;
align-items: center;
background-color: bisque;
`;

export const StatsItem = styled.li`
border-right: 2px solid  rgba(140, 140, 140, 1);
padding: 15px;
margin-right: 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

&:last-child {
    margin-right: 0;
    border-right: none;
}
`;

export const Label = styled.span`
color: rgba(140, 140, 140, 1)
`;

export const Quantity = styled.span`
font-size: 20px;
font-weight: bold;
`;



