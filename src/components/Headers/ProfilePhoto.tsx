import { BsPersonCircle } from "react-icons/bs";
import { IconContext } from "react-icons";

const ProfilePhoto = () => {
  return (
    <>
      <IconContext.Provider value={{ size: "20", color: "#c0c0c0" }}>
        <span className="flex justify-center   bg-white rounded-full p-2">
          <BsPersonCircle />
        </span>
      </IconContext.Provider>
    </>
  );
};

export default ProfilePhoto;
