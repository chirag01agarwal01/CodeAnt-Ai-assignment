import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Database, Plus, RefreshCw, Search } from "lucide-react";

const repositories = [
  {
    name: "design-system",
    isPublic: true,
    language: "React",
    size: "7320 KB",
    updatedAt: "Updated 1 day ago",
  },
  {
    name: "codeant-ci-app",
    isPublic: false,
    language: "Javascript",
    size: "5871 KB",
    updatedAt: "Updated 2 days ago",
  },
  {
    name: "analytics-dashboard",
    isPublic: false,
    language: "Python",
    size: "4521 KB",
    updatedAt: "Updated 5 days ago",
  },
  {
    name: "mobile-app",
    isPublic: true,
    language: "Swift",
    size: "3096 KB",
    updatedAt: "Updated 3 days ago",
  },
  {
    name: "e-commerce-platform",
    isPublic: false,
    language: "Java",
    size: "6210 KB",
    updatedAt: "Updated 6 days ago",
  },
  {
    name: "blog-website",
    isPublic: true,
    language: "HTML/CSS",
    size: "1876 KB",
    updatedAt: "Updated 4 days ago",
  },
  {
    name: "social-network",
    isPublic: false,
    language: "PHP",
    size: "5432 KB",
    updatedAt: "Updated 7 days ago",
  },
];

export default function Repositories() {
  return (
    <div className="flex flex-col h-full w-full md:p-6 bg-neutral-50">
      <Card className="flex-1 rounded-none md:rounded-lg overflow-hidden">
        <header className="border-b border-[#e9e9eb]">
          <div className="flex flex-col gap-4 px-6 pt-4 pb-8">
            <div className="flex flex-col gap-4 md:flex-row items-left md:justify-between">
              <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-semibold text-[#181d27]">
                  Repositories
                </h1>
                <p className="text-sm text-[#414651]">33 total repositories</p>
              </div>

              <div className="flex items-center gap-3">
                <Button variant="outline" className="gap-2 text-[#414651]">
                  <RefreshCw className="w-5 h-5" />
                  Refresh All
                </Button>
                <Button
                      className="bg-[#156fee] hover:bg-[#156fee]/90 text-white gap-2"
                      size="default"
                    >
                      <Plus className="h-5 w-5" />
                      Add Repository
                </Button>
              </div>
            </div>

            <div className="relative w-[366px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <Input
                className="pl-10 py-2.5"
                placeholder="Search Repositories"
              />
            </div>
          </div>
        </header>

        <div className="flex-1">
          {repositories.map((repo) => (
            <div
              key={repo.name}
              className={"pt-2 md:pt-4 border-b border-[#d5d6d9] hover:bg-[#f5f5f5]"}
            >
              <CardContent className="flex flex-col ">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-medium text-[#181d27]">
                    {repo.name}
                  </h2>
                  <Badge
                    variant="secondary"
                    className={`rounded-full px-3  ${
                      repo.isPublic
                        ? "bg-[#eff8ff] text-[#175cd3] border-[#b2ddff]"
                        : "bg-[#eff8ff] text-[#175cd3] border-[#b2ddff]"
                    }`}
                  >
                    {repo.isPublic ? "Public" : "Private"}
                  </Badge>
                </div>

                <div className="flex items-center pt-1 md:pt-3 gap-6 sm:gap-6 md:gap-10">
                  <div className="flex items-center gap-2">
                    <span className="text-base text-[#181d27]">
                      {repo.language}
                    </span>
                    <div className="w-2 h-2 bg-[#156fee] rounded-full" />
                  </div>

                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-[#181d27]" />
                    <span className="text-base text-[#181d27]">
                      {repo.size}
                    </span>
                  </div>

                  <span className="text-base text-[#181d27]">
                    {repo.updatedAt}
                  </span>
                </div>
              </CardContent>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
