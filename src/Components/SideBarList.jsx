const SideBarList = ({ projList }) => {
    
    return (
        <ul className="mt-8">
        {projList.map((project, key) => {
          return (
            <li>
              <button className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800">
                {project.title}
              </button>
            </li>
            )
        })}
      </ul>
    )
} 

export default SideBarList;