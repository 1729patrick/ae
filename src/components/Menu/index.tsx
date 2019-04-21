import React, { Component } from 'react';
import {
 Header, Company, Title, ContainerLeft, ContainerRight,
} from './styles';

import Links from './Links';
import Actions from './Actions';

const Menu = () => (
  <Header>
    <ContainerLeft>
      <Company>
        <Title>Auto Escola Talquei</Title>
      </Company>
      <Links />
    </ContainerLeft>

    <ContainerRight>
      <Actions />
    </ContainerRight>
  </Header>
);

export default Menu;
