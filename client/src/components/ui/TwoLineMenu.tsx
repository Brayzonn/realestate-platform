interface TwoLineMenuProps {
  className?: string;
}

const TwoLineMenu = ({ className }: TwoLineMenuProps) => (
  <div className={`${className} flex flex-col justify-center space-y-1.5`}>
    <div className="w-full h-0.5 bg-current"></div>
    <div className="w-full h-0.5 bg-current"></div>
  </div>
);

export default TwoLineMenu;