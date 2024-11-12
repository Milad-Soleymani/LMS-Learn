import { Label } from "@radix-ui/react-label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select";

function FormControls({ formControls = [], formData, setFormData }) {
    function renderComponentByType(getControlItem) {
        let element = null;
        switch (getControlItem.componentType) {

            case 'input':
                element = <input
                    id={getControlItem.name}
                    name={getControlItem.name}
                    placeholder={getControlItem.placeholder}
                    type={getControlItem.type}
                />
                break;


            case 'select':
                element = <Select>
                    <SelectTrigger>
                        <SelectValue placeholder={getControlItem.label} />
                    </SelectTrigger>
                    <SelectContent>
                        {
                            getControlItem.options && getControlItem.options.lentgh > 0 ?
                            getControlItem.options.map(optionItem => <SelectItem key={optionItem.id} value={optionItem.id}> { optionItem.label } </SelectItem>) : null
                        }
                    </SelectContent>
                </Select>
                break;

            case 'textarea':
                element = <textarea 
                id={getControlItem.name}
                name={getControlItem.name}
                placeholder={getControlItem.placeholder}
                ></textarea>
                break;

            default:
                element = <input 
                id={getControlItem.name}
                name={getControlItem.name}
                placeholder={getControlItem.placeholder}
                />
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
