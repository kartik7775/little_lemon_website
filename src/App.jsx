import "./App.css";
import { Home, Login, OrderOnline } from "./components/index";
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

                <Route path="order-online" element={<OrderOnline />} />

                <Route path="login" element={<Login />} />
            </Route>
        )
    );

    return <RouterProvider router={router} />;
}

export default App;
