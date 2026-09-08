/**
 * =========================================================================
 * OKUL ÇAY OCAĞI KATILIM FORMU (GÜNCEL & İZİNLER AYARLI)
 * =========================================================================
 * - "Şu anda hiç çayımız kalmadı" acil notu eklendi.
 * - 56 öğretmen listelendi, ismi olmayanlar için "Diğer" seçeneği açıldı.
 * - İzinler: Herkese açık (Google girişi zorunluluğu yok, şifresiz herkes doldurabilir).
 * - Müjdat TELLİ IBAN bilgisi ve 1.200 TL (4 x 300 TL) şartları eklendi.
 */

function cayKatilimFormuOlustur() {
  var formBasligi = "2026-2027 Eğitim-Öğretim Yılı Çay Ocağı Katılım Formu";
  
  var aciklama = 
    "⚠️ DİKKAT: ŞU ANDA OCAĞIMIZDA HİÇ ÇAYIMIZ KALMAMIŞTIR!\n" +
    "Acil çay, şeker ve malzeme alımı yapılabilmesi için lütfen en kısa sürede katılım durumunuzu bildiriniz.\n\n" +
    "Değerli Öğretmenlerimiz,\n" +
    "2026-2027 eğitim-öğretim yılında çay ocağı katılım bedeli toplam 1.200 TL olarak belirlenmiştir.\n\n" +
    "Ödemeler bütçeyi sarsmaması adına 4 eşit taksit (4 x 300 TL) halinde toplanacaktır:\n" +
    "• 1. DÖNEM: 1. Taksit (300 TL) & 2. Taksit (300 TL)\n" +
    "• 2. DÖNEM: 3. Taksit (300 TL) & 4. Taksit (300 TL)\n\n" +
    "════════════════════════════════════════════\n" +
    "🔴 ÇOK ÖNEMLİ: ÖDEMELERİNİZİ BANA (IBAN) ATABİLİRSİNİZ\n" +
    "════════════════════════════════════════════\n" +
    "Ödemelerinizi elden verebileceğiniz gibi doğrudan aşağıdaki IBAN hesabıma Havale/EFT/FAST ile de gönderebilirsiniz:\n\n" +
    "👤 Alıcı Adı: MÜJDAT TELLİ\n" +
    "🏦 IBAN: TR830001200986200001021145\n" +
    "📝 Açıklama: Adınız Soyadınız - Çay Parası\n" +
    "════════════════════════════════════════════\n\n" +
    "👇 Çay ocağına katılmak için lütfen aşağıdaki listeden isminizi işaretleyiniz:\n" +
    "(Listede adınız yoksa en alttaki 'Diğer' seçeneğini seçip adınızı ve branşınızı yazabilirsiniz)";

  var form = FormApp.create(formBasligi);
  form.setDescription(aciklama);

  // İZİN VE ERİŞİM AYARLARI (Herkes sorunsuz doldurabilsin diye)
  form.setRequireLogin(false);          // Herkese açık (Google girişi istemez, izin sorunu olmaz)
  form.setCollectEmail(false);          // E-posta zorunluluğu yok
  form.setAllowResponseEdits(true);      // İsteyen öğretmen yanıtını sonradan değiştirebilir
  form.setLimitOneResponsePerUser(false);// Girişsiz olduğu için tek yanıt zorunluluğu kapalı

  form.setConfirmationMessage(
    "✅ Katılım tercihiniz başarıyla kaydedildi!\n\n" +
    "⚠️ OCAKTA ÇAY KALMADIĞINDAN ÖDEMELERİ EN KISA SÜREDE AŞAĞIDAKİ HESABA ATABİLİRSİNİZ:\n\n" +
    "Alıcı: MÜJDAT TELLİ\n" +
    "IBAN: TR830001200986200001021145\n" +
    "Açıklama: Ad Soyad - Çay Parası\n\n" +
    "Teşekkür eder, iyi dersler dileriz!"
  );

  // 56 Öğretmen Listesi
  var ogretmenler = [
    "1 - ABDURRAHİM BÜYÜKDAĞ (Din Kültürü ve Ahlâk Bilgisi)",
    "2 - ASLI GÜREL (Bilişim Teknolojileri)",
    "3 - AYÇA ÇIKAR (Elektrik-Elektronik Teknolojisi / Elektronik)",
    "4 - BESTİ GÜZELSOY (Türk Dili ve Edebiyatı)",
    "5 - BEYZA YETİK (Matematik)",
    "6 - BİRGÜL COŞKUN (Bilişim Teknolojileri)",
    "7 - BİROL ATEŞ (Din Kültürü ve Ahlâk Bilgisi)",
    "8 - CELAL ATIŞ (Türk Dili ve Edebiyatı)",
    "9 - CEM KURTOĞLU (Elektrik-Elektronik Teknolojisi / Elektrik)",
    "10 - DEMET KESEN (Matematik)",
    "11 - DEMET SAVRUK (Bilişim Teknolojileri)",
    "12 - DERYA YILDIZ (Fizik)",
    "13 - DEVRİM YILDIZ (Felsefe)",
    "14 - DİĞDEM ACAR (Biyoloji)",
    "15 - DURMUŞ KIZILKAYA (Bilişim Teknolojileri)",
    "16 - EBRU ELMAS (İngilizce)",
    "17 - EBRU KÜÇÜKALİ TURGUT (Türk Dili ve Edebiyatı)",
    "18 - EDİP TAŞDEMİR (Beden Eğitimi)",
    "19 - ERDİNÇ SİTRAVA (Türk Dili ve Edebiyatı)",
    "20 - FATMA NUR SIVAR (Rehberlik)",
    "21 - FEYZULLAH KÖKER (Grafik ve Fotoğraf / Grafik)",
    "22 - GÖKÇE ŞEN (Özel Eğitim)",
    "23 - GÖKHAN GÜREL (Bilişim Teknolojileri)",
    "24 - HALDUN YILDIZ (Tarih)",
    "25 - HANDAN YASA (Kimya / Kimya Teknolojisi)",
    "26 - HATİCE AĞAN (Kimya / Kimya Teknolojisi)",
    "27 - ZEYNEP AYNAS (TARİH)",
    "28 - İBRAHİM CALAYIR (Bilişim Teknolojileri)",
    "29 - İLKNUR ÇIRPAN (Bilişim Teknolojileri)",
    "30 - MAHMUT YAVUZ (Elektrik-Elektronik Teknolojisi / Elektrik)",
    "31 - MERAL HIZAL (Görsel Sanatlar)",
    "32 - MERİÇ AKKAYA (Elektrik-Elektronik Teknolojisi / Elektrik)",
    "33 - MERYEM DEMİRTAŞ (İngilizce)",
    "34 - MİRAY TEKAY (Türk Dili ve Edebiyatı)",
    "35 - MUHAMMET ŞEKER (Bilgisayar ve Öğretim Teknolojileri)",
    "36 - MUHAMMET SERDAR BALIKLI (Beden Eğitimi)",
    "37 - MURAT KAÇAN (Bilişim Teknolojileri)",
    "38 - MURAT KANTARCI (Bilişim Teknolojileri)",
    "39 - MÜJDAT TELLİ (Bilişim Teknolojileri)",
    "40 - MÜNEVVER ÜNAL ÖTÜKEN (Coğrafya)",
    "41 - NAGİHAN KOÇ ÇAVUR (Coğrafya)",
    "42 - NURHAN CAN (Türk Dili ve Edebiyatı)",
    "43 - RABİA SULTAN ÇELİK (Matematik)",
    "44 - SERAP KAR ATASEVEN (Türk Dili ve Edebiyatı)",
    "45 - SERDAR ÇIRPAN (Bilişim Teknolojileri)",
    "46 - SERHAT ARSLAN (Bilişim Teknolojileri)",
    "47 - SEVİLAY ARSLAN (Rehberlik)",
    "48 - SEVİLAY DEVECİ (Elektrik-Elektronik Teknolojisi / Elektronik)",
    "49 - SİNAN RENÇBEROĞLU (Bilişim Teknolojileri)",
    "50 - SİNAN CAN YÜCEL (İngilizce)",
    "51 - SONER TAŞ (Elektrik-Elektronik Teknolojisi / Elektronik)",
    "52 - ŞAHİN KARAKAŞ (Bilişim Teknolojileri)",
    "53 - ŞAHİN ORHAN (Bilişim Teknolojileri)",
    "54 - UĞUR YUSUF SEZER (Matematik)",
    "55 - ZEHRA GENÇ (Matematik)",
    "56 - ZEYNEP ÇIBIK (İngilizce)"
  ];

  // TEK SORU: İsminin yanındaki kutucuğu işaretleme
  var secimSorusu = form.addMultipleChoiceItem();
  secimSorusu.setTitle("Çay ocağına katılmak isteyenler (Lütfen isminizi işaretleyiniz):");
  secimSorusu.setHelpText("Katılmak için isminizin yanındaki kutucuğu seçiniz. Listede adınız yoksa en alttaki 'Diğer' seçeneğine kendi adınızı yazınız.");
  
  var secenekler = ogretmenler.map(function(ogr) {
    return secimSorusu.createChoice(ogr);
  });
  secimSorusu.setChoices(secenekler);
  
  // İSMİ OLMAYANLARIN ALTTAN KENDİSİNİ EKLEMESİ İÇİN İZİN/SEÇENEK
  secimSorusu.showOtherOption(true);
  secimSorusu.setRequired(true);

  // Yanıt E-Tablosu Oluştur
  var ss = SpreadsheetApp.create(formBasligi + " (Katılanlar Listesi)");
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());

  Logger.log("===============================================================");
  Logger.log("YENİ FORMUNUZ BAŞARIYLA OLUŞTURULDU!");
  Logger.log("ÖĞRETMENLERE ATACAĞINIZ WHATSAPP LİNKİ:\n" + form.getPublishedUrl());
  Logger.log("KATILANLARIN DÜŞTÜĞÜ E-TABLO:\n" + ss.getUrl());
  Logger.log("===============================================================");
}
