import * as C from '@chakra-ui/react';
import {CheckIcon, CloseIcon,EditIcon} from '@chakra-ui/icons';
import {useEditableControls} from '@chakra-ui/react';

export default function CustomControlsExample() {
    /* Here's a custom control */
    function EditableControls() {
      const {
        isEditing,
        getSubmitButtonProps,
        getCancelButtonProps,
        getEditButtonProps,
      } = useEditableControls();
  
      return isEditing ? (
        <C.ButtonGroup justifyContent='center' size='sm'>
          <C.IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
          <C.IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
        </C.ButtonGroup>
      ) : (
        <C.Flex justifyContent='center'>
          <C.IconButton size='sm' icon={<EditIcon />} {...getEditButtonProps()} />
        </C.Flex>
      )
    }
  
    return (
      <C.Editable
        textAlign='center'
        defaultValue='Rasengan ⚡️'
        fontSize='2xl'
        isPreviewFocusable={false}
      >
        <C.EditablePreview />
        {/* Here is the custom input */}
        <C.EditableTextarea as={C.EditableInput} />
        <EditableControls />
      </C.Editable>
    )
  }