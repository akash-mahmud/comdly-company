import { TokenRefreshLink } from 'apollo-link-token-refresh';
import { USER_COOKIE} from '../utils/session'
import {isJwtExpired} from 'jwt-check-expiration'
import { refreshToken } from './renew';

export const tokenRefreshLink=   new TokenRefreshLink({
    isTokenValidOrUndefined: async () => {
      console.log( String(localStorage.getItem(USER_COOKIE)));
      
        try {
          
          if (String(localStorage.getItem(USER_COOKIE)) ==='null' ||String(localStorage.getItem(USER_COOKIE))  ==='' ) {
            
return true            
          }else{

            return !isJwtExpired(localStorage.getItem(USER_COOKIE))
          }

        } catch (error) {
            return false            
        }

    },
    // @ts-ignore
    fetchAccessToken: async () => {
      try {
console.log("fetching token");
const token =await refreshToken() 
console.log(token);

// if (token==='expired' || token ==='unathorized') {
//   return ''

// }else{
  return token

// }


      } catch (error) {

        console.log(error);
        return ''
        
      }
    },
    handleFetch: (accessToken , operation) => {
      try {
        
        if (accessToken) {
          localStorage.setItem(USER_COOKIE , accessToken)
                    // store.dispatch(setRenewdToken(accessToken))
               
          
                  }else{
                    localStorage.setItem(USER_COOKIE , '')

                  }
          
      } catch (error) {
        console.log(error);
        localStorage.setItem(USER_COOKIE , '')

      }
   
 
    },
    handleResponse: (operation, accessTokenField) => (responsce:string) => {
      try {
        return {
          access_token: responsce
       }
      } catch (error) {
        console.log(error);
        return {
          access_token: ''
       }
      }
  
    },
    handleError: err => {
      try {
               // full control over handling token fetch Error
       console.warn('Your refresh token is invalid. Try to relogin');
       console.error(err);
       
       // When the browser is offline and an error occurs we don’t want the user to be logged out of course.
       // We also don’t want to delete a JWT token from the `localStorage` in this case of course.
       if (
         !navigator.onLine ||
         (err instanceof TypeError &&
           err.message === "Network request failed")
       ) {
         console.log("Offline -> do nothing 🍵")
       } else {
         console.log("Online -> log out 👋")

         // your custom action here
      }       
      } catch (error) {
        console.log(error);
        
      }

    }
  })
