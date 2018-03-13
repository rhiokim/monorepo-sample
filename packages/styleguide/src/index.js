import React from 'react';
import ReactDOM from 'react-dom';
import { Catalog, pageLoader } from 'catalog';
ReactDOM.render(
  <Catalog
    title='Catalog'
    pages={[
      {
        path: '/',
        title: 'Introduction',
        content: pageLoader('intro.md'),
      },
    ]}
  />,
  document.getElementById('root')
);