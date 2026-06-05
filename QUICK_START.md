# Quick Start Guide - دليل البدء السريع

## 🚀 خطوات البدء الفورية

### 1. استنساخ المشروع
```bash
git clone https://github.com/marwandia41-web/leaderboard-platform.git
cd leaderboard-platform
```

### 2. تثبيت المكتبات
```bash
npm install
```

### 3. إعداد Firebase ⭐ (مهم جداً)
- اذهب إلى: https://console.firebase.google.com
- أنشئ مشروع جديد
- فعّل: Authentication + Firestore
- انسخ بيانات الاعتماد

### 4. تحديث ملف .env.local
```bash
# افتح ملف .env.local وأضف بيانات Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
# ... إلخ
```

### 5. تشغيل المشروع
```bash
npm run dev
```

### 6. افتح المتصفح
```
http://localhost:3000
```

---

## 📱 الصفحات المتاحة

| الصفحة | الرابط |
|--------|--------|
| 🏠 الرئيسية | http://localhost:3000 |
| 🔐 إنشاء حساب | http://localhost:3000/register |
| 🔑 تسجيل دخول | http://localhost:3000/login |
| 🏆 Leaderboard | http://localhost:3000/leaderboard |
| 🛍️ المتجر | http://localhost:3000/shop |
| 👤 لوحتي | http://localhost:3000/dashboard |
| ⚙️ Admin | http://localhost:3000/admin |

---

## 📚 الملفات الرئيسية

```
src/
├── pages/           # جميع الصفحات
├── api/             # API endpoints
├── components/      # مكونات React
├── features/        # Hooks والخدمات
├── firebase/        # إعدادات Firebase
├── stores/          # Zustand stores
└── types/           # TypeScript types
```

---

## ⚡ أوامر مفيدة

```bash
npm run dev         # تشغيل التطوير
npm run build       # بناء الإنتاج
npm start           # تشغيل الإنتاج
npm run lint        # التحقق من الأخطاء
```

---

## 🛑 توقف المشروع

```
اضغط: Ctrl + C
```

---

## 📞 مساعدة

اقرأ [README.md](./README.md) أو [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)