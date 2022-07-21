import React from 'react';
import RootStack from './navigators/Drawer';
import 'react-native-gesture-handler';
import { ActivityIndicator } from "react-native";
//font 
import { useFonts } from 'expo-font';
import { I18nextProvider, useTranslation } from "react-i18next";
import { Provider } from "react-redux"
import {store} from "./store/store"
import { RootSiblingParent } from 'react-native-root-siblings';

import {initReactI18next} from 'react-i18next';
import i18n from 'i18next';
import en from "./lang/en.json"
import ru from "./lang/ru.json"

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: "en",
    resources: {
      en: en,
      ru: ru,
    },
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
      },
    keySeparator: '.'
});

export default function App() {
  const {t, i18n} = useTranslation();
  let [fontsLoaded] = useFonts({ 
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator color={"#fff"} />;
  }



  return (
    <RootSiblingParent>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
      <RootStack /> 
      </I18nextProvider>
      
    </Provider>
    </RootSiblingParent>

  );
}

