import { Card, CardContent } from "@/components/ui/card";
import logo from "../assets/logo.svg";
import logo2 from "../assets/logo2.svg";

const stats = [
    { label: "Language Support", value: "30+" },
    { label: "Developers", value: "10K+" },
    { label: "Hours Saved", value: "100K+" },
];
export default function Signupleft(){
    return(
        <div className=" relative hidden lg:block flex-1 p-8 bg-background flex flex-col">
            <div className="absolute w-[474px] h-[322px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className=" w-[447] h-[170px] mr-[27px]">
                    <Card className="h-full w-full shadow-3xl rounded-[24px] border-0">
                        <CardContent className="p-0 divide-y-2">
                            <div className="p-[22px] flex items-center gap-2">
                                <img src={logo2} alt="CodeAnt" className="w-8 h-8 rounded-full" />
                                <span className="font-bold">
                                    AI to Detect & Autofix Bad Code
                                </span>
                            </div>

                            <div className="pt-[22px] px-[20px] grid grid-cols-3 gap-4">
                                {stats.map((stat) => (
                                    <div key={stat.label} className="text-center">
                                        <div className="font-bold">{stat.value}</div>
                                        <div className="text-sm text-[#171717] font-medium ">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="w-[270px] h-[164px] z-10 absolute bottom-0 right-0">
                    <Card className="h-full w-full rounded-[24px] shadow-3xl border-0">
                        <CardContent className="p-4 space-y-2">
                            <div className="flex items-center justify-between gap-2 px-4">
                                <svg className="w-14 h-14 rounded-full " viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="28.8333" cy="28.5885" rx="28" ry="28.3832" fill="#9D90FA" fill-opacity="0.25"/><path d="M38.4336 27.755H28.6555V17.843C28.6555 17.7211 28.5571 17.6213 28.4368 17.6213H27.7258C26.2911 17.6198 24.8701 17.9055 23.5445 18.462C22.219 19.0185 21.0148 19.8349 20.0012 20.8643C19.0033 21.8728 18.2083 23.0683 17.6606 24.3844C17.0918 25.7509 16.802 27.2006 16.802 28.6974C16.802 30.1941 17.0918 31.641 17.6606 33.0075C18.2102 34.3241 18.9977 35.5104 20.0012 36.5277C21.0047 37.5449 22.1723 38.3432 23.4739 38.9003C24.8196 39.4791 26.2668 39.776 27.7286 39.7735C29.1633 39.7749 30.5843 39.4892 31.9099 38.9327C33.2354 38.3762 34.4396 37.5598 35.4532 36.5305C36.4567 35.5132 37.2442 34.3297 37.7938 33.0103C38.3647 31.6462 38.6577 30.1792 38.6551 28.6974V27.9767C38.6524 27.8547 38.554 27.755 38.4336 27.755ZM40.8372 26.2166L40.7661 25.435C40.5336 22.8849 39.418 20.479 37.6188 18.6635C35.8213 16.8428 33.4525 15.7163 30.9223 15.4787L30.1485 15.4066C30.02 15.3955 29.9106 15.4953 29.9106 15.6256V26.261C29.9106 26.3829 30.009 26.4827 30.1293 26.4827L40.6184 26.455C40.7469 26.4522 40.8481 26.3441 40.8372 26.2166Z" fill="#9D90FA"/></svg>
                                <div className="flex flex-col gap-1">
                                    <div className="text-base gap-2 font-extrabold text-blue-700 flex items-center gap-1">
                                        <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.83325 5.65698L5.83325 1.65698L9.83325 5.65698" stroke="#0049C6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.83325 1.65698L5.83325 11.9861" stroke="#0049C6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>

                                        14%
                                    </div>
                                    <div className="text-sm font-custom">This week</div>
                                </div>
                            </div>
                            <div className="pl-4">
                                <div className="text-lg font-cutom font-bold">
                                    Issues Fixed
                                </div>
                                <div className="font-bold text-4xl font-cutom">500K+</div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <img src={logo} alt="CodeAnt" className="absolute bottom-0 left-0 w-48 h-48" />

        </div>
    );
}