import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./src/navigation/index";
import { customTheme } from "./src/theme/CustomTheme";

import { ItemsContext } from "./src/utils/ItemsContext";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [items, setItems] = useState([]);
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ItemsContext.Provider
        //@ts-ignore
        value={{ items: items, setItems: setItems, retaurant: false }}
      >
        <NativeBaseProvider theme={customTheme}>
          <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </SafeAreaProvider>
        </NativeBaseProvider>
      </ItemsContext.Provider>
    );
  }
}
