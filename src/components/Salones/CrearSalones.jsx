//import { enqueueSnackbar } from "notistack";
import { postSalon } from "../../api/sirsAPI";
import { useQuery } from "react-query";
import { useState } from "react";

function CrearSalones() {
  const { refetch } = useQuery({
    queryKey: ["etiquetas"],
    refetchOnMount: false,
  });

  const [name, setName] = useState("");
  const [capacity, setcapacity] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleInputNameChange = (event) => {
    setName(event.target.value);
  };
  const handleInputCapacityChange = (event) => {
    setcapacity(event.target.value);
  };
  const handleInputIsActiveChange = (event) => {
    setIsActive(event.target.value);
  };

  const handleCreateSalon = () => {
    postSalon({
      name,
      capacity,
      isActive,
    }).then(() => {
      refetch();
    });
    //Manejar error con catch
  };

  return (
    <div className="-mt-10">
      <div className="flex -ml-10">
        <div className="flex-col m-7 mr-20">
          <div className="mb-4">
            <label className="font-bold text-xl -ml-6">Nombre del salón</label>
          </div>
          <div className="flex">
            <label className="flex ml-10 mr-1"> Nombre</label>
            <span className="text-red-500"> *</span>
          </div>
          <input
            type="text"
            placeholder="Ingrese el identificador del salón"
            value={name}
            onChange={handleInputNameChange}
            className="ml-9 border border-gray-300 rounded-full p-2 w-full"
          />
        </div>

        <div className="flex-col m-7 mr-20">
          <div className="mb-4">
            <label className="font-bold text-xl -ml-6">Capacidad</label>
          </div>
          <div className="flex">
            <label className="flex ml-10 mr-1"> Capacidad</label>
            <span className="text-red-500"> *</span>
          </div>
          <input
            type="text"
            placeholder="Ingrese la capacidad del salón"
            value={capacity}
            onChange={handleInputCapacityChange}
            className="ml-9 border border-gray-300 rounded-full p-2 w-full"
          />
        </div>

        <div className="flex-col m-7 mr-20">
          <div className="mb-4">
            <label className="font-bold text-xl -ml-6">Estado del salón</label>
          </div>
          <div className="flex">
            <label className="flex ml-10 mr-1"> Estado</label>
            <span className="text-red-500"> *</span>
          </div>
          <input
            type="text"
            placeholder="Seleccione el estado del salón"
            value={isActive}
            onChange={handleInputIsActiveChange}
            className="ml-9 border border-gray-300 rounded-full p-2 w-full"
          />
        </div>
      </div>

      <div className="flex">
        <div></div>
        <button
          className="bg-blue ml-auto h-10 w-1/3 text-white rounded-lg font-bold"
          onClick={handleCreateSalon}
        >
          CREAR
        </button>
      </div>
    </div>
  );
}

export { CrearSalones };
