import AuthDecorations from "@/components/Auth/AuthDecorations";
import AuthTop from "@/components/Auth/AuthTop";
import SignUpForm from "@/components/Auth/SignUpForm";
import GeneralContainer from "@/components/GeneralContainer";

const SignUpPage = () => {
    return (
        <GeneralContainer image="/images/register.png" alt="Zarejestruj się i zacznij tworzyć dziennik" containerClassName="bg-white" decorations={<AuthDecorations />}>
            <AuthTop 
            title={<>Zarejestruj się<br className="sm:hidden"/> i <span className='text-secondary font-secondary'>zacznij</span> teraz <br className="sm:hidden"/>tworzyć dziennik</>}
            description="Załóż konto i zapisz pierwsze wspomnienia. To tylko chwila, a historia zostanie na lata." 
            /> 
            <SignUpForm />
        </GeneralContainer>
    );
};

export default SignUpPage;