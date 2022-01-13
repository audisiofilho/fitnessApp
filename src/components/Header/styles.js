import styled from 'styled-components';

export const Container = styled.SafeAreaView`
    justify-content: space-between;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px;
    background-color: #de1414;
    margin-bottom: 15px;
    width: 100%;
    height: 60px;
`;

export const ButtonMenu = styled.TouchableWithoutFeedback`
    justify-content: center;
    align-items: center;
`;

export const ContainerLogo = styled.View`
align-items: center;
flex-direction: row;
justify-content: space-between;
`;
export const Logo = styled.Image`
width: 40px;
height: 40px;
margin-right: 10px;
`;
export const Title = styled.Text`
color: #FFF;
font-size: 35px;
`;