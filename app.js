// Öğretmen ve Personel Başlangıç Listesi (60 Kişi)
const DEFAULT_TEACHERS = [
  { id: 1, name: "ABDURRAHİM BÜYÜKDAĞ", branch: "Din Kültürü ve Ahlâk Bilgisi", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 2, name: "ASLI GÜREL", branch: "Bilişim Teknolojileri", status: "katiliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "Formdan katıldı" },
  { id: 3, name: "AYÇA ÇIKAR", branch: "Elektrik-Elektronik Teknolojisi / Elektronik", status: "katiliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "Formdan katıldı" },
  { id: 4, name: "BESTİ GÜZELSOY", branch: "Türk Dili ve Edebiyatı", status: "katilmiyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "Formdan bildirildi: Katılmıyor" },
  { id: 5, name: "BEYZA YETİK", branch: "Matematik", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 6, name: "BİRGÜL COŞKUN", branch: "Bilişim Teknolojileri", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 7, name: "BİROL ATEŞ", branch: "Din Kültürü ve Ahlâk Bilgisi", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 8, name: "CELAL ATIŞ", branch: "Türk Dili ve Edebiyatı", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 9, name: "CEM KURTOĞLU", branch: "Elektrik-Elektronik Teknolojisi / Elektrik", status: "katilmiyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "Formdan bildirildi: Katılmıyor" },
  { id: 10, name: "DEMET KESEN", branch: "Matematik", status: "katiliyor", t1: true, t2: false, t3: false, t4: false, t5: false, note: "300 TL ödendi (Banka: 07-10-2026)" },
  { id: 11, name: "DEMET SAVRUK", branch: "Bilişim Teknolojileri", status: "katiliyor", t1: true, t2: false, t3: false, t4: false, t5: false, note: "300 TL ödendi (Banka: 17-09-2026)" },
  { id: 12, name: "DERYA YILDIZ", branch: "Fizik", status: "katiliyor", t1: true, t2: false, t3: false, t4: false, t5: false, note: "300 TL ödendi (1. Dönem 900 TL için +600 TL kalan)" },
  { id: 13, name: "DEVRİM YILDIZ", branch: "Felsefe", status: "katiliyor", t1: true, t2: false, t3: false, t4: false, t5: false, note: "300 TL ödendi (1. Dönem 900 TL için +600 TL kalan)" },
  { id: 14, name: "DİĞDEM ACAR", branch: "Biyoloji", status: "katiliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "Formdan katıldı" },
  { id: 15, name: "DURMUŞ KIZILKAYA", branch: "Bilişim Teknolojileri", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 16, name: "EBRU ELMAS", branch: "İngilizce", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 17, name: "EBRU KÜÇÜKALİ TURGUT", branch: "Türk Dili ve Edebiyatı", status: "katiliyor", t1: true, t2: true, t3: false, t4: false, t5: false, note: "600 TL ödendi (1. Dönem 900 TL için +300 TL kalan)" },
  { id: 18, name: "EDİP TAŞDEMİR", branch: "Beden Eğitimi", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 19, name: "ERDİNÇ SİTRAVA", branch: "Türk Dili ve Edebiyatı", status: "katiliyor", t1: true, t2: false, t3: false, t4: false, t5: false, note: "300 TL ödendi (1. Dönem 900 TL için +600 TL kalan)" },
  { id: 20, name: "FATMA NUR SIVAR", branch: "Rehberlik", status: "katiliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "Formdan katıldı" },
  { id: 21, name: "FEYZULLAH KÖKER", branch: "Grafik ve Fotoğraf / Grafik", status: "katilmiyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "Formdan bildirildi: Katılmıyor" },
  { id: 22, name: "GÖKÇE ŞEN", branch: "Özel Eğitim", status: "katiliyor", t1: true, t2: false, t3: false, t4: false, t5: false, note: "300 TL ödendi (1. Dönem 900 TL için +600 TL kalan)" },
  { id: 23, name: "GÖKHAN GÜREL", branch: "Bilişim Teknolojileri", status: "katiliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "Formdan katıldı" },
  { id: 24, name: "HALDUN YILDIZ", branch: "Tarih", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "Dışarı tüp alıyor" },
  { id: 25, name: "HANDAN YASA", branch: "Kimya / Kimya Teknolojisi", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 26, name: "HATİCE AĞAN", branch: "Kimya / Kimya Teknolojisi", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 27, name: "ZEYNEP AYNAS", branch: "TARİH", status: "katiliyor", t1: true, t2: true, t3: true, t4: true, t5: false, note: "1.200 TL ödendi (Banka: 29-09-2026 Havale - Zeynep Mila Aynas)" },
  { id: 28, name: "İBRAHİM CALAYIR", branch: "Bilişim Teknolojileri", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 29, name: "İLKNUR ÇIRPAN", branch: "Bilişim Teknolojileri", status: "katilmiyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "Biz Üst katta demliyoruz hocam, o yüzden katılmıyoruz." },
  { id: 30, name: "MAHMUT YAVUZ", branch: "Elektrik-Elektronik Teknolojisi / Elektrik", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 31, name: "MERAL HIZAL", branch: "Görsel Sanatlar", status: "katiliyor", t1: true, t2: true, t3: false, t4: false, t5: false, note: "600 TL ödendi (1. Dönem 900 TL için +300 TL kalan)" },
  { id: 32, name: "MERİÇ AKKAYA", branch: "Elektrik-Elektronik Teknolojisi / Elektrik", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 33, name: "MERYEM DEMİRTAŞ", branch: "İngilizce", status: "katiliyor", t1: true, t2: false, t3: false, t4: false, t5: false, note: "300 TL ödendi (Banka: 22-09-2026)" },
  { id: 34, name: "MİRAY TEKAY", branch: "Türk Dili ve Edebiyatı", status: "katiliyor", t1: true, t2: true, t3: false, t4: false, t5: false, ek1: 200, note: "800 TL ödendi (Önceki 600 TL + 200 TL ek | 1. Dönem 900 TL için +100 TL kalan)" },
  { id: 35, name: "MUHAMMET ŞEKER", branch: "Bilişim Teknolojileri", status: "katiliyor", t1: true, t2: true, t3: true, t4: true, t5: false, note: "1.200 TL ödendi (1. Dönem 900 TL tam + 2. Dönem 300 TL)" },
  { id: 36, name: "MUHAMMET SERDAR BALIKLI", branch: "Beden Eğitimi", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 37, name: "MURAT KAÇAN", branch: "Bilişim Teknolojileri", status: "katilmiyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "Formdan bildirildi: Katılmıyor" },
  { id: 38, name: "MURAT KANTARCI", branch: "Bilişim Teknolojileri", status: "katiliyor", t1: true, t2: true, t3: false, t4: false, t5: false, note: "600 TL ödendi (1. Dönem 900 TL için +300 TL kalan)" },
  { id: 39, name: "MÜJDAT TELLİ", branch: "Bilişim Teknolojileri", status: "katiliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "Çay Ocağı Sorumlusu" },
  { id: 40, name: "MÜNEVVER ÜNAL ÖTÜKEN", branch: "Coğrafya", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 41, name: "NAGİHAN KOÇ ÇAVUR", branch: "Coğrafya", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 42, name: "NURHAN CAN", branch: "Türk Dili ve Edebiyatı", status: "katiliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "Formdan katıldı" },
  { id: 43, name: "RABİA SULTAN ÇELİK", branch: "Matematik", status: "katiliyor", t1: true, t2: true, t3: true, t4: false, t5: false, note: "900 TL ödendi (1. Dönem Tam - 300 TL 08-09 + 600 TL 03-11)" },
  { id: 44, name: "SERAP KAR ATASEVEN", branch: "Türk Dili ve Edebiyatı", status: "katiliyor", t1: true, t2: true, t3: false, t4: false, t5: false, note: "600 TL ödendi (1. Dönem 900 TL için +300 TL kalan)" },
  { id: 45, name: "SERDAR ÇIRPAN", branch: "Bilişim Teknolojileri", status: "katilmiyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "Odada çay yapıyorum hocam, sizleri de beklerim :)" },
  { id: 46, name: "SERHAT ARSLAN", branch: "Bilişim Teknolojileri", status: "katiliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "Formdan katıldı" },
  { id: 47, name: "SEVİLAY ARSLAN", branch: "Rehberlik", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 48, name: "SEVİLAY DEVECİ", branch: "Elektrik-Elektronik Teknolojisi / Elektronik", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 49, name: "SİNAN RENÇBEROĞLU", branch: "Bilişim Teknolojileri", status: "katiliyor", t1: true, t2: true, t3: false, t4: false, t5: false, note: "600 TL ödendi (1. Dönem 900 TL için +300 TL kalan)" },
  { id: 50, name: "SİNAN CAN YÜCEL", branch: "İngilizce", status: "katiliyor", t1: true, t2: true, t3: true, t4: true, t5: true, note: "1.800 TL ödendi (Tüm Yıl Tam - 1.200 TL 10-09 + 600 TL 03-11 fark)" },
  { id: 51, name: "SONER TAŞ", branch: "Elektrik-Elektronik Teknolojisi / Elektronik", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 52, name: "ŞAHİN KARAKAŞ", branch: "Bilişim Teknolojileri", status: "katiliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "Formdan katıldı" },
  { id: 53, name: "ŞAHİN ORHAN", branch: "Bilişim Teknolojileri", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 54, name: "UĞUR YUSUF SEZER", branch: "Matematik", status: "katilmiyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "Çay tüketmiyorum. Teşekkürler." },
  { id: 55, name: "ZEHRA GENÇ", branch: "Matematik", status: "katiliyor", t1: true, t2: true, t3: true, t4: false, t5: false, note: "900 TL ödendi (1. Dönem Tam)" },
  { id: 56, name: "ZEYNEP ÇIBIK", branch: "İngilizce", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, t5: false, note: "" },
  { id: 57, name: "SEMA KANDEMİR", branch: "Grafik ve Fotoğraf", status: "katiliyor", t1: true, t2: true, t3: true, t4: false, t5: false, note: "900 TL ödendi (1. Dönem Tam - 300 TL 08-09 + 600 TL 03-11)" },
  { id: 58, name: "ZEYNEP BOZDEMİR", branch: "Okul Aile Birliği", status: "katiliyor", t1: true, t2: true, t3: false, t4: false, t5: false, note: "600 TL ödendi (1. Dönem 900 TL için +300 TL kalan)" },
  { id: 59, name: "DEMET TÜRKMEN", branch: "Okul Aile Birliği", status: "katiliyor", t1: true, t2: true, t3: false, t4: false, t5: false, note: "600 TL Zeynep Bozdemir tarafından ödendi (1. Dönem için +300 TL kalan)" },
  { id: 60, name: "ELİF CANSU KESKİN", branch: "Kimya / Kimya Teknolojisi", status: "katiliyor", t1: true, t2: true, t3: false, t4: false, t5: false, note: "600 TL ödendi (1. Dönem 900 TL için +300 TL kalan)" },
  { id: 61, name: "ŞULE ERGUVAN", branch: "Öğretmen", status: "katiliyor", t1: true, t2: true, t3: true, t4: true, t5: false, note: "1.200 TL ödendi (Banka: 17-09-2026 - 1. Dönem 900 TL + 2. Dönem 300 TL)" }
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

const CANONICAL_DATA_VERSION = "2026.11.03_LOCKED_v11";
const CLOUD_TEACHERS_DB_URL = "https://api.restful-api.dev/objects/ff808181a09d98f701a1a1a788f720ac";
const CLOUD_TEACHERS_MIRROR_DB_URL = "https://api.restful-api.dev/objects/ff808181a09d98f701a1a1ccd956216c";
const CLOUD_EXPENSES_DB_URL = "https://api.restful-api.dev/objects/ff808181a09d98f701a1a1a92f2d20d0";
const CLOUD_EXTRA_DB_URL = "https://api.restful-api.dev/objects/ff808181a09d98f701a1a1ccdade216d";

// ================= INDEXEDDB TARAYICI KASASI (100+ MB KALICI YEDEK) =================
function openVaultIDB() {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') return reject(new Error('IndexedDB desteklenmiyor'));
    const req = indexedDB.open('CayTakipVaultDB', 1);
    req.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains('snapshots')) {
        db.createObjectStore('snapshots');
      }
    };
    req.onsuccess = (e) => resolve(e.target.result);
    req.onerror = (e) => reject(e.target.error);
  });
}

async function idbSaveSnapshot(stateObj) {
  try {
    const db = await openVaultIDB();
    const copy = JSON.parse(JSON.stringify(stateObj));
    copy.savedAt = Date.now();
    const dayKey = 'backup_' + new Date().toISOString().split('T')[0];
    await new Promise((resolve, reject) => {
      const tx = db.transaction('snapshots', 'readwrite');
      const store = tx.objectStore('snapshots');
      store.put(copy, 'latest');
      store.put(copy, dayKey);
      tx.oncomplete = () => resolve();
      tx.onerror = (e) => reject(e.target.error);
    });
    db.close();
  } catch (e) {
    console.warn("IndexedDB kayıt uyarısı:", e);
  }
}

async function idbLoadLatestSnapshot() {
  try {
    const db = await openVaultIDB();
    const res = await new Promise((resolve, reject) => {
      const tx = db.transaction('snapshots', 'readonly');
      const store = tx.objectStore('snapshots');
      const getReq = store.get('latest');
      getReq.onsuccess = () => resolve(getReq.result || null);
      getReq.onerror = (e) => reject(e.target.error);
    });
    db.close();
    return res;
  } catch (e) {
    return null;
  }
}

function updateVaultStatusUI(statusText, isOk = true) {
  try {
    const nowStr = new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    localStorage.setItem('cay_last_vault_sync', nowStr);
    const el = document.getElementById('vaultSyncStatusBadge');
    if (el) {
      el.innerText = statusText || `✅ Son Koruma Kaydı: ${nowStr} (Çift Bulut + Cihaz Kasası Aktif)`;
      el.className = isOk
        ? 'inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-900 font-bold text-[11px] border border-emerald-300'
        : 'inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-100 text-amber-900 font-bold text-[11px] border border-amber-300';
    }
  } catch (e) {}
}

// Güvenli Bulut Yazma (Boyut Sınırı + Yeniden Deneme Korumalı)
async function safeCloudPut(url, bodyObj) {
  const jsonBody = JSON.stringify(bodyObj);
  if (jsonBody.length > 970) {
    console.warn("Bulut paket boyutu sınırı aşıldı, özetleniyor:", jsonBody.length);
    return false;
  }
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const r = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: jsonBody
      });
      if (r.ok) return true;
    } catch (err) {}
  }
  return false;
}

async function safeCloudGet(url) {
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const r = await fetch(url, { cache: 'no-store' });
      if (r.ok) return await r.json();
    } catch (err) {}
  }
  return null;
}

// Öğretmen dizisini ultra-kompakt (~190 byte) metne kodlar (1000 byte limitine asla takılmaz)
function encodeSingleTeacherSlot(t) {
  const mask = (t.t1 ? 1 : 0) | (t.t2 ? 2 : 0) | (t.t3 ? 4 : 0) | (t.t4 ? 8 : 0) | (t.t5 ? 16 : 0);
  const ek1 = Math.round(Number(t.ek1) || 0);
  const ek2 = Math.round(Number(t.ek2) || 0);
  const hasPaid = mask > 0 || ek1 > 0 || ek2 > 0;
  const effectiveStatus = (hasPaid && !t.adminModified) ? 'katiliyor' : (t.status || 'bekliyor');
  const stChar = effectiveStatus === 'katiliyor' ? 'K' : (effectiveStatus === 'katilmiyor' ? 'R' : 'B');
  let slot = stChar + mask.toString(36) + (t.adminModified ? '!' : '');
  if (ek1 > 0 || ek2 > 0) {
    slot += '+' + ek1 + (ek2 > 0 ? '.' + ek2 : '');
  }
  return slot;
}

function decodeSingleTeacherSlot(slotStr) {
  if (!slotStr || typeof slotStr !== 'string') return null;
  const m = slotStr.match(/^([KRB])([0-9a-v])(!?)(?:\+(\d+)(?:\.(\d+))?)?$/);
  if (!m) return null;
  return {
    status: m[1] === 'K' ? 'katiliyor' : (m[1] === 'R' ? 'katilmiyor' : 'bekliyor'),
    mask: parseInt(m[2], 36),
    adminModified: m[3] === '!',
    ek1: m[4] ? parseInt(m[4], 10) : 0,
    ek2: m[5] ? parseInt(m[5], 10) : 0
  };
}

// Buluttan gelen veriyi (hem yeni kompakt v formatı hem eski t harita formatı) çözer
function parseRemoteTeachersData(dataObj) {
  const decodedMap = {}; // idStr -> { status, mask, adminModified, ek1, ek2 }
  if (!dataObj) return decodedMap;

  if (typeof dataObj.v === 'string' && dataObj.v.length > 0) {
    const slots = dataObj.v.split(',');
    slots.forEach((slot, idx) => {
      const parsed = decodeSingleTeacherSlot(slot);
      if (parsed) decodedMap[String(idx + 1)] = parsed;
    });
  } else if (dataObj.t && typeof dataObj.t === 'object') {
    for (const [idStr, codeStr] of Object.entries(dataObj.t)) {
      if (typeof codeStr === 'string') {
        const parts = codeStr.split(':');
        const stCode = parts[0];
        decodedMap[String(idStr)] = {
          status: stCode === '1' ? 'katiliyor' : (stCode === '0' ? 'katilmiyor' : 'bekliyor'),
          mask: parseInt(parts[1] || '0', 10),
          adminModified: false,
          ek1: parseInt(parts[2] || '0', 10),
          ek2: parseInt(parts[3] || '0', 10)
        };
      }
    }
  }
  return decodedMap;
}

function buildCompactTeachersStringFromMap(slotMap, maxId) {
  const arr = [];
  for (let id = 1; id <= maxId; id++) {
    arr.push(slotMap[String(id)] || 'B0');
  }
  return arr.join(',');
}

// Kalıcı Çift Bulut Veritabanına Öğretmen Yanıt ve Ödemelerini Güvenle Kaydet
// options.fromPublicForm = true ise öğretmenin mevcut ödemelerine ASLA dokunmaz, sadece katılım durumunu işler!
async function pushTeachersToPermanentCloud(changedTeacherId = null, options = {}) {
  try {
    const fromPublicForm = Boolean(options.fromPublicForm);
    let remoteJson = await safeCloudGet(CLOUD_TEACHERS_DB_URL);
    if (!remoteJson || !remoteJson.data) {
      remoteJson = await safeCloudGet(CLOUD_TEACHERS_MIRROR_DB_URL);
    }

    // Eğer halka açık formdan gönderiliyorsa ve buluta hiç ulaşılamadıysa kısmi veriyle üzerine yazma!
    if (fromPublicForm && (!remoteJson || !remoteJson.data)) {
      return false;
    }

    const remoteDecoded = (remoteJson && remoteJson.data) ? parseRemoteTeachersData(remoteJson.data) : {};
    const maxLocalId = state.teachers.reduce((m, x) => Math.max(m, Number(x.id) || 0), 61);
    const maxRemoteId = Object.keys(remoteDecoded).reduce((m, k) => Math.max(m, Number(k) || 0), 0);
    const maxId = Math.min(200, Math.max(maxLocalId, maxRemoteId, 61));

    const finalSlots = {};

    // 1. Önce yerel durum ile buluttaki diğer öğretmenlerin durumunu kayıpsız birleştir
    for (let id = 1; id <= maxId; id++) {
      const idStr = String(id);
      const localT = state.teachers.find(x => String(x.id) === idStr);
      const rem = remoteDecoded[idStr];

      if (fromPublicForm && String(changedTeacherId) !== idStr) {
        // Halka açık formda diğer öğretmenlerin buluttaki kaydını aynen koru
        if (rem) {
          finalSlots[idStr] = encodeSingleTeacherSlot({
            status: rem.status,
            t1: Boolean(rem.mask & 1), t2: Boolean(rem.mask & 2), t3: Boolean(rem.mask & 4),
            t4: Boolean(rem.mask & 8), t5: Boolean(rem.mask & 16),
            ek1: rem.ek1, ek2: rem.ek2, adminModified: rem.adminModified
          });
        } else if (localT) {
          finalSlots[idStr] = encodeSingleTeacherSlot(localT);
        } else {
          finalSlots[idStr] = 'B0';
        }
      } else if (fromPublicForm && String(changedTeacherId) === idStr && localT) {
        // Halka açık formdan gelen öğretmen: Buluttaki ÖDEMELERİNİ (mask, ek1, ek2) ASLA SİLME!
        const rMask = rem ? rem.mask : 0;
        const rEk1 = rem ? rem.ek1 : 0;
        const rEk2 = rem ? rem.ek2 : 0;
        const mergedT = {
          status: (rMask > 0 || rEk1 > 0 || rEk2 > 0) ? 'katiliyor' : localT.status,
          t1: Boolean(localT.t1 || (rMask & 1)),
          t2: Boolean(localT.t2 || (rMask & 2)),
          t3: Boolean(localT.t3 || (rMask & 4)),
          t4: Boolean(localT.t4 || (rMask & 8)),
          t5: Boolean(localT.t5 || (rMask & 16)),
          ek1: Math.max(Number(localT.ek1) || 0, rEk1),
          ek2: Math.max(Number(localT.ek2) || 0, rEk2),
          adminModified: rem ? rem.adminModified : false
        };
        finalSlots[idStr] = encodeSingleTeacherSlot(mergedT);
      } else if (localT) {
        // Yönetici panelinden kayıt: Değişen öğretmen için yöneticinin son kararını yaz,
        // diğer öğretmenler için bulutta yeni gelmiş yanıt varsa birleştirerek koru!
        if (changedTeacherId !== null && String(changedTeacherId) === idStr) {
          finalSlots[idStr] = encodeSingleTeacherSlot(localT);
        } else if (rem && !localT.adminModified) {
          const mergedOther = {
            status: (rem.status !== 'bekliyor' && localT.status === 'bekliyor') ? rem.status : localT.status,
            t1: Boolean(localT.t1 || (rem.mask & 1)),
            t2: Boolean(localT.t2 || (rem.mask & 2)),
            t3: Boolean(localT.t3 || (rem.mask & 4)),
            t4: Boolean(localT.t4 || (rem.mask & 8)),
            t5: Boolean(localT.t5 || (rem.mask & 16)),
            ek1: Math.max(Number(localT.ek1) || 0, rem.ek1),
            ek2: Math.max(Number(localT.ek2) || 0, rem.ek2),
            adminModified: Boolean(localT.adminModified || rem.adminModified)
          };
          finalSlots[idStr] = encodeSingleTeacherSlot(mergedOther);
        } else {
          finalSlots[idStr] = encodeSingleTeacherSlot(localT);
        }
      } else if (rem) {
        finalSlots[idStr] = encodeSingleTeacherSlot({
          status: rem.status,
          t1: Boolean(rem.mask & 1), t2: Boolean(rem.mask & 2), t3: Boolean(rem.mask & 4),
          t4: Boolean(rem.mask & 8), t5: Boolean(rem.mask & 16),
          ek1: rem.ek1, ek2: rem.ek2, adminModified: rem.adminModified
        });
      }
    }

    const compactStr = buildCompactTeachersStringFromMap(finalSlots, maxId);
    const payloadPrimary = { name: 'cay_db', data: { v: compactStr } };
    const payloadMirror = { name: 'cay_db_mirror', data: { v: compactStr } };

    const [ok1, ok2] = await Promise.all([
      safeCloudPut(CLOUD_TEACHERS_DB_URL, payloadPrimary),
      safeCloudPut(CLOUD_TEACHERS_MIRROR_DB_URL, payloadMirror)
    ]);

    if (ok1 || ok2) {
      updateVaultStatusUI();
    }
    return ok1 || ok2;
  } catch (e) {
    console.warn("Kalıcı bulut öğretmen kayıt uyarısı:", e);
    return false;
  }
}

// Faturaları Kalıcı Buluta Kaydet (Varsayılan 5 fatura dışındaki ek/düzenlenmiş faturaları saklar)
async function pushExpensesToPermanentCloud() {
  try {
    const defaultMap = new Map();
    DEFAULT_EXPENSES.forEach(de => defaultMap.set(String(de.id), de));

    const currentIds = new Set((state.expenses || []).map(e => String(e.id)));
    const deletedDefaultIds = [];
    defaultMap.forEach((_, idStr) => {
      if (!currentIds.has(idStr)) deletedDefaultIds.push(idStr);
    });

    const customList = [];
    (state.expenses || []).forEach(exp => {
      if (!exp || !exp.id) return;
      const def = defaultMap.get(String(exp.id));
      const itemsStr = exp.items
        ? [exp.items.cay || '', exp.items.seker || '', exp.items.deterjan || '', exp.items.bardak || '', exp.items.diger || ''].join('|')
        : '||||';
      if (def) {
        const defItemsStr = def.items
          ? [def.items.cay || '', def.items.seker || '', def.items.deterjan || '', def.items.bardak || '', def.items.diger || ''].join('|')
          : '||||';
        if (def.amount === exp.amount && def.desc === exp.desc && def.date === exp.date && defItemsStr === itemsStr) {
          return; // Varsayılan faturayla birebir aynı, bulutta yer kaplamasına gerek yok
        }
      }
      customList.push([
        exp.id,
        (exp.date || '').slice(0, 10),
        (exp.desc || '').slice(0, 36),
        Number(exp.amount) || 0,
        itemsStr.slice(0, 45)
      ]);
    });

    // 1000 byte limitini aşmamak için en güncel faturaları tut (tamamı zaten IndexedDB ve LocalStorage'da)
    while (customList.length > 0 && JSON.stringify({ name: 'cay_exp_db', data: { e: customList, d: deletedDefaultIds } }).length > 940) {
      customList.shift();
    }

    const ok = await safeCloudPut(CLOUD_EXPENSES_DB_URL, {
      name: 'cay_exp_db',
      data: { e: customList, d: deletedDefaultIds }
    });
    if (ok) updateVaultStatusUI();
    return ok;
  } catch (e) {
    console.warn("Kalıcı bulut fatura kayıt uyarısı:", e);
    return false;
  }
}

// Yeni Eklenen Öğretmenler (ID > 61), Özel Notlar ve Devreden Bakiyeyi Buluta Kaydet
async function pushExtraToPermanentCloud() {
  try {
    const defaultMap = new Map();
    DEFAULT_TEACHERS.forEach(dt => defaultMap.set(Number(dt.id), dt));

    const newTeachers = [];
    const customNotes = {};

    state.teachers.forEach(t => {
      const def = defaultMap.get(Number(t.id));
      if (!def) {
        newTeachers.push([
          t.id,
          (t.name || '').slice(0, 28),
          (t.branch || '').slice(0, 20),
          encodeSingleTeacherSlot(t),
          (t.note || '').slice(0, 35)
        ]);
      } else if (t.note && t.note.trim() && t.note.trim() !== (def.note || '').trim()) {
        customNotes[String(t.id)] = t.note.trim().slice(0, 45);
      }
    });

    const dataObj = {
      nt: newTeachers,
      n: customNotes,
      dev: Number(state.devredenBakiye) || 0
    };

    // Boyut kontrolü (940 byte sınırı)
    const noteKeys = Object.keys(dataObj.n);
    while (noteKeys.length > 0 && JSON.stringify({ name: 'cay_extra_db', data: dataObj }).length > 940) {
      delete dataObj.n[noteKeys.shift()];
    }

    const ok = await safeCloudPut(CLOUD_EXTRA_DB_URL, { name: 'cay_extra_db', data: dataObj });
    if (ok) updateVaultStatusUI();
    return ok;
  } catch (e) {
    console.warn("Kalıcı bulut ek veri uyarısı:", e);
    return false;
  }
}

// Tek Tıkla Tüm Kasayı (Öğretmenler + Ödemeler + Faturalar + Notlar) Buluta ve Cihaza Kilitle
async function forceFullVaultSync() {
  showToast("🔒 Tüm veriler çift bulut sunucusuna ve cihaz kasasına kilitleniyor...");
  saveState();
  await fetchFromCloudSync(true);
  const [okT, okE, okX] = await Promise.all([
    pushTeachersToPermanentCloud(null),
    pushExpensesToPermanentCloud(),
    pushExtraToPermanentCloud()
  ]);
  await idbSaveSnapshot(state);
  if (okT) {
    const katilan = state.teachers.filter(t => t.status === 'katiliyor').length;
    const toplamTahsilat = state.teachers.filter(t => t.status === 'katiliyor').reduce((s, t) => s + getTeacherTotalPaid(t), 0);
    showToast(`🛡️ Güvence Altına Alındı! (${katilan} Katılan, ${toplamTahsilat.toLocaleString('tr-TR')} ₺ Tahsilat Çift Buluta Kilitlendi)`);
  } else {
    showToast("💾 Cihaz kasasına kaydedildi (İnternet bağlantısı kontrol ediliyor).");
  }
}

let state = {
  version: CANONICAL_DATA_VERSION,
  teachers: JSON.parse(JSON.stringify(DEFAULT_TEACHERS)),
  expenses: JSON.parse(JSON.stringify(DEFAULT_EXPENSES)),
  deletedDefaultExpenseIds: [],
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

// 01.09.2026 - 03.11.2026 Halkbank Hesap Özetinden Doğrulanmış Resmi EFT/Havale Toplamları (22 Kişi = 14.700 TL)
// Bu tablo sayesinde banka ödemeleri ile elden (nakit) ödemeler birbirine ASLA karışmaz ve çift kayıt oluşmaz!
const OFFICIAL_BANK_PAYMENTS = {
  10: 300,  // Demet Kesen (07.10)
  11: 300,  // Demet Savruk (17.09)
  12: 300,  // Derya Yıldız (15.09)
  13: 300,  // Devrim Yıldız (15.09)
  17: 600,  // Ebru Küçükali Turgut (15.09)
  19: 300,  // Erdinç Sitrava (08.09)
  22: 300,  // Gökçe Şen (15.09)
  27: 1200, // Zeynep Aynas (29.09)
  31: 600,  // Meral Hızal (09.09)
  33: 300,  // Meryem Demirtaş (22.09)
  35: 1200, // Muhammet Şeker (09.09)
  38: 600,  // Murat Kantarcı (15.09)
  43: 900,  // Rabia Sultan Çelik (08.09: 300 + 03.11: 600)
  44: 600,  // Serap Kar Ataseven (08.09)
  49: 600,  // Sinan Rençberoğlu (15.09)
  50: 1800, // Sinan Can Yücel (10.09: 1200 + 03.11: 600)
  55: 600,  // Zehra Genç (08.09: 300 + 15.09: 300 banka; üstü elden)
  57: 900,  // Sema Kandemir (08.09: 300 + 03.11: 600)
  58: 600,  // Zeynep Bozdemir (10.09)
  59: 600,  // Demet Türkmen (15.09)
  60: 600,  // Elif Cansu Keskin (15.09)
  61: 1200  // Şule Erguvan (17.09)
};

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

// Veriyi LocalStorage + Mirror'dan Yükle ve Akıllıca Birleştir (SIFIR VERİ KAYBI GARANTİSİ)
function loadState() {
  let loadedState = null;
  const savedPrimary = localStorage.getItem('cay_takip_state_v1');
  const savedMirror = localStorage.getItem('cay_takip_state_mirror_v1');

  if (savedPrimary) {
    try { loadedState = JSON.parse(savedPrimary); } catch (e) { loadedState = null; }
  }
  if (!loadedState && savedMirror) {
    try { loadedState = JSON.parse(savedMirror); } catch (e) { loadedState = null; }
  }

  const isCurrentLockedVersion = Boolean(loadedState && loadedState.version === CANONICAL_DATA_VERSION);
  const deletedDefaultSet = new Set(
    (isCurrentLockedVersion && loadedState && Array.isArray(loadedState.deletedDefaultExpenseIds))
      ? loadedState.deletedDefaultExpenseIds.map(String)
      : []
  );

  // İkincil acil durum fatura yedeği kontrolü
  let expensesBackup = [];
  try {
    const rawExp = localStorage.getItem('cay_expenses_backup');
    if (rawExp) {
      const parsed = JSON.parse(rawExp);
      if (Array.isArray(parsed)) expensesBackup = parsed;
    }
  } catch (e) {}

  // 1. FATURALARI BİRLEŞTİR (ASLA SİLİNMEZ):
  const mergedExpensesMap = new Map();
  if (Array.isArray(DEFAULT_EXPENSES)) {
    DEFAULT_EXPENSES.forEach(e => {
      if (e && e.id && !deletedDefaultSet.has(String(e.id))) {
        mergedExpensesMap.set(String(e.id), JSON.parse(JSON.stringify(e)));
      }
    });
  }
  expensesBackup.forEach(e => {
    if (e && e.id && !deletedDefaultSet.has(String(e.id))) {
      mergedExpensesMap.set(String(e.id), JSON.parse(JSON.stringify(e)));
    }
  });
  if (loadedState && Array.isArray(loadedState.expenses)) {
    loadedState.expenses.forEach(e => {
      if (e && e.id && !deletedDefaultSet.has(String(e.id))) {
        const prev = mergedExpensesMap.get(String(e.id));
        const merged = JSON.parse(JSON.stringify(e));
        // Mirror'dan gelip görseli boş olan kayıtta yedekteki görseli koru
        if (!merged.receiptImg && prev && prev.receiptImg) {
          merged.receiptImg = prev.receiptImg;
        }
        mergedExpensesMap.set(String(e.id), merged);
      }
    });
  }
  const finalExpenses = Array.from(mergedExpensesMap.values());

  // 2. ÖĞRETMEN VE KİŞİ SEÇİMLERİNİ BİRLEŞTİR (ASLA SİLİNMEZ):
  const teacherMap = new Map();
  DEFAULT_TEACHERS.forEach(dt => {
    teacherMap.set(dt.id, JSON.parse(JSON.stringify(dt)));
  });

  if (loadedState && Array.isArray(loadedState.teachers)) {
    loadedState.teachers.forEach(lt => {
      if (!lt) return;
      if (teacherMap.has(lt.id)) {
        const base = teacherMap.get(lt.id);

        if (isCurrentLockedVersion && lt.adminModified) {
          // Yöneticinin bu kilitli sürümde bizzat onaylayarak yaptığı değişiklik
          base.t1 = Boolean(lt.t1);
          base.t2 = Boolean(lt.t2);
          base.t3 = Boolean(lt.t3);
          base.t4 = Boolean(lt.t4);
          base.t5 = Boolean(lt.t5);
          base.ek1 = Number(lt.ek1) || 0;
          base.ek2 = Number(lt.ek2) || 0;
          base.status = lt.status || base.status;
          base.adminModified = true;
        } else {
          // Koruma modu: Banka/resmi listedeki ödemeler ve yerel ek ödemeler DAİMA birleşir, asla eksilmez
          base.t1 = Boolean(base.t1 || lt.t1);
          base.t2 = Boolean(base.t2 || lt.t2);
          base.t3 = Boolean(base.t3 || lt.t3);
          base.t4 = Boolean(base.t4 || lt.t4);
          base.t5 = Boolean(base.t5 || lt.t5);
          base.ek1 = Math.max(Number(base.ek1) || 0, Number(lt.ek1) || 0);
          base.ek2 = Math.max(Number(base.ek2) || 0, Number(lt.ek2) || 0);

          // Eski sürümlerde FormSubmit hatasıyla 'katilmiyor' olmuş kayıtların resmi 'katiliyor' kaydını ezmesini engelle!
          if (isCurrentLockedVersion) {
            if (lt.status && lt.status !== 'bekliyor') {
              base.status = lt.status;
            }
          } else {
            // Eski sürümden geçişte: Eğer resmi listede 'bekliyor' ise yerel yanıtı koru; resmi listede zaten yanıt varsa resmi listeyi esas al
            if (base.status === 'bekliyor' && lt.status && lt.status !== 'bekliyor') {
              base.status = lt.status;
            }
          }

          // Ödemesi olan bir öğretmen ASLA 'bekliyor' veya 'katilmiyor' kalamaz!
          if (getTeacherTotalPaid(base) > 0) {
            base.status = 'katiliyor';
          }
        }

        if (typeof lt.customDonem1 === 'number') base.customDonem1 = lt.customDonem1;
        if (typeof lt.customDonem2 === 'number') base.customDonem2 = lt.customDonem2;

        // Özel notları koru
        if (lt.note && lt.note.trim()) {
          const isOldAutoNote = lt.note.includes('ödendi') || lt.note === 'Formdan katıldı' || lt.note === 'Formdan bildirildi: Katılmıyor';
          if (!isOldAutoNote && (!base.note || !base.note.includes(lt.note.trim()))) {
            base.note = base.note ? (base.note + ' | ' + lt.note.trim()) : lt.note.trim();
          } else if (isCurrentLockedVersion && lt.noteEditedByAdmin) {
            base.note = lt.note;
            base.noteEditedByAdmin = true;
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
    deletedDefaultExpenseIds: Array.from(deletedDefaultSet),
    devredenBakiye: (loadedState && loadedState.devredenBakiye !== undefined) ? loadedState.devredenBakiye : 0,
    filterStatus: (loadedState && loadedState.filterStatus) || 'all',
    searchQuery: (loadedState && loadedState.searchQuery) || ''
  };

  saveState();
}

// Tarayıcı geçmişi/LocalStorage silinmişse IndexedDB Kasasından Otomatik Kurtar
async function restoreFromIndexedDBIfNeeded() {
  try {
    const idbSnap = await idbLoadLatestSnapshot();
    if (!idbSnap) return;
    let recovered = 0;

    // 1. Fatura ve özellikle dekont görsellerini kurtar
    if (Array.isArray(idbSnap.expenses)) {
      const expMap = new Map();
      (state.expenses || []).forEach(e => { if (e && e.id) expMap.set(String(e.id), e); });
      const deletedSet = new Set((state.deletedDefaultExpenseIds || []).map(String));
      idbSnap.expenses.forEach(ie => {
        if (!ie || !ie.id || deletedSet.has(String(ie.id))) return;
        const cur = expMap.get(String(ie.id));
        if (!cur) {
          state.expenses.push(ie);
          recovered++;
        } else if (!cur.receiptImg && ie.receiptImg) {
          cur.receiptImg = ie.receiptImg;
          recovered++;
        }
      });
    }

    // 2. Kilitli sürümde kaydedilmiş öğretmen ödemelerini / yeni öğretmenleri kurtar
    if (idbSnap.version === CANONICAL_DATA_VERSION && Array.isArray(idbSnap.teachers)) {
      idbSnap.teachers.forEach(it => {
        if (!it) return;
        const cur = state.teachers.find(t => t.id === it.id);
        if (!cur) {
          state.teachers.push(it);
          recovered++;
        } else if (!cur.adminModified) {
          ['t1', 't2', 't3', 't4', 't5'].forEach(k => {
            if (it[k] && !cur[k]) { cur[k] = true; recovered++; }
          });
          if ((Number(it.ek1) || 0) > (Number(cur.ek1) || 0)) { cur.ek1 = Number(it.ek1); recovered++; }
          if ((Number(it.ek2) || 0) > (Number(cur.ek2) || 0)) { cur.ek2 = Number(it.ek2); recovered++; }
          if (cur.status === 'bekliyor' && it.status && it.status !== 'bekliyor') {
            cur.status = it.status;
            recovered++;
          }
          if (getTeacherTotalPaid(cur) > 0) cur.status = 'katiliyor';
        }
      });
      state.teachers.sort((a, b) => a.id - b.id);
    }

    if (recovered > 0) {
      saveState();
    }
  } catch (e) {}
}

// Listeyi ve Durumları Manuel Yenile
async function manualRefreshList() {
  loadState();
  await restoreFromIndexedDBIfNeeded();
  updateDashboard();
  renderTable();
  if (typeof fetchFromCloudSync === 'function') {
    await fetchFromCloudSync(false);
  } else {
    showToast("🔄 Liste ve durumlar başarıyla yenilendi!");
  }
}

// Varsayılan Öğretmen Listesini Sıfırla (Şifre Korumalı - Kazara Tıklamaya Karşı Kilitli!)
function resetToDefaults() {
  const pin = prompt("🔐 GÜVENLİK KİLİDİ:\nKazara veri sıfırlamayı önlemek için Yönetici Şifresini (2026) giriniz:");
  if (pin !== "2026") {
    if (pin !== null) alert("❌ Şifre yanlış! Verileriniz korundu, hiçbir değişiklik yapılmadı.");
    return;
  }
  if (confirm("⚠️ DİKKAT: Bu işlem öğretmenlerin ödeme ve yanıtlarını 03.11.2026 tarihli doğrulanmış banka/form kaydına eşitler.\n(Faturalarınız ve harcama kayıtlarınız ASLA silinmez).\n\nOnaylıyor musunuz?")) {
    state = {
      version: CANONICAL_DATA_VERSION,
      teachers: JSON.parse(JSON.stringify(DEFAULT_TEACHERS)),
      expenses: (state && state.expenses && state.expenses.length > 0) ? state.expenses : JSON.parse(JSON.stringify(DEFAULT_EXPENSES)),
      deletedDefaultExpenseIds: [],
      devredenBakiye: state.devredenBakiye || 0,
      filterStatus: 'all',
      searchQuery: ''
    };
    saveState();
    pushTeachersToPermanentCloud(null);
    showToast("✅ Liste doğrulanmış resmi kayıtlara eşitlendi (Faturalar korundu)!");
  }
}

// Veriyi Kaydet (3'lü LocalStorage + IndexedDB Kasa Yedeklemesi)
function saveState() {
  state.version = CANONICAL_DATA_VERSION;

  // 1. Hafif metin ikizi (Görselsiz olduğu için kota sınırına ASLA takılmaz!)
  try {
    const mirrorState = {
      version: state.version,
      teachers: state.teachers,
      expenses: (state.expenses || []).map(exp => {
        const c = { ...exp };
        delete c.receiptImg;
        return c;
      }),
      deletedDefaultExpenseIds: state.deletedDefaultExpenseIds || [],
      devredenBakiye: state.devredenBakiye || 0,
      filterStatus: state.filterStatus || 'all',
      searchQuery: state.searchQuery || ''
    };
    localStorage.setItem('cay_takip_state_mirror_v1', JSON.stringify(mirrorState));
  } catch (mErr) {}

  // 2. Ana LocalStorage kaydı (Görseller dahil)
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
    } catch (e2) {
      console.error("Yerel kayıt hatası:", e2);
    }
  }

  // 3. Bağımsız fatura yedeği
  try {
    if (state.expenses && state.expenses.length > 0) {
      try {
        localStorage.setItem('cay_expenses_backup', JSON.stringify(state.expenses));
      } catch (qErr) {
        const lightweightExpenses = state.expenses.map(exp => {
          const c = { ...exp };
          delete c.receiptImg;
          return c;
        });
        localStorage.setItem('cay_expenses_backup', JSON.stringify(lightweightExpenses));
      }
    }
  } catch (e) {}

  // 4. IndexedDB Tarayıcı Kasasına Tam Yedek (Dekont fotoğrafları dahil 100+ MB kapasite)
  idbSaveSnapshot(state);

  updateDashboard();
}

// İstatistikleri Güncelle
function updateDashboard() {
  const katilanlar = state.teachers.filter(t => t.status === 'katiliyor');
  const katilmayanlar = state.teachers.filter(t => t.status === 'katilmiyor');
  const bekleyenler = state.teachers.filter(t => t.status === 'bekliyor');

  let donem1Toplanan = 0;
  let donem2Toplanan = 0;
  let bankaToplanan = 0;
  let eldenToplanan = 0;
  katilanlar.forEach(t => {
    const d1 = getTeacherDonem1Paid(t);
    const d2 = getTeacherDonem2Paid(t);
    const tot = d1 + d2;
    donem1Toplanan += d1;
    donem2Toplanan += d2;
    const resmiBanka = Math.min(tot, OFFICIAL_BANK_PAYMENTS[t.id] || 0);
    bankaToplanan += resmiBanka;
    eldenToplanan += Math.max(0, tot - resmiBanka);
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
  setTxt('statToplamToplanan', `${toplamToplanan.toLocaleString('tr-TR')} ₺ (Banka: ${bankaToplanan.toLocaleString('tr-TR')} ₺ + Elden: ${eldenToplanan.toLocaleString('tr-TR')} ₺)`);
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
          ${t.ek2 ? `<span class="px-2 py-1 text-xs rounded border bg-emerald-600 text-white font-bold shadow-sm border-emerald-700" title="2. Dönem Ek Ödeme: ${t.ek2} ₺">✓ ${t.ek2}₺</span>` : ''}
        </div>
        ${donem2Odenen > 0 ? `<div class="text-[11px] font-bold mt-1 ${donem2Odenen >= 900 ? 'text-emerald-700' : 'text-amber-800'}">Yatırdığı: ${donem2Odenen} ₺</div>` : ''}
      </td>

      <td class="py-3 px-3 text-right font-medium text-xs">
        <span class="${odenenTutar >= YILLIK_UCRET ? 'text-emerald-600 font-bold' : (odenenTutar > 0 ? 'text-emerald-700 font-extrabold text-sm' : 'text-gray-800')}">
          ${odenenTutar} ₺
        </span>
        ${odenenTutar > 0 ? (() => {
          const bnk = Math.min(odenenTutar, OFFICIAL_BANK_PAYMENTS[t.id] || 0);
          const eld = Math.max(0, odenenTutar - bnk);
          if (bnk > 0 && eld > 0) return `<div class="text-[10px] text-slate-600 font-semibold">🏦 Banka: ${bnk}₺ + 💵 Elden: ${eld}₺</div>`;
          if (bnk > 0) return `<div class="text-[10px] text-blue-700 font-medium">🏦 Banka: ${bnk}₺</div>`;
          return `<div class="text-[10px] text-emerald-700 font-semibold">💵 Elden: ${eld}₺</div>`;
        })() : ''}
        ${t.status === 'katiliyor' && donem1Kalan > 0 ? `<div class="text-[11px] text-amber-700 font-semibold">1.Dönem Kalan: ${donem1Kalan}₺</div>` : ''}
        ${t.status === 'katiliyor' && kalanBorc > 0 ? `<div class="text-[11px] text-red-500 font-normal">Toplam Kalan: ${kalanBorc}₺</div>` : ''}
      </td>

      <td class="py-3 px-2 text-center no-print whitespace-nowrap">
        <button onclick="editEkOdemeModal(${t.id})" class="text-emerald-700 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded px-1.5 py-0.5 text-[11px] font-bold mr-1" title="Elden / Ek Ödeme Tutarı Gir">
          +₺
        </button>
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

  const paid = getTeacherTotalPaid(teacher);
  if (teacher.status === 'katiliyor' && paid > 0) {
    if (!confirm(`⚠️ DİKKAT: ${teacher.name} için kayıtlı ${paid} ₺ ödeme bulunuyor!\n\nDurumunu "Katılmıyor" yaparsanız bu ödeme kasa toplamından düşer.\nYine de değiştirmek istiyor musunuz?`)) {
      return;
    }
  }

  if (teacher.status === 'katiliyor') {
    teacher.status = 'katilmiyor';
  } else if (teacher.status === 'katilmiyor') {
    teacher.status = 'bekliyor';
  } else {
    teacher.status = 'katiliyor';
  }
  teacher.adminModified = true;
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
      teacher.status = 'katiliyor';
    } else {
      if (!confirm(`${teacher.name} için 1. Dönem ödemesini kaldırmak istediğinize emin misiniz?`)) return;
      teacher.t1 = false;
      teacher.t2 = false;
      teacher.t3 = false;
    }
  } else if (donemNo === 2) {
    const odenen = getTeacherDonem2Paid(teacher);
    if (odenen < DONEM2_UCRET) {
      teacher.t4 = true;
      teacher.t5 = true;
      teacher.status = 'katiliyor';
    } else {
      if (!confirm(`${teacher.name} için 2. Dönem ödemesini kaldırmak istediğinize emin misiniz?`)) return;
      teacher.t4 = false;
      teacher.t5 = false;
    }
  }
  teacher.adminModified = true;
  saveState();
  pushTeachersToPermanentCloud(id);
}

// Ödeme Kutucuğu Değiştir (Kazara Silme Korumalı!)
function toggleTaksit(id, field) {
  const teacher = state.teachers.find(t => t.id === id);
  if (!teacher) return;

  if (teacher[field]) {
    const tutar = TAKSIT_TUTARLARI[field] || 300;
    if (!confirm(`⚠️ ${teacher.name} için işaretli ${tutar} ₺ ödemeyi kaldırmak istiyor musunuz?`)) {
      return;
    }
    teacher[field] = false;
  } else {
    teacher[field] = true;
    teacher.status = 'katiliyor';
  }
  teacher.adminModified = true;
  saveState();
  pushTeachersToPermanentCloud(id);
}

// Elden / Küsuratlı Ek Ödeme Girişi (Örn: +200 TL, +400 TL vb.)
function editEkOdemeModal(id) {
  const t = state.teachers.find(x => x.id === id);
  if (!t) return;

  const mevcutEk = Number(t.ek1) || 0;
  const giris = prompt(
    `${t.name} için 300 ₺ kutucukları dışındaki EK / ELDEN ödeme tutarını girin (₺):\n(Kutucuklarla işaretli tutarın üzerine eklenir. Sıfırlamak için 0 yazın)`,
    mevcutEk
  );
  if (giris === null) return;
  const num = Math.max(0, Math.round(parseFloat(String(giris).replace(',', '.')) || 0));
  t.ek1 = num;
  if (getTeacherTotalPaid(t) > 0) {
    t.status = 'katiliyor';
  }
  t.adminModified = true;
  saveState();
  pushTeachersToPermanentCloud(id);
  showToast(`✅ ${t.name} ek ödeme tutarı (${num} ₺) kaydedildi ve buluta kilitlendi!`);
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
  pushExpensesToPermanentCloud();
  showToast("✅ Fatura başarıyla kaydedildi ve bulut kasasına kilitlendi!");

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
    if (!Array.isArray(state.deletedDefaultExpenseIds)) state.deletedDefaultExpenseIds = [];
    if (DEFAULT_EXPENSES.some(de => String(de.id) === String(id)) && !state.deletedDefaultExpenseIds.includes(String(id))) {
      state.deletedDefaultExpenseIds.push(String(id));
    }
    saveState();
    pushExpensesToPermanentCloud();
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
      pushExtraToPermanentCloud();
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
  pushTeachersToPermanentCloud(nextId);
  pushExtraToPermanentCloud();
}

// Öğretmen Düzenleme / Not
function editTeacherModal(id) {
  const t = state.teachers.find(x => x.id === id);
  if (!t) return;

  const newNote = prompt(`${t.name} için not / açıklama girin:`, t.note || '');
  if (newNote !== null) {
    t.note = newNote;
    t.noteEditedByAdmin = true;
    saveState();
    pushExtraToPermanentCloud();
  }
}

// Google Form / Metin Yanıtlarını Akıllı İçe Aktarma (Ödemesi olanları ASLA bozmaz!)
function importGoogleFormResponses() {
  const text = document.getElementById('importText').value.trim();
  if (!text) {
    alert("Lütfen kopyaladığınız yanıt metnini buraya yapıştırın.");
    return;
  }

  const lines = text.split('\n');
  let matchedCount = 0;
  let newAddedCount = 0;

  lines.forEach(line => {
    if (!line.trim()) return;
    const lowerLine = line.toLowerCase('tr');

    // Katılım tespit (Sadece açık EVET veya HAYIR varsa işlem yap; belirsiz satırları RASTGELE atama!)
    let status = null;
    if (lowerLine.includes('katılmıyor') || lowerLine.includes('istemiyorum') || lowerLine.includes('hayır')) {
      status = 'katilmiyor';
    } else if (lowerLine.includes('katılıyor') || lowerLine.includes('istiyorum') || lowerLine.includes('evet')) {
      status = 'katiliyor';
    }
    if (!status) return;

    // Mevcut öğretmenler arasında eşleşme ara
    let matched = false;
    for (let t of state.teachers) {
      const parts = t.name.toLowerCase('tr').split(' ');
      const soyad = parts[parts.length - 1];
      const ad = parts[0];

      if (lowerLine.includes(t.name.toLowerCase('tr')) || (lowerLine.includes(ad) && lowerLine.includes(soyad))) {
        // Ödemesi olan öğretmeni kazara katılmıyor yapma!
        if (getTeacherTotalPaid(t) > 0 && status === 'katilmiyor') {
          matched = true;
          break;
        }
        t.status = status;
        t.adminModified = true;
        matched = true;
        matchedCount++;
        break;
      }
    }

    // Eğer listede yoksa yeni hoca olarak ekle
    if (!matched && status !== 'bekliyor') {
      const cols = line.split('\t');
      let candidateName = cols[1] || cols[0];
      candidateName = candidateName.replace(/\d+/g, '').replace(/[-–()]/g, '').trim();

      if (candidateName.length > 3) {
        const nextId = state.teachers.reduce((max, t) => Math.max(max, t.id), 0) + 1;
        state.teachers.push({
          id: nextId,
          name: candidateName.toUpperCase('tr'),
          branch: "Formdan Eklendi",
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
  pushTeachersToPermanentCloud(null);
  pushExtraToPermanentCloud();
}

// Canlı Çift Bulut Senkronizasyon (Tam Otomatik & Yedekli)
async function fetchFromCloudSync(silent = true) {
  if (!silent) showToast("⏳ Bulut kasasından yanıtlar ve ödemeler eşitleniyor...");
  let updatedCount = 0;

  const norm = (s) => (s || '').replace(/İ/g, 'I').replace(/ı/g, 'I').replace(/i/g, 'I').replace(/ğ/g, 'G').replace(/Ğ/g, 'G').replace(/ş/g, 'S').replace(/Ş/g, 'S').replace(/ç/g, 'C').replace(/Ç/g, 'C').replace(/ö/g, 'O').replace(/Ö/g, 'O').replace(/ü/g, 'U').replace(/Ü/g, 'U').toUpperCase().trim();

  // 0-A. Ekstra Bulut Veritabanından Yeni Eklenen Öğretmenler & Özel Notları Çek
  try {
    const extraJson = await safeCloudGet(CLOUD_EXTRA_DB_URL);
    if (extraJson && extraJson.data) {
      if (Array.isArray(extraJson.data.nt)) {
        extraJson.data.nt.forEach(arr => {
          if (!Array.isArray(arr) || !arr[0] || !arr[1]) return;
          const [id, name, branch, slotStr, note] = arr;
          let existing = state.teachers.find(t => Number(t.id) === Number(id) || norm(t.name) === norm(name));
          const parsed = decodeSingleTeacherSlot(slotStr) || { status: 'katiliyor', mask: 0, ek1: 0, ek2: 0 };
          if (!existing) {
            state.teachers.push({
              id: Number(id),
              name: String(name),
              branch: branch || 'Yeni Öğretmen',
              status: parsed.status,
              t1: Boolean(parsed.mask & 1),
              t2: Boolean(parsed.mask & 2),
              t3: Boolean(parsed.mask & 4),
              t4: Boolean(parsed.mask & 8),
              t5: Boolean(parsed.mask & 16),
              ek1: parsed.ek1 || 0,
              ek2: parsed.ek2 || 0,
              note: note || ''
            });
            updatedCount++;
          }
        });
      }
      if (extraJson.data.n && typeof extraJson.data.n === 'object') {
        for (const [idStr, noteVal] of Object.entries(extraJson.data.n)) {
          const t = state.teachers.find(x => String(x.id) === String(idStr));
          if (t && noteVal && !t.noteEditedByAdmin && t.note !== noteVal) {
            t.note = String(noteVal);
            updatedCount++;
          }
        }
      }
      if (typeof extraJson.data.dev === 'number' && extraJson.data.dev > 0 && !state.devredenBakiye) {
        state.devredenBakiye = extraJson.data.dev;
        updatedCount++;
      }
    }
  } catch (exErr) {}

  // 0-B. Kalıcı Ana ve İkiz Bulut Veritabanından Öğretmen Yanıt & Ödemelerini Çek
  try {
    let permJson = await safeCloudGet(CLOUD_TEACHERS_DB_URL);
    if (!permJson || !permJson.data) {
      permJson = await safeCloudGet(CLOUD_TEACHERS_MIRROR_DB_URL);
    }
    if (permJson && permJson.data) {
      const decodedMap = parseRemoteTeachersData(permJson.data);
      for (const [idStr, rem] of Object.entries(decodedMap)) {
        const teacher = state.teachers.find(t => String(t.id) === String(idStr));
        if (!teacher || !rem) continue;

        if (rem.adminModified && !teacher.adminModified) {
          teacher.status = rem.status;
          teacher.t1 = Boolean(rem.mask & 1);
          teacher.t2 = Boolean(rem.mask & 2);
          teacher.t3 = Boolean(rem.mask & 4);
          teacher.t4 = Boolean(rem.mask & 8);
          teacher.t5 = Boolean(rem.mask & 16);
          teacher.ek1 = rem.ek1 || 0;
          teacher.ek2 = rem.ek2 || 0;
          teacher.adminModified = true;
          updatedCount++;
        } else if (!teacher.adminModified) {
          // Koruma modu: Sadece yanıt bekleyenleri güncelle veya ek ödemeleri birleştir; mevcut ödemeleri ASLA silme!
          if ((rem.mask & 1) && !teacher.t1) { teacher.t1 = true; updatedCount++; }
          if ((rem.mask & 2) && !teacher.t2) { teacher.t2 = true; updatedCount++; }
          if ((rem.mask & 4) && !teacher.t3) { teacher.t3 = true; updatedCount++; }
          if ((rem.mask & 8) && !teacher.t4) { teacher.t4 = true; updatedCount++; }
          if ((rem.mask & 16) && !teacher.t5) { teacher.t5 = true; updatedCount++; }
          if (rem.ek1 > (Number(teacher.ek1) || 0)) { teacher.ek1 = rem.ek1; updatedCount++; }
          if (rem.ek2 > (Number(teacher.ek2) || 0)) { teacher.ek2 = rem.ek2; updatedCount++; }

          if (getTeacherTotalPaid(teacher) > 0) {
            if (teacher.status !== 'katiliyor') {
              teacher.status = 'katiliyor';
              updatedCount++;
            }
          } else if (rem.status !== 'bekliyor' && teacher.status === 'bekliyor') {
            teacher.status = rem.status;
            if (!teacher.note) {
              teacher.note = rem.status === 'katiliyor' ? 'Formdan katıldı' : 'Formdan bildirildi: Katılmıyor';
            }
            updatedCount++;
          }
        }
      }
      updateVaultStatusUI();
    }
  } catch (permErr) {
    console.warn("Kalıcı bulut okuma uyarısı:", permErr);
  }

  // 0-C. Kalıcı Bulut Fatura Kasasından Faturaları Çek
  try {
    const expJson = await safeCloudGet(CLOUD_EXPENSES_DB_URL);
    if (expJson && expJson.data) {
      if (Array.isArray(expJson.data.d) && expJson.data.d.length > 0) {
        if (!Array.isArray(state.deletedDefaultExpenseIds)) state.deletedDefaultExpenseIds = [];
        expJson.data.d.forEach(dId => {
          const sId = String(dId);
          if (!state.deletedDefaultExpenseIds.includes(sId)) {
            state.deletedDefaultExpenseIds.push(sId);
            state.expenses = (state.expenses || []).filter(e => String(e.id) !== sId);
            updatedCount++;
          }
        });
      }
      if (Array.isArray(expJson.data.e)) {
        if (!state.expenses) state.expenses = [];
        expJson.data.e.forEach(arr => {
          if (!Array.isArray(arr) || !arr[0]) return;
          const [id, date, desc, amount, itemsStr] = arr;
          const parts = String(itemsStr || '').split('|');
          const itemsObj = {
            cay: parts[0] || '',
            seker: parts[1] || '',
            deterjan: parts[2] || '',
            bardak: parts[3] || '',
            diger: parts[4] || ''
          };
          const idx = state.expenses.findIndex(x => String(x.id) === String(id));
          if (idx < 0) {
            state.expenses.push({
              id: id,
              date: date || '',
              desc: desc || 'Harcama',
              amount: Number(amount) || 0,
              items: itemsObj,
              receiptImg: null
            });
            updatedCount++;
          }
        });
      }
    }
  } catch (expCloudErr) {}

  // 1. Canlı Veri Kanalından Çek (ntfy.sh - Anlık Form Yanıtları, Ödemeli Kayıtları Ezmez!)
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
                if (existingIdx < 0) {
                  state.expenses.push(data.expense);
                  updatedCount++;
                }
              }
            } else if (data && (data.id || data.name) && (data.status === 'katiliyor' || data.status === 'katilmiyor')) {
              let teacher = null;
              if (data.id && !isNaN(data.id)) {
                teacher = state.teachers.find(t => t.id === Number(data.id));
              }
              if (!teacher && data.name) {
                teacher = state.teachers.find(t => norm(t.name) === norm(data.name));
              }
              if (teacher) {
                // Yalnızca henüz yanıt bekleyen öğretmeni güncelle; ödemesi olan veya yönetici kilitli kaydı ASLA ezme!
                if (teacher.status === 'bekliyor' && !teacher.adminModified && getTeacherTotalPaid(teacher) === 0) {
                  teacher.status = data.status;
                  const noteIsGeneric = !data.note || data.note === 'Formdan katıldı' || data.note === 'Formdan eklendi';
                  if (data.note && !noteIsGeneric) teacher.note = data.note;
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
            if (status !== 'katiliyor' && status !== 'katilmiyor') continue;

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
              if (teacher.status === 'bekliyor' && !teacher.adminModified && getTeacherTotalPaid(teacher) === 0) {
                teacher.status = status;
                if (note) teacher.note = note;
                updatedCount++;
              }
            } else if (customName || isNaN(key)) {
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

  state.teachers.sort((a, b) => a.id - b.id);

  if (updatedCount > 0) {
    saveState();
    pushTeachersToPermanentCloud(null);
    pushExtraToPermanentCloud();
    updateDashboard();
    renderTable();
    if (!silent) showToast(`✅ Bulut kasasından ${updatedCount} kayıt güncellendi!`);
  } else {
    if (!silent) showToast("🛡️ Liste en güncel durumda ve çift bulut kasasında kilitli.");
  }
}

// FormSubmit Senkronizasyon (Güvenli: Boş durumları ASLA 'katılmıyor' yapmaz, ödemeli kişilere dokunmaz!)
async function syncFromFormSubmit(apiKey, silent = false) {
  if (!apiKey) {
    const inputEl = document.getElementById('apiKeyInput');
    apiKey = inputEl ? inputEl.value.trim() : '';
  }
  if (!apiKey) {
    if (silent) return;
    const promptKey = prompt("FormSubmit API Key giriniz:");
    if (promptKey && promptKey.trim()) {
      apiKey = promptKey.trim();
    } else {
      return;
    }
  }

  if (!silent) showToast("⏳ FormSubmit yanıtları kontrol ediliyor...");
  try {
    const res = await fetch(`https://formsubmit.co/api/get-submissions/${apiKey}`);
    const json = await res.json();
    if (json && json.success && Array.isArray(json.submissions)) {
      loadState();
      let guncellenenSayisi = 0;
      json.submissions.forEach(sub => {
        const d = sub.form_data || {};
        const secilen = d.Secilen_Ogretmen || '';
        const durum = (d.Katilim_Durumu || '').toUpperCase('tr');
        const yeniOgretmen = d.Yeni_Ogretmen_Bilgisi || '';
        const not = d.Ogretmen_Notu || '';

        // KRİTİK KORUMA: Sadece açıkça EVET veya HAYIR seçilmişse işle! Boş olanlara dokunma!
        let parsedStatus = null;
        if (durum.includes('EVET')) parsedStatus = 'katiliyor';
        else if (durum.includes('HAYIR')) parsedStatus = 'katilmiyor';
        if (!parsedStatus) return;

        if (secilen.includes('LİSTEDE ADIM YOK') && yeniOgretmen && yeniOgretmen.trim()) {
          const uName = yeniOgretmen.trim().toUpperCase('tr');
          const existing = state.teachers.find(t => t.name.toUpperCase('tr') === uName);
          if (existing) {
            if (existing.status === 'bekliyor' && getTeacherTotalPaid(existing) === 0) {
              existing.status = parsedStatus;
              if (not) existing.note = not;
              guncellenenSayisi++;
            }
          } else {
            const nextId = state.teachers.reduce((max, t) => Math.max(max, t.id), 0) + 1;
            state.teachers.push({
              id: nextId,
              name: uName,
              branch: 'Yeni Öğretmen',
              status: parsedStatus,
              t1: false, t2: false, t3: false, t4: false, t5: false,
              note: not || 'Formdan eklendi'
            });
            guncellenenSayisi++;
          }
        } else if (secilen) {
          for (let t of state.teachers) {
            if (secilen.includes(t.name)) {
              if (t.status === 'bekliyor' && getTeacherTotalPaid(t) === 0) {
                t.status = parsedStatus;
                if (not) t.note = not;
                guncellenenSayisi++;
              }
              break;
            }
          }
        }
      });

      saveState();
      pushTeachersToPermanentCloud(null);
      updateDashboard();
      if (!silent) {
        showToast(`✅ ${guncellenenSayisi} yeni yanıt güvenle eklendi!`);
      }
    }
  } catch (err) {
    console.error("FormSubmit senkronizasyon hatası:", err);
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
document.addEventListener('DOMContentLoaded', async () => {
  loadState();
  await restoreFromIndexedDBIfNeeded();

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

  const lastSync = localStorage.getItem('cay_last_vault_sync');
  if (lastSync) {
    updateVaultStatusUI(`✅ Son Koruma Kaydı: ${lastSync} (Çift Bulut + Cihaz Kasası Aktif)`);
  }

  updateDashboard();

  // 1. Ortak Çift Bulut Veritabanından yanıtları çek ve tarayıcıdaki elden ödemelerle kayıpsız birleştir
  await fetchFromCloudSync(true);

  // 2. Tarayıcıda işaretlenmiş elden ödemeler / faturalar varsa anında Çift Bulut Kasasına da yedekle!
  pushTeachersToPermanentCloud(null);
  pushExpensesToPermanentCloud();
  pushExtraToPermanentCloud();
});
