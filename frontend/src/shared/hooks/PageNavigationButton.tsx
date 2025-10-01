import { useNavigate } from "react-router";


// Reusable hook for page navigation, use this whenever you
// want to redirect to a new page
// to call it, import it first as a constant then call it in the html code
// for example, a button that redirects to /signup page
// 1. const goToSignUp = usePageNavigation();
// Then in the button html
// 2. onClick={() => goToSignUp("signup")}
export function usePageNavigation() {
    const navigate = useNavigate(); 

    // This is logic for actually navigating
    return (url: string) => {
        navigate(`/${url}`)
    };
}