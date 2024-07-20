import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
    return (
        <div>
            <main className="auth-page">
                <SignUp />
            </main>
        </div>
    );
};

export default SignUpPage;
