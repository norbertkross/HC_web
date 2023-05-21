
import { app } from '../../firebase_configs/firebase_config';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
import { useDispatch } from 'react-redux';
const db = getFirestore(app);


export const createAnOrder = async (state,action,) => {
  // const dispatch = useDispatch()

  console.log("Before ADDING: ", state.addingToCart)

  state.index++
  state.index++
  state.index++
  state.addingToCart = true
  // state.showDialog = { ...state.showDialog, statusOK: false}
  // dispatch(resetCartProcessDialog())
  console.log("Type: ", typeof action.payload.reset)

  
  // state.showDialog['statusOK'] = false;
  // state.showDialog = { ...state.showDialog, show: false }
  // state.showDialog['show'] = false;
  console.log("Before ADDING: ", state.index)
  console.log("afta: ", state.addingToCart)
  console.log("Payload: ", action.payload)
  // console.log("Show Dialog: ", state.showDialog)


  try {
    const orderData = action.payload.data;

    const docRef = await addDoc(collection(db, 'all_orders'), orderData).then((_) => {
      console.log(`DONE!!!`)
      state.addingToCart = false
      console.log("DONE 222")
      // dispatch(showSuccessDialog())
      action.payload.updateSuccess()

      // state.showDialog = { ...state.showDialog, statusOK: true }

      // state.showDialog['statusOK'] = true;
      console.log("DONE 333")
      // state.showDialog = { ...state.showDialog, show: true }

      // state.showDialog['show'] = true;
      console.log("DONE 444")



    });
    // console.log('Document added with ID:', docRef.id);
    // return docRef;
  } catch (error) {
    console.error('Error creating document:', error);
    state.addingToCart = false
    // state.showDialog = { ...state.showDialog, statusOK: false }
    // state.showDialog['statusOK'] = false;
    // state.showDialog = { ...state.showDialog, show: true }
    // state.showDialog['show'] = true;
    //return undefined
    // dispatch(showErrorFailedDialog())
    action.payload.updateFailed()


  }

}  