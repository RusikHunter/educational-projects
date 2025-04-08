import { MemoryRouter } from "react-router-dom"
import AppRouter from "../../router/AppRouter"

export default function renderWithRouter(component, initialRoute) {
    return (
        <MemoryRouter initialEntries={[initialRoute]}>
            <AppRouter />
            {component}
        </MemoryRouter>
    )
}