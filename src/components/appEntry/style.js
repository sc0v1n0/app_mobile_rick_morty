import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../styles'; 

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.greenPortalThree,
        shadowColor: colors.blueMorty,
        margin: 12,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        borderRadius: 30,
        paddingBottom: 40,
    },
    input:{
        padding: 20,
        margin:10,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: colors.whiteRick,               
        
    },
    text:{
        fontSize: fonts.medium,
        color: colors.whiteRick,
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
        margin: 10,
    },
    textLabel:{
        paddingLeft: 10,
    },
    textForgot:{
        alignSelf: 'flex-end',
        paddingRight: 20,
    },
    buttonStyle:{
        alignSelf: "center",
        padding: 8,
        margin: 3,
        backgroundColor: colors.titleRick,
        borderRadius: 10,
        shadowColor: colors.greenPortalThree,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        width: '90%',
    },
    textButton:{
        fontSize: fonts.medium,
        color: colors.whiteRick,
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
    },
    imageRick:{
        width: 270,
        height: 270,
        alignSelf: 'flex-end',
    },
    imageRickCrazy:{
        width: 200,
        height: 200,
        alignSelf: 'flex-start',
    }
    
})

export default styles