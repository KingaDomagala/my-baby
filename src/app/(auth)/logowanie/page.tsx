import GeneralContainer from "@/components/GeneralContainer";
import AuthTop from "@/components/Auth/AuthTop";
import SignInForm from "@/components/Auth/SignInForm";
import AuthDecorations from "@/components/Auth/AuthDecorations";

const SignInPage = () => {
    return (
        <GeneralContainer image="/images/login.png" alt="Zaloguj się i zacznij tworzyć dziennik" containerClassName="bg-white" decorations={<AuthDecorations />}>
            <AuthTop 
            title={<>Zaloguj się<br className="sm:hidden"/> i <span className='text-secondary font-secondary'>zacznij</span> teraz <br className="sm:hidden"/>tworzyć dziennik</>}
            description="Wróć do zapisanych wspomnień lub dodaj nowe chwile. Twoja historia czeka, by ją kontynuować." 
            /> 
            <SignInForm />
        </GeneralContainer>
    );
};

export default SignInPage;