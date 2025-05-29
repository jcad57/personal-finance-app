import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Image from "next/image";
import ellipsisIcon from "../../../public/assets/images/icon-ellipsis.svg";
interface DropDownProps {
    editLabel?: string;
    deleteLabel?: string;
    onEditClick?: () => void;
    onDeleteClick?: () => void;
}

const DropDown = ({ editLabel, deleteLabel, onEditClick, onDeleteClick }: DropDownProps) => {
    return (
        <Menu>
            <MenuButton>
                <Image src={ellipsisIcon} width={16} height={16} alt="" />
            </MenuButton>

            <MenuItems
                anchor="bottom end"
                transition
                className="flex flex-col select-none px-[var(--spacing-md)] rounded-[var(--spacing-xxs)] border-1 border-[var(--beige-500)] bg-[var(--white)] text-left text-[var(--grey-900)] mt-[var(--spacing-xxxs)] opacity-100 transition duration-100 ease-in data-leave:data-closed:opacity-0 focus:border-[var(--grey-900)] focus:outline-none">
                <MenuItem>
                    <div
                        className="data-selected:font-bold border-[var(--grey-100)] not-first:border-y-[1px] py-[var(--spacing-xs)] cursor-pointer"
                        onClick={onEditClick}>
                        {editLabel ? editLabel : "Edit"}
                    </div>
                </MenuItem>
                <MenuItem>
                    <div
                        className="data-selected:font-bold border-[var(--grey-100)] not-first:border-y-[1px] py-[var(--spacing-xs)] cursor-pointer text-[var(--red)]"
                        onClick={onDeleteClick}>
                        {deleteLabel ? deleteLabel : "Delete"}
                    </div>
                </MenuItem>
            </MenuItems>
        </Menu>
    );
};

export default DropDown;
