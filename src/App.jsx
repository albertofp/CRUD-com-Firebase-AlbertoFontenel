import './App.css'
import { AuthProvider } from './context/AuthContext'
import MainContainer from './components/MainContainer'

export default function App() {
	return (
		<AuthProvider>
			<main className='flex flex-col items-center justify-center w-full h-[100dvh] bg-slate-100'>
				<div className='flex-row  flex'>
					<h1 className='p-2 text-4xl mb-1 mt-4 text-slate-900'>
						My Todo List
					</h1>
					<span className='font-light italic inline-block text-sm'>
						github.com/albertofp
					</span>
				</div>
				<MainContainer />
			</main>
		</AuthProvider>
	)
}
