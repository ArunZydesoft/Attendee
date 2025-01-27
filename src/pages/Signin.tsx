import BannerImage from "../components/BannerImage";

const Signin = () => {
  return (
    <div className="h-screen bg-white-100 ">
      <div className="flex h-full mx-auto px-8">
        {/* Left Section */}

        <div className="w-1/2 text-white flex flex-col items-center justify-center relative">
          <BannerImage></BannerImage>
        </div>

        {/* Right Section  */}
        <div className="w-1/2 bg-white flex items-center justify-center">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Sign In
            </h2>
            <form action="#" method="POST" className="space-y-4">
              <div>
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
              <div>
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
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 transition"
              >
                Sign in
              </button>
            </form>

            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
