import React, { PureComponent, PropTypes } from 'react';

export default class FakeList extends PureComponent {
  static propTypes = {
    style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    items: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
    itemRenderer: PropTypes.func.isRequired,
    itemHeight: PropTypes.number.isRequired,
    onScroll: PropTypes.func,
  }
  static defaultProps = {
    style: null,
    onScroll: () => null,
  }
  state = {
    offset: 0,
    length: 0,
  }
  componentDidMount() {
    this.checkOffset();
  }
  handleScroll = (e) => {
    this.checkOffset();
    this.props.onScroll(e);
  }
  checkOffset() {
    const { items, itemHeight } = this.props;
    const { scrollTop, clientHeight } = this.rootRef;

    const client = Math.ceil(clientHeight / itemHeight);
    const offset = Math.max(Math.floor(scrollTop / itemHeight) - client, 0);
    const length = Math.min(client * 3, items.length - offset);

    if (offset !== this.state.offset || length !== this.state.length) {
      this.setState({ offset, length });
    }
  }
  render() {
    const { items, itemRenderer, itemHeight, style, ...otherProps } = this.props;
    const { offset, length } = this.state;
    return (
      <div
        ref={ref => (this.rootRef = ref)}
        style={{
          overflowY: 'auto',
          height: '100%',
          ...style,
        }}
        {...otherProps}
        onScroll={this.handleScroll}
      >
        <div
          style={{
            paddingTop: offset * itemHeight,
            paddingBottom: (items.length - offset - length) * itemHeight,
          }}
        >
          {length > 0
            && items.slice(offset, offset + length).map(itemRenderer)
          }
        </div>
      </div>
    );
  }
}
