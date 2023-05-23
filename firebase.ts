import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyCnad0iZf1GUgkCb4Cdn_NsTdqRkT4RnR4',

	authDomain: 'crud-tp3.firebaseapp.com',

	projectId: 'crud-tp3',

	storageBucket: 'crud-tp3.appspot.com',

	messagingSenderId: '839507414089',

	appId: '1:839507414089:web:f4f5ba987a27512a7fc398',

	measurementId: 'G-9EF1PFP9P3'
}

export const firebase = initializeApp(firebaseConfig)
export const auth = getAuth(firebase)
export const analytics = getAnalytics(firebase)
