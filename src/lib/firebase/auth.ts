import { getAuth, signInWithRedirect, GoogleAuthProvider, signOut } from 'firebase/auth';
import firebaseApp from './firebase';

const provider = new GoogleAuthProvider();

export function login(): void {
  const auth = getAuth(firebaseApp);
  signInWithRedirect(auth, provider);
}

export function logout(): Promise<void> {
  return new Promise((resolve, reject) => {
    const auth = getAuth(firebaseApp);
    signOut(auth)
      .then(() => resolve())
      .catch((error) => reject(error));
  });
}
