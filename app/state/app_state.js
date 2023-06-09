import { createContext, useState } from "react";
import { app } from '../firebase_configs/firebase_config';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
export const AppStateMain = createContext({})
const db = getFirestore(app);

export default function AppState({ children }) {

  const [selectedFoodIndex, setSelectedFoodIndex] = useState(0)

  const [allFoods, setAllFoods] = useState([
    {
      url: '/ybls.jpeg',
      name: 'Burgert 1111',
      price: 3.7,
      time: '21 -37mins',
      stars: 5,
      background: `rgba(86, 245, 155,0.2)`
    },
    {
      url: '/food_1.jpeg',
      name: 'Burgert 2222',
      price: 2.7,
      time: '9 -13mins',
      stars: 4.2,
      background: `rgba(252, 35, 57, 0.2)`
    },
    {
      url: '/food_2.jpeg',
      name: 'Burgert 3333',
      price: 10.5,
      time: '18 -20mins',
      stars: 3.2,
      background: `rgba(222, 62, 240, 0.2)`,
    },
    {
      url: '/food_3.jpeg',
      name: 'Burgert 4444',
      price: 2.7,
      time: '45-60mins',
      stars: 3.2,
      background: `rgba(131, 150, 235, 0.2)`
    },
    {
      url: '/istockphoto-663987940-1024x1024.png',
      name: 'Burgert 5555',
      price: 2.7,
      time: '18 -20mins',
      stars: 3.2,
      background: `rgba(252, 35, 57, 0.2)`
    },

  ])

  const [displayMobileMoreMenu, setDisplayMobileMoreMenu] = useState(false)

  const [selectedFoodImage, setSelectedFoodImage] = useState("/ybls.jpeg");

  const [items, setItemsArray] = useState(['/ybls.jpeg', '/food_1.jpeg', '/food_2.jpeg', '/food_3.jpeg', '/food_4.jpeg'
  ]);

  const createAnOrder= async()=>{
    try {
      const orderData = {
        id: "fd66XD7r6dwDEW",
        date: Date(),
        name: "Yam Ball (Corned Beef)"
        // The data you want to save in the document
        // For example: name, age, etc.
      };

      const docRef = await addDoc(collection(db, 'all_orders'), orderData);
      console.log('Document added with ID:', docRef.id);
      return docRef;
  

      return docRef
    } catch (error) {
      console.error('Error creating document:', error);
      return undefined
    }

  }  

  // const [shapeColors, setShapeColors] = useState(["rgba(86, 245, 155,0.3)", 'rgba(252, 35, 57, 0.3)', 'rgba(222, 62, 240, 0.3)', 'rgba(131, 150, 235, 0.3)', 'rgba(252, 35, 57, 0.3)']);


  return <AppStateMain.Provider value={{
    displayMobileMoreMenu, setDisplayMobileMoreMenu, selectedFoodImage, setSelectedFoodImage, items, setItemsArray, allFoods, selectedFoodIndex, setSelectedFoodIndex,createAnOrder
  }}>
    {children}
  </AppStateMain.Provider>

}