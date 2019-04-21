import React from 'react';
import { MdSearch, MdChatBubbleOutline, MdNotificationsNone } from 'react-icons/md';

import { Nav, Action, Profile } from './styles';

const Actions = () => (
  <Nav>
    <Action>
      <MdSearch size={23} />
    </Action>
    <Action>
      <MdChatBubbleOutline size={21} />
    </Action>
    <Action>
      <MdNotificationsNone size={22} />
    </Action>

    <Profile src="https://lh3.googleusercontent.com/a-/AAuE7mB6kr3PQjOd1nYNxbaVxPR1pR_QfKEYIEHfzIJ-GA=s96" />
  </Nav>
);

export default Actions;
