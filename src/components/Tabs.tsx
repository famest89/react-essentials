import type { ElementType } from 'react';

interface TabsProps {
  children: React.ReactNode;
  buttons: React.ReactNode;
  buttonsContainer?: ElementType;
}

const Tabs = ({ children, buttons, buttonsContainer = 'menu' }: TabsProps) => {
  const ButtonsContainer = buttonsContainer;

  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
};

export default Tabs;
