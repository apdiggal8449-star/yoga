import React, {
  useEffect,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import {
  Users,
  FileText,
  Flower2,
  Dumbbell,
  Bell,
  Eye,
  Pencil,
  Trash2,
  Menu,
  X,
  LogOut,
  MessageSquare,
  Image,
  File,
  Settings,
  LayoutDashboard,
  User,
} from "lucide-react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function Dashboard() {

  const navigate = useNavigate();

  // ================= STATES =================

  const [mobileMenu, setMobileMenu] =
    useState(false);

  const [stats, setStats] =
    useState({
      totalUsers: 0,
      totalBlogs: 0,
      totalServices: 6,
      totalClasses: 6,
    });

  const [blogs, setBlogs] =
    useState([]);

  const [enquiries, setEnquiries] =
    useState([]);

  const [chartData] = useState([
    { name: "01 May", value: 0 },
    { name: "05 May", value: 250 },
    { name: "10 May", value: 350 },
    { name: "15 May", value: 500 },
    { name: "20 May", value: 450 },
    { name: "25 May", value: 800 },
    { name: "30 May", value: 950 },
  ]);

  // ================= FETCH =================

  useEffect(() => {

    fetchBlogs();

    fetchEnquiries();

  }, []);

  // ================= FETCH BLOGS =================

  const fetchBlogs = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/blog"
      );

      setBlogs(res.data.blogs);

      setStats((prev) => ({
        ...prev,
        totalBlogs:
          res.data.blogs.length,
      }));

    } catch (error) {

      console.log(error);
    }
  };

  // ================= FETCH ENQUIRIES =================

  const fetchEnquiries = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/enquiry/recent"
      );

      setEnquiries(
        res.data.enquiries
      );

      setStats((prev) => ({
        ...prev,
        totalUsers:
          res.data.enquiries.length,
      }));

    } catch (error) {

      console.log(error);
    }
  };

  // ================= DELETE BLOG =================

  const deleteBlog = async (id) => {

    try {

      const token =
        localStorage.getItem(
          "token"
        );

      await axios.delete(
        `http://localhost:5000/api/blog/${id}`,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      alert("Blog Deleted");

      fetchBlogs();

    } catch (error) {

      console.log(error);

      alert(
        error?.response?.data
          ?.message
      );
    }
  };

  // ================= LOGOUT =================

  const handleLogout = () => {

    localStorage.removeItem(
      "token"
    );

    localStorage.removeItem(
      "role"
    );

    navigate("/adminlogin");
  };

  return (

    <div className="flex bg-[#f5f5f5] min-h-screen overflow-hidden">

      {/* ================= MOBILE OVERLAY ================= */}

      {mobileMenu && (

        <div
          onClick={() =>
            setMobileMenu(false)
          }
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        ></div>
      )}

      {/* ================= SIDEBAR ================= */}

      <div
        className={`fixed lg:static top-0 left-0 z-50 h-screen overflow-y-auto w-[270px] bg-gradient-to-b from-orange-500 to-orange-600 text-white flex flex-col justify-between p-5 transition-all duration-300 ${
          mobileMenu
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >

        <div>

          {/* LOGO */}

          <div className="flex flex-col items-center mb-10">

            <div className="flex items-center justify-between w-full lg:hidden mb-5">

              <h2 className="text-2xl font-bold">
                Menu
              </h2>

              <X
                className="cursor-pointer"
                onClick={() =>
                  setMobileMenu(false)
                }
              />
            </div>

            <div className="w-24 h-24 rounded-full border-4 border-white flex items-center justify-center text-5xl font-bold">

              ॐ
            </div>

            <h1 className="text-4xl font-bold mt-4">

              Om Yogshala
            </h1>

            <p className="text-xl mt-1">

              Admin Panel
            </p>
          </div>

          {/* MENU */}

          <div className="space-y-3 pb-10">

            <SidebarItem
              icon={<LayoutDashboard />}
              text="Dashboard"
              active
            />

            <SidebarItem
              icon={<Users />}
              text="Users"
            />

            <SidebarItem
              icon={<Flower2 />}
              text="Yoga Services"
            />

            <SidebarItem
              icon={<Dumbbell />}
              text="Yoga Classes"
            />

            <SidebarItem
              icon={<FileText />}
              text="Blogs"
            />
             <SidebarItem
              icon={<FileText />}
              text="Create"
            />
     {/*
            <SidebarItem
              icon={<MessageSquare />}
              text="Testimonials"
            />

            <SidebarItem
              icon={<Bell />}
              text="Enquiries"
            />

            <SidebarItem
              icon={<Image />}
              text="Media"
            />

            <SidebarItem
              icon={<File />}
              text="Pages"
            />

            <SidebarItem
              icon={<Settings />}
              text="Settings"
            />   */}
           </div>
        </div>

        {/* LOGOUT */}

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 text-xl mt-10"
        >

          <LogOut />

          Logout
        </button>
      </div>

      {/* ================= MAIN CONTENT ================= */}

      <div className="flex-1 overflow-y-auto h-screen">

        {/* ================= NAVBAR ================= */}

        <div className="bg-white h-[80px] flex items-center justify-between px-4 md:px-8 shadow-sm sticky top-0 z-30">

          <div className="flex items-center gap-5">

            <Menu
              className="w-8 h-8 lg:hidden cursor-pointer"
              onClick={() =>
                setMobileMenu(true)
              }
            />

            <h1 className="text-2xl md:text-4xl font-bold">

              Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-6">

            <div className="relative">

              <Bell className="w-7 h-7" />

              <div className="absolute -top-2 -right-2 bg-orange-500 text-white w-6 h-6 rounded-full text-sm flex items-center justify-center">

                {enquiries.length}
              </div>
            </div>

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">

                <User className="text-orange-500" />
              </div>

              <p className="text-lg font-semibold hidden md:block">

                Admin
              </p>
            </div>
          </div>
        </div>

        {/* ================= CONTENT ================= */}

        <div className="p-4 md:p-6">

          {/* ================= STATS ================= */}

         {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            <StatsCard
              icon={
                <Users className="text-white w-8 h-8" />
              }
              title="Total Enquiries"
              value={stats.totalUsers}
              growth="Live Data"
            />

            <StatsCard
              icon={
                <FileText className="text-white w-8 h-8" />
              }
              title="Total Blogs"
              value={stats.totalBlogs}
              growth="Live Data"
            />

            <StatsCard
              icon={
                <Flower2 className="text-white w-8 h-8" />
              }
              title="Total Services"
              value={stats.totalServices}
              growth="Dynamic"
            />

            <StatsCard
              icon={
                <Dumbbell className="text-white w-8 h-8" />
              }
              title="Total Classes"
              value={stats.totalClasses}
              growth="Dynamic"
            />
          </div>*/}

          {/* ================= CHART ================= */}

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

            <div className="xl:col-span-2 bg-white rounded-3xl p-6 shadow-sm">

              <div className="flex items-center justify-between mb-5">

                <h2 className="text-3xl font-bold">

                  Site Overview
                </h2>

                <button className="border px-4 py-2 rounded-lg">

                  This Month
                </button>
              </div>

              <ResponsiveContainer
                width="100%"
                height={350}
              >

                <AreaChart data={chartData}>

                  <CartesianGrid strokeDasharray="3 3" />

                  <XAxis dataKey="name" />

                  <YAxis />

                  <Tooltip />

                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#f97316"
                    fill="#fdba74"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* ================= ENQUIRIES ================= */}

            <div className="bg-white rounded-3xl shadow-sm p-6">

              <div className="flex justify-between items-center mb-6">

                <h2 className="text-2xl font-bold">

                  Recent Enquiries
                </h2>
              </div>

              <div className="space-y-6">

                {enquiries
                  .slice(0, 5)
                  .map((user, index) => (

                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >

                      <div className="flex items-center gap-3">

                        <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center">

                          <User className="text-orange-500" />
                        </div>

                        <div>

                          <h3 className="font-bold text-lg">

                            {user.name}
                          </h3>

                          <p className="text-gray-500 text-sm">

                            {user.email}
                          </p>
                        </div>
                      </div>

                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* ================= BLOG TABLE ================= */}

          <div className="bg-white rounded-3xl shadow-sm mt-8 overflow-hidden">

            <div className="flex justify-between items-center p-6 border-b">

              <h2 className="text-3xl font-bold">

                Recent Blogs
              </h2>
            </div>

            <div className="overflow-x-auto">

              <table className="w-full min-w-[800px]">

                <thead>

                  <tr className="text-left text-gray-500 border-b">

                    <th className="p-5">
                      TITLE
                    </th>

                    <th>
                      CATEGORY
                    </th>

                    <th>
                      DATE
                    </th>

                    <th>
                      STATUS
                    </th>

                    <th>
                      ACTION
                    </th>
                  </tr>
                </thead>

                <tbody>

                  {blogs
                    .slice(0, 8)
                    .map((blog) => (

                      <tr
                        key={blog._id}
                        className="border-b"
                      >

                        <td className="p-5 flex items-center gap-4">

                          <img
                            src={`http://localhost:5000/${blog.image}`}
                            alt=""
                            className="w-16 h-16 rounded-lg object-cover"
                          />

                          <span className="font-semibold text-lg">

                            {blog.title}
                          </span>
                        </td>

                        <td>

                          <span className="bg-orange-100 text-orange-500 px-4 py-2 rounded-full text-sm">

                            {blog.category}
                          </span>
                        </td>

                        <td>

                          {new Date(
                            blog.createdAt
                          ).toLocaleDateString()}
                        </td>

                        <td>

                          <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm">

                            Published
                          </span>
                        </td>

                        <td>

                          <div className="flex gap-3">

                            <button className="p-2 border rounded-lg text-orange-500">

                              <Eye size={18} />
                            </button>

                            <button
                              onClick={() =>
                                navigate(
                                  `/admin/update/${blog._id}`
                                )
                              }
                              className="p-2 border rounded-lg text-orange-500"
                            >

                              <Pencil size={18} />
                            </button>

                            <button
                              onClick={() =>
                                deleteBlog(blog._id)
                              }
                              className="p-2 border rounded-lg text-red-500"
                            >

                              <Trash2 size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ================= SIDEBAR ITEM =================

function SidebarItem({
  icon,
  text,
  active,
}) {

  return (

    <button
      className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-lg font-medium transition ${
        active
          ? "bg-orange-600"
          : "hover:bg-orange-500"
      }`}
    >

      {icon}

      {text}
    </button>
  );
}

// ================= STATS CARD =================

function StatsCard({
  icon,
  title,
  value,
  growth,
}) {

  return (

    <div className="bg-white rounded-3xl shadow-sm p-6 flex items-center gap-5">

      <div className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center">

        {icon}
      </div>

      <div>

        <p className="text-gray-500 text-lg">

          {title}
        </p>

        <h2 className="text-4xl font-bold mt-1">

          {value}
        </h2>

        <p className="text-green-600 mt-2">

          ↑ {growth}
        </p>
      </div>
    </div>
  );
}