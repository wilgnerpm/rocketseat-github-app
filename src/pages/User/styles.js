import styled from 'styled-components/native';

export const Container = styled.View`
flex:1;
padding:13px;
`;
export const Hearder = styled.View`
align-items:center;
padding-bottom:20px;
border-color:#eee;

`;
export const Avatar = styled.Image`
width:64px;
height:64px;
border-radius:32px;
background:#333;
`;
export const Name = styled.Text`
font-size:20px;
color:#333;
font-weight:bold;
margin-top:10px;
text-align:center;

`;
export const Bio = styled.Text`
font-size:14px;
color:#999;
line-height:18px;
margin-top:5px;
text-align:center;
`;
export const Stars = styled.FlatList.attrs({
  showVerticalScrollIndicator: false
})`

margin-top:20px;
`
export const Starred = styled.View`
background:#f5f5f5;
border-radius: 4px;
padding:10px 15px;
margin-bottom:20px;
flex-direction:row;
align-items:center;
`
export const OwnerAvatar = styled.Image`
width:42;
height:42px;
border-radius:21px;
background:#eee
`
export const Info = styled.View`
margin-left:10px;
flex:1;
`
export const Title = styled.Text`
font-size:15px;
font-weight:bold;
color:#333;
`
export const Author = styled.Text`
font-size:13px;
color:#666`
