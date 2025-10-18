import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <Link to="/SignUp">
        <button className="border border-[#0A157A] text-[#0A157A] py-[14px] px-[26px] rounded-[8px] cursor-pointer">
          Sign Up
        </button>
      </Link>
    </div>
  );
};

export default SignUp;
