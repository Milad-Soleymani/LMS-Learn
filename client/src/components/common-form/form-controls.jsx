import { Label } from "@radix-ui/react-label";
import { Select } from "@radix-ui/react-select";

function FormControls({ formControls = [], formData, setFormData }) {
    function renderComponentByType(getControlItem) {
        let element = null;
        switch (getControlItem.componentType) {

            case 'input':
                element = <Input

                />
                break;


            case 'select':
                element = <Select></Select>
                break;

            case 'textarea':
                element = <textarea></textarea>
                break;

            default:
                element = <Input
                break;
        }
    }
    return (
        <div className="flex flex-col gap-3 ">
            {
                formControls.map(controlItem =>
                    <div key={controlItem.name}>
                        <Label htmlFor={controlItem.name}>{controlItem.label}</Label>
                        {
                            renderComponentByType(controlItem)
                        }
                    </div>
                )
            }
        </div>
    )
}

export default FormControls;
