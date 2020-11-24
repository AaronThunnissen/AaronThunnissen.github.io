import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState} from 'react-firebase-hooks/auth';
import { useCollectionData} from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyC4wyMsN2lHKLHbbaijoK4016Csiqxs1zk",
  authDomain: "chatapp-a4eb8.firebaseapp.com",
  databaseURL: "https://chatapp-a4eb8.firebaseio.com",
  projectId: "chatapp-a4eb8",
  storageBucket: "chatapp-a4eb8.appspot.com",
  messagingSenderId: "302119401461",
  appId: "1:302119401461:web:309a00c506893fdd1e12bc",
  measurementId: "G-H7DTBWXCT2"
})

const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {
const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
      </header>
      <section>
        {user ? <ChatRoom /> : <SignIn/>}
      </section>
    </div>
  );
}


function SignIn(){
  const signInWithGoogle=()=>{
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }


  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function SignOut(){
return auth.currentUser && (
  <button onClick={() => auth.signOut()}>Sign Out</button>
)
}

function ChatRoom(){
  
}


export default App;
