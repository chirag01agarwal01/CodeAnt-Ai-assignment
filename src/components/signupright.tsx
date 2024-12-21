import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import gitlab from "../assets/gitlab.svg";
import logo2 from "../assets/logo2.svg";
import azure from "../assets/azure.svg";
import bitbucket from "../assets/bitbucket.svg";
import github from "../assets/github.svg";
import sso from "../assets/sso.svg";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// Define the authentication providers data
const saasAuthProviders = [
    {
        name: "Github",
        text: "Sign in with Github",
        icon: <img src={github} alt="Github" />,
       },
    {
        name: "Bitbucket",
        text: "Sign in with Bitbucket",
        icon: <img src={bitbucket} alt="Bitbucket" />,
    },
    {
        name: "Azure Devops",
        text: "Sign in with Azure Devops",
        icon: <img src={azure} alt="Azure Devops" />,
    },
    {
        name: "GitLab",
        text: "Sign in with GitLab",
        icon: <img src={gitlab} alt="GitLab" />,
    },
];
const selfAuthProviders = [
    {
        name: "SSO",
        text: "Sign in with SSO",
        icon: <img src={sso} alt="SSO" />,
    },
    {
        name: "GitLab",
        text: "Self Hosted GitLab",
        icon: <img src={gitlab} alt="GitLab" className="w-8 h-8" />,
    }
];
export default function Signupright() {
    const [list, setList] = useState<any[]>([]);
    useEffect(() => {
        setList(saasAuthProviders);
    },[]);
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center gap-8 bg-[#fafafa] px-8 py-12">
            <Card className="w-full h-full">
                <CardHeader className="flex flex-col items-center gap-9 border-b border-[#d5d6d9] p-9">
                    <div className="flex items-center gap-3.5">
                        <img src={logo2} alt="CodeAnt" className="w-8 h-8 rounded-full" />
                        <span className="text-3xl font-normal">CodeAnt AI</span>
                    </div>

                    <h1 className="text-3xl font-semibold">Welcome to CodeAnt AI</h1>

                    <ToggleGroup
                        type="single"
                        defaultValue="saas"
                        className="w-full bg-neutral-50 rounded-md border border-[#e9e9eb] ">
                        <ToggleGroupItem
                            value="saas"
                            className="flex-1 data-[state=on]:bg-[#156fee] data-[state=on]:text-white rounded-lg py-4"
                            onClick={() => {
                                setList(saasAuthProviders);
                            }}>
                            SAAS
                        </ToggleGroupItem>
                        <ToggleGroupItem
                            value="self-hosted"
                            className="flex-1 data-[state=on]:bg-[#156fee] data-[state=on]:text-white rounded-lg py-4"
                            onClick={() => {
                                setList(selfAuthProviders);
                            }}>
                            Self Hosted
                        </ToggleGroupItem>
                    </ToggleGroup>
                </CardHeader>

                <CardContent className="p-6">
                    <div className="flex flex-col gap-4 max-w-[448px] mx-auto">
                        {list.map((provider) => (
                            <Button
                                key={provider.name}
                                variant="outline"
                                className="w-full py-6 flex gap-4 font-semibold"
                                onClick={() => {navigate("/dashboard")}}>
                                {provider.icon}
                                {provider.text}
                            </Button>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <p className="text-base text-center">
                By signing up you agree to the{" "}
                <a href="privacy-policy" className="font-bold">Privacy Policy</a>
            </p>
        </div>
    );
}
