import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #132743;
  align-items: center;
`;
export const Ballon = styled.View`
  width: 100%;
  height: 215px;
  background-color: #de1414;
  border-bottom-right-radius: 100px;
  border-bottom-left-radius: 100px;
`;
export const Logo = styled.Image`
  width: 100px;
  height: 80px;
  position: absolute;
`;
export const Title = styled.Text`
  font-size: 75px;
  color: #ffffff;
  top: 60px;
  position: absolute;
`;
export const AreaLogin = styled.View`
  width: 315px;
  height: 460px;
  background-color: #ffffff;
  position: absolute;
  top: 170px;
  align-items: center;
  border-radius: 40px;
`;

export const AreaInput = styled.View`
width: 80%;
align-items: flex-start;
left: -10px;
top: 15px;
`;

export const Label = styled.Text`
left: 12px;
color: #de1414;
font-size: 18px;
`;

export const Input = styled.TextInput`
  border-color: #000000;
  border: 1px;
  width: 100%;
  border-radius: 7px;
  margin: 10px;
  padding: 10px;
  align-items: center;
`;
export const ButtonLogin = styled.TouchableOpacity`
  width: 40%;
  background-color: #de1414;
  margin-top: 60px;
  padding: 10px;
  border-radius: 33px;
  justify-content: center;
  align-items: center;
`;
export const TextButtonLogin = styled.Text`
color: #ffffff;
`;
export const Legend = styled.Text`
color: #000000;
`;
export const Button = styled.TouchableOpacity`
margin: 20px;
`;
export const TextButton = styled.Text`
color: #000000;
`;
