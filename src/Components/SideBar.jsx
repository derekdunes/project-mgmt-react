import SideBarList from "./SideBarList"
import SideBarHeader from "./SideBarHeader"

function SideBar(props) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <SideBarHeader {...props} />
      <SideBarList {...props}/>
    </aside>
  );
}

export default SideBar;
