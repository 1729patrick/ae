import React from 'react';
import {
 MdEvent, MdPeople, MdSchool, MdComputer,
} from 'react-icons/md';

import { Nav, Link, Title } from './styles';

const Links = () => (
  <Nav>
    <Link>
      <MdEvent size={19} />
      <Title>Agenda</Title>
    </Link>
    <Link>
      <MdPeople size={19} />
      <Title>Pessoas</Title>
    </Link>
    <Link>
      <MdSchool size={19} />
      <Title>Turmas</Title>
    </Link>
    <Link>
      <MdComputer size={19} />
      <Title>Financeiro</Title>
    </Link>
    <Link>
      <MdComputer size={19} />
      <Title>Relatórios</Title>
    </Link>
  </Nav>
);

export default Links;
