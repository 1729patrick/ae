import styled from 'styled-components';

export const Nav = styled.div`
  display: flex;
`;

export const Link = styled.div`
  display: flex;
  margin-right: 22px;
  margin-bottom: 17px;
  cursor: pointer;

  color: #c1c1c1;
  font-size: 1.05em;

  &:hover {
    color: #fff;
  }
`;

export const Title = styled.p`
  margin-left: 7px;
  font-weight: 500;
`;
