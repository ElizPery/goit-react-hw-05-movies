import styled from 'styled-components';

export const SearchMovieInput = styled.input`
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 8px;
    border: 1px solid crimson;
    padding-left: 15px;
    width: 300px;
}
`;

export const SearchMovieForm = styled.form`
    margin-top: 30px;
    margin-left: 30px;
`;

export const SearchMovieButton = styled.button`
  display: inline-block;
  margin-left: 10px;
  width: 30px;
  height: 30px;
  border: 0;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;

export const SearchMovieBtnLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;