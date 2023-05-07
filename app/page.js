'use client';
import { AppBar, AppLogo, BackForwardButton, Background, BackgroundObject, Backwards, BuyBag, BuyNowButton, BuyNowRoundCartButton, BuyNowRow, CartBadge, CartIcon, ClockEight, CurrencySignRed, DurationBlackContainer, FoodItemContainer, FoodItemWhiteOvalContainer, FoodLabel, FoodOptionsBody, FoodOptionsContainer, Forward, GreyDivider, IncreasePrice, ItemDurationContainer, ItemsQuantityButton, LoginButton, LoginIcon, LogoBody, LogoC, LogoH, LogoLetters, ObjectBody,OderDetailsBackground,OderDetailsSub_1,OderDetailsSub_2,OderYour,OrderRow,PriceLabel,PriceLabelRow,Quantity,ReducePrice,SelectedFoodAndItemDuration, SelectedFoodAndItemDurationContainer, SelectedFooddItem, SelectedFoodLabel, SelectedFoodLabelRow, SelectedFoodLabelSTAR, SignIButton, StarAndRateHolder, STarValue, TotalOrder, TotalOrderValue, UserIcon, WidthSpacer } from './components/home_background_circle/home_background_circle';

export default function App() {
  const items = ['item 1', 'item 2', 'item 3',
    // "hello"
  ];
  const shapeColors = ["rgba(86, 245, 155,0.7)", '#de3ef0', '#8396eb',"#14deca"];

  return (
    <main >
      <Background>
        <OderDetailsBackground>
          <WidthSpacer width="8px" height="10px" />
          <WidthSpacer width="8px" height="10px" />

          <div>
          <OderYour>
            Make An Order
          </OderYour>
          <OderDetailsSub_1>
            Your favourite foods
          </OderDetailsSub_1>
          <OderDetailsSub_2>
             wait compiling...
- event compiled client and server successfully in 468 ms (572 modules) wait compiling...
- event compiled client and server successfully in 468 ms
          </OderDetailsSub_2>

            <OrderRow>
              <TotalOrder>
              Total Order:                
            </TotalOrder>

            <TotalOrderValue>                
                $24.3
              </TotalOrderValue>
          </OrderRow>

          <BuyNowRow>
            <ItemsQuantityButton>
              <ReducePrice/>
              <GreyDivider />
              <Quantity>
                2
              </Quantity>
              <GreyDivider />
              <IncreasePrice/>
            </ItemsQuantityButton>
            <WidthSpacer width="20px" />
            <BuyNowButton>
              <BuyNowRoundCartButton>
                <BuyBag/>
              </BuyNowRoundCartButton>
              <div style={{ paddingLeft: "8px" }}>
                Buy Now
              </div>
            </BuyNowButton>
          </BuyNowRow>
          
          <FoodOptionsContainer>
            <BackForwardButton>
            <Backwards/>
            </BackForwardButton>

            <FoodOptionsBody>
              
              {/* {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))} */}
              {items.map((item, index) => (
        <FoodItemContainer key={index} background={shapeColors[index]} >
                <FoodItemWhiteOvalContainer>
                   
                </FoodItemWhiteOvalContainer>

                <FoodLabel>
                  Burger
                </FoodLabel>

                <PriceLabelRow>
                  <CurrencySignRed>
                    $
                  </CurrencySignRed>
                  <WidthSpacer width="4px" />
                  <PriceLabel>
                    3.67
                  </PriceLabel>     
                </PriceLabelRow>
                 <WidthSpacer width="8px" height="10px" />
                </FoodItemContainer>
      ))}
              
              </FoodOptionsBody>

            <BackForwardButton>
            <Forward/>
            </BackForwardButton>

          </FoodOptionsContainer>
          </div>
          <WidthSpacer width="8px" height="10px" />

        </OderDetailsBackground>
        <ObjectBody>
          <BackgroundObject />
        </ObjectBody>
          <SelectedFoodAndItemDurationContainer>
            <SelectedFoodAndItemDuration>
              <ItemDurationContainer>
                <SelectedFoodLabelRow>
                  <SelectedFoodLabel>
                    Salad Potatoe
                  </SelectedFoodLabel>
                    <StarAndRateHolder>
                      <SelectedFoodLabelSTAR />
                      <STarValue>
                        4.7
                      </STarValue>
                    </StarAndRateHolder>                
                </SelectedFoodLabelRow>
                <DurationBlackContainer>
                  <ClockEight/>
                  10-18mins
                </DurationBlackContainer>
              </ItemDurationContainer>
              <SelectedFooddItem/>
            </SelectedFoodAndItemDuration>
          </SelectedFoodAndItemDurationContainer>
        <AppBar>
          <AppLogo>
            <LogoBody>
              <LogoH>H</LogoH>
              <LogoLetters>alleys</LogoLetters>
              <LogoC>C</LogoC>
              <LogoLetters>omete</LogoLetters>

            </LogoBody>
          </AppLogo>  
          <CartIcon >
            <CartBadge>
              10
            </CartBadge>
         </CartIcon>
          <div style={{ display: "flex",alignItems:"center" }}>
          
          <div style={{ width: "15px"}} />

          <LoginButton>
            <LoginIcon />
            <div style={{ width: "10px" }} />
            Login
          </LoginButton>
          
            <div style={{ width: "30px"}} />

          <SignIButton>
            <UserIcon />
            Sign up
          </SignIButton>
          </div>

        </AppBar>
      </Background>
    </main>
  )
}

