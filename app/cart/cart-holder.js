'use client'

import { useContext } from 'react';
import { ActionButton, AddingToCartStatus, AddMinus, AddMinusContainer, Cartbackground, CartHeading, CloseCart, DeleteFromCart, IconsLeadingText, Indicator, IndicatorWhite, ItemActions, ItemCard, ItemCardContainer, ItemImage, ItemName, ItemNameDescPriceContainer, ItemSubLabel } from '../components/cart_styles/cart_style';
import { WidthSpacer } from '../components/home_background_circle/home_background_circle';
import { Dialog } from 'primereact/dialog';


import { useSelector, useDispatch } from 'react-redux'
import { updateAddingToCartState } from '../state/redux_state/app_slice'

export default function UserCart(params) {

  // const { createAnOrder, selectedFoodIndex } = useContext(AppStateMain)
  // const context = useContext(AppStateMain)

  const { selectedFoodIndex, addingToCart, showDialog } = useSelector(state => state.hcState)

  const dispatch = useDispatch()

  return <div>
    <Dialog header={
      <div>
        {showDialog['statusOK'] == true? "Success":"Failed"}
      </div>} visible={showDialog['show']}
      style={{ width: '70vw', borderRadius: '0px' }}
      onHide={() => {
        console.log("Calling hide")
        dispatch(updateShowDialog(false))

      }}
      position={"top-right"} >
      <AddingToCartStatus>
        {showDialog['statusOK'] == true ? "Successfully ordered item" : "Could not process order"}
      </AddingToCartStatus>
    
    </Dialog>    
      <CartHeading>
        <WidthSpacer width={'10px'} />
        <div style={{ paddingTop: '5px' }}>
          <ItemName size={'20px'}>
          My Cart {`${selectedFoodIndex}`}
          </ItemName>
        </div>
        <CloseCart />
      </CartHeading>
      <Cartbackground>
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
            return (

              <div style={{ display: 'flex', justifyContent: 'center', margin: '12px 0px' }} key={index}>
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
                      <div style={{ height: '78px', display: 'flex', alignItems: 'flex-end', marginBottom: '2px' }}>
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
          <ActionButton bg={'red'} onClick={(e) =>
          dispatch(updateAddingToCartState(
            {
              data: {
                id: "fd66XD7r6dwDEW",
                date: Date(),
                name: "Yam Ball (Corned Beef)"
                // The data you want to save in the document
                // For example: name, age, etc.
              },
              reset: dispatch(resetCartProcessDialog()),

              updateSuccess: dispatch(showSuccessDialog()),
              
              updateFailed: dispatch(showErrorFailedDialog()),
            }
          ))
          } isLoading={addingToCart}>
            <IconsLeadingText />
            <WidthSpacer width={'10px'} />

          
          {addingToCart == true ?
            <div style={{paddingLeft:'40px'}}><IndicatorWhite /></div>
            
            : <div>ORDER NOW</div>}
         
            <WidthSpacer width={'10px'} />
            <WidthSpacer width={'10px'} />
          <WidthSpacer width={'10px'} />
  
          </ActionButton>
        </div>

      </ItemActions>
  </div>
}