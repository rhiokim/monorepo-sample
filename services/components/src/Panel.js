// @flow
import React from 'react';

const style = {
  backgroundColor: 'rgba(255,255,255,1)',
  boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px',
  padding: '5px'
}

export default ({ children }) => <div style={style}>
  <h2>Panel header</h2>
  {children}
</div>