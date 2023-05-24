/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useRef } from 'react';
import useCotizador from '../hooks/useCotizador';
import { MARCAS, PLANES } from '../constants';

/**
 * Componente que muestra el resultado de la cotización de seguro.
 */
export const Resultado = () => {
  // Extraer el resultado y los datos desde el contexto
  const { resultado, datos } = useCotizador();
  // Extraer los datos del formulario
  const { marca, year, plan } = datos;

  // Utiliza el hook useRef para guardar el año en una referencia mutable
  const yearRef = useRef(year);

  /**
   * Utiliza el hook useMemo para calcular el nombre de la marca y el plan
   * seleccionados a partir del resultado.
   */
  const [nombreMarca] = useMemo(
    () => MARCAS.filter(m => m.id === Number(marca)),
    [resultado],
  );
  const [nombrePlan] = useMemo(
    () => PLANES.filter(p => p.id === Number(plan)),
    [resultado],
  );

  // Si el resultado es cero, no se muestra nada
  if (resultado === 0) return null;

  return (
    <div className='bg-gray-100 text-center mt-5 p-5 shadow'>
      <h2 className='text-gray-600 font-black text-3xl'>Resumen</h2>

      <p className='my-2'>
        <span className='font-bold'>Marca: </span>
        {nombreMarca.nombre}
      </p>

      <p className='my-2'>
        <span className='font-bold'>Plan: </span>
        {nombrePlan.nombre}
      </p>
      <p className='my-2'>
        <span className='font-bold'>Año del Auto: </span>
        {yearRef.current}
      </p>
      <p className='my-2 text-2xl'>
        <span className='font-bold'>Total Cotización: </span>
        {resultado}
      </p>
    </div>
  );
};
