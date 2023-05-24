import { useContext } from 'react';
import { CotizadorContext } from '../context/CotizadorProvider';

/**
 * Hook personalizado que devuelve el contexto del cotizador.
 * Permite acceder al estado y las funciones relacionadas con la cotización de seguros.
 *
 * @returns {Object} - Objeto que contiene el contexto del cotizador.
 */
const useCotizador = () => {
  return useContext(CotizadorContext);
};

export default useCotizador;
