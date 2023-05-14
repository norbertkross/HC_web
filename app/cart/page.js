'use client'
import { ActionButton, AddMinus, AddMinusContainer, Cartbackground, CartHeading, CloseCart, DeleteFromCart, DeleteRowHolder, IconsLeadingText, ItemActions, ItemCard, ItemCardContainer, ItemImage, ItemName, ItemNameDescPriceContainer, ItemSubLabel } from '../components/cart_styles/cart_style';
import { WidthSpacer } from '../components/home_background_circle/home_background_circle';

export default function UserCart() {
  return <div>
    <CartHeading>
      <WidthSpacer width={'10px'} />
      <div style={{ paddingTop:'5px'}}>
        <ItemName size={'20px'}>
          My Cart
        </ItemName>
      </div>

       <CloseCart />
    </CartHeading>
    <Cartbackground>
      {
        [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
          return (
            
            <div style={{ display: 'flex', justifyContent: 'center', margin: '12px 0px' }}>
              <ItemCardContainer>
                <ItemCard>
                  <ItemImage />
                  <ItemNameDescPriceContainer>
                    <ItemName size={'14px'} color={'#4f4e4e'}>
                      Polo Shirt For Men {item}
                    </ItemName>
                    <WidthSpacer height={'4px'} />
                    <ItemSubLabel size={'13px'}>
                      Color Black
                    </ItemSubLabel>
                    <WidthSpacer height={'5px'} />
                    <ItemName size={'15px'}>
                      GHS 2738.90
                    </ItemName>
                  </ItemNameDescPriceContainer>

                  <ItemCardContainer>
                    <div style={{ height: '78px', display: 'flex', alignItems:'flex-end',marginBottom:'2px'}}>
                      <DeleteFromCart />

                    </div>
                    <AddMinusContainer>
                      <AddMinus color={'green'}>
                        +
                      </AddMinus>
                      2
                      <AddMinus>
                        -
                      </AddMinus>
                    </AddMinusContainer>                    
                  </ItemCardContainer>
 
                </ItemCard>
                {/* <DeleteRowHolder>
                  
                </DeleteRowHolder>  */}
              </ItemCardContainer>
     
            </div>
          );
        })}
      <WidthSpacer height={'300px'} />

    </Cartbackground>
    <ItemActions>
      
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <ItemName size={'14px'} color={'#4f4e4e'}>
          Total
        </ItemName>
        <ItemName size={'16px'} color={'black'}>
          GHS 2345.98
        </ItemName>
      </div>
      <WidthSpacer height={'20px'} />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ActionButton bg={'red'}>
          <IconsLeadingText />
          <WidthSpacer width={'10px'} />

          ORDER NOW
          <WidthSpacer width={'10px'} />
          <WidthSpacer width={'10px'} />
          <WidthSpacer width={'10px'} />
        </ActionButton>
      </div>

    </ItemActions>
  </div>
}