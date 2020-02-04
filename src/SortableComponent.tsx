import React from 'react';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import PropTypes from "prop-types";

import arrayMove from 'array-move';
import { Phases } from './App';


const SortableItem = SortableElement(({value} : {value:String}) => <li>{value}</li>);

const SortableList = SortableContainer(({items, phase} : {items:String[], phase:number}) => {
  return (
      <ul>
        {items.map((value, index) => (
          <SortableItem key={`item-${value}`} index={index} value={value} disabled={phase === Phases.Results} />
        ))}
      </ul>
  );
});

export interface ItemsProps {
    items: string[];
    setItems: Function;
    phase: number;
}

const SortableComponent = ({items, setItems, phase}:ItemsProps) => {
  const onSortEnd = ({oldIndex, newIndex} : {oldIndex:number, newIndex:number}) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };
  
  return <SortableList items={items} onSortEnd={onSortEnd} phase={phase} />;
  
}
SortableComponent.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string),
    setItems: PropTypes.func
};

export default SortableComponent;