const SectionHeader = ({ title, subtitle, className = "" }) => {
  return (
    <div className={`mb-12 ${className}`}>
      <h2 className="text-sm font-bold text-red-600 tracking-widest uppercase mb-3">{subtitle}</h2>
      <h3 className="text-4xl font-extrabold text-gray-900 mb-4">{title}</h3>
      <div className="w-24 h-1.5 bg-red-600 rounded-full mb-6"></div>
    </div>
  );
};
export default SectionHeader;
