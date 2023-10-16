import styled from "styled-components";

export const Works = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  gap: 26px;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  .title {
    color: white;
    font-size: 52px;
  }
  .order {
    display: flex;
    justify-content: center;
    gap: 76px;
    margin-bottom: 80px;
    flex-wrap: wrap;
    width: 50%;
    align-items: center;
  }
  @media (max-width:768px) {
    .order {
      width: 100%;
      gap: 10px;
    }
    padding-top: 36px;
  }
`;
