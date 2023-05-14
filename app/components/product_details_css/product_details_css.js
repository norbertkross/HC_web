import styled from "styled-components";

export const ProductDetailBackground = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const ProductImageContainer = styled.div`
  width: 35vw;
  height: 100vh;
  /* background-color: black ; */
  color: white;
  background-image: url('/ybls.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; 
  display: flex;
  justify-content:center;
  align-items:flex-end;
  position: relative;
  padding-bottom: 30px;
  @media (max-width:900px){
    width: 100vw;
    height: 35vh;
      padding-bottom: 0px;
  }
`;


export const MoreImages = styled.div`
  position: inline-block ;
  height: 100px;
  width: 35vw;
  display: flex;
  justify-content:center;
  align-items:center;
`;

export const ItemInMoreImagesContainer = styled.div`
 padding: 5px;
 display: flex;
/* background-color:#e2fce1 ; */
 background-color:#fcdede ;
   border-radius: 6px;


`;

export const ItemInMoreImages = styled.div`
  height: 40px;
  width: 40px;
  background: red;
  border:4px solid white;
  border-radius: 10px;
  background-image: url('/ybls.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;  
  margin: 4px; 
  cursor:pointer;
`;


export const ProductDetailRow = styled.div`
display: flex;
@media (max-width:900px){
  flex-direction: column ;
  /* background: #e2fce1; */
}
`;

export const ProductDetailInfoContainer = styled.div`
  width:60vw;
  margin-right: 20px;
  /* height: 100vh; */
  @media (max-width:1100px){
    width: 100vw;
  }  
`;

export const PlaceForLogo = styled.div`
  position: absolute;
  left: 20px;
  top:20px;
`;

export const ProductDetailInfo = styled.div`
  margin: 20px;
  width:calc(60vw -40px);


  @media (min-width:1101px){
      width:100vw;

  } 
    @media (max-width:1100px){
    height: 100vh;
  } 
`;


export const ProductFoodLabel = styled.div`
  color: black;
  font-weight:500;
  font-size: ${props => props.size != null ? props.size : '30px'};
`;

export const ProductSubFoodLabel = styled.div`
  width: ${props => props.width != null ? props.width : 'calc(60vw - 40px)'} ;
  color: ${props => props.color != null ? props.color : '#c7c5c5'} ;

  text-decoration: ${props => props.strike != null ? props.strick : 'none'};

  font-weight:500;
  font-size:${props => props.size != null ? props.size : '24px'};

  /* background: violet; */
  margin-right: 20px;

    @media (max-width: 800px){
    width: 100vw;
  }
`;

export const PriceAndDiscount = styled.div`
  display: flex;
`;

export const TimeDeliveryRow = styled.div`
  width:calc(60vw -40px);
  /* background: yellow; */
  height: 120px;
  display: flex;

  @media (min-width:1101px){
      width:100vw;
  } 

  @media (max-width: 800px){
    flex-direction:column;
  }
`;

export const TitleAndDescriptionTimeDelivery = styled.div`
  width:calc(30vw - 40px);
  /* background: green; */
  height: 120px;
  @media (min-width:1101px){
      width:30vw;

  } 
  @media (max-width:1101px){
      width:100vw;

  } 
`;

export const InputsContainer = styled.div`
display: flex;
flex-direction: column;
`;

export const NameInput = styled.input`
  @media (min-width:1101px){
    width:20vw;
  } 
  @media (max-width:750px){
    width:90vw;
  } 
  
  ::placeholder {
    color: gray;
    font-size: 14px;
  }
  
  background-color:${props => props.color != null ? props.color : ''} ;
  padding: 8px 4px;
  border-radius: 6px;
  border: 2px dotted #0078D7;
  width:50vw;
  margin: 10px 0px;
`;


export const ActionButton = styled.div`
  display: flex;
  align-items:center;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  padding: 12px 25px;
  color: ${props => props.color != null ? props.color : '#c7c5c5'};
  font-size:16px;
  border-radius:40px;
  width: 180px;
  background-color: ${props => props.bg != null ? props.bg : ''};
    @media (max-width: 800px){
    margin-bottom: 20px;
  }
`;

export const IconsLeadingText = styled.div`
  height: 25px;
  width: 25px;
  background-image: url(
    ${props => props.img != null ? props.img : '/cart-plus.svg'}
    );
    
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;  
`;

export const ActionButtonsRow = styled.div`
  width:calc(75vw -40px);
  display: flex;
  /* background: red; */
  justify-content:center;

  @media (min-width:1101px){
      width:60vw;
      justify-content:center;
  } 
  /* @media (max-width:1101px){ */
      /* width:60vw; */
      /* justify-content:center; */
  /* }  */
`;