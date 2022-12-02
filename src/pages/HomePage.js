import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserListItem from "../components/UserListItem";
import { nameUtil } from "../utils/stringUtils";

const HomePage = () => {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  //   Fetching users data from the API
  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get(
        "https://randomuser.me/api/?results=10&format=prettyjson"
      );
      setUsers(data.results);
    };
    fetchUsers();
  }, []);

  //   User click handler
  const onUserClick = (user) => {
    navigate(`/user/${user?.login?.uuid}`, { state: user });
  };

  return (
    <div className="flex flex-col container max-w-md mt-10 mx-auto w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow mb-5">
      <h1 className="text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white pt-2">
        Users List
      </h1>
      <ul className="flex flex-col divide-y w-full">
        {users.length > 0 &&
          users.map((user) => (
            <UserListItem
              key={user.login?.uuid}
              thumbnail={user.picture?.thumbnail}
              userName={nameUtil(user.name)}
              onClick={() => onUserClick(user)}
            />
          ))}
      </ul>
    </div>
  );
};

export default HomePage;
