import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
background-color: #fff;
`;

export const ViewNomePostos = styled.View`
    align-items: center;
    justify-content: center;
    border-bottom-width: 0.50;
    margin: 10px;
`;

export const ViewImg = styled.View`
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const ViewValores = styled.View`
    flex-direction: row;
    justify-content: space-around;
`;

export const ViewArea = styled.View`
    width: 150px;
    height: 105px;
    border-radius: 5;
    border-width:1;
    margin: 10px;
    padding-top: 10px;
    align-items: center;
    justify-content: center;
`;

export const NomeDoPosto = styled.Text`
    padding-top: 10;
    font-size: 18;
    font-weight: bold;
`;

export const Texto = styled.Text`
font-size: 15;
`;

export const Valor = styled.Text`
    font-size: 16;
    font-weight: bold;
`;

export const ViewLista = styled.View`
  width: 100%;
`;