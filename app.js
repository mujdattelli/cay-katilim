// 56 Öğretmenin Başlangıç Listesi
const DEFAULT_TEACHERS = [
  { id: 1, name: "ABDURRAHİM BÜYÜKDAĞ", branch: "Din Kültürü ve Ahlâk Bilgisi", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, note: "" },
  { id: 2, name: "ASLI GÜREL", branch: "Bilişim Teknolojileri", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, note: "" },
  { id: 3, name: "AYÇA ÇIKAR", branch: "Elektrik-Elektronik Teknolojisi / Elektronik", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, note: "" },
  { id: 4, name: "BESTİ GÜZELSOY", branch: "Türk Dili ve Edebiyatı", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, note: "" },
  { id: 5, name: "BEYZA YETİK", branch: "Matematik", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, note: "" },
  { id: 6, name: "BİRGÜL COŞKUN", branch: "Bilişim Teknolojileri", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, note: "" },
  { id: 7, name: "BİROL ATEŞ", branch: "Din Kültürü ve Ahlâk Bilgisi", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, note: "" },
  { id: 8, name: "CELAL ATIŞ", branch: "Türk Dili ve Edebiyatı", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, note: "" },
  { id: 9, name: "CEM KURTOĞLU", branch: "Elektrik-Elektronik Teknolojisi / Elektrik", status: "katilmiyor", t1: false, t2: false, t3: false, t4: false, note: "Formdan bildirildi: Katılmıyor" },
  { id: 10, name: "DEMET KESEN", branch: "Matematik", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, note: "" },
  { id: 11, name: "DEMET SAVRUK", branch: "Bilişim Teknolojileri", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, note: "" },
  { id: 12, name: "DERYA YILDIZ", branch: "Fizik", status: "katiliyor", t1: false, t2: false, t3: false, t4: false, note: "Formdan katıldı" },
  { id: 13, name: "DEVRİM YILDIZ", branch: "Felsefe", status: "katiliyor", t1: false, t2: false, t3: false, t4: false, note: "Formdan katıldı" },
  { id: 14, name: "DİĞDEM ACAR", branch: "Biyoloji", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, note: "" },
  { id: 15, name: "DURMUŞ KIZILKAYA", branch: "Bilişim Teknolojileri", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, note: "" },
  { id: 16, name: "EBRU ELMAS", branch: "İngilizce", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, note: "" },
  { id: 17, name: "EBRU KÜÇÜKALİ TURGUT", branch: "Türk Dili ve Edebiyatı", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, note: "" },
  { id: 18, name: "EDİP TAŞDEMİR", branch: "Beden Eğitimi", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, note: "" },
  { id: 19, name: "ERDİNÇ SİTRAVA", branch: "Türk Dili ve Edebiyatı", status: "katiliyor", t1: false, t2: false, t3: false, t4: false, note: "Formdan katıldı" },
  { id: 20, name: "FATMA NUR SIVAR", branch: "Rehberlik", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, note: "" },
  { id: 21, name: "FEYZULLAH KÖKER", branch: "Grafik ve Fotoğraf / Grafik", status: "katilmiyor", t1: false, t2: false, t3: false, t4: false, note: "Formdan bildirildi: Katılmıyor" },
  { id: 22, name: "GÖKÇE ŞEN", branch: "Özel Eğitim", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, note: "" },
  { id: 23, name: "GÖKHAN GÜREL", branch: "Bilişim Teknolojileri", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, note: "" },
  { id: 24, name: "HALDUN YILDIZ", branch: "Tarih", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, note: "Dışarı tüp alıyor" },
  { id: 25, name: "HANDAN YASA", branch: "Kimya / Kimya Teknolojisi", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, note: "" },
  { id: 26, name: "HATİCE AĞAN", branch: "Kimya / Kimya Teknolojisi", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, note: "" },
  { id: 27, name: "ZEYNEP AYNAS", branch: "TARİH", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, note: "" },
  { id: 28, name: "İBRAHİM CALAYIR", branch: "Bilişim Teknolojileri", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, note: "" },
  { id: 29, name: "İLKNUR ÇIRPAN", branch: "Bilişim Teknolojileri", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, note: "" },
  { id: 30, name: "MAHMUT YAVUZ", branch: "Elektrik-Elektronik Teknolojisi / Elektrik", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, note: "" },
  { id: 31, name: "MERAL HIZAL", branch: "Görsel Sanatlar", status: "katiliyor", t1: false, t2: false, t3: false, t4: false, note: "Formdan katıldı" },
  { id: 32, name: "MERİÇ AKKAYA", branch: "Elektrik-Elektronik Teknolojisi / Elektrik", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, note: "" },
  { id: 33, name: "MERYEM DEMİRTAŞ", branch: "İngilizce", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, note: "" },
  { id: 34, name: "MİRAY TEKAY", branch: "Türk Dili ve Edebiyatı", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, note: "" },
  { id: 35, name: "MUHAMMET ŞEKER", branch: "Bilişim Teknolojileri", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, note: "" },
  { id: 36, name: "MUHAMMET SERDAR BALIKLI", branch: "Beden Eğitimi", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, note: "" },
  { id: 37, name: "MURAT KAÇAN", branch: "Bilişim Teknolojileri", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, note: "" },
  { id: 38, name: "MURAT KANTARCI", branch: "Bilişim Teknolojileri", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, note: "" },
  { id: 39, name: "MÜJDAT TELLİ", branch: "Bilişim Teknolojileri", status: "katiliyor", t1: false, t2: false, t3: false, t4: false, note: "Çay Ocağı Sorumlusu" },
  { id: 40, name: "MÜNEVVER ÜNAL ÖTÜKEN", branch: "Coğrafya", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, note: "" },
  { id: 41, name: "NAGİHAN KOÇ ÇAVUR", branch: "Coğrafya", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, note: "" },
  { id: 42, name: "NURHAN CAN", branch: "Türk Dili ve Edebiyatı", status: "katiliyor", t1: false, t2: false, t3: false, t4: false, note: "Formdan katıldı" },
  { id: 43, name: "RABİA SULTAN ÇELİK", branch: "Matematik", status: "katiliyor", t1: false, t2: false, t3: false, t4: false, note: "Formdan katıldı" },
  { id: 44, name: "SERAP KAR ATASEVEN", branch: "Türk Dili ve Edebiyatı", status: "katiliyor", t1: false, t2: false, t3: false, t4: false, note: "Formdan katıldı" },
  { id: 45, name: "SERDAR ÇIRPAN", branch: "Bilişim Teknolojileri", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, note: "" },
  { id: 46, name: "SERHAT ARSLAN", branch: "Bilişim Teknolojileri", status: "katiliyor", t1: false, t2: false, t3: false, t4: false, note: "Formdan katıldı" },
  { id: 47, name: "SEVİLAY ARSLAN", branch: "Rehberlik", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, note: "" },
  { id: 48, name: "SEVİLAY DEVECİ", branch: "Elektrik-Elektronik Teknolojisi / Elektronik", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, note: "" },
  { id: 49, name: "SİNAN RENÇBEROĞLU", branch: "Bilişim Teknolojileri", status: "katiliyor", t1: false, t2: false, t3: false, t4: false, note: "Formdan katıldı" },
  { id: 50, name: "SİNAN CAN YÜCEL", branch: "İngilizce", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, note: "" },
  { id: 51, name: "SONER TAŞ", branch: "Elektrik-Elektronik Teknolojisi / Elektronik", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, note: "" },
  { id: 52, name: "ŞAHİN KARAKAŞ", branch: "Bilişim Teknolojileri", status: "katiliyor", t1: false, t2: false, t3: false, t4: false, note: "Formdan katıldı" },
  { id: 53, name: "ŞAHİN ORHAN", branch: "Bilişim Teknolojileri", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, note: "" },
  { id: 54, name: "UĞUR YUSUF SEZER", branch: "Matematik", status: "katilmiyor", t1: false, t2: false, t3: false, t4: false, note: "Formdan bildirildi: Katılmıyor" },
  { id: 55, name: "ZEHRA GENÇ", branch: "Matematik", status: "katiliyor", t1: false, t2: false, t3: false, t4: false, note: "Formdan katıldı" },
  { id: 56, name: "ZEYNEP ÇIBIK", branch: "İngilizce", status: "bekliyor", t1: false, t2: false, t3: false, t4: false, note: "" },
  { id: 57, name: "SEMA KANDEMİR", branch: "Grafik ve Fotoğraf", status: "katiliyor", t1: false, t2: false, t3: false, t4: false, note: "Formdan katıldı (Yeni Öğretmen)" }
];

