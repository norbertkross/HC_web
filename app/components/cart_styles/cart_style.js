import styled from "styled-components";

export const Cartbackground = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
  position: relative;
  overflow-y:scroll;
  /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
`;


export const ItemCard = styled.div`
  width: calc(100vw - 40px);
  height: 95px;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: white;
  display: flex;
  justify-Content:space-between;
  align-items:center;
  position: relative;

  @media(min-width:1100px){
  width: calc(45vw - 40px);
  }
`;


export const ItemImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;  background: white;
  background-image: url("/ybls.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; 
  border: 4px solid #e3e1e1 ;
  margin:5px 10px;
  
`;


export const AddMinusContainer = styled.div`
  width:30px;
  height: 78px;
  background-Color: #fff5f5;
  margin: 0px 10px;
  border-radius: 4px;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;
`;

export const AddMinus = styled.div`
  width:25px;
  height: 25px;
  /* background-Color: grey; */
  color: ${props => props.color != null ? props.color : 'red'};
  display: flex;
  justify-Content:center;
  align-items:center;
  font-weight:bold;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const ItemNameDescPriceContainer = styled.div`
  width:calc(100vw - 175px);
  color: ${props => props.color != null ? props.color : 'red'};
  display: flex;
  flex-direction: column;
  align-items:flex-start;
  font-weight:bold;
    @media(min-width:1100px){
    width:calc(40vw - 175px);
  }
`;

export const ItemName = styled.div`
  color: ${props => props.color != null ? props.color : 'black'};
  font-weight:500;
  font-size: ${props => props.size != null ? props.size : '30px'};
`;

export const ItemSubLabel = styled.div`
  color: ${props => props.color != null ? props.color : '#c7c5c5'} ;

  font-weight:500;
  font-size:${props => props.size != null ? props.size : '24px'};
`;


export const ItemActions = styled.div`
  position: absolute;
  bottom: -1px;
  width:  100vw;
  height:130px;
  background: white;
  padding:  10px 30px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    @media(min-width:1100px){
    width:calc(60vw - 175px);
    left: 25%;
  }  
`;



export const ActionButton = styled.div`
  cursor:pointer;
  display: flex;
  align-items:center;
  justify-Content:space-between;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  padding: ${props => props.isLoading == true ? '5px' : '16px'} 25px;
  color: ${props => props.color != null ? props.color : 'white'};
  font-size:16px;
  border-radius:10px;
  width: 70vw;
  background-color: ${props => props.bg != null ? props.bg : ''};
    @media(min-width:1100px){
     width: 20vw;
  }  
`;

export const IconsLeadingText = styled.div`
  height: 25px;
  width: 25px;
  background-image: url(
    ${props => props.img != null ? props.img : '/cart-plus-white.svg'}
    );
    
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;  
`;

export const ItemCardContainer = styled.div`
display: flex;
align-items:flex-end;
  /* height: 78px; */

/* display: 'block',  */
/* justify-Content: 'space-between'; */
    /* @media(min-width:1100px){
   justify-Content: 'center';
  }   */
  
`;
export const DeleteRowHolder = styled.div`
 width: calc(100vw - 40px);
 display: 'flex'; 
 justify-items: 'flex-end';
 background-Color:red;

  @media(min-width:1100px){
    width: calc(45vw - 40px);
  }
`;


export const DeleteFromCart = styled.div`
  width: 20px;
  height: 20px;
  margin-top:8px ;
  /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
  /* background: white; */
  background-image: url("/trash-xmark.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat; 
`;


export const CartHeading = styled.div`
width: 100vw;
  display: flex;
  justify-content:space-between;
  /* background: #e3e1e1; */
  padding: 5px 20px;
`;

export const CloseCart = styled.div`
  width: 30px;
  height: 30px;
  background-image: url("/xmark-red.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat; 
`;

export const IndicatorWhite = styled.div`
  width: 50px;
  height: 50px;
  background-image: url("/indicator_white.gif");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat; 
`;

export const AddingToCartStatus = styled.div`
color: ${props => props.failed == true ? 'red' : '#04bd0a'} ;

  font-weight:bold;
  font-size:'24px';
`;
