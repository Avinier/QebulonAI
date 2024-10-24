// app/dashboard/page.js
import Navbar from "@/components/Dashboard/Navbar";
import SearchBar from "@/components/Dashboard/SearchBar";
import SortButton from "@/components/Dashboard/SortButton";
import InstanceCard from "@/components/Dashboard/InstanceCard";
import { LayoutGrid, List, Plus } from "lucide-react";

const DashboardPage = () => {
  // Sample data - replace with your actual data
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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-screen-2xl mx-auto px-4 py-6">
        <div className="flex items-center space-x-4 mb-6">
          <SearchBar />

          <div className="flex items-center space-x-2">
            <SortButton />

            <div className="flex items-center border border-border rounded-md">
              <button className="p-2 hover:bg-secondary/10">
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-secondary/10 border-l border-border">
                <List className="w-4 h-4" />
              </button>
            </div>

            <button
              className="flex items-center space-x-2 px-4 py-2 bg-primary text-white 
                           rounded-md hover:bg-primary/90"
            >
              <Plus className="w-4 h-4" />
              <span>Add New...</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {instances.map((instance, index) => (
            <InstanceCard key={instance.slug || index} {...instance} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
