import { Link } from "react-router-dom";

function CardDashboard({ data }) {
  return (
    <div className="bg-white text-white p-2 shadow-lg shadow-blue border rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 ">
      <div className="h-52">
        <div className="bg-blue text-center rounded-t-xl">
          <h1 className="text-3xl font-bold capitalize whitespace-nowrap p-4">
            {data.title}
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-2 mt-6">
          <button className="bg-green-dark px-2 py-5 text-xl rounded-xl mt-12 hover:bg-green-light whitespace-nowrap">
            <Link className="font-bold" to={'/salones'}>
              Mas informacion
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export { CardDashboard };
