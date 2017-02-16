import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import FakeList from '../../lib/react-fake-list';

const ITEM_HEIGHT = 50;

function Item({ label }) {
  return (
    <div
      style={{
        height: ITEM_HEIGHT,
      }}
    >
      {label}
    </div>
  );
}

Item.propTypes = {
  label: PropTypes.string.isRequired,
};

function App() {
  const items = new Array(100000).fill(null).map((item, i) => ({
    label: `Item ${i}`,
    key: i,
  }));
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <FakeList
        style={{
          width: 250,
          height: 500,
        }}
        items={items}
        itemRenderer={({ label, key }) => <Item key={key} label={label} />}
        itemHeight={ITEM_HEIGHT}
      />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
