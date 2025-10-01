// basically declaring the types here so the function is cleaner
type InputProps = {
    label: string; // declare more types...
}

// This is a reusable component that creates the user input fields
// It allows you to input the form name, the label appearing above the input field
// to use this component import it like "<SignUpInputForm label="username" />"
const SignUpInputForm = ({label /*add more dependencies, comma seperated */ }: InputProps) => {
    return (
        <main className="mb-4 bg-white">
            <label>
                {label}
            </label>
            <input
                type="text"
                placeholder="" // what they see when no text is inputted
                className="" // styling
            />
        </main>
    )
}

export default SignUpInputForm