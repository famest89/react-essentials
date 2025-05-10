interface TabsProps {
  children: React.ReactNode;
  buttons: React.ReactNode;
  buttonsContainer?: React.ElementType;
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
