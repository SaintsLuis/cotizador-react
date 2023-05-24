import { CotizadorProvider } from './context/CotizadorProvider';
import { AppSeguro } from './components/AppSeguro';

function App() {
  return (
    <>
      {/* CotizadorProvider se encarga de proporcionar el contexto para la aplicación */}
      <CotizadorProvider>
        {/* AppSeguro es el componente principal de la aplicación */}
        <AppSeguro />
      </CotizadorProvider>
    </>
  );
}

export default App;
