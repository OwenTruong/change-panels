import React from 'react';

type Props = {
  setNextBinded: () => void;
};

export default function Panel3(props: Props): JSX.Element {
  return (
    <div>
      <h2>Panel 3</h2>
      <button onClick={props.setNextBinded}>Next</button>
    </div>
  );
}
