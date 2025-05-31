import { Field, Fieldset, Input, Label, Select } from "@headlessui/react";
import PrimaryCard from "../Cards/PrimaryCard";

const AddNewItemModal = ({ title, description }: { title: string; description: string }) => {
    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="add-new-budget"
            className="absolute top-0 left-0 max-w-[560px] h-full bg-black/55 z-100">
            <div className="mx-[var(--spacing-md)]">
                <PrimaryCard title={title}>
                    <div>
                        <p className="text-[var(--grey-500)] text-[length:var(--font-size-sm)]">{description}</p>
                    </div>
                    <Fieldset>
                        <Field>
                            <Label></Label>
                            <Select></Select>
                        </Field>
                        <Field>
                            <Label></Label>
                            <Input></Input>
                        </Field>
                        <Field>
                            <Label></Label>
                            <Select></Select>
                        </Field>
                    </Fieldset>
                </PrimaryCard>
            </div>
        </div>
    );
};

export default AddNewItemModal;
