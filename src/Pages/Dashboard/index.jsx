import { Layout } from "../../components/Layout/index";
import { NavLink } from "react-router-dom"
import { CardDashboard } from "../../components/Dashboard/CardDashboard";

function Dashboard() {
  const servicios = [
    { id: 1, title: "Salones", to: "salones/" },
    { id: 2, title: "Reservas", to: "reservas/" },
    { id: 3, title: "Reportes", to: "reportes/" },
  ];
  return (
    <Layout>
      <div className="bg-white-soft mt-5 rounded-xl border mr-5 h-full mb-20">
        {servicios && servicios.length > 0 ? (
          <div>
            <div className="grid grid-cols-3 m-5 gap-5">
              {servicios.map((servicio) => (
                <CardDashboard key={servicio.id} data={servicio} />
              ))}
              <NavLink to={servicios.to}></NavLink>
            </div>
          </div>
        ) : (
          <div className="grid place-items-center col-span-3 text-6xl font-bold opacity-20 mt-60 mb-80">
            SIRS
          </div>
        )}
      </div>
    </Layout>
  );
}

export { Dashboard };
