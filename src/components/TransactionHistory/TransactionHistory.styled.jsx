import styled from "@emotion/styled";

export const TransactionTable = styled.table`
width:500px;
box-shadow: 0px 4px 3px 0px rgba(0, 0, 0, 0.2),
      0px 3px 3px 0px rgba(0, 0, 0, 0.14),
      0px 3px 5px 0px rgba(0, 0, 0, 0.12);
border-radius: 4px;
`;

export const Thead = styled.thead`
height: 40px;
background-color: cornflowerblue;
color: aliceblue;
`;

export const Tbody = styled.tbody`
text-align: center;
height: 30px;

&:nth-child(odd){background-color: ivory;}

&:nth-child(even){background-color:rgba(140, 140, 140, 0.3);}
`;