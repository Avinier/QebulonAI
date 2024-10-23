import { ChevronDown } from 'lucide-react';

const SortButton = () => {
  return (
    <button className="flex items-center space-x-2 px-4 py-2 border border-border rounded-md 
                     hover:bg-secondary/10">
      <span>Sort by activity</span>
      <ChevronDown className="w-4 h-4" />
    </button>
  );
};

export default SortButton;