import styled from 'styled-components';

export const CastContainer = styled.div`
  margin-top: 30px;
  padding: 10px 30px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

export const CastItem = styled.li`
  box-shadow: 0px 0px 5px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding-left: 20px;
`;

export const CastList = styled.ul`
  padding-left: 0;
`;

export const ActorPhoto = styled.img`
  height: 300px;
  width: 200px;
  display: block;
  margin-right: 80px;
`;

export const ActorName = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 20px;
`;

export const ActorInfo = styled.div`
  width: 300px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;


export const NoCast = styled.p`
  text-align: center;
  color: crimson;
`;

export const NoCastItem = styled.li`
  list-style: none;
  padding-left: 0;
`;