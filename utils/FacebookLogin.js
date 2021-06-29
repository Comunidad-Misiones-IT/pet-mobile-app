import * as Google from 'expo-google-app-auth';
import * as Facebook from 'expo-facebook';
import { FB_APP_ID, GOOGLE_ANDROID_CLIENT_ID, GOOGLE_IOS_CLIENT_ID } from '../config/constants';

export const fbLogin = async () => {
    try {
        const { token, type } = await Facebook.logInWithReadPermissionsAsync(
            FB_APP_ID,
            { permissions: ['public_profile'] }
        );

        // GET USER DATA FROM FB API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        const user = await response.json();

        // GET PROFILE IMAGE DATA FROM FB API
        // NOTE THAT I SET THE IMAGE WIDTH TO 500 WHICH IS OPTIONAL
        const pictureResponse = await fetch(`https://graph.facebook.com/v8.0/${user.id}/picture?width=500&redirect=false&access_token=${token}`);
        const pictureOBject = await pictureResponse.json();
        const userObject = {
            ...user,
            photoUrl: pictureOBject.data.url,
        };

        return { type, token, user: userObject };
    } catch (e) {
        return { error: e };
    }
};

export const googleLogin = async () => {
    try {
      const { type, accessToken, user } = await Google.logInAsync({
        androidClientId: GOOGLE_ANDROID_CLIENT_ID,
        iosClientId: GOOGLE_IOS_CLIENT_ID,
      });
  
      return { type, token: accessToken, user };
    } catch (e) {
      return { error: e };
    }
  };