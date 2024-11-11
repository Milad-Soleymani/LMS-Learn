import { Button } from "../ui/button";

function CommonForm({handleSubmit, buttonText}) {
    
    return(
        <form onSubmit={handleSubmit}>
            {/* render from controls here */}
            <Button type='Submit'>{buttonText || Submit}</Button>
            </form>
    )
}

export default CommonForm;