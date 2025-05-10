interface TabButtonProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  isSelected: boolean;
}

const TabButton = ({ children, isSelected, ...props }: TabButtonProps) => {
  return (
    <li>
      <button className={isSelected ? 'active' : ''} {...props}>
        {children}
      </button>
    </li>
  );
};

export default TabButton;
