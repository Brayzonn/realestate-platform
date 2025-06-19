interface TwoLineMenuProps {
  className?: string;
}

const TwoLineMenu = ({ className }: TwoLineMenuProps) => (
  <svg 
    className={className}
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
  >
    <line x1="3" y1="8" x2="21" y2="8"/>
    <line x1="3" y1="16" x2="21" y2="16"/>
  </svg>
);

export default TwoLineMenu;