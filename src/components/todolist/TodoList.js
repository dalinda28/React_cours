import TodoListItem from "./TodoListItem";

function TodoList({ todoList, setTodoList }) {

    return (
        <div className="container">
            {todoList.map((listItem) => (
                <TodoListItem
                    todoList={todoList}
                    setTodoList={setTodoList}
                    listItem={listItem}
                    name={listItem.name}
                    key={listItem.id}
                />
            ))}
        </div>
    )
}

export default TodoList;