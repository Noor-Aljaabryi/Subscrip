import React from "react";
import {
LayoutDashboard,
Users,
Dumbbell,
Utensils,
Palette,
Settings,
HelpCircle,
LogOut,
} from "lucide-react";

export default function Sidebar({ activePage, setActivePage }) {
const menuItems = [
{
id: "dashboard",
label: "لوحة التحكم",
icon: LayoutDashboard,
},
{
id: "clients",
label: "المشتركين",
icon: Users,
},
{
id: "visual-design",
label: "التصميم المرئي",
icon: Palette,
}, 
{
id: "design-system",
label: "نظام التصميم",
icon: Settings,
},
];

return (
<aside
   dir="rtl"
   className="w-64 min-h-screen bg-white border-l border-gray-200 flex flex-col shrink-0"
 >
<div className="px-5 py-5 border-b border-gray-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-emerald-700 flex items-center justify-center">
<Dumbbell size={21} className="text-white" />
</div>


      <div className="text-right">
        <h1 className="font-extrabold text-gray-800 text-lg">
          SuperFit
        </h1>

        <p className="text-xs text-gray-400">
          لوحة المدرب
        </p>
      </div>
    </div>
  </div>

  <nav className="flex-1 px-3 py-5">
    <p className="text-[11px] font-semibold text-gray-400 px-3 mb-3">
      القائمة الرئيسية
    </p>

    <div className="space-y-1">
      {menuItems.map(function (item) {
        const Icon = item.icon;
        const isActive = activePage === item.id;

        const buttonClass = isActive
          ? "w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm transition bg-emerald-50 text-emerald-700 font-bold"
          : "w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm transition text-gray-600 hover:bg-gray-50 hover:text-gray-800";

        return (
          <button
            key={item.id}
            type="button"
            onClick={function () {
              setActivePage(item.id);
            }}
            className={buttonClass}
          >
            <Icon size={19} />
            <span>{item.label}</span>
          </button>
        );
      })}
    </div>

    <p className="text-[11px] font-semibold text-gray-400 px-3 mt-7 mb-3">
      الخطط
    </p>

    <div className="space-y-1">
      <button
        type="button"
        className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition"
      >
        <Dumbbell size={19} />
        <span>خطط التمارين</span>
      </button>

      <button
        type="button"
        className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition"
      >
        <Utensils size={19} />
        <span>الخطط الغذائية</span>
      </button>
    </div>
  </nav>

  <div className="border-t border-gray-100 p-3">
    <button
      type="button"
      className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm text-gray-500 hover:bg-gray-50 transition"
    >
      <HelpCircle size={18} />
      <span>المساعدة</span>
    </button>

    <button
      type="button"
      className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm text-red-500 hover:bg-red-50 transition"
    >
      <LogOut size={18} />
      <span>تسجيل الخروج</span>
    </button>
  </div>
</aside>


);
}
