import React from "react";
import {
  Search,
  Bell,
  Plus,
  Send,
  Save,
  ChevronDown,
  Calendar,
  RotateCcw,
  Dumbbell,
  Utensils,
  Trash2,
} from "lucide-react";

const meals = [
  {
    id: "breakfast",
    title: "الإفطار",
    calories: 662,
    items: [
      {
        name: "شوفان الحبة الكاملة",
        qty: "80 جرام",
        cal: 300,
        macros: "ب: 10غ ك: 54غ د: 5غ",
      },
      {
        name: "بيض بلدي مسلوق",
        qty: "3 حبات",
        cal: 216,
        macros: "ب: 18.9غ ك: 1.2غ د: 14.7غ",
      },
      {
        name: "مكسرات لوز ني",
        qty: "1 حبة",
        cal: 216,
        macros: "ب: 18.9غ ك: 1.2غ د: 14.7غ",
      },
    ],
  },
  {
    id: "lunch",
    title: "الغداء",
    calories: 662,
    items: [
      {
        name: "صدر دجاج مشوي متبل",
        qty: "3 حبات",
        cal: 216,
        macros: "ب: 18.9غ ك: 1.2غ د: 14.7غ",
      },
      {
        name: "أرز بسمتي أبيض",
        qty: "1 حبة",
        cal: 216,
        macros: "ب: 18.9غ ك: 1.2غ د: 14.7غ",
      },
      {
        name: "سلطة خضراء مشكلة بزيت الزيتون",
        qty: "1 حبة",
        cal: 216,
        macros: "ب: 18.9غ ك: 1.2غ د: 14.7غ",
      },
    ],
  },
  {
    id: "dinner",
    title: "العشاء",
    calories: 662,
    items: [
      {
        name: "بطاطا حلوة مشوية",
        qty: "1 حبة",
        cal: 216,
        macros: "ب: 18.9غ ك: 1.2غ د: 14.7غ",
      },
      {
        name: "صدر دجاج مشوي متبل",
        qty: "1 حبة",
        cal: 216,
        macros: "ب: 18.9غ ك: 1.2غ د: 14.7غ",
      },
    ],
  },
  {
    id: "snacks",
    title: "الوجبات الخفيفة",
    calories: 662,
    items: [
      {
        name: "زبادي يوناني مع توت",
        qty: "200 مل",
        cal: 130,
        macros: "ب: 21غ ك: 8غ د: 0.5غ",
      },
      {
        name: "مكيال واي بروتين بعد التمرين",
        qty: "1 مكيال",
        cal: 120,
        macros: "ب: 25غ ك: 3غ د: 0.5غ",
      },
    ],
  },
];

const macroGoals = [
  {
    label: "السعرات اليومية المستهدفة",
    value: "2850",
    unit: "سعرة حرارية",
  },
  {
    label: "البروتين المستهدف",
    value: "180",
    unit: "جرام / يوم (المخطط: 186جم)",
  },
  {
    label: "الكربوهيدرات المستهدفة",
    value: "340",
    unit: "جرام / يوم (المخطط: 186جم)",
  },
  {
    label: "الدهون الصحية المستهدفة",
    value: "75",
    unit: "جرام / يوم (المخطط: 186جم)",
  },
];

