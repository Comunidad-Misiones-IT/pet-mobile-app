import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 8
    },
    field: {
        width: '100%',
        height: 44,
        borderRadius: 8,
        borderColor: 'transparent',
        paddingHorizontal: 8,
        paddingVertical: 4,
        color: '#0d0c22',
        backgroundColor: colors.lightGrey,
        // '&.error': {
        //     borderColor: colors.red
        // }
    },
    errorText: {
        color: colors.red
    }
});

export { styles };