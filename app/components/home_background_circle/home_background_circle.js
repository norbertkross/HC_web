import styled, { css } from 'styled-components';

export const LoaderIndicator = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content:center;
  align-items:center;
`;
export const LoaderBody = styled.div`
  width: 200px;
  height: 200px;
  background-image: url("/loader-for-web.gif");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;   
`;


export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const ObjectBody = styled.div`
  width: 100vh;
  height: 100vh;
  position: absolute;
  right: -18vw;  
  overflow: hidden;
`;

export const BackgroundObject = styled.div`
  width: 100vh ;
  height: calc(100vh + 100px);
  background-image: url("/grey_pattern.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; 
  top:-50px;
  bottom:-50px;
  position: absolute;
  border-radius:50%;
`;

export const MobileHeadbackground = styled.div`
  width: 100vw;
  height: 80vh;
  position: absolute;
  /* right: -18vw;   */
  overflow: hidden;
`;


export const MobileBackgroundShape = styled.div`
  width: 110vw;
  height: 130vw;
  background-image: url("/grey_pattern.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; 
  position: absolute;
  border-radius:50%;
  top: -20vw;
  right: -30vw;
`;

export const SelectedFoodAndItemDurationContainer = styled.div`
width: 400px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
position: relative;
position: absolute;
/* background-color: rgba(13, 76, 0, 0.5); */


    @media (min-width: 800px) {
      right: 20vw;
      height: 100vh;
    }

    @media (max-width: 1200px) {
      width: 100vw; 
      padding-top: 80px ;
    }
`;

export const SelectedFoodAndItemDuration = styled.div`

width: 400px;
display:flex;
flex-direction:column;
/* background-color: rgba(255, 0, 0, 0.5); */
align-items:center;
position: relative;

    @media (min-width: 1200px) {
      height: 600px;
    }
    @media (max-width: 1200px) {
      width: 100vw; 
      height: 600px;
    }
    @media (max-width: 700px) {
      width: 100vw; 
      height: 400px;
    }
`;


export const SelectedFooddItem = styled.div`
  width: 380px;
  height: 380px;
  background-color: #e6ffeb;
  border-radius:50%;
  position: absolute;
  background-image: url(${ props => props.image != null ? props.image : '/ybls.jpeg'});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; 
  border: 20px solid white;
  box-shadow: 0px 25px 80px rgba(0, 0, 0, 0.5);
  
    @media (max-width: 600px) {
     width: 300px;
     height: 300px;  
    border: 15px solid white;   
    }
`;

export const ItemDurationContainer = styled.div`
  width: 250px;
  height: 300px;
  background-color: orange;
  border-radius:5%;
  top:250px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
    @media (max-width: 600px) {
     width: 200px;
     height: 250px; 
     top:180px;    
    }  
`;

export const SelectedFoodLabelRow = styled.div`
width: 100%;
padding:16px;
 display: flex;
 justify-content:space-between;
 align-items:center;
`;

export const SelectedFoodLabel = styled.div`
    color: white;
    font-size:18px;
    font-weight:bold;
`;

export const SelectedFoodLabelSTAR= styled.div`
   width: 15px ;
  height: 15px;
  background-image: url("/splotch.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; 
  margin:4px;
`;

export const STarValue = styled.div`
    color: white;
    font-size:15px;
`;

export const StarAndRateHolder = styled.div`
  display: flex;
  align-items:center;
`;
export const DurationBlackContainer = styled.div`
  display: flex;
  align-items:center;
  background-color:black;
  height: 40px;
  color: white;
  border: white 1px solid;
  padding: 10px 30px;
  margin-bottom:25px ;
  border-radius: 30px ;
`;

export const ClockEight= styled.div`
  width: 15px ;
  height: 15px;
  background-image: url("/clock-eight.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; 
  margin:4px;
  padding-right: 8px;
`;



export const AppBar= styled.div`
  width: 100vw;
  height: 60px;
  position: relative;
  padding: 10px 60px;
  display: flex;
  align-items:center;
  justify-content:space-between;

    @media (max-width: 1200px) {
      /* background-color:green; */
    }
    @media (max-width: 800px) {
      padding: 10px 20px;
    }
`;

export const AppLogo= styled.div`
  color:yellow;

`;

export const CartIcon= styled.div`
  width: 25px ;
  height: 25px;
  background-image: url("/basket-shopping.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; 
  /* background-color: ${props => props.bg} ; */
  margin:4px;
  padding-right: 8px;
  position: absolute;
  right: 27vw;

  @media (max-width: 1200px) {
      position: relative;
      right: 0;

  } 
`;

export const MoreMenu= styled.div`
  width: 25px ;
  height: 25px;
  background-image: url("/bars.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; 
  @media (max-width: 1200px) {
      position: relative;
      right: 0;

  } 
`;

export const SignIButton= styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  background-color:transparent;
  height: 40px;
  color: ${props => props.color ?? 'white'};
  border: 1px solid ${props => props.color ?? 'white'};
  padding: 10px 15px;
  border-radius: 30px ;
`;

export const LoginButton= styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  background-color:orange;
  height: 40px;
  color: black;
  padding: 10px 15px;
  border-radius: 30px ;
`;

export const LoginIcon= styled.div`
  width: 15px ;
  height: 15px;
  background-image: url("/arrow-right-to-bracket.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; 
  margin:4px;
  padding-right: 8px;
`;

export const UserIcon= styled.div`
  width: 20px ;
  height:20px;
  background-image: url(${ props => props.isDark == true ? '/user-pen-black.svg':'/user-pen.svg'});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat; 
  margin:4px;
  padding-right: 8px;
`;

export const CartBadge= styled.div`
  width: 14px ;
  height: 14px;
  background-color: red;
  position: absolute;
  border-radius: 10px ;
  right: 0px;
  top:0px;
  color: white;
  display: flex;
  justify-content:center;
  align-items:center;
  font-size:10px;
`;

export const OderDetailsBackground= styled.div`
  width: 100vh;
  height: 100vh;
  /* background-color: #02ab9a; */
  position: absolute;
  padding-left:60px;
  padding-top: 60px;
  display: flex;
  flex-direction: column ;
  justify-content:space-between;
`;

export const OderYour = styled.div`
  color: black;
  font-size:44px;
  font-weight:bold;
`;

export const OderDetailsSub_1 = styled.div`
  color: #242323;
  font-size:36px;
  font-weight:400;
  padding-top: 10px;
`;

export const OderDetailsSub_2 = styled.div`
  color: grey;
  font-size:20px;
  font-weight:300;
  padding-top: 10px;
`;

export const OrderRow= styled.div`
  display: flex;
  padding-top: 30px;
  align-items:center;
`;


export const TotalOrder = styled.div`
  color: grey;
  font-size:26px;
  font-weight:300;
`;


export const TotalOrderValue = styled.div`
  font-size:26px;
  font-weight:300;
  color: black;
  font-weight:bold;  
  padding-left: 4px;
`;

export const BuyNowRow= styled.div`
  display: flex;
  padding-top: 30px;
  align-items:center;
`;

export const BuyNowButton = styled.div`
  display: flex;
  align-items:center;
  background-color:black;
  height: 50px;
  color: white;
  padding-left: 6px;
  padding-right:20px;
  /* margin-bottom:25px ; */
  border-radius: 30px ;
  box-shadow: 0px 25px 80px rgba(0, 0, 0, 0.5);
`;

export const BuyNowRoundCartButton= styled.div`
  width: 35px;
  height:35px;
  background-color: orange ;
  border-radius: 50%;
  display: flex;
  justify-content:center;
  align-items:center;
`;

export const BuyBag= styled.div`
  width: 20px;
  height:20px;
  background-image: url("/bag-shopping.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat; 
`;

export const ItemsQuantityButton = styled.div`
  display: flex;
  align-items:center;
  background-color:white;
  height: 48px;
  color: white;
  box-shadow: 0px 25px 80px rgba(0, 0, 0, 0.5);
  padding-left: 10px;
  padding-right:10px;
  /* margin-bottom:25px ; */
  border-radius: 30px ;
`;

export const GreyDivider = styled.div`
  width: 1.5px;
  background-color: #dbdbdb;
  height: 25px;
  margin:0px 5px;
`;

export const ReducePrice= styled.div`
  width: 15px;
  height:15px;
  background-image: url("/chevron-down.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat; 
  padding: 0px 10px;

`;

export const IncreasePrice= styled.div`
  width: 15px;
  height:15px;
  background-image: url("/chevron-up.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat; 
  padding: 0px 10px;
`;

export const Quantity = styled.div`
  font-size:16px;
  font-weight:400;
  color: black;
  padding-left: 4px;
  margin: 0px 15px;
`;

export const WidthSpacer = styled.div`
  width:${props => props.width};
  height:${props => props.height};
`;

export const FoodOptionsContainer = styled.div`
  display: flex;
  align-items:center;
  margin-top: 60px ;
    /* @media (max-width: 1200px) {
      position: absolute;
      top: 100vh;
  }  */
`;

export const Backwards= styled.div`
  width: 15px;
  height:15px;
  background-image: url("/chevron-left.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat; 
  padding: 0px 10px;
`;
export const Forward= styled.div`
  width: 15px;
  height:15px;
  background-image: url("/chevron-right.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat; 
  padding: 0px 10px;
`;

export const BackForwardButton = styled.div`
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  padding: 10px;
  margin: 0px 15px;
  box-shadow: 0px 25px 80px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content:center;
  align-items: center;
`;

export const FoodOptionsBody = styled.div`
  width: 500px;
  height:200px;
  /* background: orange; */
  display: flex;
  flex-wrap:none;
  /* overflow-y: scroll; */
  overflow: auto; /* Make overflow items scrollable */

  ::-webkit-scrollbar {
    display: none; /* Hide the scrollbar */
  }


    @media (max-width: 1100px) {
     width: 65vw;

    }
`;

export const FoodItemContainer = styled.div`
  width: 135px;
  height:200px;
  background:${props => props.background};
  border-radius: 70px;
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  align-items:center;
  margin: 0px 12px;
  cursor:pointer;
  flex-shrink: 0; /* Prevent the item from resizing */
    @media (max-width: 700px) {
  width: 100px;
  height:160px;
  }
`;

export const FoodItemWhiteOvalContainer = styled.div`
  width: 80px;
  height: 85px;
  background: rgba(86, 245, 155,0.7);
  border-radius: 50% / 50% 50% 50% 50%;
  /* transform: scaleY(-1); */
  margin-top: 10px ;
  background: white;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  display: flex;
  justify-content:center;
  align-items:center;
    @media (max-width: 700px) {
     width: 50px;
  height: 55px;
  }
`;

export const FoodItem = styled.div`
width: 60px;
height: 60px;
background-image: url(${props => props.image != null ? props.image : '/ybls.jpeg' });
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;   
  border-radius: 35px ;
    @media (max-width: 700px) {
    width: 35px;
    height: 35px;
  }  
`;

export const FoodLabel = styled.div`
  font-size:16px;
  font-weight:500;
  text-align:center;
  color: #8a94a1;
`;


export const PriceLabelRow = styled.div`
  display: flex;
`;

export const CurrencySignRed = styled.div`
  font-size:16px;
  font-weight:bold;
  color: red;
`;

export const PriceLabel = styled.div`
  font-size:16px;
  font-weight:500;
  color: black;
`;

export const LogoBody = styled.div`
  display: flex;
  align-items:flex-end;
`;



export const LogoH = styled.div`
  font-size:24px;
  font-weight:bold;
  color: red;
    line-height: 1;

`;
export const LogoC = styled.div`
  font-size:24px;
  font-weight:bold;
  color: orange;
    line-height: 1;

`;
export const LogoLetters = styled.div`
  font-size:16px;
  font-weight:300;
  color: #8a94a1;
`;

export const MenuToggledView = styled.div`
  /* width: 80vw; */
  height: 300px;
  background-color: black;
  position: absolute;
`;




export const HideOnSmallerScreens = styled.div`
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const HideOnBiggerScreens = styled.div`
    @media (min-width: 1200px) {
        display: none;
    }
`;