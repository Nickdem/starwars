import React from 'react';
import './item-list.css';

const ItemList = (props) => {

  const { data, onItemSelected, children: renderLabel } = props;

  const items = data.map((item) => {
    const { id } = item;
    const label = renderLabel(item);
    
    return (
      <li className="row__left-item"
        key={id}
        onClick={() => onItemSelected(id)}>
        {label}
      </li>
    );
  });

  return (
    <ul className="row__left-list">
      {items}
    </ul>
  );

}

ItemList.defaultProps = {
  onItemSelected: () => {}
}

export default ItemList