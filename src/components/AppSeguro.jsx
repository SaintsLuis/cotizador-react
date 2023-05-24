import Formulario from './Formulario';
import { Spinner } from './Spinner';
import { Resultado } from './Resultado';
import useCotizador from '../hooks/useCotizador';

/**
 * Componente principal de la aplicación de cotización de seguros.
 * Contiene el encabezado, el formulario de cotización y el resultado de la cotización.
 */
export const AppSeguro = () => {
  // Extraer el estado de cargando desde el contexto
  const { cargando } = useCotizador();

  return (
    <>
      {/* Encabezado */}
      <header className='my-10'>
        <h1 className='text-white text-center text-4xl font-black'>
          Cotizador de Seguros de Auto
        </h1>
      </header>

      {/* Contenido principal */}
      <main className='bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10'>
        {/* Formulario de cotización */}
        <Formulario />

        {/* Mostrar el spinner de carga si cargando es true, de lo contrario mostrar el resultado */}
        {cargando ? <Spinner /> : <Resultado />}
      </main>
    </>
  );
};
