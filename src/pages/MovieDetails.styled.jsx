import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BackLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

export const Border = styled.div`
  width: 70px;
  height: 30px;
  border: 1px solid crimson;
  border-radius: 8px;
  justify-content: center;
  display: flex;
  align-items: center;
  margin-left: 30px;
`;

export const IdditionalInfoContainer = styled.div`
  box-shadow: 5px 0px 5px 0 rgba(0, 0, 0, 0.1);
  margin-top: 30px;
  padding-right: 50px;
  padding-bottom: 10px;
  padding-top: 10px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 30px;
`;

export const InfoTitle = styled.h4`
  text-align: center;
  font-weight: 400;
  font-size: 20px;
`;

export const AddInfoListItem = styled.li`
  width: 80px;
  height: 40px;
  border: 1px solid crimson;
  border-radius: 8px;
  justify-content: center;
  display: flex;
  align-items: center;
`;

export const AddInfoList = styled.ul`
  display: flex;
  align-items: center;
  padding-left: 0;
  justify-content: center;
  gap: 60px;
`;

export const AddInfoLink = styled(NavLink)`
  text-decoration: none;
  color: black;

  &.active {
    color: crimson;
  }
`;



