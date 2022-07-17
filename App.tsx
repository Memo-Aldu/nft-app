import React from 'react';
import WelcomeScreen  from './screens/WelcomeScreen';
import styled from 'styled-components/native';
import RootStack from './navigators/Drawer';
import 'react-native-gesture-handler';
//font 
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { I18nextProvider, useTranslation } from "react-i18next";

import {initReactI18next} from 'react-i18next';
import i18n from 'i18next';
import { Localization } from "expo-Localization";
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
    return <AppLoading />;
  }

  return (
    
    <I18nextProvider i18n={i18n}>
     <RootStack /> 
    </I18nextProvider>

  );
}

