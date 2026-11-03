// Öğretmen ve Personel Başlangıç Listesi (60 Kişi)
const DEFAULT_TEACHERS = [
  { id: 1, name: "ABDURRAHİM BÜYÜKDAĞ", branch: "Din Kültürü ve Ahlâk Bilgisi", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 2, name: "ASLI GÜREL", branch: "Bilişim Teknolojileri", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 3, name: "AYÇA ÇIKAR", branch: "Elektrik-Elektronik Teknolojisi / Elektronik", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 4, name: "BESTİ GÜZELSOY", branch: "Türk Dili ve Edebiyatı", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 5, name: "BEYZA YETİK", branch: "Matematik", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 6, name: "BİRGÜL COŞKUN", branch: "Bilişim Teknolojileri", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 7, name: "BİROL ATEŞ", branch: "Din Kültürü ve Ahlâk Bilgisi", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 8, name: "CELAL ATIŞ", branch: "Türk Dili ve Edebiyatı", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 9, name: "CEM KURTOĞLU", branch: "Elektrik-Elektronik Teknolojisi / Elektrik", status: "katilmiyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "Formdan bildirildi: Katılmıyor" },
  { id: 10, name: "DEMET KESEN", branch: "Matematik", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 11, name: "DEMET SAVRUK", branch: "Bilişim Teknolojileri", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 12, name: "DERYA YILDIZ", branch: "Fizik", status: "katiliyor", t1: true, t2: false, t3: false, t4: false, t5: false, note: "300 TL ödendi (1. Dönem 900 TL için +600 TL kalan)" },
  { id: 13, name: "DEVRİM YILDIZ", branch: "Felsefe", status: "katiliyor", t1: true, t2: false, t3: false, t4: false, t5: false, note: "300 TL ödendi (1. Dönem 900 TL için +600 TL kalan)" },
  { id: 14, name: "DİĞDEM ACAR", branch: "Biyoloji", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 15, name: "DURMUŞ KIZILKAYA", branch: "Bilişim Teknolojileri", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 16, name: "EBRU ELMAS", branch: "İngilizce", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 17, name: "EBRU KÜÇÜKALİ TURGUT", branch: "Türk Dili ve Edebiyatı", status: "katiliyor", t1: true, t2: true, t3: false, t4: false, t5: false, note: "600 TL ödendi (1. Dönem 900 TL için +300 TL kalan)" },
  { id: 18, name: "EDİP TAŞDEMİR", branch: "Beden Eğitimi", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 19, name: "ERDİNÇ SİTRAVA", branch: "Türk Dili ve Edebiyatı", status: "katiliyor", t1: true, t2: false, t3: false, t4: false, t5: false, note: "300 TL ödendi (1. Dönem 900 TL için +600 TL kalan)" },
  { id: 20, name: "FATMA NUR SIVAR", branch: "Rehberlik", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 21, name: "FEYZULLAH KÖKER", branch: "Grafik ve Fotoğraf / Grafik", status: "katilmiyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "Formdan bildirildi: Katılmıyor" },
  { id: 22, name: "GÖKÇE ŞEN", branch: "Özel Eğitim", status: "katiliyor", t1: true, t2: false, t3: false, t4: false, t5: false, note: "300 TL ödendi (1. Dönem 900 TL için +600 TL kalan)" },
  { id: 23, name: "GÖKHAN GÜREL", branch: "Bilişim Teknolojileri", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 24, name: "HALDUN YILDIZ", branch: "Tarih", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "Dışarı tüp alıyor" },
  { id: 25, name: "HANDAN YASA", branch: "Kimya / Kimya Teknolojisi", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 26, name: "HATİCE AĞAN", branch: "Kimya / Kimya Teknolojisi", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 27, name: "ZEYNEP AYNAS", branch: "TARİH", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 28, name: "İBRAHİM CALAYIR", branch: "Bilişim Teknolojileri", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 29, name: "İLKNUR ÇIRPAN", branch: "Bilişim Teknolojileri", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 30, name: "MAHMUT YAVUZ", branch: "Elektrik-Elektronik Teknolojisi / Elektrik", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 31, name: "MERAL HIZAL", branch: "Görsel Sanatlar", status: "katiliyor", t1: true, t2: true, t3: false, t4: false, t5: false, note: "600 TL ödendi (1. Dönem 900 TL için +300 TL kalan)" },
  { id: 32, name: "MERİÇ AKKAYA", branch: "Elektrik-Elektronik Teknolojisi / Elektrik", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 33, name: "MERYEM DEMİRTAŞ", branch: "İngilizce", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 34, name: "MİRAY TEKAY", branch: "Türk Dili ve Edebiyatı", status: "katiliyor", t1: true, t2: true, t3: false, t4: false, t5: false, ek1: 200, note: "800 TL ödendi (Önceki 600 TL + 200 TL ek | 1. Dönem 900 TL için +100 TL kalan)" },
  { id: 35, name: "MUHAMMET ŞEKER", branch: "Bilişim Teknolojileri", status: "katiliyor", t1: true, t2: true, t3: true, t4: true, t5: false, note: "1.200 TL ödendi (1. Dönem 900 TL tam + 2. Dönem 300 TL)" },
  { id: 36, name: "MUHAMMET SERDAR BALIKLI", branch: "Beden Eğitimi", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 37, name: "MURAT KAÇAN", branch: "Bilişim Teknolojileri", status: "katilmiyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "Formdan bildirildi: Katılmıyor" },
  { id: 38, name: "MURAT KANTARCI", branch: "Bilişim Teknolojileri", status: "katiliyor", t1: true, t2: true, t3: false, t4: false, t5: false, note: "600 TL ödendi (1. Dönem 900 TL için +300 TL kalan)" },
  { id: 39, name: "MÜJDAT TELLİ", branch: "Bilişim Teknolojileri", status: "katiliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "Çay Ocağı Sorumlusu" },
  { id: 40, name: "MÜNEVVER ÜNAL ÖTÜKEN", branch: "Coğrafya", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 41, name: "NAGİHAN KOÇ ÇAVUR", branch: "Coğrafya", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 42, name: "NURHAN CAN", branch: "Türk Dili ve Edebiyatı", status: "katiliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "Formdan katıldı" },
  { id: 43, name: "RABİA SULTAN ÇELİK", branch: "Matematik", status: "katiliyor", t1: true, t2: false, t3: false, t4: false, t5: false, note: "300 TL ödendi (1. Dönem 900 TL için +600 TL kalan)" },
  { id: 44, name: "SERAP KAR ATASEVEN", branch: "Türk Dili ve Edebiyatı", status: "katiliyor", t1: true, t2: true, t3: false, t4: false, t5: false, note: "600 TL ödendi (1. Dönem 900 TL için +300 TL kalan)" },
  { id: 45, name: "SERDAR ÇIRPAN", branch: "Bilişim Teknolojileri", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 46, name: "SERHAT ARSLAN", branch: "Bilişim Teknolojileri", status: "katiliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "Formdan katıldı" },
  { id: 47, name: "SEVİLAY ARSLAN", branch: "Rehberlik", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 48, name: "SEVİLAY DEVECİ", branch: "Elektrik-Elektronik Teknolojisi / Elektronik", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 49, name: "SİNAN RENÇBEROĞLU", branch: "Bilişim Teknolojileri", status: "katiliyor", t1: true, t2: true, t3: false, t4: false, t5: false, note: "600 TL ödendi (1. Dönem 900 TL için +300 TL kalan)" },
  { id: 50, name: "SİNAN CAN YÜCEL", branch: "İngilizce", status: "katiliyor", t1: true, t2: true, t3: true, t4: true, t5: false, note: "1.200 TL ödendi (1. Dönem 900 TL tam + 2. Dönem 300 TL)" },
  { id: 51, name: "SONER TAŞ", branch: "Elektrik-Elektronik Teknolojisi / Elektronik", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 52, name: "ŞAHİN KARAKAŞ", branch: "Bilişim Teknolojileri", status: "katiliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "Formdan katıldı" },
  { id: 53, name: "ŞAHİN ORHAN", branch: "Bilişim Teknolojileri", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 54, name: "UĞUR YUSUF SEZER", branch: "Matematik", status: "katilmiyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "Formdan bildirildi: Katılmıyor" },
  { id: 55, name: "ZEHRA GENÇ", branch: "Matematik", status: "katiliyor", t1: true, t2: true, t3: true, t4: false, t5: false, note: "900 TL ödendi (1. Dönem Tam)" },
  { id: 56, name: "ZEYNEP ÇIBIK", branch: "İngilizce", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 57, name: "SEMA KANDEMİR", branch: "Grafik ve Fotoğraf", status: "katiliyor", t1: true, t2: false, t3: false, t4: false, t5: false, note: "300 TL ödendi (1. Dönem 900 TL için +600 TL kalan)" },
  { id: 58, name: "ZEYNEP BOZDEMİR", branch: "Okul Aile Birliği", status: "katiliyor", t1: true, t2: true, t3: false, t4: false, t5: false, note: "600 TL ödendi (1. Dönem 900 TL için +300 TL kalan)" },
  { id: 59, name: "DEMET TÜRKMEN", branch: "Okul Aile Birliği", status: "katiliyor", t1: true, t2: true, t3: false, t4: false, t5: false, note: "600 TL Zeynep Bozdemir tarafından ödendi (1. Dönem için +300 TL kalan)" },
  { id: 60, name: "ELİF CANSU KESKİN", branch: "Öğretmen", status: "katiliyor", t1: true, t2: true, t3: false, t4: false, t5: false, note: "600 TL ödendi (1. Dönem 900 TL için +300 TL kalan)" }
];

const DEFAULT_EXPENSES = [
  {
    id: 1,
    date: "2026-09-08",
    desc: "Okul İdaresi Alımı (5 Çay - Destek/Bağış)",
    amount: 1,
    items: {
      cay: "5 Çay",
      seker: "",
      deterjan: "",
      bardak: "",
      diger: "Okul tarafından alındı (Ödeme yapılmadı)"
    },
    receiptImg: null
  },
  {
    id: 2,
    date: "2026-09-09",
    desc: "Şahin Hoca Alımı (Çay)",
    amount: 390,
    items: {
      cay: "1 Çay",
      seker: "",
      deterjan: "",
      bardak: "",
      diger: ""
    },
    receiptImg: null
  },
  {
    id: 3,
    date: "2026-09-11",
    desc: "Şahin Hoca Alımı (Çay)",
    amount: 462,
    items: {
      cay: "1 Çay",
      seker: "",
      deterjan: "",
      bardak: "",
      diger: ""
    },
    receiptImg: null
  },
  {
    id: 4,
    date: "2026-09-12",
    desc: "ŞOK Market Alımı (Müjdat Telli)",
    amount: 2899,
    items: {
      cay: "6 Çay",
      seker: "5 Şeker",
      deterjan: "",
      bardak: "12 Bardak",
      diger: ""
    },
    receiptImg: null
  },
  {
    id: 5,
    date: "2026-09-14",
    desc: "ŞOK Market Alımı (Müjdat Telli)",
    amount: 2330,
    items: {
      cay: "6 Çay",
      seker: "",
      deterjan: "",
      bardak: "",
      diger: ""
    },
    receiptImg: null
  }
];

const CANONICAL_DATA_VERSION = "2026.11.03_v8";
const CLOUD_TEACHERS_DB_URL = "https://api.restful-api.dev/objects/ff808181a09d98f701a1a1a788f720ac";
const CLOUD_EXPENSES_DB_URL = "https://api.restful-api.dev/objects/ff808181a09d98f701a1a1a92f2d20d0";

// Kalıcı Bulut Veritabanına Öğretmen Yanıt ve Ödemelerini Kaydet (Gmail'e Gerek Kalmadan Süresiz Saklar)
async function pushTeachersToPermanentCloud(changedTeacherId = null) {
  try {
    let remoteMap = {};
    try {
      const getRes = await fetch(CLOUD_TEACHERS_DB_URL, { cache: 'no-store' });
      if (getRes.ok) {
        const getJson = await getRes.json();
        if (getJson && getJson.data && getJson.data.t) {
          remoteMap = { ...getJson.data.t };
        }
      }
    } catch (ge) {}

    const encodeTeacher = (t) => {
      const mask = (t.t1 ? 1 : 0) | (t.t2 ? 2 : 0) | (t.t3 ? 4 : 0) | (t.t4 ? 8 : 0) | (t.t5 ? 16 : 0);
      const ek1 = Number(t.ek1) || 0;
      const ek2 = Number(t.ek2) || 0;
      const stCode = t.status === 'katiliyor' ? '1' : (t.status === 'katilmiyor' ? '0' : '2');
      let val = `${stCode}:${mask}`;
      if (ek1 > 0 || ek2 > 0) val += `:${ek1}`;
      if (ek2 > 0) val += `:${ek2}`;
      return { val, isDefault: (t.status === 'bekliyor' && mask === 0 && ek1 === 0 && ek2 === 0) };
    };

    if (changedTeacherId !== null) {
      const t = state.teachers.find(x => String(x.id) === String(changedTeacherId));
      if (t) {
        const { val, isDefault } = encodeTeacher(t);
        if (isDefault) {
          delete remoteMap[String(t.id)];
        } else {
          remoteMap[String(t.id)] = val;
        }
      }
    } else {
      state.teachers.forEach(t => {
        const { val, isDefault } = encodeTeacher(t);
        if (!isDefault) {
          remoteMap[String(t.id)] = val;
        }
      });
    }

    await fetch(CLOUD_TEACHERS_DB_URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'cay_db', data: { t: remoteMap } })
    });
  } catch (e) {
    console.warn("Kalıcı bulut kayıt uyarısı:", e);
  }
}

let state = {
  version: CANONICAL_DATA_VERSION,
  teachers: JSON.parse(JSON.stringify(DEFAULT_TEACHERS)),
  expenses: JSON.parse(JSON.stringify(DEFAULT_EXPENSES)),
  devredenBakiye: 0,
  filterStatus: 'all',
  searchQuery: ''
};

const TAKSIT_BEDELI = 300;
const TAKSIT_TUTARLARI = {
  t1: 300, // 1. Dönem 1. Taksit (300 TL)
  t2: 300, // 1. Dönem 2. Taksit (300 TL)
  t3: 300, // 1. Dönem Tamamlama (300 TL) -> 1. Dönem Toplam: 900 TL
  t4: 300, // 2. Dönem 1. Parça (300 TL)
  t5: 600  // 2. Dönem 2. Parça (600 TL) -> 2. Dönem Toplam: 900 TL
};
const DONEM1_UCRET = 900;
const DONEM2_UCRET = 900;
const YILLIK_UCRET = DONEM1_UCRET + DONEM2_UCRET; // 1.800 TL

function getTeacherDonem1Paid(t) {
  if (typeof t.customDonem1 === 'number' && !isNaN(t.customDonem1)) {
    return t.customDonem1;
  }
  return (t.t1 ? TAKSIT_TUTARLARI.t1 : 0) +
         (t.t2 ? TAKSIT_TUTARLARI.t2 : 0) +
         (t.t3 ? TAKSIT_TUTARLARI.t3 : 0) +
         (Number(t.ek1) || 0);
}

function getTeacherDonem2Paid(t) {
  if (typeof t.customDonem2 === 'number' && !isNaN(t.customDonem2)) {
    return t.customDonem2;
  }
  return (t.t4 ? TAKSIT_TUTARLARI.t4 : 0) +
         (t.t5 ? TAKSIT_TUTARLARI.t5 : 0) +
         (Number(t.ek2) || 0);
}

function getTeacherTotalPaid(t) {
  return getTeacherDonem1Paid(t) + getTeacherDonem2Paid(t);
}

// Veriyi LocalStorage'dan Yükle ve Akıllıca Birleştir (SIFIR VERİ KAYBI GARANTİSİ)
function loadState() {
  const saved = localStorage.getItem('cay_takip_state_v1');
  let loadedState = null;
  if (saved) {
    try {
      loadedState = JSON.parse(saved);
    } catch (e) {
      loadedState = null;
    }
  }

  // İkincil acil durum fatura yedeği kontrolü
  let expensesBackup = [];
  try {
    const rawExp = localStorage.getItem('cay_expenses_backup');
    if (rawExp) {
      const parsed = JSON.parse(rawExp);
      if (Array.isArray(parsed)) expensesBackup = parsed;
    }
  } catch(e) {}

  // 1. FATURALARI BİRLEŞTİR (ASLA SİLİNMEZ):
  // - loadedState.expenses
  // - expensesBackup
  // - DEFAULT_EXPENSES
  const mergedExpensesMap = new Map();
  if (Array.isArray(DEFAULT_EXPENSES)) {
    DEFAULT_EXPENSES.forEach(e => { if (e && e.id) mergedExpensesMap.set(String(e.id), JSON.parse(JSON.stringify(e))); });
  }
  expensesBackup.forEach(e => { if (e && e.id) mergedExpensesMap.set(String(e.id), JSON.parse(JSON.stringify(e))); });
  if (loadedState && Array.isArray(loadedState.expenses)) {
    loadedState.expenses.forEach(e => { if (e && e.id) mergedExpensesMap.set(String(e.id), JSON.parse(JSON.stringify(e))); });
  }
  const finalExpenses = Array.from(mergedExpensesMap.values());

  // 2. ÖĞRETMEN VE KİŞİ SEÇİMLERİNİ BİRLEŞTİR (ASLA SİLİNMEZ):
  // Resmi banka listesi (DEFAULT_TEACHERS) temel alınır:
  const teacherMap = new Map();
  DEFAULT_TEACHERS.forEach(dt => {
    teacherMap.set(dt.id, JSON.parse(JSON.stringify(dt)));
  });

  // Kullanıcının daha önce yaptığı seçimleri ve ödemeleri asla ezmeden koru:
  if (loadedState && Array.isArray(loadedState.teachers)) {
    loadedState.teachers.forEach(lt => {
      if (!lt) return;
      if (teacherMap.has(lt.id)) {
        const base = teacherMap.get(lt.id);
        // Taksitler ve ek ödemeler: Resmi liste VEYA yerel seçimde ödendi ise DAİMA korunur:
        base.t1 = Boolean(base.t1 || lt.t1);
        base.t2 = Boolean(base.t2 || lt.t2);
        base.t3 = Boolean(base.t3 || lt.t3);
        base.t4 = Boolean(base.t4 || lt.t4);
        base.t5 = Boolean(base.t5 || lt.t5);
        base.ek1 = Math.max(Number(base.ek1) || 0, Number(lt.ek1) || 0);
        base.ek2 = Math.max(Number(base.ek2) || 0, Number(lt.ek2) || 0);
        if (typeof lt.customDonem1 === 'number') base.customDonem1 = lt.customDonem1;
        if (typeof lt.customDonem2 === 'number') base.customDonem2 = lt.customDonem2;

        // Katılım durumu: Kullanıcı 'katiliyor' veya 'katilmiyor' dediyse koru:
        if (lt.status && lt.status !== 'bekliyor') {
          base.status = lt.status;
        } else if (base.status && base.status !== 'bekliyor') {
          // base zaten resmi olarak katılıyor
        } else {
          base.status = lt.status || base.status || 'bekliyor';
        }

        // Not: Kullanıcı veya form notunu koru (eski otomatik ödeme notlarını tekrarlama):
        if (lt.note && lt.note.trim()) {
          const isOldAutoPaymentNote = lt.note.includes('ödendi');
          if (!isOldAutoPaymentNote && (!base.note || !base.note.includes(lt.note.trim()))) {
            base.note = base.note ? (base.note + ' | ' + lt.note.trim()) : lt.note.trim();
          }
        }
      } else {
        // Formdan veya elle sonradan eklenmiş yeni öğretmen (asla silinmez):
        const copyLt = JSON.parse(JSON.stringify(lt));
        if (copyLt.t5 === undefined) copyLt.t5 = false;
        teacherMap.set(lt.id, copyLt);
      }
    });
  }

  const finalTeachers = Array.from(teacherMap.values()).sort((a, b) => a.id - b.id);

  state = {
    version: CANONICAL_DATA_VERSION,
    teachers: finalTeachers,
    expenses: finalExpenses,
    devredenBakiye: (loadedState && loadedState.devredenBakiye !== undefined) ? loadedState.devredenBakiye : 0,
    filterStatus: (loadedState && loadedState.filterStatus) || 'all',
    searchQuery: (loadedState && loadedState.searchQuery) || ''
  };

  saveState();
}

// Listeyi ve Durumları Manuel Yenile
async function manualRefreshList() {
  loadState();
  updateDashboard();
  renderTable();
  if (typeof fetchFromCloudSync === 'function') {
    await fetchFromCloudSync(false);
  } else {
    showToast("🔄 Liste ve durumlar başarıyla yenilendi!");
  }
}

// Varsayılan Öğretmen Listesini Sıfırla (Fabrika Ayarlarına Dön - Faturalar Korunur)
function resetToDefaults() {
  if (confirm("⚠️ DİKKAT: Bu işlem öğretmenlerin ödeme ve yanıtlarını resmi banka dekontundaki duruma eşitler.\n(Faturalarınız ve harcama kayıtlarınız ASLA silinmez).\n\nOnaylıyor musunuz?")) {
    state = {
      version: CANONICAL_DATA_VERSION,
      teachers: JSON.parse(JSON.stringify(DEFAULT_TEACHERS)),
      expenses: (state && state.expenses && state.expenses.length > 0) ? state.expenses : JSON.parse(JSON.stringify(DEFAULT_EXPENSES)),
      devredenBakiye: 0,
      filterStatus: 'all',
      searchQuery: ''
    };
    saveState();
    showToast("✅ Liste resmi dekont durumuna eşitlendi (Faturalar korundu)!");
  }
}

// Veriyi Kaydet (Çift Yedekleme ve Kota Korumalı)
function saveState() {
  state.version = CANONICAL_DATA_VERSION;
  try {
    localStorage.setItem('cay_takip_state_v1', JSON.stringify(state));
  } catch (err) {
    console.warn("LocalStorage kotası uyarısı, metinleri koruyarak kaydediliyor:", err);
    try {
      const safeState = JSON.parse(JSON.stringify(state));
      if (safeState.expenses) {
        safeState.expenses.forEach(exp => {
          if (exp.receiptImg && exp.receiptImg.length > 1000) {
            delete exp.receiptImg;
          }
        });
      }
      localStorage.setItem('cay_takip_state_v1', JSON.stringify(safeState));
    } catch(e2) {
      console.error("Yerel kayıt hatası:", e2);
    }
  }

  // İkincil bağımsız fatura yedeği (Fatura asla kaybolmasın - Kota korumalı):
  try {
    if (state.expenses && state.expenses.length > 0) {
      try {
        localStorage.setItem('cay_expenses_backup', JSON.stringify(state.expenses));
      } catch(qErr) {
        const lightweightExpenses = state.expenses.map(exp => {
          const c = { ...exp };
          delete c.receiptImg;
          return c;
        });
        localStorage.setItem('cay_expenses_backup', JSON.stringify(lightweightExpenses));
      }
    }
  } catch(e) {}

  updateDashboard();
}

// İstatistikleri Güncelle
function updateDashboard() {
  const katilanlar = state.teachers.filter(t => t.status === 'katiliyor');
  const katilmayanlar = state.teachers.filter(t => t.status === 'katilmiyor');
  const bekleyenler = state.teachers.filter(t => t.status === 'bekliyor');

  let donem1Toplanan = 0;
  let donem2Toplanan = 0;
  katilanlar.forEach(t => {
    donem1Toplanan += getTeacherDonem1Paid(t);
    donem2Toplanan += getTeacherDonem2Paid(t);
  });

  const toplamToplanan = donem1Toplanan + donem2Toplanan;
  const toplamGider = (state.expenses || []).reduce((sum, item) => sum + Number(item.amount || 0), 0);
  const netKasa = toplamToplanan - toplamGider;

  // DOM güvenli güncellemeler (Hata vermez)
  const setTxt = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.innerText = val;
  };

  setTxt('statKatilanSayisi', katilanlar.length);
  setTxt('statToplamKisi', state.teachers.length);
  setTxt('statKatilmayanSayisi', katilmayanlar.length);
  setTxt('statBekleyenSayisi', bekleyenler.length);
  setTxt('statDonem1Toplanan', donem1Toplanan.toLocaleString('tr-TR') + ' ₺');
  setTxt('statDonem1Hedef', (katilanlar.length * DONEM1_UCRET).toLocaleString('tr-TR') + ' ₺');
  setTxt('statDonem2Toplanan', donem2Toplanan.toLocaleString('tr-TR') + ' ₺');
  setTxt('statDonem2Hedef', (katilanlar.length * DONEM2_UCRET).toLocaleString('tr-TR') + ' ₺');
  setTxt('statToplamToplanan', toplamToplanan.toLocaleString('tr-TR') + ' ₺');
  setTxt('statToplamGider', toplamGider.toLocaleString('tr-TR') + ' ₺');
  setTxt('statDevreden', (state.devredenBakiye || 0).toLocaleString('tr-TR') + ' ₺');
  
  const netKasaEl = document.getElementById('statNetKasa');
  if (netKasaEl) {
    netKasaEl.innerText = netKasa.toLocaleString('tr-TR') + ' ₺';
    netKasaEl.className = netKasa >= 0 ? 'text-xl font-bold text-emerald-600' : 'text-xl font-bold text-red-600';
  }

  renderTable();
  renderExpenses();
}

// Tabloyu Ekrana Çiz
function renderTable() {
  const tbody = document.getElementById('teacherTableBody');
  const printTbody = document.getElementById('printTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';
  if (printTbody) printTbody.innerHTML = '';

  // Filtreleme
  let list = state.teachers.filter(t => {
    // Statü filtresi
    if (state.filterStatus === 'katiliyor' && t.status !== 'katiliyor') return false;
    if (state.filterStatus === 'katilmiyor' && t.status !== 'katilmiyor') return false;
    if (state.filterStatus === 'bekliyor' && t.status !== 'bekliyor') return false;
    if (state.filterStatus === 'borclu') {
      if (t.status !== 'katiliyor') return false;
      if (t.t1 && t.t2 && t.t3 && t.t4 && t.t5) return false;
    }

    // Arama filtresi
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase('tr');
      const name = t.name.toLowerCase('tr');
      const branch = (t.branch || '').toLowerCase('tr');
      if (!name.includes(q) && !branch.includes(q)) return false;
    }

    return true;
  });

  list.forEach((t, index) => {
    const donem1Odenen = getTeacherDonem1Paid(t);
    const donem2Odenen = getTeacherDonem2Paid(t);
    const odenenTutar = donem1Odenen + donem2Odenen;
    const donem1Kalan = t.status === 'katiliyor' ? Math.max(0, DONEM1_UCRET - donem1Odenen) : 0;
    const kalanBorc = t.status === 'katiliyor' ? Math.max(0, YILLIK_UCRET - odenenTutar) : 0;

    // Durum Rozeti (Dokunarak Katılıyor / Katılmıyor / Bekliyor Yapılabilir)
    let statusBadge = '';
    if (t.status === 'katiliyor') {
      statusBadge = `<button type="button" onclick="cycleStatus(${t.id})" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 hover:bg-emerald-200 active:scale-95 shadow-xs transition cursor-pointer" title="Değiştirmek için dokunun">☕ Katılıyor</button>`;
    } else if (t.status === 'katilmiyor') {
      statusBadge = `<button type="button" onclick="cycleStatus(${t.id})" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold bg-red-100 text-red-800 border border-red-300 hover:bg-red-200 active:scale-95 shadow-xs transition cursor-pointer" title="Değiştirmek için dokunun">❌ Katılmıyor</button>`;
    } else {
      statusBadge = `<button type="button" onclick="cycleStatus(${t.id})" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-300 hover:bg-amber-100 active:scale-95 shadow-xs transition cursor-pointer" title="Katılıyor yapmak için dokunun"><span>⏳</span><span>Yanıt Bekliyor</span><span class="text-[10px] text-amber-600 underline font-normal ml-0.5">Değiştir</span></button>`;
    }

    // Taksit / Ödeme Kutucukları HTML Helper (Yönetim Panelinde ne kadar yatırıldığı net görünsün)
    const taksitBtn = (field, label, donem) => {
      const isPaid = t[field];
      const disabled = t.status !== 'katiliyor';
      const bgClass = disabled 
        ? 'bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200' 
        : isPaid 
          ? 'bg-emerald-600 text-white font-bold hover:bg-emerald-700 shadow-sm border-emerald-700' 
          : 'bg-white text-gray-700 hover:bg-gray-100 border-gray-300';
      
      const checkIcon = isPaid ? '✓ ' : '';
      return `
        <button 
          class="taksit-btn px-2 py-1 text-xs rounded border transition duration-150 ${bgClass}" 
          ${disabled ? 'disabled' : ''} 
          onclick="toggleTaksit(${t.id}, '${field}')"
          title="${donem} - ${label}: Tıklayarak Ödendi/Bekliyor yapın">
          ${checkIcon}${label}
        </button>
      `;
    };

    const row = document.createElement('tr');
    row.className = `border-b border-gray-100 hover:bg-gray-50 transition ${t.status === 'katilmiyor' ? 'opacity-60 bg-gray-50/50' : ''}`;
    row.innerHTML = `
      <td class="py-3 px-3 text-xs text-gray-500 font-mono">${t.id}</td>
      <td class="py-3 px-3 font-semibold text-gray-800 text-sm">
        ${t.name}
        ${t.note ? `<span class="block text-xs font-normal text-amber-600">📝 ${t.note}</span>` : ''}
      </td>
      <td class="py-3 px-3 text-xs text-gray-600">${t.branch || '-'}</td>
      <td class="py-3 px-3 text-center">${statusBadge}</td>
      
      <!-- 1. DÖNEM (900 TL) -->
      <td class="py-3 px-2 text-center bg-blue-50/30">
        <div class="flex flex-wrap items-center justify-center gap-1">
          ${taksitBtn('t1', '300₺', '1. Dönem 1. Ödeme (300 ₺)')}
          ${taksitBtn('t2', '300₺', '1. Dönem 2. Ödeme (300 ₺)')}
          ${taksitBtn('t3', '+300₺', '1. Dönem 900 ₺ Tamamlama (300 ₺)')}
          ${t.ek1 ? `<span class="px-2 py-1 text-xs rounded border bg-emerald-600 text-white font-bold shadow-sm border-emerald-700" title="Ek Ödeme: ${t.ek1} ₺">✓ ${t.ek1}₺</span>` : ''}
        </div>
        ${donem1Odenen > 0 ? `<div class="text-[11px] font-bold mt-1 ${donem1Odenen >= 900 ? 'text-emerald-700' : 'text-blue-800'}">Yatırdığı: ${donem1Odenen} ₺ ${donem1Kalan > 0 ? `(Eksik: ${donem1Kalan} ₺)` : '(Tam)'}</div>` : ''}
      </td>

      <!-- 2. DÖNEM (900 TL) -->
      <td class="py-3 px-2 text-center bg-amber-50/30">
        <div class="flex flex-wrap items-center justify-center gap-1">
          ${taksitBtn('t4', '300₺', '2. Dönem 1. Ödeme (300 ₺)')}
          ${taksitBtn('t5', '600₺', '2. Dönem Tamamlama (600 ₺ - Toplam 900 ₺)')}
        </div>
        ${donem2Odenen > 0 ? `<div class="text-[11px] font-bold mt-1 ${donem2Odenen >= 900 ? 'text-emerald-700' : 'text-amber-800'}">Yatırdığı: ${donem2Odenen} ₺</div>` : ''}
      </td>

      <td class="py-3 px-3 text-right font-medium text-xs">
        <span class="${odenenTutar >= YILLIK_UCRET ? 'text-emerald-600 font-bold' : (odenenTutar > 0 ? 'text-emerald-700 font-extrabold text-sm' : 'text-gray-800')}">
          ${odenenTutar} ₺
        </span>
        ${t.status === 'katiliyor' && donem1Kalan > 0 ? `<div class="text-[11px] text-amber-700 font-semibold">1.Dönem Kalan: ${donem1Kalan}₺</div>` : ''}
        ${t.status === 'katiliyor' && kalanBorc > 0 ? `<div class="text-[11px] text-red-500 font-normal">Toplam Kalan: ${kalanBorc}₺</div>` : ''}
      </td>

      <td class="py-3 px-2 text-center no-print">
        <button onclick="editTeacherModal(${t.id})" class="text-gray-400 hover:text-blue-600 p-1" title="Düzenle / Not Ekle">
          ✏️
        </button>
      </td>
    `;
    tbody.appendChild(row);

    // Panoya Asılacak Yazdırma Tablosu Satırı
    if (printTbody && (t.status === 'katiliyor' || t.status === 'bekliyor')) {
      const pRow = document.createElement('tr');
      pRow.innerHTML = `
        <td style="text-align:center;">${t.id}</td>
        <td><strong>${t.name}</strong></td>
        <td>${t.branch || ''}</td>
        <td style="text-align:center;">
          <span class="print-box ${t.t1 ? 'checked' : ''}"></span>
          <span class="print-box ${t.t2 ? 'checked' : ''}"></span>
          <span class="print-box ${t.t3 ? 'checked' : ''}"></span>
          <span style="font-size:10px;">(${donem1Odenen}/900₺)</span>
        </td>
        <td style="text-align:center;">
          <span class="print-box ${t.t4 ? 'checked' : ''}"></span>
          <span class="print-box ${t.t5 ? 'checked' : ''}"></span>
          <span style="font-size:10px;">(${donem2Odenen}/900₺)</span>
        </td>
        <td style="text-align:right;">${odenenTutar} ₺</td>
      `;
      printTbody.appendChild(pRow);
    }
  });

  if (list.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" class="text-center py-8 text-gray-400">
          Kriterlere uygun öğretmen bulunamadı.
        </td>
      </tr>
    `;
  }
}

// Katılım Statüsünü Değiştir (Tıklandıkça: katılıyor -> katılmıyor -> bekliyor)
function cycleStatus(id) {
  const teacher = state.teachers.find(t => t.id === id);
  if (!teacher) return;

  if (teacher.status === 'katiliyor') {
    teacher.status = 'katilmiyor';
  } else if (teacher.status === 'katilmiyor') {
    teacher.status = 'bekliyor';
  } else {
    teacher.status = 'katiliyor';
  }
  saveState();
  pushTeachersToPermanentCloud(id);
}

// Dönem Ödeme Durumunu Değiştir (1. Dönem 900 TL / 2. Dönem 900 TL)
function toggleDonemOdeme(id, donemNo) {
  const teacher = state.teachers.find(t => t.id === id);
  if (!teacher) return;

  if (donemNo === 1) {
    const odenen = getTeacherDonem1Paid(teacher);
    if (odenen < DONEM1_UCRET) {
      teacher.t1 = true;
      teacher.t2 = true;
      teacher.t3 = true;
    } else {
      teacher.t1 = false;
      teacher.t2 = false;
      teacher.t3 = false;
    }
  } else if (donemNo === 2) {
    const odenen = getTeacherDonem2Paid(teacher);
    if (odenen < DONEM2_UCRET) {
      teacher.t4 = true;
      teacher.t5 = true;
    } else {
      teacher.t4 = false;
      teacher.t5 = false;
    }
  }
  saveState();
  pushTeachersToPermanentCloud(id);
}

// Eski fonksiyon uyumluluğu
function toggleTaksit(id, field) {
  const teacher = state.teachers.find(t => t.id === id);
  if (!teacher) return;
  teacher[field] = !teacher[field];
  saveState();
  pushTeachersToPermanentCloud(id);
}

// ================= HARCAMA & FATURA YÖNETİMİ =================
let currentExpenseReceiptImg = null;

// Fatura ve Harcamaları Listele
function renderExpenses() {
  const tbody = document.getElementById('expenseTableBody');
  const footerTotal = document.getElementById('expenseTableFooterTotal');
  const badgeTotal = document.getElementById('statExpenseTotalBadge');
  if (!tbody) return;
  tbody.innerHTML = '';

  if (!state.expenses) state.expenses = [];

  // Toplam Tutar ve Sayaçları Hesapla
  let totalGider = 0;
  let totalCayCount = 0;
  let totalSekerCount = 0;
  let totalDeterjanCount = 0;
  let totalBardakCount = 0;

  const cayItems = [];
  const sekerItems = [];
  const deterjanItems = [];
  const bardakItems = [];

  if (state.expenses.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" class="text-center py-6 text-slate-400 text-xs">
          Henüz fatura veya harcama kaydı girilmedi. Aşağıdaki "➕ Yeni Fatura Ekle" butonuna basarak ilk harcamanızı girebilirsiniz.
        </td>
      </tr>
    `;
    if (footerTotal) footerTotal.innerText = '0 ₺';
    if (badgeTotal) badgeTotal.innerText = '0 ₺';
    const setEl = (id, txt) => { const el = document.getElementById(id); if (el) el.innerText = txt; };
    setEl('statTotalCay', '0');
    setEl('statTotalSeker', '0');
    setEl('statTotalDeterjan', '0');
    setEl('statTotalBardak', '0');
    return;
  }

  state.expenses.slice().reverse().forEach((exp) => {
    const amountNum = Number(exp.amount || 0);
    totalGider += amountNum;

    // Sayaçları topla
    if (exp.items) {
      if (exp.items.cay) { cayItems.push(exp.items.cay); totalCayCount++; }
      if (exp.items.seker) { sekerItems.push(exp.items.seker); totalSekerCount++; }
      if (exp.items.deterjan) { deterjanItems.push(exp.items.deterjan); totalDeterjanCount++; }
      if (exp.items.bardak) { bardakItems.push(exp.items.bardak); totalBardakCount++; }
    }

    // Malzeme etiketleri
    const itemBadges = [];
    if (exp.items) {
      if (exp.items.cay) itemBadges.push(`<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 font-semibold text-[11px]">🍵 ${escapeHtml(exp.items.cay)}</span>`);
      if (exp.items.seker) itemBadges.push(`<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-100 text-blue-900 font-semibold text-[11px]">🍬 ${escapeHtml(exp.items.seker)}</span>`);
      if (exp.items.deterjan) itemBadges.push(`<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-teal-100 text-teal-900 font-semibold text-[11px]">🧼 ${escapeHtml(exp.items.deterjan)}</span>`);
      if (exp.items.bardak) itemBadges.push(`<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-indigo-100 text-indigo-900 font-semibold text-[11px]">🥛 ${escapeHtml(exp.items.bardak)}</span>`);
      if (exp.items.diger) itemBadges.push(`<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 text-slate-800 text-[11px]">📦 ${escapeHtml(exp.items.diger)}</span>`);
    }

    const tr = document.createElement('tr');
    tr.className = 'hover:bg-slate-50 transition border-b border-slate-100';

    const safeDesc = escapeHtml(exp.desc || 'Açıklamasız Harcama');
    const safeDate = exp.date || '-';

    tr.innerHTML = `
      <td class="p-2.5 font-mono text-slate-600 text-[11px] whitespace-nowrap">${safeDate}</td>
      <td class="p-2.5 font-bold text-slate-800 text-xs">
        ${safeDesc}
      </td>
      <td class="p-2.5">
        <div class="flex flex-wrap gap-1">
          ${itemBadges.length > 0 ? itemBadges.join('') : '<span class="text-slate-400 text-[11px]">-</span>'}
        </div>
      </td>
      <td class="p-2.5 text-right font-extrabold text-red-600 text-sm whitespace-nowrap">
        -${amountNum.toLocaleString('tr-TR')} ₺
      </td>
      <td class="p-2.5 text-center whitespace-nowrap">
        ${exp.receiptImg ? `
          <button type="button" onclick="openReceiptPreview('${exp.id}', '${safeDesc}')" class="inline-flex items-center gap-1 px-2 py-1 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg text-[11px] text-slate-700 transition cursor-pointer active:scale-95" title="Dekontu Gör">
            <img src="${exp.receiptImg}" alt="Fiş" class="w-4 h-4 rounded object-cover">
            <span>Gör</span>
          </button>
        ` : `<span class="text-slate-400 text-[11px]">Yok</span>`}
      </td>
      <td class="p-2.5 text-center whitespace-nowrap">
        <div class="flex items-center justify-center gap-1">
          <button type="button" onclick="openExpenseModal('${exp.id}')" class="p-1 text-slate-400 hover:text-blue-600 transition" title="Düzenle">
            ✏️
          </button>
          <button type="button" onclick="deleteExpense('${exp.id}')" class="p-1 text-slate-400 hover:text-red-600 transition" title="Sil">
            🗑️
          </button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });

  // Alt Toplam ve Rozetler
  if (footerTotal) footerTotal.innerText = '-' + totalGider.toLocaleString('tr-TR') + ' ₺';
  if (badgeTotal) badgeTotal.innerText = totalGider.toLocaleString('tr-TR') + ' ₺';

  const formatSummary = (items, count, unitName) => {
    if (count === 0) return '0';
    let totalNum = 0;
    let hasNumbers = false;
    items.forEach(it => {
      const m = String(it).match(/\d+/);
      if (m) {
        totalNum += parseInt(m[0], 10);
        hasNumbers = true;
      }
    });
    if (hasNumbers && totalNum > 0) {
      return totalNum + ' Adet';
    }
    return items.join(', ');
  };

  const setEl = (id, txt) => { const el = document.getElementById(id); if (el) el.innerText = txt; };
  setEl('statTotalCay', cayItems.length > 0 ? formatSummary(cayItems, totalCayCount, 'Çay') : '0');
  setEl('statTotalSeker', sekerItems.length > 0 ? formatSummary(sekerItems, totalSekerCount, 'Şeker') : '0');
  setEl('statTotalDeterjan', deterjanItems.length > 0 ? formatSummary(deterjanItems, totalDeterjanCount, 'Deterjan') : '0');
  setEl('statTotalBardak', bardakItems.length > 0 ? formatSummary(bardakItems, totalBardakCount, 'Bardak') : '0');
}

// XSS Güvenliği için HTML kaçışı
function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/[&<>"']/g, function(m) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m];
  });
}

// Fatura Ekleme/Düzenleme Modalı Aç
function openExpenseModal(editingId = null) {
  currentExpenseReceiptImg = null;
  document.getElementById('expId').value = '';
  document.getElementById('expDesc').value = '';
  document.getElementById('expAmount').value = '';
  document.getElementById('expDate').value = new Date().toISOString().split('T')[0];
  document.getElementById('expCay').value = '';
  document.getElementById('expSeker').value = '';
  document.getElementById('expDeterjan').value = '';
  document.getElementById('expBardak').value = '';
  document.getElementById('expDiger').value = '';
  document.getElementById('expReceiptFileInput').value = '';
  document.getElementById('receiptPreviewBox').classList.add('hidden');
  document.getElementById('receiptPreviewThumb').src = '';
  document.getElementById('receiptUploadStatusText').innerText = 'Görsel seçilmedi';

  if (editingId) {
    const exp = state.expenses.find(e => String(e.id) === String(editingId));
    if (exp) {
      document.getElementById('modalExpenseTitle').innerText = 'Faturayı / Harcamayı Düzenle';
      document.getElementById('expId').value = exp.id;
      document.getElementById('expDate').value = exp.date || '';
      document.getElementById('expDesc').value = exp.desc || '';
      document.getElementById('expAmount').value = exp.amount || '';
      if (exp.items) {
        document.getElementById('expCay').value = exp.items.cay || '';
        document.getElementById('expSeker').value = exp.items.seker || '';
        document.getElementById('expDeterjan').value = exp.items.deterjan || '';
        document.getElementById('expBardak').value = exp.items.bardak || '';
        document.getElementById('expDiger').value = exp.items.diger || '';
      }
      if (exp.receiptImg) {
        currentExpenseReceiptImg = exp.receiptImg;
        document.getElementById('receiptPreviewThumb').src = exp.receiptImg;
        document.getElementById('receiptPreviewBox').classList.remove('hidden');
        document.getElementById('receiptUploadStatusText').innerText = 'Görsel yüklü';
      }
    }
  } else {
    document.getElementById('modalExpenseTitle').innerText = 'Yeni Fatura / Harcama Girişi';
  }

  openModal('modalExpense');
}

// Fiş / Dekont Görseli Seçildiğinde İstemci Tarafında Sıkıştır
function handleReceiptFileSelect(event) {
  const file = event.target.files[0];
  if (!file) return;

  const statusText = document.getElementById('receiptUploadStatusText');
  if (statusText) statusText.innerText = "⏳ Görsel optimize ediliyor...";

  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement('canvas');
      const maxDim = 1000;
      let w = img.width;
      let h = img.height;
      if (w > maxDim || h > maxDim) {
        if (w > h) {
          h = Math.round((h * maxDim) / w);
          w = maxDim;
        } else {
          w = Math.round((w * maxDim) / h);
          h = maxDim;
        }
      }
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, w, h);

      currentExpenseReceiptImg = canvas.toDataURL('image/jpeg', 0.72);
      document.getElementById('receiptPreviewThumb').src = currentExpenseReceiptImg;
      document.getElementById('receiptPreviewBox').classList.remove('hidden');
      if (statusText) statusText.innerText = "✅ Görsel hazır (" + Math.round(currentExpenseReceiptImg.length / 1024) + " KB)";
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

// Yüklenen Dekontu Kaldır
function removeReceiptImage() {
  currentExpenseReceiptImg = null;
  document.getElementById('expReceiptFileInput').value = '';
  document.getElementById('receiptPreviewThumb').src = '';
  document.getElementById('receiptPreviewBox').classList.add('hidden');
  document.getElementById('receiptUploadStatusText').innerText = 'Görsel seçilmedi';
}

// Faturayı Kaydet
function saveExpense() {
  const desc = document.getElementById('expDesc').value.trim();
  const amount = parseFloat(document.getElementById('expAmount').value);
  const date = document.getElementById('expDate').value || new Date().toISOString().split('T')[0];

  if (!desc) {
    alert("Lütfen harcama açıklamasını giriniz.");
    document.getElementById('expDesc').focus();
    return;
  }

  if (isNaN(amount) || amount <= 0) {
    alert("Lütfen geçerli bir harcama tutarı giriniz.");
    document.getElementById('expAmount').focus();
    return;
  }

  const expId = document.getElementById('expId').value;
  const items = {
    cay: document.getElementById('expCay').value.trim(),
    seker: document.getElementById('expSeker').value.trim(),
    deterjan: document.getElementById('expDeterjan').value.trim(),
    bardak: document.getElementById('expBardak').value.trim(),
    diger: document.getElementById('expDiger').value.trim()
  };

  if (!state.expenses) state.expenses = [];

  let savedExpenseObj = null;
  if (expId) {
    const existing = state.expenses.find(e => String(e.id) === String(expId));
    if (existing) {
      existing.date = date;
      existing.desc = desc;
      existing.amount = amount;
      existing.items = items;
      if (currentExpenseReceiptImg !== undefined) {
        existing.receiptImg = currentExpenseReceiptImg;
      }
      savedExpenseObj = existing;
    }
  } else {
    savedExpenseObj = {
      id: Date.now(),
      date: date,
      desc: desc,
      amount: amount,
      items: items,
      receiptImg: currentExpenseReceiptImg || null
    };
    state.expenses.push(savedExpenseObj);
  }

  closeModal('modalExpense');
  saveState();
  showToast("✅ Fatura başarıyla kaydedildi!");

  // Cihazlar arası anında bulut yayını (telefon/bilgisayar senkronizasyonu)
  if (savedExpenseObj) {
    try {
      fetch('https://ntfy.sh/cay_mujdattelli_2026_okul', {
        method: 'POST',
        body: JSON.stringify({
          type: 'expense_event',
          action: 'save',
          expense: {
            id: savedExpenseObj.id,
            date: savedExpenseObj.date,
            desc: savedExpenseObj.desc,
            amount: savedExpenseObj.amount,
            items: savedExpenseObj.items
          }
        }),
        headers: { 'Title': 'Yeni Fatura Eklendi' }
      }).catch(() => {});
    } catch(e) {}
  }
}

// Faturayı Sil
function deleteExpense(id) {
  const exp = state.expenses.find(e => String(e.id) === String(id));
  const desc = exp ? exp.desc : 'Bu faturayı';
  if (confirm(`"${desc}" faturasını silmek istediğinizden emin misiniz?`)) {
    state.expenses = state.expenses.filter(e => String(e.id) !== String(id));
    saveState();
    showToast("🗑️ Fatura silindi!");

    // Cihazlar arası silme yayını
    try {
      fetch('https://ntfy.sh/cay_mujdattelli_2026_okul', {
        method: 'POST',
        body: JSON.stringify({
          type: 'expense_event',
          action: 'delete',
          id: id
        }),
        headers: { 'Title': 'Fatura Silindi' }
      }).catch(() => {});
    } catch(e) {}
  }
}

// Dekontu Büyük Boyutta Önizle
function openReceiptPreview(idOrSrc, title = 'Dekont / Fatura') {
  let src = idOrSrc;
  if (!idOrSrc.startsWith('data:')) {
    const exp = state.expenses.find(e => String(e.id) === String(idOrSrc));
    if (exp && exp.receiptImg) {
      src = exp.receiptImg;
      title = exp.desc || title;
    }
  }
  document.getElementById('modalReceiptViewImg').src = src;
  document.getElementById('modalReceiptViewTitle').innerText = title;
  const downloadBtn = document.getElementById('modalReceiptDownloadBtn');
  if (downloadBtn) downloadBtn.href = src;
  openModal('modalReceiptView');
}

// Geçen Sene Devreden Bakiyeyi Güncelle
function updateDevreden() {
  const val = prompt("Geçen seneden devreden kasa miktarını girin (TL):", state.devredenBakiye || 0);
  if (val !== null) {
    const num = parseFloat(val.replace(',', '.'));
    if (!isNaN(num)) {
      state.devredenBakiye = num;
      saveState();
    }
  }
}

// Yeni Öğretmen Ekle
function addTeacher() {
  const name = document.getElementById('newTeacherName').value.trim().toUpperCase('tr');
  const branch = document.getElementById('newTeacherBranch').value.trim();
  const status = document.getElementById('newTeacherStatus').value;

  if (!name) {
    alert("Öğretmen adı boş bırakılamaz.");
    return;
  }

  const nextId = state.teachers.reduce((max, t) => Math.max(max, t.id), 0) + 1;
  state.teachers.push({
    id: nextId,
    name: name,
    branch: branch,
    status: status,
    t1: false,
    t2: false,
    t3: false,
    t4: false,
    t5: false,
    note: ""
  });

  document.getElementById('newTeacherName').value = '';
  document.getElementById('newTeacherBranch').value = '';
  closeModal('modalYeniHoca');
  saveState();
}

// Öğretmen Düzenleme / Not
function editTeacherModal(id) {
  const t = state.teachers.find(x => x.id === id);
  if (!t) return;

  const newNote = prompt(`${t.name} için not / açıklama girin:`, t.note || '');
  if (newNote !== null) {
    t.note = newNote;
    saveState();
  }
}

// Google Form Yanıtlarını Akıllı İçe Aktarma
function importGoogleFormResponses() {
  const text = document.getElementById('importText').value.trim();
  if (!text) {
    alert("Lütfen Google Form E-Tablosundan kopyaladığınız veriyi buraya yapıştırın.");
    return;
  }

  const lines = text.split('\n');
  let matchedCount = 0;
  let newAddedCount = 0;

  lines.forEach(line => {
    if (!line.trim()) return;
    const lowerLine = line.toLowerCase('tr');

    // Katılım tespit
    let status = 'bekliyor';
    if (lowerLine.includes('evet') || lowerLine.includes('istiyorum') || lowerLine.includes('katılmak istiyorum')) {
      status = 'katiliyor';
    } else if (lowerLine.includes('hayır') || lowerLine.includes('istemiyorum') || lowerLine.includes('katılmak istemiyorum')) {
      status = 'katilmiyor';
    }

    // Mevcut öğretmenler arasında eşleşme ara
    let matched = false;
    for (let t of state.teachers) {
      const parts = t.name.toLowerCase('tr').split(' ');
      const soyad = parts[parts.length - 1];
      const ad = parts[0];

      if (lowerLine.includes(t.name.toLowerCase('tr')) || (lowerLine.includes(ad) && lowerLine.includes(soyad))) {
        t.status = status;
        matched = true;
        matchedCount++;
        break;
      }
    }

    // Eğer listede yoksa yeni hoca olarak ekle
    if (!matched && status !== 'bekliyor') {
      // Satırdan isim çıkarmaya çalış
      const cols = line.split('\t');
      let candidateName = cols[1] || cols[0];
      candidateName = candidateName.replace(/\d+/g, '').replace(/[-–()]/g, '').trim();

      if (candidateName.length > 3) {
        const nextId = state.teachers.reduce((max, t) => Math.max(max, t.id), 0) + 1;
        state.teachers.push({
          id: nextId,
          name: candidateName.toUpperCase('tr'),
          branch: "Google Formdan Eklendi",
          status: status,
          t1: false,
          t2: false,
          t3: false,
          t4: false,
          t5: false,
          note: "Form yanıtından eklendi"
        });
        newAddedCount++;
      }
    }
  });

  alert(`İçe Aktarma Tamamlandı!\n\n• ${matchedCount} mevcut öğretmenin durumu güncellendi.\n• ${newAddedCount} yeni öğretmen listeye eklendi.`);
  closeModal('modalImport');
  document.getElementById('importText').value = '';
  saveState();
}

// Canlı Bulut Senkronizasyon (Tam Otomatik & Canlı)
async function fetchFromCloudSync(silent = true) {
  if (!silent) showToast("⏳ Bulut veritabanından yanıtlar eşitleniyor...");
  let updatedCount = 0;

  const norm = (s) => (s || '').replace(/İ/g, 'I').replace(/ı/g, 'I').replace(/i/g, 'I').replace(/ğ/g, 'G').replace(/Ğ/g, 'G').replace(/ş/g, 'S').replace(/Ş/g, 'S').replace(/ç/g, 'C').replace(/Ç/g, 'C').replace(/ö/g, 'O').replace(/Ö/g, 'O').replace(/ü/g, 'U').replace(/Ü/g, 'U').toUpperCase().trim();

  // 0. Kalıcı Bulut Veritabanından Çek (Süresiz saklanan ana bulut kayıtları - Gmail'e gerek bırakmaz)
  try {
    const permRes = await fetch(CLOUD_TEACHERS_DB_URL, { cache: 'no-store' });
    if (permRes.ok) {
      const permJson = await permRes.json();
      if (permJson && permJson.data && permJson.data.t) {
        const tMap = permJson.data.t;
        for (const [idStr, codeStr] of Object.entries(tMap)) {
          const teacher = state.teachers.find(t => String(t.id) === String(idStr));
          if (teacher && typeof codeStr === 'string') {
            const parts = codeStr.split(':');
            const stCode = parts[0];
            const mask = parseInt(parts[1] || '0', 10);
            const ek1 = parseInt(parts[2] || '0', 10);
            const ek2 = parseInt(parts[3] || '0', 10);

            const newStatus = stCode === '1' ? 'katiliyor' : (stCode === '0' ? 'katilmiyor' : 'bekliyor');
            if (newStatus !== 'bekliyor' && teacher.status !== newStatus) {
              teacher.status = newStatus;
              if (!teacher.note) {
                teacher.note = newStatus === 'katiliyor' ? 'Formdan katıldı' : 'Formdan bildirildi: Katılmıyor';
              }
              updatedCount++;
            }
            if ((mask & 1) && !teacher.t1) { teacher.t1 = true; updatedCount++; }
            if ((mask & 2) && !teacher.t2) { teacher.t2 = true; updatedCount++; }
            if ((mask & 4) && !teacher.t3) { teacher.t3 = true; updatedCount++; }
            if ((mask & 8) && !teacher.t4) { teacher.t4 = true; updatedCount++; }
            if ((mask & 16) && !teacher.t5) { teacher.t5 = true; updatedCount++; }
            if (ek1 > (Number(teacher.ek1) || 0)) { teacher.ek1 = ek1; updatedCount++; }
            if (ek2 > (Number(teacher.ek2) || 0)) { teacher.ek2 = ek2; updatedCount++; }
          }
        }
      }
    }
  } catch (permErr) {
    console.warn("Kalıcı bulut okuma uyarısı:", permErr);
  }

  // 1. Canlı Veri Kanalından Çek (ntfy.sh - Sıfır Kurulum, Anında Eşitleme)
  try {
    const res = await fetch('https://ntfy.sh/cay_mujdattelli_2026_okul/json?poll=1&since=all', { cache: 'no-store' });
    if (res.ok) {
      const text = await res.text();
      const lines = text.trim().split('\n').filter(Boolean);
      lines.forEach(line => {
        try {
          const item = JSON.parse(line);
          if (item.event === 'message' && item.message) {
            let data = null;
            try { data = JSON.parse(item.message); } catch(e) {}
            if (data && data.type === 'expense_event') {
              if (!state.expenses) state.expenses = [];
              if (data.action === 'save' && data.expense && data.expense.id) {
                const existingIdx = state.expenses.findIndex(e => String(e.id) === String(data.expense.id));
                if (existingIdx >= 0) {
                  state.expenses[existingIdx].date = data.expense.date || state.expenses[existingIdx].date;
                  state.expenses[existingIdx].desc = data.expense.desc || state.expenses[existingIdx].desc;
                  state.expenses[existingIdx].amount = Number(data.expense.amount) || state.expenses[existingIdx].amount;
                  if (data.expense.items) state.expenses[existingIdx].items = data.expense.items;
                } else {
                  state.expenses.push(data.expense);
                }
                updatedCount++;
              } else if (data.action === 'delete' && data.id) {
                const prevLen = state.expenses.length;
                state.expenses = state.expenses.filter(e => String(e.id) !== String(data.id));
                if (state.expenses.length !== prevLen) updatedCount++;
              }
            } else if (data && (data.id || data.name)) {
              let teacher = null;
              if (data.id && !isNaN(data.id)) {
                teacher = state.teachers.find(t => t.id === Number(data.id));
              }
              if (!teacher && data.name) {
                teacher = state.teachers.find(t => norm(t.name) === norm(data.name));
              }
              if (teacher) {
                const noteIsGeneric = !data.note || data.note === 'Formdan katıldı' || data.note === 'Formdan eklendi';
                const hasPaymentNote = teacher.note && teacher.note.includes('ödendi');
                if (teacher.status !== data.status || (!hasPaymentNote && data.note && teacher.note !== data.note)) {
                  teacher.status = data.status;
                  if (data.note && !hasPaymentNote && !noteIsGeneric) teacher.note = data.note;
                  if (data.branch && (!teacher.branch || teacher.branch === 'Yeni Öğretmen')) {
                    teacher.branch = data.branch;
                  }
                  updatedCount++;
                }
              } else if (data.name) {
                const nextId = state.teachers.reduce((max, t) => Math.max(max, t.id), 0) + 1;
                state.teachers.push({
                  id: nextId,
                  name: data.name.toUpperCase('tr'),
                  branch: data.branch || 'Yeni Öğretmen',
                  status: data.status,
                  t1: false, t2: false, t3: false, t4: false, t5: false,
                  note: data.note || 'Formdan eklendi'
                });
                updatedCount++;
              }
            }
          }
        } catch(e) {}
      });
    }
  } catch (err) {
    console.warn("ntfy senkronizasyon hatası:", err);
  }

  // 2. Varsa Google E-Tablo Web App Bağlantısından Çek
  const cloudUrl = localStorage.getItem('google_script_url');
  if (cloudUrl) {
    try {
      const res = await fetch(cloudUrl + (cloudUrl.includes('?') ? '&' : '?') + 't=' + Date.now(), { cache: 'no-store' });
      if (res.ok) {
        const json = await res.json();
        if (json && json.data) {
          for (const [key, val] of Object.entries(json.data)) {
            const parts = String(val).split('|');
            const status = parts[0];
            const note = parts[1] || '';
            const customName = parts[2] || '';
            const customBranch = parts[3] || 'Yeni Öğretmen';

            let teacher = null;
            if (!isNaN(key) && Number(key) > 0) {
              teacher = state.teachers.find(t => t.id === Number(key));
            }
            if (!teacher && customName) {
              teacher = state.teachers.find(t => norm(t.name) === norm(customName));
            }
            if (!teacher && isNaN(key)) {
              teacher = state.teachers.find(t => norm(t.name) === norm(key));
            }

            if (teacher) {
              if (teacher.status !== status || (note && teacher.note !== note)) {
                teacher.status = status;
                if (note) teacher.note = note;
                updatedCount++;
              }
            } else {
              const nextId = state.teachers.reduce((max, t) => Math.max(max, t.id), 0) + 1;
              state.teachers.push({
                id: nextId,
                name: (customName || key).toUpperCase('tr'),
                branch: customBranch,
                status: status,
                t1: false, t2: false, t3: false, t4: false, t5: false,
                note: note || 'Formdan eklendi'
              });
              updatedCount++;
            }
          }
        }
      }
    } catch (err) {
      console.warn("Google Script senkronizasyon hatası:", err);
    }
  }

  if (updatedCount > 0) {
    saveState();
    pushTeachersToPermanentCloud();
    updateDashboard();
    renderTable();
    if (!silent) showToast(`✅ Buluttan ${updatedCount} öğretmen yanıtı güncellendi!`);
  } else {
    if (!silent) showToast("✅ Liste zaten en güncel durumda.");
  }
}

// FormSubmit Otomatik Senkronizasyon (API Key İle Tüm Yanıtları Çeker)
async function syncFromFormSubmit(apiKey, silent = false) {
  if (!apiKey) {
    const inputEl = document.getElementById('apiKeyInput');
    apiKey = inputEl ? inputEl.value.trim() : '';
  }
  if (!apiKey) {
    apiKey = localStorage.getItem('formsubmit_api_key') || '';
  }
  if (!apiKey) {
    if (silent) return; // Arka planda sessiz çalışırken sorma
    const promptKey = prompt("Lütfen Gmail kutunuza ('tellimujdat@gmail.com') FormSubmit tarafından gönderilen API Key'i yapıştırınız:\n(Bu işlem bir defalıktır, bir kez girince sistem hep otomatik çeker)");
    if (promptKey && promptKey.trim()) {
      apiKey = promptKey.trim();
    } else {
      return;
    }
  }

  if (!silent) showToast("⏳ FormSubmit yanıtları çekiliyor...");
  try {
    const res = await fetch(`https://formsubmit.co/api/get-submissions/${apiKey}`);
    const json = await res.json();
    if (json && json.success && Array.isArray(json.submissions)) {
      localStorage.setItem('formsubmit_api_key', apiKey);
      loadState();

      let guncellenenSayisi = 0;
      json.submissions.forEach(sub => {
        const d = sub.form_data || {};
        const secilen = d.Secilen_Ogretmen || '';
        const durum = d.Katilim_Durumu || '';
        const yeniOgretmen = d.Yeni_Ogretmen_Bilgisi || '';
        const not = d.Ogretmen_Notu || '';
        const isKatiliyor = durum.includes('EVET');

        if (secilen.includes('LİSTEDE ADIM YOK') && yeniOgretmen && yeniOgretmen.trim()) {
          const uName = yeniOgretmen.trim().toUpperCase('tr');
          const existing = state.teachers.find(t => t.name.toUpperCase('tr') === uName);
          if (existing) {
            existing.status = isKatiliyor ? 'katiliyor' : 'katilmiyor';
            if (not) existing.note = not;
          } else {
            const nextId = state.teachers.reduce((max, t) => Math.max(max, t.id), 0) + 1;
            state.teachers.push({
              id: nextId,
              name: uName,
              branch: 'Yeni Öğretmen',
              status: isKatiliyor ? 'katiliyor' : 'katilmiyor',
              t1: false, t2: false, t3: false, t4: false, t5: false,
              note: not || 'Formdan eklendi'
            });
          }
          guncellenenSayisi++;
        } else if (secilen) {
          for (let t of state.teachers) {
            if (secilen.includes(t.name)) {
              t.status = isKatiliyor ? 'katiliyor' : 'katilmiyor';
              if (not) t.note = not;
              guncellenenSayisi++;
              break;
            }
          }
        }
      });

      saveState();
      updateDashboard();
      if (!silent) {
        showToast(`✅ ${guncellenenSayisi} öğretmen yanıtı başarıyla eşitlendi!`);
      }
    } else {
      if (!silent) alert("❌ FormSubmit yanıtları alınamadı. Lütfen API Key'inizi kontrol ediniz.");
    }
  } catch (err) {
    console.error("FormSubmit senkronizasyon hatası:", err);
    if (!silent) alert("❌ Bağlantı hatası: " + err.message);
  }
}

// Excel / CSV Olarak İndir
function exportToCSV() {
  let csv = "S.N;Ad Soyad;Branş;Durum;1.Dönem (900 TL);2.Dönem (900 TL);Toplam Ödenen;Kalan Borç;Not\n";
  
  state.teachers.forEach(t => {
    const donem1Odenen = getTeacherDonem1Paid(t);
    const donem2Odenen = getTeacherDonem2Paid(t);
    const odenen = getTeacherTotalPaid(t);
    const kalan = t.status === 'katiliyor' ? Math.max(0, YILLIK_UCRET - odenen) : 0;
    const durumText = t.status === 'katiliyor' ? 'Katılıyor' : (t.status === 'katilmiyor' ? 'Katılmıyor' : 'Bekliyor');
    const d1Text = donem1Odenen >= DONEM1_UCRET ? '900 TL (TAM)' : (donem1Odenen > 0 ? `${donem1Odenen} TL (${DONEM1_UCRET - donem1Odenen} TL Eksik)` : '-');
    const d2Text = donem2Odenen >= DONEM2_UCRET ? '900 TL (TAM)' : (donem2Odenen > 0 ? `${donem2Odenen} TL (${DONEM2_UCRET - donem2Odenen} TL Eksik)` : '-');
    
    csv += `${t.id};"${t.name}";"${t.branch || ''}";"${durumText}";"${d1Text}";"${d2Text}";${odenen};${kalan};"${t.note || ''}"\n`;
  });

  const blob = new Blob(["\uFEFF" + csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Okul_Cay_Takip_Listesi_${new Date().toISOString().split('T')[0]}.csv`;
  a.click();
}

// Tüm Veriyi JSON Yedeği Olarak İndir (Sıfır Veri Kaybı Garantisi)
function exportFullBackupJSON() {
  const backupData = {
    app: "cay_katilim_takip",
    version: CANONICAL_DATA_VERSION,
    exportDate: new Date().toISOString(),
    state: {
      version: state.version,
      teachers: state.teachers,
      expenses: state.expenses,
      devredenBakiye: state.devredenBakiye || 0
    }
  };
  const jsonStr = JSON.stringify(backupData, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Cay_Takip_Sistem_Yedegi_${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  showToast("💾 Tam sistem yedeği indirildi!");
}

// JSON Yedeğini Geri Yükle (Akıllı Birleştirme ile Sıfır Veri Kaybı)
function importFullBackupJSON(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      if (!data || (!data.state && !data.teachers)) {
        alert("Geçersiz yedek dosyası!");
        return;
      }
      const importedState = data.state || data;
      
      // 1. Faturaları birleştir
      if (Array.isArray(importedState.expenses)) {
        if (!state.expenses) state.expenses = [];
        const expMap = new Map();
        state.expenses.forEach(x => { if (x && x.id) expMap.set(String(x.id), x); });
        importedState.expenses.forEach(x => {
          if (x && x.id) expMap.set(String(x.id), x);
        });
        state.expenses = Array.from(expMap.values());
      }

      // 2. Öğretmenleri ve seçimleri akıllıca birleştir
      if (Array.isArray(importedState.teachers)) {
        const tMap = new Map();
        state.teachers.forEach(t => tMap.set(t.id, t));
        importedState.teachers.forEach(it => {
          if (!it) return;
          if (tMap.has(it.id)) {
            const cur = tMap.get(it.id);
            cur.t1 = Boolean(cur.t1 || it.t1);
            cur.t2 = Boolean(cur.t2 || it.t2);
            cur.t3 = Boolean(cur.t3 || it.t3);
            cur.t4 = Boolean(cur.t4 || it.t4);
            cur.t5 = Boolean(cur.t5 || it.t5);
            if (it.status && it.status !== 'bekliyor') cur.status = it.status;
            if (it.note && it.note.trim() && (!cur.note || !cur.note.includes(it.note.trim()))) {
              cur.note = cur.note ? (cur.note + ' | ' + it.note.trim()) : it.note.trim();
            }
          } else {
            tMap.set(it.id, it);
          }
        });
        state.teachers = Array.from(tMap.values()).sort((a, b) => a.id - b.id);
      }

      saveState();
      updateDashboard();
      alert("✅ Yedek başarıyla geri yüklendi!\nÖğretmen seçimleriniz, ödemeler ve faturalarınız güvenle birleştirildi.");
    } catch(err) {
      alert("Yedek yüklenirken hata oluştu: " + err.message);
    }
  };
  reader.readAsText(file);
}

// Modal Kontrolleri
function openModal(id) {
  document.getElementById(id).classList.remove('hidden');
}

function closeModal(id) {
  document.getElementById(id).classList.add('hidden');
}

// Google Apps Script URL Kaydet
function saveGoogleScriptUrl() {
  const el = document.getElementById('googleScriptUrlInput');
  if (el && el.value.trim()) {
    localStorage.setItem('google_script_url', el.value.trim());
    showToast("✅ Google E-Tablo Web App URL'si kaydedildi!");
    closeModal('modalCloudConfig');
    fetchFromCloudSync(false);
  } else {
    localStorage.removeItem('google_script_url');
    showToast("Bağlantı temizlendi.");
    closeModal('modalCloudConfig');
  }
}

// Kodu Panoya Kopyala
function copyGoogleScriptCode() {
  const codeEl = document.getElementById('googleScriptCodeArea');
  if (codeEl) {
    navigator.clipboard.writeText(codeEl.value).then(() => {
      showToast("✅ Google Apps Script kodu panoya kopyalandı!");
    });
  }
}

// IBAN Kopyala
function copyIBAN() {
  navigator.clipboard.writeText("TR830001200986200001021145").then(() => {
    showToast("✅ IBAN Numarası Panoya Kopyalandı:\nTR830001200986200001021145");
  });
}

// Alıcı Adı Kopyala
function copyAccountName() {
  navigator.clipboard.writeText("MÜJDAT TELLİ").then(() => {
    showToast("✅ Alıcı Adı Kopyalandı:\nMÜJDAT TELLİ");
  });
}

// WhatsApp Duyuru Metnini Kopyala (Güncel Çay Tüketimi ve Fiyat Güncellemesi)
function copyWhatsAppAnnouncement() {
  const msg = 
`☕ *OKUL ÇAY OCAĞI ÖNEMLİ ÜCRET GÜNCELLEMESİ & HATIRLATMA DUYURUSU*

Değerli Öğretmen Arkadaşlarımız,
Okulumuz çay ocağında *ayda neredeyse 10 paket (10 kilo) çay* tüketilmektedir. Mevcut çay, şeker ve bardak giderleri karşısında eski belirlenen tutar yetmeyeceği için dönemlik katılım ücretlerinde güncelleme yapılması zorunlu olmuştur:

📌 *Yeni Dönemlik Katılım Ücretleri (Yıllık Toplam: 1.800 TL):*
• *1. Dönem:* *900 TL*
• *2. Dönem:* *900 TL*

🔹 *1. Dönem İçin Ödeme Yapan Arkadaşlarımız:*
1. dönem için eksik ödeme yatıran öğretmen arkadaşlarımızın, 1. dönem ödemelerini *900 TL'ye tamamlamalarını* rica ederiz. (2. dönem için de 900 TL alınacaktır).

⚠️ *ÖNEMLİ HATIRLATMA:*
Hâlâ formu doldurmayıp ödeme göndermeyen arkadaşlarımızın da en kısa sürede aşağıdaki linkten katılım durumlarını (*Katılıyorum / Katılmıyorum*) işaretlemeleri ve ödemelerini göndermeleri önemle rica olunur.

💳 *ÖDEME BİLGİLERİ (IBAN)*
👤 *Alıcı:* MÜJDAT TELLİ
🏦 *IBAN:* TR83 0001 2009 8620 0001 0211 45
📝 *Açıklama:* Adınız Soyadınız - Çay Parası

👇 *Katılım Formu ve Güncel Takip Linki:*
👉 https://mujdattelli.github.io/cay-katilim/`;

  navigator.clipboard.writeText(msg).then(() => {
    showToast("✅ Güncel WhatsApp Duyuru Metni panoya kopyalandı!\nDoğrudan okul grubuna yapıştırabilirsiniz.");
  });
}

// Maaş Günü / Kısa Hatırlatma Metnini Kopyala
function copyMaasGunuAnnouncement() {
  const msg = 
`☕ *Değerli Öğretmen Arkadaşlarımız, Önemli Çay Ocağı Duyurusu!*

Çay ocağımızda *aylık neredeyse 10 kilo (10 paket) çay* tüketildiği için mevcut bütçe yetmemektedir. Bu nedenle kişi başı toplam ücret *1.800 TL* (*1. Dönem 900 TL*, *2. Dönem 900 TL*) olarak güncellenmiştir.

✅ *1. dönem için ödeme göndermiş olan arkadaşlarımızın ödemelerini 900 TL'ye tamamlamaları,*
⚠️ *Hâlâ formu doldurmayıp ödeme göndermeyen arkadaşlarımızın da aşağıdaki linkten seçim yapıp 1. dönem (900 TL) ödemesini göndermeleri rica olunur.*

👤 *Alıcı:* MÜJDAT TELLİ
🏦 *IBAN:* TR83 0001 2009 8620 0001 0211 45
📝 *Açıklama:* Adınız Soyadınız - Çay Parası

👇 *Katılım Formu Linki:*
👉 https://mujdattelli.github.io/cay-katilim/`;

  navigator.clipboard.writeText(msg).then(() => {
    showToast("✅ Kısa WhatsApp Duyuru Mesajı panoya kopyalandı!");
  });
}

// Kolay Bildirim / Toast Gösterici
function showToast(message) {
  const toast = document.getElementById('toastBox');
  const toastText = document.getElementById('toastText');
  if (toast && toastText) {
    toastText.innerText = message;
    toast.classList.remove('opacity-0', 'translate-y-4');
    toast.classList.add('opacity-100', 'translate-y-0');
    setTimeout(() => {
      toast.classList.remove('opacity-100', 'translate-y-0');
      toast.classList.add('opacity-0', 'translate-y-4');
    }, 2500);
  } else {
    alert(message);
  }
}

// Arama ve Filtre Event Dinleyicileri
document.addEventListener('DOMContentLoaded', () => {
  loadState();

  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderTable();
    });
  }

  const filterSelect = document.getElementById('filterStatusSelect');
  if (filterSelect) {
    filterSelect.addEventListener('change', (e) => {
      state.filterStatus = e.target.value;
      renderTable();
    });
  }

  updateDashboard();

  // 1. Ortak Bulut Veritabanından yanıtları ilk açılışta çek (varsa)
  fetchFromCloudSync(true);

  // Eğer kayıtlı FormSubmit API Key varsa arka planda onu da çalıştır
  const savedApiKey = localStorage.getItem('formsubmit_api_key');
  if (savedApiKey) {
    syncFromFormSubmit(savedApiKey, true);
  }
});
