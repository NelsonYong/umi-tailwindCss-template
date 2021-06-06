const Contain = ({
  children,
  className,
}: {
  children: any;
  className?: string;
}) => {
  return (
    <div className={`w-full h-full bs-border ${className}`}>{children}</div>
  );
};

export default Contain;
