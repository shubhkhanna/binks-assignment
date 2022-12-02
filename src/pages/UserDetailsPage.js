import moment from "moment/moment";
import { useLocation } from "react-router-dom";
import UserDetailItem from "../components/UserDetailItem";
import { addressUtil, nameUtil } from "../utils/stringUtils";
import {
  AiOutlineMail,
  AiOutlineUser,
  AiOutlineCalendar,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";

const UserDetailsPage = () => {
  const location = useLocation();

  const { state } = location;

  const { dob, name, email, gender, picture, location: userLocation } = state;

  return (
    <div className="flex flex-col pt-10 mx-auto items-center justify-center bg-gray-50 h-screen">
      <div className="flex flex-col justify-center max-w-sm p-6 shadow-md rounded-xl sm:px-12 bg-white">
        <img
          src={picture?.large}
          alt="profile pic"
          className="w-32 h-32 mx-auto rounded-full aspect-square"
        />
        <div className="space-y-4 text-center divide-y divide-gray-700">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl capitalize">
              {nameUtil(name)}
            </h2>
            <UserDetailItem text={email} children={<AiOutlineMail />} />
            <div className="flex flex-row justify-center">
              <UserDetailItem
                classNames="capitalize"
                text={gender}
                children={<AiOutlineUser />}
              />
              <UserDetailItem
                rootClassNames="ml-2 my-1"
                classNames="capitalize"
                text={moment(dob?.date).format("DD-MM-YYYY")}
                children={<AiOutlineCalendar />}
              />
            </div>

            <UserDetailItem
              text={addressUtil(userLocation)}
              classNames="capitalize"
              children={<GoLocation size={20} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;
