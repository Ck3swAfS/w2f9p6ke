import { onAuthStateChanged } from '@firebase/auth';
import { doc, getDoc, setDoc } from '@firebase/firestore';
import React, { createContext, useEffect, useState, useContext } from 'react';
import { auth, db } from '@/lib/firebase/firebase';
import type { User } from '@/lib/firebase/types/user';

type AuthContextProps = {
  user: User | null | undefined;
};

const AuthContext = createContext<AuthContextProps>({ user: undefined });

type Props = {
  children: React.ReactElement;
};

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null | undefined>(undefined);

  useEffect(() => {
    // ログイン状態を監視し、変化があったら発動
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // ログインしていた場合、ユーザーコレクションからユーザーデータを参照
        const ref = doc(db, `users/${firebaseUser.uid}`);
        const snap = await getDoc(ref);

        if (snap.exists()) {
          // ユーザーデータを取得して格納
          const appUser = (await getDoc(ref)).data() as User;
          setUser(appUser);
        } else {
          // ユーザーが未作成の場合、新規作成して格納
          const appUser: User = {
            id: firebaseUser.uid,
            name: firebaseUser.displayName!,
            photoURL: firebaseUser.photoURL!,
            email: firebaseUser.email!,
            createdAt: Date.now(),
          };

          // Firestoreにユーザーデータを保存
          setDoc(ref, appUser).then(() => {
            // 保存に成功したらコンテクストにユーザーデータを格納
            setUser(appUser);
          });
        }
      } else {
        // ログインしていない場合、ユーザー情報を空にする
        setUser(null);
      }

      // このコンポーネントが不要になったら監視を終了する
      return unsubscribe;
    });
  }, []);

  return <AuthContext.Provider value={{ user: user }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
