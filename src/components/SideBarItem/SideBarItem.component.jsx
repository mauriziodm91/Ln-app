const SideBarItem = ({ location, children }) => {
  return <div className={`sidebar__${location}`}>{children}</div>
}

export default SideBarItem