const TAKSIT_BEDELI = 300; // Her taksit 300 TL (Toplam 1200 TL)

// Uygulama Durumu (State)
let state = {
  teachers: [],
  expenses: [],
  devredenBakiye: 0,
  filterStatus: 'all',
  searchQuery: ''
};

// Veriyi LocalStorage'dan Yükle veya İlklendir
function loadState() {
  const saved = localStorage.getItem('cay_takip_state_v1');
  if (saved) {
    try {
      state = JSON.parse(saved);
    } catch (e) {
      state = null;
    }
  }

  // Eğer state boşsa, bozuksa veya teachers dizisi yok/boşsa:
  if (!state || !state.teachers || !Array.isArray(state.teachers) || state.teachers.length === 0) {
    state = {
      teachers: JSON.parse(JSON.stringify(DEFAULT_TEACHERS)),
      expenses: (state && state.expenses) || [],
      devredenBakiye: 0,
      filterStatus: 'all',
      searchQuery: ''
    };
  } else {
    // Mevcut listede eksik olan varsayılan öğretmenler varsa ekle
    DEFAULT_TEACHERS.forEach(dt => {
      const exists = state.teachers.some(t => t.id === dt.id || t.name.toUpperCase('tr') === dt.name.toUpperCase('tr'));
      if (!exists) {
        state.teachers.push(JSON.parse(JSON.stringify(dt)));
      }
    });
  }

  // Onaylanan Form Yanıtları (Otomatik Güncelleme)
  const setStatus = (id, searchName, status, note, branch) => {
    let t = state.teachers.find(x => x.id === id || (searchName && x.name.toUpperCase('tr').includes(searchName.toUpperCase('tr'))));
    if (t) {
      t.status = status;
      if (note) t.note = note;
    } else if (searchName) {
      state.teachers.push({
        id: id || (state.teachers.reduce((m, x) => Math.max(m, x.id), 0) + 1),
        name: searchName.toUpperCase('tr'),
        branch: branch || 'Yeni Öğretmen',
        status: status,
        t1: false, t2: false, t3: false, t4: false,
        note: note || 'Formdan eklendi'
      });
    }
  };

  setStatus(39, "MÜJDAT TELLİ", "katiliyor", "Çay Ocağı Sorumlusu", "Bilişim Teknolojileri");
  setStatus(19, "ERDİNÇ SİTRAVA", "katiliyor", "Formdan katıldı", "Türk Dili ve Edebiyatı");
  setStatus(44, "SERAP KAR ATASEVEN", "katiliyor", "Formdan katıldı", "Türk Dili ve Edebiyatı");
  setStatus(42, "NURHAN CAN", "katiliyor", "Formdan katıldı", "Türk Dili ve Edebiyatı");
  setStatus(49, "SİNAN RENÇBEROĞLU", "katiliyor", "Formdan katıldı", "Bilişim Teknolojileri");
  setStatus(9, "CEM KURTOĞLU", "katilmiyor", "Formdan bildirildi: Katılmıyor", "Elektrik-Elektronik Teknolojisi / Elektrik");
  setStatus(57, "SEMA KANDEMİR", "katiliyor", "Formdan katıldı (Yeni Öğretmen)", "Grafik ve Fotoğraf");
  setStatus(55, "ZEHRA GENÇ", "katiliyor", "Formdan katıldı", "Matematik");
  setStatus(13, "DEVRİM YILDIZ", "katiliyor", "Formdan katıldı", "Felsefe");
  setStatus(12, "DERYA YILDIZ", "katiliyor", "Formdan katıldı", "Fizik");
  setStatus(43, "RABİA SULTAN ÇELİK", "katiliyor", "Formdan katıldı", "Matematik");
  setStatus(21, "FEYZULLAH KÖKER", "katilmiyor", "Formdan bildirildi: Katılmıyor", "Grafik ve Fotoğraf / Grafik");
  setStatus(52, "ŞAHİN KARAKAŞ", "katiliyor", "Formdan katıldı", "Bilişim Teknolojileri");
  setStatus(54, "UĞUR YUSUF SEZER", "katilmiyor", "Formdan bildirildi: Katılmıyor", "Matematik");
  setStatus(46, "SERHAT ARSLAN", "katiliyor", "Formdan katıldı", "Bilişim Teknolojileri");
  setStatus(31, "MERAL HIZAL", "katiliyor", "Formdan katıldı", "Görsel Sanatlar");

  const mSeker = state.teachers.find(t => t.id === 35 || t.name.includes("MUHAMMET ŞEKER"));
  if (mSeker) mSeker.branch = "Bilişim Teknolojileri";

  // State alanlarını güvenceye al
  if (!state.expenses) state.expenses = [];
  state.devredenBakiye = 0;
  if (!state.filterStatus) state.filterStatus = 'all';
  if (!state.searchQuery) state.searchQuery = '';

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

// Varsayılan Öğretmen Listesini Sıfırla (Fabrika Ayarlarına Dön)
function resetToDefaults() {
  if (confirm("⚠️ DİKKAT: Bu işlem tüm öğretmenlerin yanıtlarını ve ödemelerini sıfırlar.\nSadece fabrika ayarlarına dönmek istiyorsanız 'Tamam'a basınız.")) {
    state.teachers = JSON.parse(JSON.stringify(DEFAULT_TEACHERS));
    saveState();
    showToast("✅ Liste sıfırlandı!");
  }
}

// Veriyi Kaydet
function saveState() {
  localStorage.setItem('cay_takip_state_v1', JSON.stringify(state));
  updateDashboard();
}

// İstatistikleri Güncelle
function updateDashboard() {
  const katilanlar = state.teachers.filter(t => t.status === 'katiliyor');
  const katilmayanlar = state.teachers.filter(t => t.status === 'katilmiyor');
  const bekleyenler = state.teachers.filter(t => t.status === 'bekliyor');

  let t1Toplam = 0, t2Toplam = 0, t3Toplam = 0, t4Toplam = 0;
  katilanlar.forEach(t => {
    if (t.t1) t1Toplam += TAKSIT_BEDELI;
    if (t.t2) t2Toplam += TAKSIT_BEDELI;
    if (t.t3) t3Toplam += TAKSIT_BEDELI;
    if (t.t4) t4Toplam += TAKSIT_BEDELI;
  });

  const donem1Toplanan = t1Toplam + t2Toplam;
  const donem2Toplanan = t3Toplam + t4Toplam;
  const toplamToplanan = donem1Toplanan + donem2Toplanan;
  const toplamGider = state.expenses.reduce((sum, item) => sum + Number(item.amount || 0), 0);
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
  setTxt('statDonem1Hedef', (katilanlar.length * 600).toLocaleString('tr-TR') + ' ₺');
  setTxt('statDonem2Toplanan', donem2Toplanan.toLocaleString('tr-TR') + ' ₺');
  setTxt('statDonem2Hedef', (katilanlar.length * 600).toLocaleString('tr-TR') + ' ₺');
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
      if (t.t1 && t.t2 && t.t3 && t.t4) return false;
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
    const odenenTaksitSayisi = (t.t1 ? 1 : 0) + (t.t2 ? 1 : 0) + (t.t3 ? 1 : 0) + (t.t4 ? 1 : 0);
    const odenenTutar = odenenTaksitSayisi * TAKSIT_BEDELI;
    const kalanBorc = t.status === 'katiliyor' ? (1200 - odenenTutar) : 0;

    // Durum Rozeti (Dokunarak Katılıyor / Katılmıyor / Bekliyor Yapılabilir)
    let statusBadge = '';
    if (t.status === 'katiliyor') {
      statusBadge = `<button type="button" onclick="cycleStatus(${t.id})" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 hover:bg-emerald-200 active:scale-95 shadow-xs transition cursor-pointer" title="Değiştirmek için dokunun">☕ Katılıyor</button>`;
    } else if (t.status === 'katilmiyor') {
      statusBadge = `<button type="button" onclick="cycleStatus(${t.id})" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold bg-red-100 text-red-800 border border-red-300 hover:bg-red-200 active:scale-95 shadow-xs transition cursor-pointer" title="Değiştirmek için dokunun">❌ Katılmıyor</button>`;
    } else {
      statusBadge = `<button type="button" onclick="cycleStatus(${t.id})" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-300 hover:bg-amber-100 active:scale-95 shadow-xs transition cursor-pointer" title="Katılıyor yapmak için dokunun"><span>⏳</span><span>Yanıt Bekliyor</span><span class="text-[10px] text-amber-600 underline font-normal ml-0.5">Değiştir</span></button>`;
    }

    // Taksit Butonları HTML Helper
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
          class="taksit-btn px-2.5 py-1 text-xs rounded border transition duration-150 ${bgClass}" 
          ${disabled ? 'disabled' : ''} 
          onclick="toggleTaksit(${t.id}, '${field}')"
          title="${donem} - ${label} (300 ₺): Tıklayarak Ödendi/Bekliyor yapın">
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
      
      <!-- 1. DÖNEM -->
      <td class="py-3 px-2 text-center bg-blue-50/30">
        <div class="flex items-center justify-center space-x-1">
          ${taksitBtn('t1', '1. Taksit (300₺)', '1. Dönem')}
          ${taksitBtn('t2', '2. Taksit (300₺)', '1. Dönem')}
        </div>
      </td>

      <!-- 2. DÖNEM -->
      <td class="py-3 px-2 text-center bg-amber-50/30">
        <div class="flex items-center justify-center space-x-1">
          ${taksitBtn('t3', '3. Taksit (300₺)', '2. Dönem')}
          ${taksitBtn('t4', '4. Taksit (300₺)', '2. Dönem')}
        </div>
      </td>

      <td class="py-3 px-3 text-right font-medium text-xs">
        <span class="${odenenTutar === 1200 ? 'text-emerald-600 font-bold' : 'text-gray-800'}">
          ${odenenTutar} ₺
        </span>
        ${t.status === 'katiliyor' && kalanBorc > 0 ? `<div class="text-xs text-red-500 font-normal">Kalan: ${kalanBorc}₺</div>` : ''}
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
        </td>
        <td style="text-align:center;">
          <span class="print-box ${t.t2 ? 'checked' : ''}"></span>
        </td>
        <td style="text-align:center;">
          <span class="print-box ${t.t3 ? 'checked' : ''}"></span>
        </td>
        <td style="text-align:center;">
          <span class="print-box ${t.t4 ? 'checked' : ''}"></span>
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
}

// Taksit Ödeme Durumunu Değiştir
function toggleTaksit(id, field) {
  const teacher = state.teachers.find(t => t.id === id);
  if (!teacher) return;
  teacher[field] = !teacher[field];
  saveState();
}

// Harcamaları Listele
function renderExpenses() {
  const container = document.getElementById('expenseList');
  if (!container) return;
  container.innerHTML = '';

  if (state.expenses.length === 0) {
    container.innerHTML = '<p class="text-xs text-gray-400 py-3 text-center">Henüz harcama / gider kaydı girilmedi.</p>';
    return;
  }

  state.expenses.slice().reverse().forEach((exp, idx) => {
    const realIndex = state.expenses.length - 1 - idx;
    const div = document.createElement('div');
    div.className = 'flex justify-between items-center py-2 border-b border-gray-100 text-xs';
    div.innerHTML = `
      <div>
        <span class="font-medium text-gray-800">${exp.desc}</span>
        <span class="text-gray-400 text-[10px] ml-1">(${exp.date})</span>
      </div>
      <div class="flex items-center space-x-2">
        <span class="font-bold text-red-600">-${Number(exp.amount).toLocaleString('tr-TR')} ₺</span>
        <button onclick="deleteExpense(${realIndex})" class="text-gray-300 hover:text-red-500 font-bold ml-1" title="Sil">×</button>
      </div>
    `;
    container.appendChild(div);
  });
}

// Harcama Ekle
function addExpense() {
  const desc = document.getElementById('expDesc').value.trim();
  const amount = parseFloat(document.getElementById('expAmount').value);
  const date = document.getElementById('expDate').value || new Date().toISOString().split('T')[0];

  if (!desc || isNaN(amount) || amount <= 0) {
    alert("Lütfen geçerli bir harcama açıklaması ve tutarı girin.");
    return;
  }

  state.expenses.push({ desc, amount, date });
  document.getElementById('expDesc').value = '';
  document.getElementById('expAmount').value = '';
  closeModal('modalGider');
  saveState();
}

function deleteExpense(index) {
  if (confirm("Bu harcamayı silmek istediğinizden emin misiniz?")) {
    state.expenses.splice(index, 1);
    saveState();
  }
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

  // 1. Canlı Veri Kanalından Çek (ntfy.sh - Sıfır Kurulum, Anında Eşitleme)
  try {
    const res = await fetch('https://ntfy.sh/cay_mujdattelli_2026_okul/json?poll=1&since=12h', { cache: 'no-store' });
    if (res.ok) {
      const text = await res.text();
      const lines = text.trim().split('\n').filter(Boolean);
      lines.forEach(line => {
        try {
          const item = JSON.parse(line);
          if (item.event === 'message' && item.message) {
            let data = null;
            try { data = JSON.parse(item.message); } catch(e) {}
            if (data && (data.id || data.name)) {
              let teacher = null;
              if (data.id && !isNaN(data.id)) {
                teacher = state.teachers.find(t => t.id === Number(data.id));
              }
              if (!teacher && data.name) {
                teacher = state.teachers.find(t => norm(t.name) === norm(data.name));
              }
              if (teacher) {
                if (teacher.status !== data.status || (data.note && teacher.note !== data.note)) {
                  teacher.status = data.status;
                  if (data.note) teacher.note = data.note;
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
                  t1: false, t2: false, t3: false, t4: false,
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
                t1: false, t2: false, t3: false, t4: false,
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
              t1: false, t2: false, t3: false, t4: false,
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
  let csv = "S.N;Ad Soyad;Branş;Durum;1.Dönem T1 (300 TL);1.Dönem T2 (300 TL);2.Dönem T3 (300 TL);2.Dönem T4 (300 TL);Toplam Ödenen;Kalan Borç;Not\n";
  
  state.teachers.forEach(t => {
    const odenen = ((t.t1?1:0) + (t.t2?1:0) + (t.t3?1:0) + (t.t4?1:0)) * TAKSIT_BEDELI;
    const kalan = t.status === 'katiliyor' ? (1200 - odenen) : 0;
    const durumText = t.status === 'katiliyor' ? 'Katılıyor' : (t.status === 'katilmiyor' ? 'Katılmıyor' : 'Bekliyor');
    
    csv += `${t.id};"${t.name}";"${t.branch || ''}";"${durumText}";"${t.t1?'ÖDENDİ':'-'}";"${t.t2?'ÖDENDİ':'-'}";"${t.t3?'ÖDENDİ':'-'}";"${t.t4?'ÖDENDİ':'-'}";${odenen};${kalan};"${t.note || ''}"\n`;
  });

  const blob = new Blob(["\uFEFF" + csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Okul_Cay_Takip_Listesi_${new Date().toISOString().split('T')[0]}.csv`;
  a.click();
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

// WhatsApp Duyuru Metnini Kopyala
function copyWhatsAppAnnouncement() {
  const msg = 
`☕ *OKUL ÇAY OCAĞI ACİL KATILIM & ÖDEME DUYURUSU*

⚠️ *ÖNEMLİ NOT: Şu anda ocağımızda HİÇ ÇAYIMIZ KALMAMIŞTIR!*
Yeni çay, şeker ve ikram malzemesi alınabilmesi için lütfen katılım durumunuzu acilen belirtiniz.

Değerli Öğretmenlerimiz,
*2026-2027* eğitim-öğretim yılı çay ocağı katılım bedeli toplam *1.200 TL* olarak belirlenmiştir.

Ödemeler 4 eşit taksit (4 x 300 TL) halinde toplanacaktır:
• *1. Dönem:* 1. Taksit (300 TL) & 2. Taksit (300 TL)
• *2. Dönem:* 3. Taksit (300 TL) & 4. Taksit (300 TL)

🔴 *ÇOK ÖNEMLİ: ÖDEME BİLGİLERİ (IBAN)*
Ödemelerinizi elden verebileceğiniz gibi doğrudan aşağıdaki hesaba Havale/EFT/FAST ile de gönderebilirsiniz:

👤 *Alıcı:* MÜJDAT TELLİ
🏦 *IBAN:* TR830001200986200001021145
📝 *Açıklama:* Adınız Soyadınız - Çay Parası

👇 Çay içecek öğretmenlerimiz lütfen aşağıdaki linkten ismini işaretlesin (Listede adı olmayan hocalarımız en alttaki "Diğer" kısmına adını yazabilir):
👉 https://mujdattelli.github.io/cay-katilim/`;

  navigator.clipboard.writeText(msg).then(() => {
    showToast("✅ WhatsApp Duyuru Metni panoya kopyalandı!\nDoğrudan okul grubuna yapıştırabilirsiniz.");
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
