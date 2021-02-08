import * as React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import {
  Box,
  Button,
  Column,
  Icon,
  Image,
  Path,
  Row,
  Text,
  VStack,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { ItemsContext } from "../utils/ItemsContext";

export default function BottomBarCart() {
  let navigation = useNavigation();
  const items: any = React.useContext(ItemsContext);
  return <Box>dtfyguhij</Box>;
}
