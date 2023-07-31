import styled from 'styled-components';

export const ReviewsContainer = styled.div`
  margin-top: 30px;
  padding: 10px 30px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

export const ReviewItem = styled.li`
  box-shadow: 0px 0px 5px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  align-items: center;
  margin-bottom: 10px;
  padding: 20px;
  list-style: none;
`;

export const ReviewsList = styled.ul`
  padding-left: 0;
`;

export const ReviewName = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 20px;
`;

export const NoReviews = styled.p`
  text-align: center;
  color: crimson;
`;

export const NoReviewsItem = styled.li`
  list-style: none;
  padding-left: 0;
`;
