import CoreConcepts from './components/CoreConcepts.tsx';
import Examples from './components/Examples.tsx';
import Header from './components/Header.tsx';

function App() {
  return (
    <>
      <Header />

      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
