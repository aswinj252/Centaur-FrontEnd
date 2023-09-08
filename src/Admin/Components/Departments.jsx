import axios from "../utils/axios"
import AddDepartment from "./Modals/AddDepartment"
import { useEffect, useState } from "react"

function Departments() {
	const [Modal,setModal] = useState(false)
	const [ dep,SetDep] = useState([])
	
 	const onClose = () =>{
		setModal(false)
	}
	useEffect(()=>{
        getAllDep();

	},[Modal])
	const getAllDep = () =>{
		axios.get('/allDep').then ((response)=>{
			console.log(response);
			SetDep(response.data.department.departments)
		})
	}

   return (
    <div className="p-4 sm:ml-64">
    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
	<button
	onClick={() =>{
		setModal(true)
	}}
    data-modal-target="authentication-modal"
    data-modal-toggle="authentication-modal"
    className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    type="button"
  >
    Add Department
  </button>
	{Modal && <AddDepartment onClose ={onClose}/>}
    <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
	<div className="container p-6 mx-auto space-y-8">
		<div className="space-y-2 text-center">
			<h2 className="text-3xl font-bold">Our Departments</h2>
			<p className="font-serif text-sm dark:text-gray-400">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
		</div>
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">

			{ dep.map((obj,index)=>
				<  article key = {index}className="flex flex-col dark:bg-gray-900">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={obj.url} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{obj.department}</h3>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">{obj.description}</a>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
						<span>June 1, 2020</span>
						<span>2.1K views</span>
					</div>
				</div>
			</article>
		)}
			
		</div>
	</div>
</section>
    </div>
  </div>
  )
}

export default Departments