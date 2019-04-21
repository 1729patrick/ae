import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  height: 90px;
  width: 100vw;
  background: #0c1e3f;
  padding: 0 45px 0 180px;
  justify-content: space-between;
  user-select: none;
  min-width: 778px;

  @media (max-width: 915px) {
    padding: 0 45px;
  }
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContainerRight = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;

export const Company = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h3`
  font-size: 1.1em;
  font-weight: 500;
  display: flex;
  color: #ddd;
`;
