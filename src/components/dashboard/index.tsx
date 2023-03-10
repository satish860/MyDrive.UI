import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import SideMenu from "./SideMenu/SideMenu";

interface IDashboardProps {}

const DashBoard: React.FunctionComponent<IDashboardProps> = (props) => {
  return (
    <Grid
      templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
      gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={"150px 1fr"}
      h="100vh"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" bg="orange.300" area={"header"}>
        My Menu Goes Here
      </GridItem>
      <GridItem pl="2"  bg = "whiteAlpha.50" area={"nav"}>
        <SideMenu/>
      </GridItem>
      <GridItem pl="2" bg="green.300" area={"main"}>
        Main
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
};

export default DashBoard;
