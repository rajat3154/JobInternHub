import React from "react";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Signup = () => {
<<<<<<< HEAD
=======
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    dateofbirth: "",
    password: "",
    role: "",
    status: "",
  });

  const { loading } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("dateofbirth", input.dateofbirth);
    formData.append("password", input.password);
    formData.append("role", input.role);
    formData.append("status", input.status);

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

           if (res.data.success) {
              navigate("/login");
             toast.success(res.data.message);
           }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

>>>>>>> a7eaefad25d141f28c29bf6fa787de67953a72e1
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center bg-black min-h-screen p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {/* Student Signup Card */}
          <div className="bg-black bg-opacity-90 text-white border border-blue-600 rounded-lg shadow-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-blue-400">
              Sign Up as Student
            </h2>
            <p className="mt-2 text-gray-300">
              Create an account to explore career opportunities.
            </p>
            <Link to="/student/signup">
              <Button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg">
                Sign Up as Student
              </Button>
            </Link>
          </div>

          {/* Recruiter Signup Card */}
          <div className="bg-black bg-opacity-90 text-white border border-green-600 rounded-lg shadow-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-green-400">
              Sign Up as Recruiter
            </h2>
            <p className="mt-2 text-gray-300">
              Create an account to find the best talent.
            </p>
            <Link to="/recruiter/signup">
              <Button className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg">
                Sign Up as Recruiter
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
