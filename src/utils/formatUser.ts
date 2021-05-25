import firebase from '@lib/firebase';

export function formatUser(user: firebase.User) {
    const formattedUser = {
        name: user.displayName,
        photoUrl: user.photoURL,
        email: user.email,
        isEmailVerified: user.emailVerified,
        uid: user.uid,
    }

    return formattedUser;
}