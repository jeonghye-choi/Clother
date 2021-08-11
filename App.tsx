import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/Login';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/navigation';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { setCustomText } from 'react-native-global-props';

const useFonts = async () => {
    await Font.loadAsync({
        Roboto400: require('Fonts/Roboto400.ttf'),
        Roboto500: require('Fonts/Roboto500.ttf'),
        RobotoBold: require('Fonts/RobotoBold.ttf'),
        Pretendard400: require('Fonts/Pretendard400.otf'),
        Pretendard500: require('Fonts/Pretendard500.otf'),
        PretendardBold: require('Fonts/PretendardBold.otf'),
    });
};
export default function App() {
    const [isReady, setIsReady] = useState(false);
    const LoadFonts = async () => {
        await useFonts();
    };
    if (!isReady) {
        const customTextProps = {
            style: {
                fontFamily: 'Pretendard400',
                fontStyle: 'normal',
            },
        };
        setCustomText(customTextProps);
        return (
            <AppLoading
                startAsync={LoadFonts}
                onFinish={() => setIsReady(true)}
                onError={(error) => console.log(error)}
            />
        );
    }
    return (
        <NavigationContainer>
            <ThemeProvider theme={theme}>
                <StatusBar style={'auto'} />
                <SafeAreaView style={{ flex: 1, marginTop: Platform.OS ? 24 : 0 }}>
                    <MyStack />
                </SafeAreaView>
            </ThemeProvider>
        </NavigationContainer>
    );
}
