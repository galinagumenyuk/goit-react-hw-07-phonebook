import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 50px;
  background-color: #D0ECE7  ;

  h1 {
    text-align: center;
    font-size: 45px;
  }

  form {
    border: 2px solid;
    padding: 10px;
    display: flex;
    flex-direction: column;
    background-color: white;
  }

  label {
    color: #708090;
    font-family: "Times New Roman";
    font-size: 20px;
  }

  input {
    display: block;
    margin-top: 3px;
    margin-bottom: 10px;
    width: 40%;
    font-size: 20px;
    padding: 10px;
  
  }
`;
export const ListTitle = styled.p`
  font-weight: 700;
  font-size: 24px;
  font-family: "Times New Roman";
  margin-bottom: 0px;
`;
