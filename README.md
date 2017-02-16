# FakeList for React

React component for rendering and scrolling large lists. Aims to be easy to use and performant enough solution.

## Usage

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import FakeList from 'react-fake-list';

const ITEM_HEIGHT = 50;

ReactDOM.render(
    <FakeList
        items={[
            {
                label: 'Label',
                key: 'key',
            },
        ]}
        itemRenderer={({ label, key }) => (
            <div
                style={{
                    height: ITEM_HEIGHT,
                }}
                key={key}
            >
                {label}
            </div>
        )}
        itemHeight={ITEM_HEIGHT}
    />,
    document.body,
);
```
