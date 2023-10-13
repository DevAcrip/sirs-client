import { CrearSalones } from "../../components/Salones/CrearSalones";
//import { ListarSalones } from "../../components/Salones/ListarSalones";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../components/Layout";

function GestionSalones() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Layout>
        <div className="flex-col bg-white text-center border-blue overflow-auto">
          <div className="flex justify-center">
            <h2 className="w-10/12 text-2xl font-bold text-blue p-2 mt-5">
              GESTIONAR SALONES
            </h2>
          </div>
          <div className=" m-5 flex items-center justify-center">
            <CrearSalones />
          </div>
          <span className="block border-t-2 border-gray-400 mr-10 ml-10"></span>
          <div className="h-1/3 m-5 flex items-center justify-center">
            {/*<ListarSalones />*/}
          </div>
        </div>
    </Layout>
  );
}

export { GestionSalones };
