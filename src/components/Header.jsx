import React from "react";
import {
Search,
Bell,
Plus,
Calendar,
ChevronDown,
} from "lucide-react";

export default function Header() {
return ( <header
   dir="rtl"
   className="w-full bg-white border-b border-gray-200 px-6 py-3"
 > <div className="flex items-center justify-between gap-6">

    {/* البحث */}
    <div className="relative w-96">
      <Search
        size={18}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        placeholder="ابحث عن مشترك، هدف، أو بريد..."
        className="w-full bg-gray-50 border border-gray-200 rounded-lg pr-10 pl-4 py-2.5 text-sm text-gray-700 outline-none"
      />
    </div>

    {/* الأزرار */}
    <div className="flex items-center gap-3">

      {/* التاريخ */}
      <button
        type="button"
        className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 text-sm px-4 py-2.5 rounded-lg"
      >
        <Calendar size={16} className="text-gray-400" />
        <span>الأربعاء ١٦ سبتمبر ٢٠٢٦</span>
        <ChevronDown size={14} className="text-gray-400" />
      </button>

      {/* خطة جديدة */}
      <button
        type="button"
        className="flex items-center gap-2 bg-emerald-700 text-white text-sm font-medium px-4 py-2.5 rounded-lg"
      >
        <Plus size={17} />
        <span>خطة جديدة</span>
      </button>

      {/* الإشعارات */}
      <button
        type="button"
        aria-label="الإشعارات"
        className="relative flex items-center justify-center w-10 h-10 rounded-lg text-gray-500"
      >
        <Bell size={20} />

        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white" />
      </button>

      {/* صورة المستخدم */}
      <button
        type="button"
        aria-label="حساب المستخدم"
        className="w-10 h-10 rounded-full bg-gray-200 border border-gray-300 overflow-hidden"
      >
        <div className="w-full h-full bg-gray-300" />
      </button>

    </div>
  </div>
</header>


);
}
