import Firebase from 'firebase/app'
import "firebase/auth"
import firebaseConfig from '../../firebase.conf'

let firebaseApp = Firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
export {firebaseAuth}