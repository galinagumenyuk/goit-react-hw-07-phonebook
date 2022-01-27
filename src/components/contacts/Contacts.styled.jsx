import styled from "@emotion/styled";

export const ContactItem = styled.ul`
  padding-left: 0px;
`;

export const DeleteButton = styled.button`
    padding: 2px 4px;
    margin-left: 10px;
    border: none;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 13px;
    border-radius: 4px;
  cursor: pointer;
  &:hover{
      background-color:  #A2D9CE ;
   }
    &:focus{
      background-color:  #A2D9CE ;
   }
`;

export const Contact = styled.li`
  list-style-type: none;
  font-family: "Times New Roman";
  margin-bottom: 6px;

  span + span {
    margin-left: 10px;
  }
  span{
    font-size: 22px;
  }
`;
