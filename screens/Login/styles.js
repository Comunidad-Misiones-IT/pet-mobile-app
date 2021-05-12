import { StyleSheet } from "react-native";
import { colors } from "../../core/theme/colors";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: colors.bgColor,
        height: '100%',
        paddingTop: 80,
        paddingHorizontal: 20,
        paddingBottom: 40
    },
    title: {
        fontSize: 28,
        lineHeight: 32,
        color: colors.lightGrey,
        textAlign: 'center'
    },
    form: {
        marginTop: 24
    },
    social: {
        marginTop: 20
        // > * {
        //     margin- top: 16px;
        // }
        // display: block;
    },
    loginGoogle: {
        // marginTop: 12,
        justifyContent: 'center'
    },
    loginGoogleText: {
        textAlign: 'center',
        color: colors.dark,
        fontSize: 16,
        backgroundColor: 'transparent'
    },
    loginFacebook: {
        backgroundColor: '#3b5998',
        // marginTop: 12,
        justifyContent: 'center'
    }
});

export { styles };