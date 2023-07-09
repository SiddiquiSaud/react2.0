import React from 'react';
import { List } from 'react-virtualized';

const ChildComponent = ({ items, rowRenderer }) => {
  return (
    <div>
      <List
        rowCount={items.length}
        rowHeight={"100px"}
        width={"200px"}
        height={"400px"}
        rowRenderer={rowRenderer}
      />
    </div>
  );
};

export default ChildComponent;
