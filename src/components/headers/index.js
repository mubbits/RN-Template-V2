import React from 'react'
import { StyleSheet, TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TinyTitle } from '../text';
import { Wrapper } from '../wrappers';
import { height, width, totalSize } from 'react-native-dimension'
import { colors, fontFamily } from '../../constants';
import { Icon } from 'react-native-elements';


export const MainHeader = ({ title }) => {
    const navigation = useNavigation();
    return (
        <Wrapper style={styles.main_view}>
            <TouchableOpacity onPress={() => navigation.goBack()} >
                <Icon name='arrow-back' type='ionicon' size={22} color={colors.appIcon4} />
            </TouchableOpacity>
            <TinyTitle style={styles.pageName}>{title}</TinyTitle>
        </Wrapper>
    );
};



export const styles = StyleSheet.create({

    title: {
        color: colors.appTextColor5,
        fontFamily: fontFamily.appTextMedium,
        fontSize: totalSize(2.1)
    },
    main_view: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: height(3),
        marginHorizontal: width(4),
    },
    pageName: {
        color: colors.appTextColor1,
        fontFamily: fontFamily.appTextMedium,
        fontSize: totalSize(2.1),
        alignSelf: 'center',
    },

})