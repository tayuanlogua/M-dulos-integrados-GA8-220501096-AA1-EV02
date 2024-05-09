import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { registerRequest } from '../api/auth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function FormPage() {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const mostrarAlerta = async (values) => {
    const result = await Swal.fire({
      title: 'Crear registro',
      text: '¿Está seguro de los datos del empleado que está creando son los correctos?',
      icon: 'warning',
      showDenyButton: true,
      denyButtonText: 'NO',
      confirmButtonText: 'SI',
      confirmButtonColor: 'aqua',
      denyButtonColor: 'coral',
      background: '#E2E8F0',
      color: '#202020',
      width: '300px',
    });

    if (result.isConfirmed) {
      console.log(values);
      const res = await registerRequest(values);
      Swal.fire({
        title: 'Usuario creado',
        text: 'El usuario se creo exitosamente',
        icon: 'success',
        background: '#E2E8F0',
        color: '#202020',
        width:'300px',
        timer: 5000    
      });
    } else if (result.isDenied) {
      Swal.fire({
        title: 'Error',
        text: 'La creación del registro del empleado fue negada, verifica los datos',
        icon: 'error',
        background: '#E2E8F0',
        color: '#202020',
        width:'300px',
        timer: 5000  

      });
    }
  };

  

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="numeroUno bg-slate-200 max-w-md w-full rounded-md p-10">
        <h1 className="text-zinc-500 text-center text-2xl font-semibold py-2">Registro de empleado</h1>
        <form id="empleadoForm" onSubmit={handleSubmit((values) => mostrarAlerta(values))}>
          <input
            type="text"
            {...register('name', { required: true })}
            placeholder="Ingrese su nombre"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          <input
            type="text"
            {...register('position', { required: true })}
            placeholder="Ingrese su cargo"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          <input
            type="text"
            {...register('office', { required: true })}
            placeholder="Ingrese su lugar de trabajo"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          <input
            type="number"
            {...register('salary', { required: true })}
            placeholder="0"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />

          <div className="flex justify-evenly my-5">
            <button type="submit" className="rounded-md py-2 px-3 bg-indigo-500">
              Guardar
            </button>
            <button type="button" className="rounded-md py-2 px-3 bg-indigo-500" onClick={() => reset()}>
              Limpiar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormPage;
