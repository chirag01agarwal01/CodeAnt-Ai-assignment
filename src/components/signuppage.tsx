
import Signupleft from "./signupleft";

import Signupright from "./signupright";

export default function SignUpPage() {
    return (
        <main className="lg:grid lg:grid-cols-2   min-h-screen w-full">
            {/* Left Section */}
            
            <Signupleft />
            

            {/* Right Section */}
            <Signupright/>
        </main>
    );
}
