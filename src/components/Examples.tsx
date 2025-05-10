import { useState } from 'react';

import TabButton from './TabButton';
import { EXAMPLES } from '../data';
import Section from './Section';
import Tabs from './Tabs';

const Examples = () => {
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
    <Section id='examples' title='Examples'>
      <Tabs
        //? for custom components
        //* buttonsContainer={Section}

        //? for basic html element
        //* buttonsContainer={'menu'}

        buttons={
          <>
            <TabButton
              onClick={() => handleSelect('components')}
              isSelected={selectedTopic === 'components'}
            >
              Components
            </TabButton>

            <TabButton
              onClick={() => handleSelect('jsx')}
              isSelected={selectedTopic === 'jsx'}
            >
              JSX
            </TabButton>

            <TabButton
              onClick={() => handleSelect('props')}
              isSelected={selectedTopic === 'props'}
            >
              Props
            </TabButton>

            <TabButton
              onClick={() => handleSelect('state')}
              isSelected={selectedTopic === 'state'}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
};

export default Examples;
