const UserDetailItem = ({ text, classNames, children, rootClassNames }) => {
  return (
    <div
      className={`flex flex-row items-center justify-center ${rootClassNames}`}
    >
      {children}
      <p
        className={`px-2 text-xs sm:text-base hover:text-blue-600 ${classNames}`}
      >
        {text}
      </p>
    </div>
  );
};

export default UserDetailItem;
