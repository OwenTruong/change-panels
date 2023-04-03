import React from 'react';

type Props = {
  setNextBinded: () => void;
};

export default function Panel2(props: Props): JSX.Element {
  return (
    <div>
      <h2>Panel 2</h2>
      <button onClick={props.setNextBinded}>Next</button>
    </div>
  );
}
