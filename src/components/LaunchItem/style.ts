import styled from "styled-components";

export const LaunchItemContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  color: ${(props) => props.theme.font.main};
  padding: 16px 16px 16px 32px;
  border-radius: 10px;
  box-shadow: 0px 2px 5px 5px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 0px 2px 5px 5px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 2px 5px 5px rgba(0, 0, 0, 0.25);
`;

export const LaunchIndex = styled.div`
  width: 20%;
  font-size: 28px;
  font-weight: 500;
`;
export const MissionName = styled.div`
  width: 50%;
  font-size: 24px;
  font-weight: 500;
`;
export const LaunchDateAndRocketName = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  & > p.date {
    font-size: 14px;
    font-weight: 400;
    padding: 0;
    margin: 0;
    text-align: right;
  }
  & > p.name {
    font-size: 16px;
    font-weight: 500;
    padding: 0;
    margin: 0;
    text-align: right;
  }
`;
