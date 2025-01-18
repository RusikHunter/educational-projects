import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
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

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Todos />
        </QueryClientProvider>
    );
}