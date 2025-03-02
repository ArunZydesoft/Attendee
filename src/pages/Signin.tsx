import BannerImage from "../components/BannerImage";
import userImg from "../assets/img/user.png";

const Signin = () => {
  return (
    <div className="w-full h-screen max-w-4xl bg-white md:flex gap-5 mx-auto">
      <div className="md:w-1/2 flex flex-col items-center justify-center relative p-15 md:p-5">
        <BannerImage></BannerImage>
      </div>

      <div className="md:w-1/2 bg-white flex flex-col items-center justify-center p-15 md:p-5">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Sign in to your account
        </h2>
        <p className="mb-4 text-gray-500">
          Attendees can access their registration at any time and have the ability to update contact, print a receipt invite others and hotel informations
        </p>
        <form action="#" method="POST" className="w-full">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 transition mb-4"
          >
            Sign in
          </button>
        </form>
        <a href="#" className="text-sm text-blue-600 hover:underline block w-max">
          Forgot password?
        </a>
        <div className="w-full flex items-center py-5 px-3 justify-center gap-5 mt-10" style={{background:'#DBE6F2'}}>
          <div>
            New attendee registration
          </div>
          <div>
            <img src={userImg} alt="User" />
          </div>
        </div>
      </div>
    </div>    
  );
};

export default Signin;
