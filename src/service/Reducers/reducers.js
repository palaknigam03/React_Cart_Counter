
import { ADD_TO_CART , REMOVE_TO_CART } from "../Constant";

const initailState = {
    cardData : []
}

export default function cardItems(State = [],action)
{
  switch(action.type){
    case ADD_TO_CART:
      //console.log('-------reduser---',action);
        return[
            ...State,
           {cardData: action.data} 
        ]
        case REMOVE_TO_CART:
        //console.log('-------reduser---',action);
        State.pop();
          return[
              ...State,      
          ]
        

        default :
         return  State

  }
}