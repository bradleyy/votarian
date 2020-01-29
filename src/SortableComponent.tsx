import React, {Component} from 'react';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';

const SortableItem = SortableElement(({value} : {value:String}) => <li>{value}</li>);

const SortableList = SortableContainer(({items} : {items:String[]}) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${value}`} index={index} value={value} />
      ))}
    </ul>
  );
});

class SortableComponent extends Component {
  [x: string]: any;
  state = {
    items: ['Pizza', 'Burgers', 'Wings'],
  };
  onSortEnd = ({oldIndex, newIndex} : {oldIndex:number, newIndex:number}) => {
    this.setState(({items}:{items:string[]}) => ({
      items: arrayMove(items, oldIndex, newIndex),
    }));
  };
  render() {
    return <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />;
  }
}
export default SortableComponent;