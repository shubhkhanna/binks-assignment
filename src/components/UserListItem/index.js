const UserListItem = ({ userName, onClick, thumbnail }) => {
  return (
    <li className="flex flex-row">
      <div
        className="select-none cursor-pointer hover:bg-gray-50 flex flex-1 items-center p-4"
        onClick={onClick}
      >
        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
          <div className="block relative">
            <img
              alt="profile"
              src={thumbnail}
              className="mx-auto object-cover rounded-full h-10 w-10"
            />
          </div>
        </div>
        <div className="flex-1 pl-1">
          <div className="font-medium dark:text-white">{userName}</div>
        </div>
      </div>
    </li>
  );
};

export default UserListItem;