function MealCard({ meal }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <button className="flex items-center gap-1 text-emerald-600 text-sm font-medium hover:text-emerald-700">
          <Plus size={16} />
          <span>إضافة طعام</span>
        </button>

        <div className="text-right">
          <h3 className="font-bold text-gray-800">{meal.title}</h3>
          <span className="text-xs text-gray-400">
            {meal.calories} سعرة حرارية
          </span>
        </div>
      </div>

      <div className="space-y-3">
        {meal.items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between border-t border-gray-100 pt-3 first:border-t-0 first:pt-0"
          >
            <button className="text-gray-300 hover:text-red-500 transition-colors">
              <Trash2 size={16} />
            </button>

            <div className="text-right">
              <p className="text-sm font-medium text-gray-800">
                {item.name}
              </p>

              <p className="text-xs text-gray-400">
                {item.qty}، {item.cal} سعرة حرارية ({item.macros})
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MacroCard({ goal }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 text-center shadow-sm">
      <p className="text-2xl font-bold text-gray-800">{goal.value}</p>

      <p className="text-xs text-gray-400 mt-1">{goal.unit}</p>

      <p className="text-xs text-gray-500 mt-2">{goal.label}</p>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="bg-gray-50 min-h-full p-6" dir="rtl" lang="ar">
      {/* ================= بيانات الخطة والمشترك ================= */}

      <div className="flex items-center justify-between bg-white border border-gray-200 rounded-2xl px-6 py-4 mb-4">
        {/* المشترك + الخطة */}

        <div className="flex items-center gap-6">
          {/* صندوق المشترك */}

          <div className="text-right border border-gray-200 rounded-xl px-4 py-3 min-w-[330px]">
            <p className="text-xs text-gray-400 mb-1">
              اختر المشترك لإعداد أو تعديل خطته:
            </p>

            <p className="text-sm text-gray-800">
              <span className="font-extrabold">أحمد الشمري</span>{" "}
              <span className="font-normal text-gray-500">
                - (بناء كتلة عضلية نقية وزيادة القوة)
              </span>
            </p>
          </div>

          {/* الخط الفاصل */}

          <div className="w-px h-14 bg-gray-200" />

          {/* عنوان الخطة */}

          <div className="text-right">
            <p className="font-bold text-gray-800">
              خطة التضخيم العضلي المكثف (Push / Pull / Legs)
            </p>

            <p className="text-xs text-gray-400 mt-1">
              الحالة سارية ونشطة - آخر تحديث: اليوم
            </p>
          </div>
        </div>

        {/* أزرار الإجراءات */}

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-medium px-4 py-2 rounded-lg transition">
            <Send size={16} />
            <span>إرسال الخطة للمشترك</span>
          </button>

          <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-600 text-sm font-medium px-3 py-2 rounded-lg hover:bg-gray-50 transition">
            <Save size={14} />
            <span>حفظ كمسودة</span>
          </button>

          <div className="flex flex-col items-center justify-center w-14 h-14 rounded-full border border-emerald-200 text-emerald-600">
            <span className="text-[10px] leading-none">إصدار</span>
            <span className="text-xs font-bold leading-none mt-1">
              v4.0
            </span>
          </div>
        </div>
      </div>

      {/* ================= أزرار إنشاء الخطط ================= */}

      <div className="flex items-center justify-between mb-6">
        <button className="flex items-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg">
          <Dumbbell size={16} />
          <span>إنشاء خطة التمارين الأسبوعية</span>
        </button>

        <button className="flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-medium px-5 py-2.5 rounded-lg">
          <Utensils size={16} />
          <span>إنشاء الخطة الغذائية والماكروز</span>
        </button>

        <button className="flex items-center gap-2 text-gray-400 hover:text-gray-600 text-sm">
          <span>إصدارات الخطة السابقة (4)</span>
          <RotateCcw size={14} />
        </button>
      </div>

      {/* ================= الأهداف اليومية ================= */}

      <div className="flex items-center justify-between mb-3">
        <p className="text-xs text-gray-400">
          إجمالي السعرات المخططة حاليا: 2106 / 2850 سعرة
        </p>

        <h2 className="font-bold text-gray-800">
          الأهداف اليومية للماكروز والسعرات
        </h2>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-8">
        {macroGoals.map((goal, idx) => (
          <MacroCard key={idx} goal={goal} />
        ))}
      </div>

      {/* ================= الوجبات ================= */}

      <div className="grid grid-cols-2 gap-4">
        {meals.map((meal) => (
          <MealCard key={meal.id} meal={meal} />
        ))}
      </div>
    </div>
  );
}