import Link from 'next/link';
import { AppBar, BackForwardButton, Background, BackgroundObject, Backwards, BuyBag, BuyNowButton, BuyNowRoundCartButton, BuyNowRow, CartBadge, CartIcon, ClockEight, CurrencySignRed, DurationBlackContainer, FoodItem, FoodItemContainer, FoodItemWhiteOvalContainer, FoodLabel, FoodOptionsBody, FoodOptionsContainer, Forward, GreyDivider, HideOnSmallerScreens, IncreasePrice, ItemDurationContainer, ItemsQuantityButton, LoginButton, LoginIcon, ObjectBody, OderDetailsBackground, OderDetailsSub_1, OderDetailsSub_2, OderYour, OrderRow, PriceLabel, PriceLabelRow, Quantity, ReducePrice, SelectedFoodAndItemDuration, SelectedFoodAndItemDurationContainer, SelectedFooddItem, SelectedFoodLabel, SelectedFoodLabelRow, SelectedFoodLabelSTAR, SignIButton, StarAndRateHolder, STarValue, TotalOrder, TotalOrderValue, UserIcon, WidthSpacer } from '../components/home_background_circle/home_background_circle';

import { useDispatch, useSelector } from 'react-redux';
import { setSelectedFoodIndex } from '../state/redux_state/app_slice';
import AppCompanyLogo from './logo_and_company_name';

export default function HomeWeb(params) {

  const { selectedFoodIndex, allFoods } = useSelector((state) => state.hcState)

  const dispatch = useDispatch()

  return <div>
    {/* Home Web */}
    <HideOnSmallerScreens>
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
                GHS24.3
              </TotalOrderValue>
            </OrderRow>

            <BuyNowRow>
              <ItemsQuantityButton>
                <ReducePrice />
                <GreyDivider />
                <Quantity>
                  2
                </Quantity>
                <GreyDivider />
                <IncreasePrice />
              </ItemsQuantityButton>
              <WidthSpacer width="20px" />
              <Link href="/product-details/yam-balls">

                <BuyNowButton>
                  <BuyNowRoundCartButton>
                    <BuyBag />
                  </BuyNowRoundCartButton>
                  <div style={{ paddingLeft: "8px" }}>
                    Buy Now
                  </div>
                </BuyNowButton>
              </Link>
            </BuyNowRow>

            <FoodOptionsContainer>
              <BackForwardButton>
                <Backwards />
              </BackForwardButton>

              <FoodOptionsBody>
                {allFoods.map((item, index) => {

                  var splittedColor = item['background'].toString().split(",",)

                  splittedColor[splittedColor.length - 1] = "0.8)";

                  var deeperColor = splittedColor.join()

                  return (
                    <FoodItemContainer key={index} background={selectedFoodIndex == index ?
                      deeperColor
                      : item['background']} onClick={e => {

                        dispatch(setSelectedFoodIndex(index))
                      }} >
                      <FoodItemWhiteOvalContainer>
                        <FoodItem image={item['url']} />
                      </FoodItemWhiteOvalContainer>

                      <FoodLabel>
                        {item['name']}
                      </FoodLabel>

                      <PriceLabelRow>
                        <CurrencySignRed>
                          GHS
                        </CurrencySignRed>
                        <WidthSpacer width="4px" />
                        <PriceLabel>
                          {item['price']}
                        </PriceLabel>
                      </PriceLabelRow>
                      <WidthSpacer width="8px" height="10px" />
                    </FoodItemContainer>
                  )
                })}

              </FoodOptionsBody>

              <BackForwardButton>
                <Forward />
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
                  {allFoods[selectedFoodIndex]['name']}
                </SelectedFoodLabel>
                <StarAndRateHolder>
                  <SelectedFoodLabelSTAR />
                  <STarValue>
                    {allFoods[selectedFoodIndex]['stars']}
                  </STarValue>
                </StarAndRateHolder>
              </SelectedFoodLabelRow>
              <DurationBlackContainer>
                <ClockEight />
                {allFoods[selectedFoodIndex]['time']}
              </DurationBlackContainer>
            </ItemDurationContainer>

            <SelectedFooddItem image={allFoods[selectedFoodIndex]['url']} />
          </SelectedFoodAndItemDuration>

        </SelectedFoodAndItemDurationContainer>
        <AppBar>
          <AppCompanyLogo />
          <Link href="/cart">
            <CartIcon bg={'red'} >
              <CartBadge >
                10
              </CartBadge>
            </CartIcon></Link>
          {/* <CartIcon >
            <CartBadge>
              10
            </CartBadge>
         </CartIcon> */}
          <div style={{ display: "flex", alignItems: "center" }}>

            <div style={{ width: "15px" }} />

            <LoginButton>
              <LoginIcon />
              <div style={{ width: "10px" }} />
              Login
            </LoginButton>

            <div style={{ width: "30px" }} />

            <SignIButton>
              <UserIcon color={'black'} />
              Sign up
            </SignIButton>
          </div>

        </AppBar>
      </Background>
    </HideOnSmallerScreens>

  </div>
}

