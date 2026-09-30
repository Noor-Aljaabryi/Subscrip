import React, { useState, useEffect } from "react";
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
  X,
} from "lucide-react";

const meals = [
  {
    id: "breakfast",
    title: "الإفطار",
    calories: 662,
    items: [
      { name: "شوفان الحبة الكاملة", qty: "80 جرام", cal: 300, macros: "ب: 10غ ك: 54غ د: 5غ" },
      { name: "بيض بلدي مسلوق", qty: "3 حبات", cal: 216, macros: "ب: 18.9غ ك: 1.2غ د: 14.7غ" },
      { name: "مكسرات لوز ني", qty: "1 حبة", cal: 216, macros: "ب: 18.9غ ك: 1.2غ د: 14.7غ" },
    ],
  },
  {
    id: "lunch",
    title: "الغداء",
    calories: 662,
    items: [
      { name: "صدر دجاج مشوي متبل", qty: "3 حبات", cal: 216, macros: "ب: 18.9غ ك: 1.2غ د: 14.7غ" },
      { name: "أرز بسمتي أبيض", qty: "1 حبة", cal: 216, macros: "ب: 18.9غ ك: 1.2غ د: 14.7غ" },
      { name: "سلطة خضراء مشكلة بزيت الزيتون", qty: "1 حبة", cal: 216, macros: "ب: 18.9غ ك: 1.2غ د: 14.7غ" },
    ],
  },
  {
    id: "dinner",
    title: "العشاء",
    calories: 662,
    items: [
      { name: "بطاطا حلوة مشوية", qty: "1 حبة", cal: 216, macros: "ب: 18.9غ ك: 1.2غ د: 14.7غ" },
      { name: "صدر دجاج مشوي متبل", qty: "1 حبة", cal: 216, macros: "ب: 18.9غ ك: 1.2غ د: 14.7غ" },
    ],
  },
  {
    id: "snacks",
    title: "الوجبات الخفيفة",
    calories: 662,
    items: [
      { name: "زبادي يوناني مع توت", qty: "200 مل", cal: 130, macros: "ب: 21غ ك: 8غ د: 0.5غ" },
      { name: "مكيال واي بروتين بعد التمرين", qty: "1 مكيال", cal: 120, macros: "ب: 25غ ك: 3غ د: 0.5غ" },
    ],
  },
];

const macroGoals = [
  { label: "السعرات اليومية المستهدفة", value: "2850", unit: "سعرة حرارية" },
  { label: "البروتين المستهدف", value: "180", unit: "جرام / يوم (المخطط: 186جم)" },
  { label: "الكربوهيدرات المستهدفة", value: "340", unit: "جرام / يوم (المخطط: 186جم)" },
  { label: "الدهون الصحية المستهدفة", value: "75", unit: "جرام / يوم (المخطط: 186جم)" },
];

