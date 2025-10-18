import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <Link to="/SignIn">
        <button className="bg-[#0A157A] py-[14px] px-[26px] rounded-[8px] text-[#FBFBFB]">
          Sign In
        </button>
      </Link>
    </div>
  );
};

export default SignIn;
