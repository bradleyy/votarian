import { observable, computed } from "mobx"
import arrayMove from "array-move";


export class Candidate {
    constructor(public name: string, public ordinal: number) { }
    
}


class CandidateList {
	@observable candidates:Candidate[] = [];
    @observable pendingRequests:number = 0;

    constructor(items: string[]) {
        // mobx.autorun(() => console.log(this.report));
        items.forEach((item) => {
            this.addCandidate(item);
        })
    }

	@computed get winner() {
        return this.candidates[0];
    }
    // 	return this.todos.filter(
	// 		todo => todo.completed === true
	// 	).length;
    // }

	// @computed get report() {
	// 	if (this.todos.length === 0)
	// 		return "<none>";
	// 	const nextTodo = this.todos.find(todo => todo.completed === false);
	// 	return `Next todo: "${nextTodo ? nextTodo.task : "<none>"}". ` +
	// 		`Progress: ${this.completedTodosCount}/${this.todos.length}`;
	// }

	addCandidate(candidate: string) {
		this.candidates.push(new Candidate(candidate, this.candidates.length));
        // push this to server
    }
    move(oldIndex: number, newIndex: number) {
        this.candidates = arrayMove(this.candidates, oldIndex, newIndex);
        if (1) {
            return;
        }
    }
    
    
}


export default CandidateList;