function MealCard({ meal, onAddFood, onDeleteItem }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <button
          onClick={() => onAddFood(meal.id)}
          className="flex items-center gap-1 text-emerald-600 text-sm font-medium hover:text-emerald-700 active:scale-95 transition-transform"
        >
          <Plus size={16} />
          <span>إضافة طعام</span>
        </button>
        <div className="text-right">
          <h3 className="font-bold text-gray-800">{meal.title}</h3>
          <span className="text-xs text-gray-400">{meal.calories} سعرة حرارية</span>
        </div>
      </div>

      <div className="space-y-3">
        {meal.items.length === 0 && (
          <p className="text-xs text-gray-300 text-center py-3">لا يوجد عناصر بعد</p>
        )}
        {meal.items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between border-t border-gray-100 pt-3 first:border-t-0 first:pt-0"
          >
            <div className="text-right">
              <p className="text-sm font-medium text-gray-800">{item.name}</p>
              <p className="text-xs text-gray-400">
                {item.qty}، {item.cal} سعرة حرارية ({item.macros})
              </p>
            </div>
            <button
              onClick={() => onDeleteItem(meal.id, idx)}
              className="text-gray-300 hover:text-red-500 active:scale-90 transition-all"
              aria-label="حذف"
            >
              <Trash2 size={16} />
            </button>
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

function AddFoodModal({ open, onClose, onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    qty: "",
    cal: "",
    protein: "",
    carbs: "",
    fat: "",
  });

  useEffect(() => {
    if (open) {
      setForm({ name: "", qty: "", cal: "", protein: "", carbs: "", fat: "" });
    }
  }, [open]);

  if (!open) return null;

  const handleChange = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    onSubmit({
      name: form.name.trim(),
      qty: form.qty.trim() || "1 حبة",
      cal: Number(form.cal) || 0,
      macros: `ب: ${form.protein || 0}غ ك: ${form.carbs || 0}غ د: ${form.fat || 0}غ`,
    });
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        dir="rtl"
        className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 active:scale-90 transition-transform"
          >
            <X size={18} />
          </button>
          <h3 className="font-bold text-gray-800">إضافة طعام</h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 text-right">
          <div>
            <label className="text-xs text-gray-500 mb-1 block">اسم الطعام</label>
            <input
              autoFocus
              value={form.name}
              onChange={handleChange("name")}
              placeholder="مثال: صدر دجاج مشوي"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-200"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-gray-500 mb-1 block">الكمية</label>
              <input
                value={form.qty}
                onChange={handleChange("qty")}
                placeholder="مثال: 200 جرام"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-200"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1 block">السعرات الحرارية</label>
              <input
                type="number"
                value={form.cal}
                onChange={handleChange("cal")}
                placeholder="مثال: 250"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-200"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="text-xs text-gray-500 mb-1 block">بروتين (غ)</label>
              <input
                type="number"
                value={form.protein}
                onChange={handleChange("protein")}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-200"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1 block">كارب (غ)</label>
              <input
                type="number"
                value={form.carbs}
                onChange={handleChange("carbs")}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-200"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1 block">دهون (غ)</label>
              <input
                type="number"
                value={form.fat}
                onChange={handleChange("fat")}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-200"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <button
              type="submit"
              className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-medium py-2.5 rounded-lg active:scale-95 transition-transform"
            >
              إضافة
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-600 text-sm font-medium py-2.5 rounded-lg active:scale-95 transition-transform"
            >
              إلغاء
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Toast({ message }) {
  if (!message) return null;
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-sm px-5 py-2.5 rounded-full shadow-lg z-50">
      {message}
    </div>
  );
}

export default function App() {
  const [mealsState, setMealsState] = useState(meals);
  const [toast, setToast] = useState("");
  const [hasNotification, setHasNotification] = useState(true);
  const [draftSaved, setDraftSaved] = useState(false);
  const [planSent, setPlanSent] = useState(false);
  const [query, setQuery] = useState("");

  const showToast = (message) => {
    setToast(message);
  };

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(""), 2200);
    return () => clearTimeout(t);
  }, [toast]);

  const [activeMealId, setActiveMealId] = useState(null);

  const handleAddFood = (mealId) => {
    setActiveMealId(mealId);
  };

  const handleSubmitFood = (item) => {
    setMealsState((prev) =>
      prev.map((m) =>
        m.id === activeMealId ? { ...m, items: [...m.items, item] } : m
      )
    );
    showToast(`تمت إضافة "${item.name}"`);
    setActiveMealId(null);
  };

  const handleDeleteItem = (mealId, itemIndex) => {
    setMealsState((prev) =>
      prev.map((m) =>
        m.id === mealId
          ? { ...m, items: m.items.filter((_, i) => i !== itemIndex) }
          : m
      )
    );
    showToast("تم حذف العنصر");
  };

  const handleSendPlan = () => {
    setPlanSent(true);
    showToast("تم إرسال الخطة للمشترك ✓");
    setTimeout(() => setPlanSent(false), 2000);
  };

  const handleSaveDraft = () => {
    setDraftSaved(true);
    showToast("تم الحفظ كمسودة");
    setTimeout(() => setDraftSaved(false), 2000);
  };

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 font-almarai" lang="ar">
      <Toast message={toast} />

      <AddFoodModal
        open={activeMealId !== null}
        onClose={() => setActiveMealId(null)}
        onSubmit={handleSubmitFood}
      />

      <header className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-200">
        <div className="relative w-96">
          <Search
            size={16}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ابحث عن مشترك، هدف، أو بريد..."
            className="w-full bg-gray-100 rounded-lg pl-3 pr-9 py-2 text-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-200 transition-shadow"
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => showToast("فتح التقويم")}
            className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-50 active:scale-95 transition-all"
          >
            <Calendar size={16} className="text-gray-400" />
            <span>الأربعاء ١٦ سبتمبر ٢٠٢٦</span>
            <ChevronDown size={14} className="text-gray-400" />
          </button>
          <button
            onClick={() => showToast("جاري إنشاء خطة جديدة...")}
            className="flex items-center gap-1 bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-medium px-4 py-2 rounded-lg active:scale-95 transition-transform"
          >
            <Plus size={16} />
            <span>خطة جديدة</span>
          </button>
          <button
            onClick={() => {
              setHasNotification(false);
              showToast("لا توجد إشعارات جديدة");
            }}
            className="relative text-gray-500 hover:text-gray-700 active:scale-90 transition-transform"
          >
            <Bell size={20} />
            {hasNotification && (
              <span className="absolute -top-0.5 -left-0.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white" />
            )}
          </button>
          <button
            onClick={() => showToast("الملف الشخصي")}
            className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden hover:ring-2 hover:ring-emerald-300 transition-all"
          />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-2xl px-6 py-4 mb-4">
          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="text-xs text-gray-400 mb-1">اختر المشترك لإعداد أو تعديل خطته:</p>
              <div className="border border-gray-200 rounded-xl px-4 py-2">
                <p className="font-bold text-gray-800">
                  <span className="font-extrabold">أحمد الشمري</span>{" "}
                  <span className="font-normal text-gray-500">- (بناء كتلة عضلية نقية وزيادة القوة)</span>
                </p>
              </div>
            </div>

            <div className="w-px self-stretch bg-gray-200" />

            <div className="text-right">
              <p className="font-bold text-gray-800">خطة التضخيم العضلي المكثف (Push / Pull / Legs)</p>
              <p className="text-xs text-gray-400 mt-1">الحالة سارية ونشطة - آخر تحديث: اليوم</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleSendPlan}
              disabled={planSent}
              className={`flex items-center gap-2 text-white text-sm font-medium px-4 py-2 rounded-lg active:scale-95 transition-all ${
                planSent ? "bg-emerald-500" : "bg-emerald-700 hover:bg-emerald-800"
              }`}
            >
              <Send size={16} />
              <span>{planSent ? "تم الإرسال ✓" : "إرسال الخطة للمشترك"}</span>
            </button>
            <button
              onClick={handleSaveDraft}
              className={`flex items-center gap-2 border text-sm font-medium px-3 py-2 rounded-lg active:scale-95 transition-all ${
                draftSaved
                  ? "bg-emerald-50 border-emerald-200 text-emerald-600"
                  : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Save size={14} />
              <span>{draftSaved ? "تم الحفظ ✓" : "حفظ كمسودة"}</span>
            </button>
            <button
              onClick={() => showToast("عرض إصدارات الخطة")}
              className="flex flex-col items-center justify-center w-14 h-14 rounded-full border border-emerald-200 text-emerald-600 hover:bg-emerald-50 active:scale-95 transition-all"
            >
              <span className="text-[10px] leading-none">إصدار</span>
              <span className="text-xs font-bold leading-none mt-1">v4.0</span>
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => showToast("جاري تجهيز خطة التمارين الأسبوعية...")}
            className="flex items-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg active:scale-95 transition-all"
          >
            <Dumbbell size={16} />
            <span>إنشاء خطة التمارين الأسبوعية</span>
          </button>

          <button
            onClick={() => showToast("جاري إنشاء الخطة الغذائية والماكروز...")}
            className="flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-medium px-5 py-2.5 rounded-lg active:scale-95 transition-all"
          >
            <Utensils size={16} />
            <span>إنشاء الخطة الغذائية والماكروز</span>
          </button>

          <button
            onClick={() => showToast("عرض الإصدارات السابقة (4)")}
            className="flex items-center gap-2 text-gray-400 hover:text-gray-600 text-sm active:scale-95 transition-transform"
          >
            <span>إصدارات الخطة السابقة (4)</span>
            <RotateCcw size={14} />
          </button>
        </div>

        <div className="flex items-center justify-between mb-3">
          <p className="text-xs text-gray-400">إجمالي السعرات المخططة حاليا: 2106 / 2850 سعرة</p>
          <h2 className="font-bold text-gray-800">الأهداف اليومية للماكروز والسعرات</h2>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-8">
          {macroGoals.map((goal, idx) => (
            <MacroCard key={idx} goal={goal} />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {mealsState.map((meal) => (
            <MealCard
              key={meal.id}
              meal={meal}
              onAddFood={handleAddFood}
              onDeleteItem={handleDeleteItem}
            />
          ))}
        </div>
      </main>
    </div>
  );
}