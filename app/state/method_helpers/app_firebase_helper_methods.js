
import { app } from '../../firebase_configs/firebase_config';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
import { useSelector, useDispatch } from 'react-redux'
import { updateAddingToCartState } from '../redux_state/app_slice'
const db = getFirestore(app);


export const createAnOrder = async (state,action) => {


  // console.log("Before ADDING: ", addingToCart)

  state.index++
  state.index++
  state.index++

  console.log("Before ADDING: ", state.index)
  console.log("afta: ", state.addingToCart)

  // dispatch(updateAddingToCartState(true))
  // try {
  //   const orderData = {
  //     id: "fd66XD7r6dwDEW",
  //     date: Date(),
  //     name: "Yam Ball (Corned Beef)"
  //     // The data you want to save in the document
  //     // For example: name, age, etc.
  //   };

  //   const docRef = await addDoc(collection(db, 'all_orders'), orderData);
  //   console.log('Document added with ID:', docRef.id);
  //   return docRef;


  //   return docRef
  // } catch (error) {
  //   console.error('Error creating document:', error);
  //   return undefined
  // }

}  