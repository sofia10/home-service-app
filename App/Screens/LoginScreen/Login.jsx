import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import styles from './LoginStyles';
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from '@clerk/clerk-expo';
import { useWarmUpBrowser } from '../../hooks/useWarmUpBrowser';

WebBrowser.maybeCompleteAuthSession();

const Login = () => {
    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

    const onPress = React.useCallback(async () => {
        try {
          const { createdSessionId, signIn, signUp, setActive } =
            await startOAuthFlow();
    
          if (createdSessionId) {
            setActive({ session: createdSessionId });
          } else {
            // Use signIn or signUp for next steps such as MFA
          }
        } catch (err) {
          console.error("OAuth error", err);
        }
    }, []);

  return (
    <View style={{alignItems: 'center'}}>
      <Image source={require('../../../assets/images/login.png')}
        style={styles.loginImage}
      />
      <View style={styles.subContainer}>
        <Text style={styles.title}>Let's Find 
            <Text style={styles.titleBold}> Professional Cleaning And Repair </Text> Service
        </Text>
        <Text style={styles.subtitle}>Best App to find services near you which deliver you a Professional service</Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login