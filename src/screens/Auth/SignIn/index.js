import { View, Text } from 'react-native'
import React from 'react'
import { ComponentWrapper, MainWrapper } from '../../../components/wrappers'
import { MediumText } from '../../../components/text'
import { ButtonColored } from '../../../components/buttons'
import { SCREEN } from '../../../constants'
const SignIn = ({ navigation }) => {
    const { replace } = navigation
    return (
        <MainWrapper>
            <ComponentWrapper>

                <MediumText>Login</MediumText>
                <ButtonColored text='Login' onPress={() => replace(SCREEN.appStack)} />
            </ComponentWrapper>
        </MainWrapper>
    )
}

export default SignIn