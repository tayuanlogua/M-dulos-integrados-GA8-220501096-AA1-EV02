
import { useEffect, useState } from "react";
import { deleteRegister } from "../api/auth";

function CardR({ register }) {

  const [borrar, setBorrar] = useState([]);

  const deleteRes = async(_id) =>{
   try {
     const res = await deleteRegister(_id);
     console.log(res)
     if (res.data.status ===204) setBorrar(borrar.filter((eliminado)=> eliminado._id !== _id))
   } catch (error) {
      console.error(error)
   }


  }

  // const deleteRes = async (_id) => {
  //   const res = await deleteRegister(_id);
  //   console.log(res.data);
  // };

  return (
    <div className="bg-zinc-600 max-w-md w-full p-10 rounded-md">
      <div className="flex justify-between">
        <p className=" text-blue-300"><b>Nombre: </b> </p>
        <p>{register.name}</p>
      </div>
      <div className="flex justify-between">
        <p className=" text-blue-300"><b>Puesto: </b> </p>
        <p>{register.position}</p>
      </div>
      <div className="flex justify-between">
        <p className=" text-blue-300"><b>Oficina: </b> </p>
        <p>{register.office}</p>
      </div>
      <div className="flex justify-between">
        <p className=" text-blue-300"><b>Sueldo: </b> </p>
        <p>{register.salary}</p>
      </div>
      <div className="my-4 flex justify-around">
        <button className=" bg-red-500 hover:bg-red-700 p-2 rounded-md" onClick={() => deleteRes(register._id)}>Eliminar</button>
      </div>
    </div>
  );
}

export default CardR;
