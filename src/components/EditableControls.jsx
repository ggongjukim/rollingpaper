import * as C from '@chakra-ui/react';
import {CheckIcon,CloseIcon,EditIcon,DeleteIcon} from '@chakra-ui/icons';
import { useEditableControls } from '@chakra-ui/react';

export default function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();
  
    return isEditing ? (
      <C.ButtonGroup justifyContent='center' size='sm'>
        <C.IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
        <C.IconButton icon={<DeleteIcon />} />
        <C.IconButton size='sm' icon={<EditIcon />} {...getEditButtonProps()} />

      </C.ButtonGroup>
    ) : (
      <C.Flex justifyContent='center'>
        <C.IconButton size='sm' icon={<EditIcon />} {...getEditButtonProps()} />
      </C.Flex>
    )
  }