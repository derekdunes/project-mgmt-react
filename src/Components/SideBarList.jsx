const SideBarList = ({ selectedIndex, projectList, handleProjectClick }) => {
  
  const isNotNullorUndefined = projectList.length > 0 && (selectedIndex !== null && selectedIndex !== undefined);

    return (
        <ul className="mt-8">
        {projectList.map((project, index) => {

          let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
          
          console.log(isNotNullorUndefined);

          if(isNotNullorUndefined && index === selectedIndex) {
            cssClasses += ' bg-stone-800 text-stone-200'
          } else {
            cssClasses += ' text-stone-400'
          }

          return (
            <li key={index}>
              <button 
                onClick={() => handleProjectClick(index)}
                className={cssClasses}>
                {project.title}
              </button>
            </li>
            )
        })}
      </ul>
    )
} 

export default SideBarList;