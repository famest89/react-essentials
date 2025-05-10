import { useState } from 'react';

import CoreConcept from './components/CoreConcept/CoreConcept.tsx';
import Header from './components/Header/Header.tsx';
import TabButton from './components/TabButton/TabButton.tsx';
import { CORE_CONCEPTS, EXAMPLES } from './data.ts';

function App() {
  const [selectedTopic, setSelectedTopic] = useState('');

  const handleSelect = (selectedButton: string) => {
    setSelectedTopic(selectedButton);
  };

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic)
    tabContent = (
      <div id='tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );

  return (
    <div>
      <Header />

      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>

          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept key={concept.title} {...concept} />
            ))}
          </ul>
        </section>

        <section id='examples'>
          <h2>Examples</h2>

          <menu>
            <TabButton
              onSelect={() => handleSelect('components')}
              isSelected={selectedTopic === 'components'}
            >
              Components
            </TabButton>
            <TabButton
              onSelect={() => handleSelect('jsx')}
              isSelected={selectedTopic === 'jsx'}
            >
              JSX
            </TabButton>
            <TabButton
              onSelect={() => handleSelect('props')}
              isSelected={selectedTopic === 'props'}
            >
              Props
            </TabButton>
            <TabButton
              onSelect={() => handleSelect('state')}
              isSelected={selectedTopic === 'state'}
            >
              State
            </TabButton>
          </menu>
        </section>

        <>{tabContent}</>
      </main>
    </div>
  );
}

export default App;
