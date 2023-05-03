import styled from "@emotion/styled";

export const StatisticsBox = styled.div`
display: flex;
margin-top: 20px;
`;

export const StatisticsBoard = styled.section`
box-shadow: 0px 4px 3px 0px rgba(0, 0, 0, 0.2),
  0px 3px 3px 0px rgba(0, 0, 0, 0.14),
  0px 3px 5px 0px rgba(0, 0, 0, 0.12);
border-top-right-radius: 4px;
border-top-left-radius: 4px;
background-color: ivory;
border:2px solid rgba(140, 140, 140, 1);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

 export const Title = styled.h2`
 padding: 15px;
 `;

export const StatList = styled.ul`
display: flex;
padding: 0;
margin: 0;
background-color: cornflowerblue;
 `;

export const Item = styled.li`
color: aliceblue;
display: flex;
flex-direction: column;
padding: 10px;
justify-content: center;
align-items: center;
`;

export const Percentage = styled.span`
padding: 6px;
font-size: 18px;
font-weight: bold;
`;