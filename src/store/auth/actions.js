// import firebase from "src/boot/firebase"

// import Firebase from 'firebase/app'
import Firebase from 'boot/firebase'
import 'firebase/auth'
import {firebaseAuth} from 'boot/firebase'

// const provider = new Firebase.auth.GoogleAuthProvider();

export async function signIn ({commit}, payload) {
    console.log(payload)
    let email = payload.email
    let password = payload.password

    await firebaseAuth.signInWithEmailAndPassword(email, password)
        .then(user => {
            commit('SET_USER', user)
            return user;
        })
        .catch(err => {
            throw err
        })
}

// export async function signInGoogle ({commit}) {

//     await firebaseAuth.signInWithPopup(provider)
//         .then(result => {
//             commit('SET_USER', result.user)
//             return result.user;
//         })
//         .catch(err => {
//             throw err
//         })
// }

export async function signOut ({commit}) {
    await firebaseAuth.signOut()
        .then(() => {
          commit('SET_USER', {})
        })
}

export async function registerUser ({}, payload) {
    // console.log("Register User to Firebase")
    // console.log(payload)
    await firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
    .then(response => {
        console.log(response)
        return response
    })
    .catch(error => {
        console.log(error.message)
        throw error
    })
}

export function handleAuthStateChanged({commit}) {
    // firebaseAuth.onAuthStateChanged(user =>{
    //     if (user) {
    //         commit('SET_USER', user)
    //     }
    //     else {
    //         commit('SET_USER', {})
    //     }
    //     return user;
    // })
}