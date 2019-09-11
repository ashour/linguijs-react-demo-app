import React from 'react';
import { Trans } from '@lingui/macro';

function Header() {
  return (<>
    <h1 className="title">
      TV Nostaligium
    </h1>

    <p className="subtitle">
      <Trans>
        A forum for all things old TV
      </Trans>
    </p>
  </>);
}

export default Header;
