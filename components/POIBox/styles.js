import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 300px;
  min-width: 200px;
  min-height: 50px;
  max-height: 100px;
  padding: 0;
  margin: 0;
`;

export const StyledTitleBox = styled.div`
  background-color: #153c64;
  width: 100%;
  height: 23px;
  color: #fff;
  font-size: 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  font-family: segoeui-b;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 8px;
`;

export const StyledContentBox = styled.div`
  width: calc(100% - 16px);
  height: calc(100% - 39px);
  padding: 8px;

  & .info {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: block;
    background-repeat: no-repeat;
    background-position: left;
    background-size: 10px 10px;
    width: calc(100% - 15px);
  }
`;
