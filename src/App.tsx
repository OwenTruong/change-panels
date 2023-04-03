import React, { useState } from 'react';

import Panel1 from './panels/Panel1';
import Panel2 from './panels/Panel2';
import Panel3 from './panels/Panel3';

const setNextPanel = (
  panelState: number,
  setPanelState: (state: number) => void
): void => {
  const N_OF_PANEL = 3;
  if (panelState === N_OF_PANEL - 1) setPanelState(0);
  else setPanelState(panelState + 1);
};

function App() {
  const [panelState, setPanelState] = useState(0);

  const setNextBinded = setNextPanel.bind(null, panelState, setPanelState);

  // prettier-ignore
  return (
    <div className="App">
      <h1>State Transformation</h1>
      {
        panelState === 0 ? (<Panel1 setNextBinded={setNextBinded} />) : 
        panelState === 1 ? (<Panel2 setNextBinded={setNextBinded} />) : 
                           (<Panel3 setNextBinded={setNextBinded} />)
      }
    </div>
  );
}

export default App;
