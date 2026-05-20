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
  LogOut,
  MessageSquare,
  Image,
  File,
  Settings,
  LayoutDashboard,
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

const chartData = [
  { name: "01 May", value: 0 },
  { name: "05 May", value: 250 },
  { name: "10 May", value: 350 },
  { name: "15 May", value: 500 },
  { name: "20 May", value: 450 },
  { name: "25 May", value: 800 },
  { name: "30 May", value: 950 },
];

const blogs = [
  {
    title: "Benefits of Pranayama",
    category: "Yoga",
    author: "Admin",
    date: "24 May 2025",
    status: "Published",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
  },
  {
    title: "Daily Yoga Routine",
    category: "Yoga",
    author: "Admin",
    date: "22 May 2025",
    status: "Published",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a",
  },
  {
    title: "Yoga For Stress Relief",
    category: "Health",
    author: "Admin",
    date: "21 May 2025",
    status: "Published",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
];

export default function Dashboard() {
  return (
    <div className="flex bg-[#f5f5f5] min-h-screen">

      {/* SIDEBAR */}

      <div className="w-[270px] bg-gradient-to-b from-orange-500 to-orange-600 text-white flex flex-col justify-between p-5">

        <div>
          <div className="flex flex-col items-center mb-10">
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

          <div className="space-y-3">

            <SidebarItem icon={<LayoutDashboard />} text="Dashboard" active />

            <SidebarItem icon={<Users />} text="Users" />

            <SidebarItem icon={<Flower2 />} text="Yoga Services" />

            <SidebarItem icon={<Dumbbell />} text="Yoga Classes" />

            <SidebarItem icon={<FileText />} text="Blogs" />

            <SidebarItem icon={<MessageSquare />} text="Testimonials" />

            <SidebarItem icon={<Bell />} text="Enquiries" />

            <SidebarItem icon={<Image />} text="Media" />

            <SidebarItem icon={<File />} text="Pages" />

            <SidebarItem icon={<Settings />} text="Settings" />
          </div>
        </div>

        <button className="flex items-center gap-3 text-xl">
          <LogOut /> Logout
        </button>
      </div>

      {/* MAIN CONTENT */}

      <div className="flex-1">

        {/* NAVBAR */}

        <div className="bg-white h-[80px] flex items-center justify-between px-8 shadow-sm">

          <div className="flex items-center gap-5">
            <Menu className="w-8 h-8" />
            <h1 className="text-4xl font-bold">Dashboard</h1>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative">
              <Bell className="w-7 h-7" />

              <div className="absolute -top-2 -right-2 bg-orange-500 text-white w-6 h-6 rounded-full text-sm flex items-center justify-center">
                3
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gray-300"></div>
              <p className="text-xl font-semibold">Admin</p>
            </div>
          </div>
        </div>

        <div className="p-6">

          {/* TOP CARDS */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            <StatsCard
              icon={<Users className="text-white w-8 h-8" />}
              title="Total Users"
              value="1,245"
              growth="12% this month"
            />

            <StatsCard
              icon={<FileText className="text-white w-8 h-8" />}
              title="Total Blogs"
              value="58"
              growth="8% this month"
            />

            <StatsCard
              icon={<Flower2 className="text-white w-8 h-8" />}
              title="Total Services"
              value="6"
              growth="No change"
            />

            <StatsCard
              icon={<Dumbbell className="text-white w-8 h-8" />}
              title="Total Classes"
              value="12"
              growth="5% this month"
            />
          </div>

          {/* CHART + ENQUIRIES */}

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

            <div className="xl:col-span-2 bg-white rounded-3xl p-6 shadow-sm">

              <div className="flex items-center justify-between mb-5">
                <h2 className="text-3xl font-bold">Site Overview</h2>

                <button className="border px-4 py-2 rounded-lg">
                  This Month
                </button>
              </div>

              <ResponsiveContainer width="100%" height={350}>
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

            {/* RECENT ENQUIRIES */}

            <div className="bg-white rounded-3xl shadow-sm p-6">

              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">
                  Recent Enquiries
                </h2>

                <button className="text-orange-500 font-semibold">
                  View All
                </button>
              </div>

              <div className="space-y-6">

                {[
                  "Rahul Sharma",
                  "Priya Verma",
                  "Amit Singh",
                  "Neha Gupta",
                ].map((user, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">

                      <div className="w-14 h-14 rounded-full bg-gray-300"></div>

                      <div>
                        <h3 className="font-bold text-lg">
                          {user}
                        </h3>

                        <p className="text-gray-500 text-sm">
                          {user.toLowerCase().replace(" ", "")}@gmail.com
                        </p>
                      </div>
                    </div>

                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RECENT BLOGS */}

          <div className="bg-white rounded-3xl shadow-sm mt-8 overflow-hidden">

            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-3xl font-bold">Recent Blogs</h2>

              <button className="text-orange-500 font-semibold">
                View All
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">

                <thead>
                  <tr className="text-left text-gray-500 border-b">
                    <th className="p-5">TITLE</th>
                    <th>CATEGORY</th>
                    <th>AUTHOR</th>
                    <th>DATE</th>
                    <th>STATUS</th>
                    <th>ACTION</th>
                  </tr>
                </thead>

                <tbody>

                  {blogs.map((blog, index) => (
                    <tr key={index} className="border-b">

                      <td className="p-5 flex items-center gap-4">
                        <img
                          src={blog.image}
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

                      <td>{blog.author}</td>

                      <td>{blog.date}</td>

                      <td>
                        <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm">
                          {blog.status}
                        </span>
                      </td>

                      <td>
                        <div className="flex gap-3">

                          <button className="p-2 border rounded-lg text-orange-500">
                            <Eye size={18} />
                          </button>

                          <button className="p-2 border rounded-lg text-orange-500">
                            <Pencil size={18} />
                          </button>

                          <button className="p-2 border rounded-lg text-red-500">
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

function SidebarItem({ icon, text, active }) {
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

function StatsCard({ icon, title, value, growth }) {
  return (
    <div className="bg-white rounded-3xl shadow-sm p-6 flex items-center gap-5">

      <div className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center">
        {icon}
      </div>

      <div>
        <p className="text-gray-500 text-lg">{title}</p>

        <h2 className="text-4xl font-bold mt-1">{value}</h2>

        <p className="text-green-600 mt-2">↑ {growth}</p>
      </div>
    </div>
  );
}