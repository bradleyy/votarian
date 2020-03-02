import React from 'react';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import { observer } from 'mobx-react';

import { Phases } from './App';
import CandidateList from './Candidates';


const SortableItem = SortableElement(({value} : {value:String}) => <li>{value}</li>);

const SortableList = SortableContainer(observer(({candidates, phase} : {candidates:CandidateList, phase:number}) => {
  return (
      <ul>
        {candidates.candidates.map((candidate, index) => (
          <SortableItem key={`item-${candidate.name}`} index={index} value={candidate.name} disabled={phase === Phases.Results} />
        ))}
      </ul>
  );
}));

export interface CandidatesProps {
    candidates: CandidateList;
    phase: number;
}

const SortableComponent = observer(({candidates, phase}:CandidatesProps) => {
  const onSortEnd = ({oldIndex, newIndex} : {oldIndex:number, newIndex:number}) => {
    candidates.move(oldIndex, newIndex);
  };
  
  return <SortableList candidates={candidates} onSortEnd={onSortEnd} phase={phase} />;
  
});

export default SortableComponent;