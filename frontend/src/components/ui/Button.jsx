export const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`relative inline-flex items-center gap-x-1.5 rounded-md
     bg-sky-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm
      hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 
      focus-visible:outilne-offset-2 focus-visible:outulne-sky-500
      disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
