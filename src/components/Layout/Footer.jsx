const Footer = () => {
  return (
    <footer className="py-12 px-8 bg-white dark:bg-gray-950 border-t border-gray-50 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[11px] text-gray-400 font-medium">
          &copy; {new Date().getFullYear()} Mehedi Hassan Shawon
        </p>
        <p className="text-[11px] text-gray-400 font-serif italic tracking-wider">
          Informed by theory, designed for humans.
        </p>
        <div className="flex gap-4">
          <div className="w-1 h-1 rounded-full bg-gray-100 dark:bg-gray-800"></div>
          <div className="w-1 h-1 rounded-full bg-gray-100 dark:bg-gray-800"></div>
          <div className="w-1 h-1 rounded-full bg-gray-100 dark:bg-gray-800"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
