import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import {
	DocumentData,
	addDoc,
	collection,
	deleteDoc,
	doc,
	getFirestore,
	updateDoc
} from 'firebase/firestore'
import { useAuth } from './src/context/AuthContext'

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
export const db = getFirestore(firebase)

export async function deleteTodo(id: string) {
	await deleteDoc(doc(db, 'todos', id))
}

export async function toggleComplete(todo: DocumentData) {
	await updateDoc(doc(db, 'todos', todo.id), {
		complete: !todo.complete
	})
}

export const createTodo = async (title: string, userID:string) => {
	await addDoc(collection(db, 'todos'), {
		title: title,
		userID: userID,
		createdAt: Date.now(),
		completed: false
	})
}
