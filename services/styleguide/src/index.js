import React from 'react';
import ReactDOM from 'react-dom';
import { Catalog, pageLoader } from 'catalog';

import Panel from 'components/lib/Panel'
import Button from 'components/lib/Button'

ReactDOM.render(
  <Catalog
    title='Catalog'
    pages={[
      {
        imports: { Panel, Button },
        path: '/',
        title: 'Introduction',
        content: pageLoader('intro.md'),
      },
    ]}
  />,
  document.getElementById('root')
);