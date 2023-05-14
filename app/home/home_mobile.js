import { Dialog } from 'primereact/dialog';
import { useContext, useEffect, useState } from 'react';
import { AppBar, BackForwardButton, Backwards, BuyBag, BuyNowButton, BuyNowRoundCartButton, BuyNowRow, CartBadge, CartIcon, ClockEight, CurrencySignRed, DurationBlackContainer, FoodItem, FoodItemContainer, FoodItemWhiteOvalContainer, FoodLabel, FoodOptionsBody, FoodOptionsContainer, Forward, GreyDivider, HideOnBiggerScreens, IncreasePrice, ItemDurationContainer, ItemsQuantityButton, LoginButton, LoginIcon, MobileBackgroundShape, MobileHeadbackground, MoreMenu, OderDetailsSub_1, OderDetailsSub_2, OderYour, OrderRow, PriceLabel, PriceLabelRow, Quantity, ReducePrice, SelectedFoodAndItemDuration, SelectedFoodAndItemDurationContainer, SelectedFooddItem, SelectedFoodLabel, SelectedFoodLabelRow, SelectedFoodLabelSTAR, SignIButton, StarAndRateHolder, STarValue, TotalOrder, TotalOrderValue, UserIcon, WidthSpacer } from '../components/home_background_circle/home_background_circle';
import { AppStateMain } from '../state/app_state';
import AppCompanyLogo from './logo_and_company_name';

export default function HomeMobile(params) {

  const [deviceWidth, setDeviceWidth] = useState(200.0);

  useEffect(() => {

    if (typeof window !== 'undefined') {

      setDeviceWidth(window.innerWidth);

      function handleResize() {
        setDeviceWidth(window.innerWidth);
      }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }

  }, []);
  const {
    displayMobileMoreMenu, setDisplayMobileMoreMenu, selectedFoodImage, setSelectedFoodImage, items, selectedFoodIndex, setSelectedFoodIndex, allFoods
  } = useContext(AppStateMain);

  return <div>
    {/* Home Mobile */}
    <HideOnBiggerScreens>
      <Dialog header={
        <div>
          <WidthSpacer width={'150px'}>
            <LoginButton>
              <LoginIcon />
              <div style={{ width: "10px" }} />
              Login
              <WidthSpacer width={'10px'} />
            </LoginButton>
          </WidthSpacer>
          <WidthSpacer width={'150px'}>
            <WidthSpacer height={'20px'} />
            <SignIButton color={'black'}>
              <UserIcon isDark={true} />
              Sign up
            </SignIButton>
          </WidthSpacer>
        </div>} visible={displayMobileMoreMenu}
        style={{ width: '70vw', borderRadius: '0px' }}
        onHide={() => {
          console.log("Calling hide")
          setDisplayMobileMoreMenu(false)
        }} position={"top-right"} >




      </Dialog>
      <div>
        <AppBar>

          <AppCompanyLogo />

          <div style={{ display: "flex", alignItems: "center" }}>

            {
              deviceWidth <= 1200 ?
                // <div style={{backgroundColor:"red" }}>
                <CartIcon bg={'red'} >
                  <CartBadge >
                    10
                  </CartBadge>
                </CartIcon>
                :
                <div />
            }

            <div style={{ width: "15px" }} />

            {deviceWidth <= 800 ?
              <div /> :
              <LoginButton>
                <LoginIcon />
                <div style={{ width: "10px" }} />
                Login
              </LoginButton>
            }

            {deviceWidth <= 800 ?
              <div />
              :
              <div style={{ width: "30px" }} />}

            {deviceWidth <= 800 ?
              <div />
              :
              <SignIButton>
                <UserIcon />
                Sign up
              </SignIButton>}

            {deviceWidth <= 800 ?
              <MoreMenu onClick={(e) => {
                console.log(`He gd`)
                setDisplayMobileMoreMenu(true)
              }} /> : <div />
            }
          </div>

        </AppBar>


        <MobileHeadbackground>
          <MobileBackgroundShape>
          </MobileBackgroundShape>
        </MobileHeadbackground>
        {/* Food duration item   */}
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

          {/* Food Options     */}
          <WidthSpacer height={'40px'} />
          <FoodOptionsContainer>
            <BackForwardButton>
              <Backwards />
            </BackForwardButton>
            <FoodOptionsBody>

              {allFoods.map((item, index) => {
                var splittedColor = item['background'].toString().split(",",)
                splittedColor[splittedColor.length - 1] = "0.8)";
                var deeperColor = splittedColor.join()

                console.log(`CJANHIGN IMAGE: ${item['url']}`)

                return (
                  <FoodItemContainer key={index} background={selectedFoodIndex == index ?
                    deeperColor
                    :item['background']} onClick={e => {

                    setSelectedFoodIndex(index)
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
          <WidthSpacer height={'60px'} />

          {/* Details description s */}
          <div style={{ padding: `0px ${deviceWidth <= 1200 ? '20px' : '0px'}` }}>
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
              <BuyNowButton>
                <BuyNowRoundCartButton>
                  <BuyBag />
                </BuyNowRoundCartButton>
                <div style={{ paddingLeft: "8px" }}>
                  Buy Now
                </div>
              </BuyNowButton>
            </BuyNowRow>
          </div>
          <WidthSpacer height={'60px'} />

        </SelectedFoodAndItemDurationContainer>
      </div>
    </HideOnBiggerScreens>

  </div>
}

