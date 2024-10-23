import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="relative flex-1 max-w-2xl">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary w-4 h-4" />
      <input 
        type="text"
        placeholder="Search Repositories and Projects..."
        className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-md 
                 focus:outline-none focus:ring-1 focus:ring-primary"
      />
    </div>
  );
};

export default SearchBar;
