# ☕ Okul Çay Ocağı Google Form Kurulum Kılavuzu

Bu kılavuz, Google Form'unuzu **56 öğretmenin tam listesi**, **1.200 TL ve 4 taksit (her dönem 2 taksit)** kurallarıyla birlikte **10 saniyede otomatik oluşturmanızı** sağlar.

---

## 🚀 3 Adımda Otomatik Kurulum

### Adım 1: script.new Sayfasını Açın
Tarayıcınızda (Google hesabınız açıkken) şu adrese gidin:
👉 [https://script.new](https://script.new)

### Adım 2: Kodu Yapıştırın
Karşınıza çıkan Google Apps Script ekranındaki tüm mevcut yazıları silin ve `google_form_kodu.gs` dosyasındaki kodun tamamını yapıştırın.

### Adım 3: "Çalıştır" (Run) Butonuna Basın
1. Üst menüdeki **Çalıştır (Run)** butonuna basın.
2. Google ilk çalıştırmada sizden yetki isteyecektir:
   - **İzinleri İncele**'ye tıklayın.
   - Kendi Google hesabınızı seçin.
   - **Gelişmiş** (Advanced) bağlantısına tıklayın.
   - En alttaki **Güvenli Değil sayfasına git (Geç)** seçeneğine basıp **İzin Ver** deyin.
3. 5-10 saniye içinde ekranın altındaki *Yürütme Günlüğü* (Log) kısmında şu linkler belirecektir:
   - 📱 **WhatsApp'tan Öğretmenlere Göndereceğiniz Link**
   - ✏️ **Form Düzenleme Linki**
   - 📊 **Yanıtların Toplandığı Google E-Tablo Linki**

---

## 📋 Formda Neler Var?

1. **Açıklama:**
   - 1.200 TL toplam bedel
   - 4 eşit taksit (300 TL x 4)
   - 1. Dönem 1. ve 2. Taksit (300 + 300 TL)
   - 2. Dönem 3. ve 4. Taksit (300 + 300 TL)
2. **Ad Soyad ve Branş (Açılır Liste):**
   - Okuldaki 56 öğretmenin tamamı numaralı ve branşlı olarak sıralıdır.
   - En altta **"👉 LİSTEDE ADIM YOK"** seçeneği bulunur.
3. **Listede Olmayanlar İçin Metin Alanı:**
   - Yeni gelen veya listede adını bulamayan hocalar kendi ad ve branşlarını yazabilir.
3. **Ödeme Bilgileri & IBAN (Çok Önemli Vurgu):**
   - 🔴 **Alıcı:** MÜJDAT TELLİ
   - 🏦 **IBAN:** TR830001200986200001021145
   - 📝 **Açıklama:** Ad Soyad - Çay Parası
   - Öğretmenlerin parayı elden verebilecekleri gibi doğrudan bu hesaba atabilecekleri formun açıklamasında, onay mesajında ve özel başlık alanında belirgin olarak yer alır.
4. **Katılım Tercihi:**
   - `☕ EVET, katılmak istiyorum (1.200 TL - 4 Taksit ödemeyi kabul ediyorum)`
   - `❌ HAYIR, katılmak istemiyorum`
5. **Ek Not / Öneri Kutusu (İsteğe Bağlı)**

---

## 💻 Bilgisayarınızdaki Takip Paneli (`index.html`)

Masaüstünüzdeki `cay` klasöründe bulunan **`index.html`** dosyasına çift tıklayarak yönetim panelinizi açabilirsiniz:
- 56 öğretmenin tamamı yüklüdür.
- Formdan gelen yanıtları **"Form Yanıtlarını Aktar"** butonuyla tek tıkla yapıştırıp eşleştirebilirsiniz.
- Taksitleri ödeyenleri tek tıkla **"Ödendi"** yapabilirsiniz.
- Çay/şeker harcamalarınızı **Gider Defteri**'ne işleyip kasanızı anlık görebilirsiniz.
- **"Panoya Yazdır (A4)"** butonuna basarak öğretmenler odası panosuna asılacak taksit çizelgesini yazdırabilirsiniz.
