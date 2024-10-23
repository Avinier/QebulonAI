import { MoreHorizontal, GitBranch } from 'lucide-react';
import Image from 'next/image';

const InstanceCard = ({ 
  title, 
  domain, 
  repoPath, 
  lastCommit, 
  timeAgo, 
  branch = 'main',
  icon
}) => {
  return (
    <div className="p-6 bg-white shadow-sm border cursor-pointer border-border rounded-lg hover:border-grey/50 transition-colors">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-grey/10">
            {icon && (
              <Image
                src={icon}
                alt={title}
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div>
            <h3 className="font-medium text-primary">{title}</h3>
            <p className="text-sm text-grey">{domain}</p>
          </div>
        </div>
        <button className="text-secondary hover:text-primary">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="mt-6">
        <div className="flex items-center space-x-2 text-sm text-grey">
          <GitBranch className="w-4 h-4" />
          <span>{repoPath}</span>
        </div>
        <div className="mt-2 text-sm text-grey">
          <p>{lastCommit}</p>
          <p className="flex items-center space-x-2">
            <span>{timeAgo} on</span>
            <span className="inline-flex items-center space-x-1">
              <GitBranch className="w-3 h-3" />
              <span>{branch}</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InstanceCard;