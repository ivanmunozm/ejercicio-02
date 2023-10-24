import { useState } from 'react';

import HelpArea from './HelpArea';

function MainContent() {
  const [helpVisible, setHelpVisible] = useState(false);

  function toggleHelp() {
    setHelpVisible((isVisible) => !isVisible);
  }

  return (
    <main>
      <button onClick={toggleHelp}>{helpVisible ? 'Ocultar' : 'Mostrar'} Ayuda</button>
      {helpVisible && <HelpArea />}
    </main>
  );
}

export default MainContent;
