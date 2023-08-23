import styled from 'styled-components';
// import background from '../../img/vecteezy_abstract.jpg';
import background from '../../img/wallpaperbetter.com_2560x1440 (1).jpg';

export const PageWrapper = styled.main`
  padding-top: 0;
  background-color: gray;
  background-image: url('${background}');

  background-position: center;
  background-size: auto;
`;

export const SearchbarWrapper = styled.div`
  padding: 40px 20px;

  h3 {
    margin-top: 0;
    margin-bottom: 10px;
    color: white;
  }

  p {
    color: white;
    margin-top: 0;
    margin-bottom: 40px;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 20px;
  width: 100%;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
