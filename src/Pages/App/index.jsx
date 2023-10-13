import { useRoutes, BrowserRouter, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Sidebar } from "../../components/Home/Sidebar";
import { MainHeader } from '../../components/Home/MainHeader'
import { Dashboard } from '../Dashboard/index'
import { GestionSalones } from "../GestionSalones";

function AppRoutes() {
  let routes = useRoutes([
      { path: "/home", element: <Dashboard /> },
      { path: '/salones', element: <GestionSalones /> },
      //{ path: '/reservas', element: <Reservas /> },
      //{ path: '/reportes', element: <Reportes /> },
      { path: "*", element: <Navigate to="/home" /> },
  ]);
  return routes;
}

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex flex-col w-full  ">
            <MainHeader />
            <div>
              <AppRoutes />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export { App };
