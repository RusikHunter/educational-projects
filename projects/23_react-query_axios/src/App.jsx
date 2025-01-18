import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import axios from 'axios'

const queryClient = new QueryClient()

function Todos() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['todos'],
        queryFn: async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
            return response.data
        },
    })

    if (isLoading) return <div>Загрузка...</div>
    if (error) return <div>Ошибка: {error.message}</div>

    return (
        <div>
            <h1>Список задач:</h1>
            <ul>
                {data.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    );
}

function AddTodo() {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: (newTodo) =>
            axios.post('https://jsonplaceholder.typicode.com/todos', newTodo),
        onSuccess: () => {
            queryClient.invalidateQueries(['todos'])
        },
    })

    const handleAddTodo = () => {
        mutation.mutate({ title: 'Новая задача', completed: false })
    }

    return (
        <div>
            <button onClick={handleAddTodo}>Добавить задачу</button>
            {mutation.isLoading && <p>Добавление...</p>}
            {mutation.isError && <p>Ошибка: {mutation.error.message}</p>}
            {mutation.isSuccess && <p>Задача добавлена!</p>}
        </div>
    )
}

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Todos />
            <AddTodo />
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
}