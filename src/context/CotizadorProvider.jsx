/* eslint-disable react/prop-types */

import { useState, createContext } from 'react';
import {
  obtenerDiferenciaYear,
  calcularMarca,
  calcularPlan,
  formatearDinero,
} from '../helpers';

export const CotizadorContext = createContext();

/**
 * Proveedor de contexto para la aplicación de cotización de seguros.
 * Contiene el estado y las funciones relacionadas con la cotización de seguros.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {ReactNode} props.children - Componentes hijos envueltos por el proveedor de contexto.
 */
const CotizadorProvider = ({ children }) => {
  const [datos, setDatos] = useState({
    marca: '',
    year: '',
    plan: '',
  });

  const [error, setError] = useState('');
  const [resultado, setResultado] = useState(0);
  const [cargando, setCargando] = useState(false);

  /**
   * Maneja el cambio de los datos del formulario.
   *
   * @param {Object} e - Evento de cambio.
   */
  const handleChangeDatos = e => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * Realiza la cotización del seguro.
   */
  const cotizarSeguro = () => {
    // Una base
    let resultado = 2000;

    // Obtener diferencias de años
    const diferencia = obtenerDiferenciaYear(datos.year);

    // Hay que restar el 3% por cada año
    resultado -= (diferencia * 3 * resultado) / 100;

    // Americano 15%
    // Europeo 30%
    // Asiatico 5%
    resultado *= calcularMarca(datos.marca);

    // Basico aumenta 20%
    // Completo aumenta 50%
    resultado *= calcularPlan(datos.plan);

    // Formatear Dinero
    resultado = formatearDinero(resultado);

    setCargando(true);

    setTimeout(() => {
      setResultado(resultado);
      setCargando(false);
    }, 3000);
  };

  return (
    // Proporcionar el estado y las funciones a los componentes hijos
    <CotizadorContext.Provider
      value={{
        datos,
        handleChangeDatos,
        error,
        setError,
        cotizarSeguro,
        resultado,
        cargando,
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};

export { CotizadorProvider };
