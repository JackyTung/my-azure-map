import { StyledContainer, StyledTitleBox, StyledContentBox } from "./styles";

const POIBox = ({ title = "", address = "" }) => {
  return (
    <StyledContainer>
      <StyledTitleBox>{title}</StyledTitleBox>
      <StyledContentBox>
        <div className="info location">{address}</div>
      </StyledContentBox>
    </StyledContainer>
  );
};

export default POIBox;
