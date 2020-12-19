import React, { Component } from 'react';

import ErrorButton from '../error-button';

import './item-details.css';

const Record = ({ item, field, label }) => {
  return (
    <li className="row__right-item">
      <span className="term">{label}</span>
      <span>{ item[field] }</span>
    </li>
  );
};

export {
  Record
};

export default class ItemDetails extends Component {

  state = {
    item: null,
    image: null
  };

  componentDidMount() {
    this.updateItem();
  };

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  };

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId)
      .then((item) => {
        this.setState({
          item,
          image: getImageUrl(item)
        });
      });
  };

  render() {

    const { item, image } = this.state;
    if (!item) {
      return <span className="row__right-helper">Select a item from a list</span>;
    }

    const { name } = item;

    return (
      <div className="row__right-card">
        <img className="row__right-image"
          src={image}
          alt="item"/>

        <div className="row__right-body">
          <h4 className="row__right-title">{name}</h4>
          <ul className="row__right-list">
            {
              React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, { item });
              })
            }
          </ul>
          <ErrorButton />
        </div>
      </div>
    );
  }
}
