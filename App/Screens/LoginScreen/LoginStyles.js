import { StyleSheet } from "react-native";
import Colors from "../../Utils/Colors";

export default styles = StyleSheet.create({
    loginImage: {
        width: 230,
        height: 480,
        marginTop: 70,
        borderWidth: 4,
        borderColor: Colors.BLACK,
        borderRadius: 15
    },
    subContainer: {
        backgroundColor: Colors.PRIMARY,
        width: '100%',
        height: '70%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: -35,
        padding: 15,
        paddingTop: 20,
        textAlign: 'center'
    },
    title: {
        fontSize: 27,
        color: Colors.WHITE,
        textAlign: 'center'
    },
    titleBold: {
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 17,
        color: Colors.WHITE,
        textAlign: 'center',
        marginTop: 20
    },
    button: {
        marginTop: 40,
        backgroundColor: Colors.WHITE,
        padding: 20,
        borderRadius: '50%',
    },
    buttonText: {
        fontSize: 17,
        textAlign: 'center',
        color: Colors.PRIMARY
    },
})
