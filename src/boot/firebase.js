import Firebase from 'firebase/app'
import "firebase/auth"
// import 'firebase/firestore' // eslint-disable-line
import firebaseConfig from '../../firebase.conf'

// export default ({ Vue }) => {
//   // Initialize Firebase from settings
//   Firebase.initializeApp(firebaseConfig)

//   Vue.prototype.$firebase = Firebase
// }

let firebaseApp = Firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
export {firebaseAuth}