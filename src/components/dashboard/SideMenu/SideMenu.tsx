import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

interface ISideMenuProps {}

const SideMenu: React.FunctionComponent<ISideMenuProps> = (props) => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (event: any) => {
    debugger;
    const selectedFile = event.target.files && event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const fileMetadata = {
        name: selectedFile.name,
        size: selectedFile.size,
        type: selectedFile.type,
        data: fileReader.result,
      };
      console.log("File metadata: ", fileMetadata);
      // Make an API call to upload the file using the metadata
    };

    if (selectedFile) {
      setFile(selectedFile);
      fileReader.readAsDataURL(selectedFile);
    } else {
      console.log("No file Found");
    }
  };
  return (
    <Menu colorScheme="twitter">
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        New
      </MenuButton>
      <MenuList color="twitter.100">
        <MenuItem>
          <label htmlFor="file-upload">Choose file</label>
          <input
            type="file"
            id="file-upload"
            onChange={handleFileUpload}
            style={{ display: "none" }}
          />
        </MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SideMenu;
