'use client'
import { WidthSpacer } from '../../components/home_background_circle/home_background_circle';
import { ActionButton, ActionButtonsRow, IconsLeadingText, InputsContainer, ItemInMoreImages, ItemInMoreImagesContainer, MoreImages, NameInput, PlaceForLogo, PriceAndDiscount, ProductDetailBackground, ProductDetailInfo, ProductDetailInfoContainer, ProductDetailRow, ProductFoodLabel, ProductImageContainer, ProductSubFoodLabel, TimeDeliveryRow, TitleAndDescriptionTimeDelivery } from '../../components/product_details_css/product_details_css';
import AppCompanyLogo from '../../home/logo_and_company_name';

export default function ProductDetail({ params }) {
  const { name } = params;

  return <div>

    <ProductDetailBackground>

      {/* Hello peoduct {name} */}
      <ProductDetailRow>
        <ProductImageContainer>
          <PlaceForLogo>
            <AppCompanyLogo />
          </PlaceForLogo>
          <MoreImages>
            <ItemInMoreImagesContainer>
              <ItemInMoreImages />
              <ItemInMoreImages />
              <ItemInMoreImages />
            </ItemInMoreImagesContainer>
          </MoreImages>
        </ProductImageContainer>

        <ProductDetailInfoContainer>
          <ProductDetailInfo>
            <WidthSpacer height={'20px'} />

            <ProductFoodLabel>
              Gladius Yam Balls
            </ProductFoodLabel>
            <WidthSpacer height={'10px'} />

            <ProductSubFoodLabel>
              Discount Using Website
            </ProductSubFoodLabel>
            <WidthSpacer height={'10px'} />

            <PriceAndDiscount>
              {/* <ProductFoodLabel size={'18px'} >
                {'GHS 112.54'}
              </ProductFoodLabel> */}
              <ProductSubFoodLabel width={'200px'} size={'18px'} color={'black'} >
                GHS 150.40
              </ProductSubFoodLabel>
              <WidthSpacer width={'10px'} />
              <ProductSubFoodLabel width={'200px'} size={'18px'} color={'red'} strike={'line-through'}>
                GHS 150.40
              </ProductSubFoodLabel>
            </PriceAndDiscount>
            <WidthSpacer height={'60px'} />

            <ProductFoodLabel size={'24px'}>
              Description
            </ProductFoodLabel>
            <ProductSubFoodLabel size={'16px'}>
              Also, keep in mind that the useRouter hook is only available on the client-side, and not during server-side rendering. If you need to access query parameters during server-side rendering, you can use the context.query object instead, where context is the first argument of the getInitialProps function.
            </ProductSubFoodLabel>
            <WidthSpacer height={'30px'} />

            <InputsContainer>
              <NameInput type="text" placeholder="Name">
              </NameInput>
              <NameInput type="text" placeholder="Address">
              </NameInput>
              <NameInput type="text" placeholder="Phone">
              </NameInput>
            </InputsContainer>
            <WidthSpacer height={'30px'} />

            <TimeDeliveryRow>
              <TitleAndDescriptionTimeDelivery>
                <ProductFoodLabel size={'18px'}>
                  Location
                </ProductFoodLabel>
                <ProductSubFoodLabel size={'18px'} width={'300px'}>
                  Lou Ralph Hotel, Dome Pillar 2, Ayensu Street
                </ProductSubFoodLabel>
              </TitleAndDescriptionTimeDelivery>
              <TitleAndDescriptionTimeDelivery>
                <ProductFoodLabel size={'18px'} width={'300px'}>
                  Average Delivery Time
                </ProductFoodLabel>
                <ProductSubFoodLabel size={'18px'}>
                  30 - 40mins
                </ProductSubFoodLabel>
              </TitleAndDescriptionTimeDelivery>
            </TimeDeliveryRow>

            {/* <WidthSpacer height={'60px'} /> */}
            <ActionButtonsRow>
              <ActionButton bg={'white'} >
                <IconsLeadingText />
                <WidthSpacer width={'8px'} />
                Add to cart
              </ActionButton>
              <WidthSpacer width={'30px'} />
              <ActionButton bg={'#26b314'} color={'white'}>
                <IconsLeadingText img={'/bag-shopping-white.svg'} />
                <WidthSpacer width={'8px'} />
                Order now
              </ActionButton>
            </ActionButtonsRow>
            <WidthSpacer height={'30px'} />
          </ProductDetailInfo>
        </ProductDetailInfoContainer>
      </ProductDetailRow>
    </ProductDetailBackground>
  </div>
}