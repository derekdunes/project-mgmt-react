const Project = () => {

    return (
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
           <div className="flex items-center justify-between">
               <h1 className="text-3xl font-bold text-stone-600 mb-2">
                    Learning React
               </h1>
               <button className="text-stone-600 hover:text-stone-950">Delete</button>
            </div>
            <p className="mb-4 text-stone-400">Dec 29, 2024</p>
            <p className="text-stone-600 whitespace-pre-wrap">
                Learn React from the group up.
                <br></br>
                <br></br>
                Start with the basics, finish the advanced knowledge
            </p>
        </header>
    )

}

export default Project;