import styled from 'styled-components/native';

console.disableYellowBox;

export const Container = styled.View`
flex: 1;
background: #F2F2F2;
`;

export const Titulo = styled.Text`
font-size: 18px;
font-weight: bold;
color: #000;

`;

export const Texto = styled.Text`
font-size: 17px;
`;

export const Header = styled.View`
border-bottom-width: 0.2px;
width: 100%;
align-items: center;
justify-content: space-around;
flex-direction: row;
padding-bottom: 10px;
height: 50px;
padding-top: 10px;
`;

export const Componente = styled.View`
flex: 1;
align-items: center;
justify-content: center;
`;




export const ViewImagem = styled.View`
background: #fff;
height: 50px;
margin: 10px;
align-items: center;
justify-content: center;
width: 50px;
border-radius: 10px;
`;

export const Imagem = styled.Image`
width: 40px;
height:40px;
`;

export const Card = styled.View`
width: 360px;
height: 120px;
border-radius:10px;
box-shadow: 1px 1px 3px rgba(0,18,18, 0.2);
elevation: 3;
background: #D8D8D8;
flex-direction: row;
align-items: center;
justify-content: space-around;
margin: 10px;
`;

export const ViewAlinhandoImg = styled.View`
align-items: center;
justify-content: center;
flex-direction: row;
`;


export const Copy = styled.Text`
font-size: 14px;
margin: 10px;
`;

export const TextoProgresso = styled.Text`
font-size: 17px;
margin-left: 15px;
margin-top: 10px;

`;
//# 48D1CC