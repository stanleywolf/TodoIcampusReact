import React, { Context} from 'react'


const TodosContext = React.createContext({
    onAdd: ()=> {},
    onDone: ()=> {},
    onRemove: ()=> {}
});

export default TodosContext