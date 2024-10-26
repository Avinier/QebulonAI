"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Github,
  Cpu,
  HardDrive,
  Database,
  MapPin,
  Clock,
  Link,
  ExternalLink,
} from "lucide-react";
import Navbar from "@/components/Dashboard/Navbar";

const InstancePage = () => {
  const params = useParams();
  const instances = [
    {
      slug: "superserver-ai-1",
      name: "My First Instance",
      link: "https://github.com/Avinier",
      url: "https://quantumsenses.com",
      description: "This is a detailed description of the first instance.",
      status: "running",
      createdAt: "2024-03-15",
      specs: {
        cpu: "2 cores",
        memory: "4 GB",
        storage: "100 GB",
        type: "t2.micro",
        techstacks: ["django", "mysql", "reactjs"],
        location: "us-east-1",
      },
      meet: {
        title: "Meeting title",
        link: "https://meet.google.com",
        videoId: "1TucufRiGz65B7z_d8FS9TJNnM8W0HlYk",
        members: [
          { name: "mem1", image: "/logo-1.jpeg" },
          { name: "mem2", image: "/logo-1.jpeg" },
          { name: "mem3", image: "/logo-1.jpeg" },
        ],
        date: "26/10/2004 - created at 9:06am IST",
      },
    },
    {
      slug: "nk-coaltrack",
      name: "nk_coaltrack",
      link: "https://github.com/Avinier",
      url: "https://nk.coaltrack.com",
      description: "This is for nk mines in Chennai",
      status: "running",
      createdAt: "2024-03-15",
      specs: {
        cpu: "4 cores",
        memory: "8 GB",
        storage: "100 GB",
        type: "t2.micro",
        techstacks: ["laravel", "mongodb", "reactjs"],
        location: "us-east-1",
      },
      meet: {
        title: "Meeting title",
        link: "https://meet.google.com",
        videoId: "1TucufRiGz65B7z_d8FS9TJNnM8W0HlYk",
        members: [
          { name: "mem1", image: "/logo-1.jpeg" },
          { name: "mem2", image: "/logo-1.jpeg" },
          { name: "mem3", image: "/logo-1.jpeg" },
        ],
        date: "26/10/2004 - created at 9:06am IST",
      },
    },
    // Add more instances here with the same structure
  ];

  const filteredInstances = instances.filter(
    (instance) => instance.slug === params.slug
  );

  if (!filteredInstances || filteredInstances.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Card className="w-full max-w-md">
          <CardHeader>No Instance Found</CardHeader>
          <CardContent>
            No instance found with the specified identifier.
          </CardContent>
        </Card>
      </div>
    );
  }

  const todos = [
    { id: 1, text: "Write technical docs", completed: false },
    { id: 2, text: "Review pull requests", completed: false },
    { id: 3, text: "Update dependencies", completed: true },
    { id: 4, text: "Deploy to production", completed: false },
  ];

  const [tasks, setTasks] = useState(todos);

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const InstanceCard = ({ instance }) => (
    <Card className="w-full bg-white">
      <CardContent className="grid md:grid-cols-2 gap-8 p-6">
        {/* Left Column - Server Details */}
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">{instance.name}</h2>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  instance.status === "running"
                    ? "bg-green-100 text-green-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {instance.status}
              </span>
            </div>

            <p className="text-gray-600">{instance.description}</p>
            <div className="flex w-[80%] justify-between">
              <a
                href={instance.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-secondary py-1 px-2 rounded-md border-secondary shadow-sm shadow-orange-300 hover:text-blue-800"
              >
                <Link size={20} />
                <span className="">{instance.url}</span>
              </a>
              <a
                href={instance.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-grey hover:text-blue-800"
              >
                <Github size={20} />
                <span>View on GitHub</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Specifications</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <Cpu className="text-gray-400" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">CPU</p>
                    <p className="font-medium">{instance.specs.cpu}</p>
                  </div>
                </div>
                {/* CPU Blocks */}
                <div className="flex gap-1 mt-2">
                  {[...Array(8)].map((_, index) => (
                    <div
                      key={index}
                      className={`h-4 w-4 rounded ${
                        index < (50 / 100) * 8 ? "bg-blue-500" : "bg-gray-200"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <Database className="text-gray-400" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Memory</p>
                    <p className="font-medium">{instance.specs.memory}</p>
                  </div>
                </div>
                {/* Memory Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                  <div
                    className="bg-green-500 h-2.5 rounded-full transition-all duration-300"
                    style={{
                      width: `${(2 / 4) * 100}%`,
                    }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {35}GB / {100}GB
                </p>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-gray-400" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">{instance.specs.location}</p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <HardDrive className="text-gray-400" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Storage</p>
                    <p className="font-medium">{instance.specs.storage}</p>
                  </div>
                </div>
                {/* Storage Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                  <div
                    className="bg-blue-500 h-2.5 rounded-full transition-all duration-300"
                    style={{
                      width: `${(75 / 100) * 100}%`,
                    }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {75}GB / {100}GB
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {instance.specs.techstacks.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Meeting Details */}
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-semibold">Meeting Details</h3>
            <div className="flex flex-col w-[100%] justify-between">
              <div className="relative w-[400px] h-[200px] mr-[100px] rounded-lg overflow-hidden bg-gray-100">
                <div className="">
                  <iframe
                    src={`https://drive.google.com/file/d/${instance.meet.videoId}/preview`}
                    allow="autoplay"
                    className="absolute top-0 left-0 w-[100%] h-[100%] object-fill border-0"
                  ></iframe>
                </div>
              </div>
              <div className="flex mt-2 items-center">
                <div className="mr-[75px]">
                  <p className="text-sm text-gray-500 mb-1">Title</p>
                  <p className="font-medium">{instance.meet.title}</p>
                </div>

                <div className="mr-[75px]">
                  <p className="text-sm text-gray-500 mb-1">Meeting Link</p>
                  <a
                    href={instance.meet.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    {instance.meet.link}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Participants</p>
                  <div className="flex -space-x-2">
                    {instance.meet.members.map((member, index) => (
                      <div key={index} className="relative" title={member.name}>
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-[50px] h-[50px] rounded-full border-2 border-white"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-gray-400" size={20} />
              <div>
                <p className="text-sm text-gray-500">Created</p>
                <p className="font-medium">{instance.meet.date}</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <a
                href="#_"
                class="box-border relative z-30 h-[50px] mt-10 my-auto items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-orange-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-orange-300 ring-offset-orange-200 hover:ring-offset-orange-500 ease focus:outline-none"
              >
                <span class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span class="relative z-20 flex items-center text-sm">
                  <svg
                    class="relative w-5 h-5 mr-2 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                  Technical Documentation
                </span>
              </a>

              {/*TASK ALLOTEMENT*/}
              <div>
                <div className="flex">
                  <h3 className="text-md font-bold font-primary text-center text-primary mr-[10px]">
                    Task Allotement
                  </h3>
                  <a href="#" className="text-primary ">
                    <ExternalLink size={20} />
                  </a>
                </div>
                <div className="w-[300px] h-[80px]  bg-background rounded-lg shadow-lg overflow-y-auto border border-grey-200">
                  <div className="p-4">
                    <div className="space-y-3">
                      {tasks.map((todo) => (
                        <div
                          key={todo.id}
                          className="flex items-center space-x-3 group"
                        >
                          <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTask(todo.id)}
                            className="w-4 h-4 text-primary rounded border-grey-300 focus:ring-primary cursor-pointer"
                          />
                          <span
                            className={`font-primary text-sm ${
                              todo.completed
                                ? "text-grey-400 line-through"
                                : "text-grey-700"
                            } group-hover:text-grey-900 transition-colors duration-150`}
                          >
                            {todo.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <div className="space-y-8">
          {filteredInstances.map((instance, index) => (
            <InstanceCard key={instance.slug} instance={instance} />
          ))}
        </div>
      </div>
    </>
  );
};

export default InstancePage;
