export const Card = ({ children, className }) => {
  return (
    <div className={`bg-gray-100 p-10 rounded-md ${className}`}>{children}</div>
  );
};
