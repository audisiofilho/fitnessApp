import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #132743;
  align-items: center;
`;
export const AreaLogin = styled.SafeAreaView`
  width: 90%;
  height: 400px;
  margin: 10px;
  background-color: #ffffff;
  position: absolute;
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