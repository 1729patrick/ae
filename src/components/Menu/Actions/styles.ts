import styled from 'styled-components';

export const Nav = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Action = styled.div`
  display: flex;
  margin-right: 14px;
  cursor: pointer;
  align-items: center;
  color: #c1c1c1;

  &:hover {
    color: #fff;
  }
`;

export const Profile = styled.img`
  height: 40px;
  widht: 40px;
  border-radius: 50%;
  cursor: pointer;
`;
