import Navbar from "@/components/Dashboard/Navbar";
import { notFound } from "next/navigation";

const getInstanceData = (slug) => {
  const instances = [
    {
      title: "superserver.ai-1",
      domain: "quantumsenses.com",
      repoPath: "Avinier/SuperServerAI-LandingPage",
      lastCommit: "wait",
      timeAgo: "8d ago",
      branch: "main",
      icon: "/logo-1.jpeg",
    },
    {
      title: "superserver.ai-2",
      domain: "quantumsenses.com",
      repoPath: "Avinier/SuperServerAI-LandingPage",
      lastCommit: "wait",
      timeAgo: "8d ago",
      branch: "main",
      icon: "/logo-1.jpeg",
    },
    {
      title: "superserver.ai-3",
      domain: "quantumsenses.com",
      repoPath: "Avinier/SuperServerAI-LandingPage",
      lastCommit: "wait",
      timeAgo: "8d ago",
      branch: "main",
      icon: "/logo-1.jpeg",
    },
    {
      title: "superserver.ai-4",
      domain: "quantumsenses.com",
      repoPath: "Avinier/SuperServerAI-LandingPage",
      lastCommit: "wait",
      timeAgo: "8d ago",
      branch: "main",
      icon: "/logo-1.jpeg",
    },
  ];

  return instances.find(
    (instance) =>
      instance.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") === slug
  );
};

export async function generateStaticParams() {
  // This would come from your data source
  const instances = [
    { title: "superserver.ai" },
    // Add other instances...
  ];

  return instances.map((instance) => ({
    slug: instance.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  }));
}

export default function InstancePage({ params }) {
  const instance = getInstanceData(params.slug);

  if (!instance) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-screen-2xl mx-auto px-4 py-6">
        <div className="space-y-6">
          {/* Instance Header */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-secondary/10">
              {instance.icon && (
                <Image
                  src={instance.icon}
                  alt={instance.title}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div>
              <h1 className="text-2xl font-medium text-primary">
                {instance.title}
              </h1>
              <p className="text-secondary">{instance.domain}</p>
            </div>
          </div>

          {/* Instance Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border border-border rounded-lg">
              <h2 className="font-medium mb-4">Repository Details</h2>
              <div className="space-y-2 text-secondary">
                <p>Path: {instance.repoPath}</p>
                <p>Last Commit: {instance.lastCommit}</p>
                <p>Updated: {instance.timeAgo}</p>
                <p>Branch: {instance.branch}</p>
              </div>
            </div>
            {/* Add more detail cards as needed */}
          </div>
        </div>
      </main>
    </div>
  );
}
