import Link from 'next/link';

const Navbar = () => {
  const navItems = [
    'Instances', 'Security', 'Monitoring', 'Storage', 'AI', 'Support', 'Settings'
  ];

  return (
    <nav className="border-b bg-white border-border">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex items-center space-x-8 h-14 px-4">
          {navItems.map((item, index) => (
            <Link
              key={item}
              href={`/dashboard/${item.toLowerCase()}`}
              className={`h-full text-sm font-primary flex items-center border-b-2 ${
                index === 0 
                  ? 'border-primary text-primary font-medium' 
                  : 'border-transparent hover:border-secondary/50'
              }`}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;