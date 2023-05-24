/**
 * Calcula la diferencia de años entre el año actual y el año proporcionado.
 *
 * @param {number} year - Año para calcular la diferencia.
 * @returns {number} - Diferencia de años.
 */
export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}

/**
 * Calcula el factor de incremento basado en la marca seleccionada.
 *
 * @param {string} marca - Marca del auto.
 * @returns {number} - Factor de incremento.
 */
export function calcularMarca(marca) {
  let incremento;

  switch (marca) {
    case '1':
      incremento = 1.3;
      break;

    case '2':
      incremento = 1.15;
      break;

    case '3':
      incremento = 1.05;
      break;

    default:
      break;
  }

  return incremento;
}

/**
 * Calcula el factor de incremento basado en el plan seleccionado.
 *
 * @param {string} plan - Plan seleccionado.
 * @returns {number} - Factor de incremento.
 */
export function calcularPlan(plan) {
  return plan === '1' ? 1.2 : 1.5;
}

/**
 * Formatea una cantidad de dinero en formato de moneda dominicana (DOP).
 *
 * @param {number} cantidad - Cantidad de dinero a formatear.
 * @returns {string} - Cantidad de dinero formateada.
 */
export function formatearDinero(cantidad) {
  return cantidad.toLocaleString('es-DO', {
    style: 'currency',
    currency: 'DOP',
  });
}
