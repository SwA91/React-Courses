import * as z from "zod/v4";

// normalmente se saca en un fichero separado las interfaces
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState {
  todos: Todo[];
  length: number;
  completed: number;
  pending: number;
}

/* 
- es mejor definirla como type
- normalmente se instancia como objeto cada valor, mas flexible
- argumento o accion se suele llamar payload
*/
export type TaskAction =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number };

// creamos el esquema con las validaciones de zod
const TodoSchema = z.object({
  id: z.number(),
  text: z.string(),
  completed: z.boolean(),
});

const TaskStateScheme = z.object({
  // validamos el arreglo de mi esquema para TODO
  todos: z.array(TodoSchema),
  length: z.number(),
  completed: z.number(),
  pending: z.number(),
});

/* 
- siempre inicializar una funcion para nuestro estado y no en el mismo Reducer
*/
export const getTasksInitialState = (): TaskState => {
  const localStorageState = localStorage.getItem("tasks-state");

  if (!localStorageState) {
    return {
      todos: [],
      completed: 0,
      pending: 0,
      length: 0,
    };
  }

  // Validar mediante Zod, una alternativa es Yup
  const result = TaskStateScheme.safeParse(
    // parseamos de string a objeto js
    JSON.parse(localStorageState)
  );

  if (result.error) {
    console.log(result.error);
    return {
      todos: [],
      completed: 0,
      pending: 0,
      length: 0,
    };
  }

  // ! Cuidado, porque el objeto puede haber sido manipulado
  return result.data;
};

/* 
- Reducer es una funcion que regresa un objeto
- siempre tiene que devolver un State
- reducer es un patron de js compatible con cualquier framework
- si tenemos muchos useState es mejor usar reducer
*/
export const taskReducer = (
  /* 
  - estado actual sobre el que se trabaja
   */
  state: TaskState,
  /* 
  - determina un nuevo estado, nunca se ha de modificar dentro del reducer
   */
  action: TaskAction
): TaskState => {
  /* 
  - es comun ver switch dentro de un reducer
  */
  switch (action.type) {
    case "ADD_TODO": {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };

      // ! No lo deben de hacer, porque muta el state
      // va en contra de los reducer, ya que react no se entera
      // state.todos.push(newTodo)

      /* 
      - no usamos break sino return para retornar el nuevo estado
      */
      return {
        // spread del state sin alterar
        ...state,
        // alteramos el state con lo que nos interesa
        // spread/esparcimos todos los todos actual y el nuevo
        todos: [...state.todos, newTodo],
        length: state.todos.length + 1,
        pending: state.pending + 1,
      };
    }

    case "DELETE_TODO": {
      // nos quedamos con todos menos el eliminado
      const currentTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );

      // const completedTodos = currentTodos.filter((todo) => todo.completed).length;
      // const pendingTodos = currentTodos.length - completedTodos;

      return {
        ...state,
        todos: currentTodos,
        length: currentTodos.length,
        // actualizamos su valor solo con los completados
        completed: currentTodos.filter((todo) => todo.completed).length,
        // actualizamos su valor solo con los no completados
        pending: currentTodos.filter((todo) => !todo.completed).length,
      };
    }

    case "TOGGLE_TODO": {
      /* 
      - marcamos completado el todo elegido
      */
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });

      return {
        ...state,
        todos: updatedTodos,
        completed: updatedTodos.filter((todo) => todo.completed).length,
        pending: updatedTodos.filter((todo) => !todo.completed).length,
      };
    }

    // por defecto devolvemos el state sin alterar
    default:
      return state;
  }
};
