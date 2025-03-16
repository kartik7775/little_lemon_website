import "./App.css";
import { Home, Reservations, Login, OrderOnline } from "./components/index";
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout />}>
                <Route index element={<Home />} />

                <Route path="reservations" element={<Reservations />} />

                <Route path="order-online" element={<OrderOnline />} />

                <Route path="login" element={<Login />} />
            </Route>
        )
    );

    return <RouterProvider router={router} />;
}

export default App;
