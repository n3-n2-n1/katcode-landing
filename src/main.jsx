import ReactDOM from 'react-dom/client'
import Landing_EN from './routes/Landing_EN.jsx'
import Error from './components/components_EN/ErrorComponent/Error.jsx';
import '../src/styles/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing_EN/>,
        errorElement: <Error/>
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
