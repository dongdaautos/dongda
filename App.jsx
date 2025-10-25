import React, { useState } from "react";

export default function App() {
  const [lang, setLang] = useState("en");

  const t = {
    en: {
      brand: "Dongda Auto Service LTD",
      tagline: "Collision Repair • Panel & Paint • EV Battery Upgrades",
      ctaBook: "Book Now",
      ctaCall: "Call Now",
      nav: { services: "Services", gallery: "Gallery", about: "About", contact: "Contact" },
      hero: {
        title: "Quality panel beating & paint in Ōtāhuhu",
        subtitle: "Insurance & private jobs • Same-day estimates • Bilingual service (中文/English)",
      },
      services: {
        title: "Our Services",
        list: [
          { title: "Panel Beating", desc: "Structural & cosmetic repairs with OEM methods." },
          { title: "Spray Painting", desc: "2K / tri-coat / pearl; computer colour-match & blending." },
          { title: "Bumper & Plastic Repair", desc: "Cracks, tabs, PDR coordination; fast turnarounds." },
          { title: "EV Battery & Cooling", desc: "BMW i3 upgrades, Leaf modules, AC refrigerant service." },
        ],
      },
      about: {
        title: "Why choose us",
        points: [
          "Registered NZ company • GST invoicing • Insurance friendly",
          "20+ years experience across panel & paint",
          "Professional spray booth, lifts, and calibrated equipment",
          "Photo-documented workflow and honest pricing",
        ],
      },
      gallery: { title: "Before & After" },
      contact: {
        title: "Get a Quote",
        subtitle: "Send photos for a fast estimate or drop by the workshop.",
        name: "Name",
        phone: "Phone",
        email: "Email",
        message: "Message (include plate/VIN & photos link)",
        send: "Send Message",
        details: "Details",
        addrLabel: "Address",
        hours: "Hours",
        map: "Get Directions",
      },
      footer: { rights: "All rights reserved." },
    },
    zh: {
      brand: "东达汽车服务有限公司",
      tagline: "事故车修复 • 钣金喷漆 • 电动车电池升级",
      ctaBook: "立即预约",
      ctaCall: "电话联系",
      nav: { services: "服务", gallery: "案例", about: "关于我们", contact: "联系" },
      hero: {
        title: "奥塔胡呼优质钣金喷漆",
        subtitle: "承接保险与私人订单 • 当天报价 • 提供中英文服务",
      },
      services: {
        title: "主营项目",
        list: [
          { title: "钣金修复", desc: "车架/外观修复，遵循原厂工艺。" },
          { title: "喷漆翻新", desc: "2K、三涂三烤、珠光漆；电脑调漆与过渡。" },
          { title: "塑料件修复", desc: "保险杠裂纹、卡扣修复、无痕凹陷协作。" },
          { title: "电动车电池与空调", desc: "BMW i3 升级、Leaf 模组、制冷剂加注。" },
        ],
      },
      about: {
        title: "我们的优势",
        points: [
          "正规注册 • 可开GST发票 • 保险理赔对接",
          "20+年钣金喷漆经验",
          "专业烤漆房、举升机与标定设备",
          "全程拍照留档，透明报价",
        ],
      },
      gallery: { title: "修复前后" },
      contact: {
        title: "获取报价",
        subtitle: "发送照片快速估价，或直接到店。",
        name: "姓名",
        phone: "电话",
        email: "邮箱",
        message: "留言（车牌/VIN与照片链接）",
        send: "发送信息",
        details: "门店信息",
        addrLabel: "地址",
        hours: "营业时间",
        map: "导航",
      },
      footer: { rights: "保留所有权利。" },
    },
  }[lang];

  const services = t.services.list;

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form[0].value,
      phone: form[1].value,
      email: form[2].value,
      message: form[3].value,
    };

    try {
      // Replace 'yourFormID' when you want to enable email receiving
      const response = await fetch("https://formspree.io/f/yourFormID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        alert(lang === "en" ? "Your message has been sent successfully!" : "您的信息已成功发送！");
        form.reset();
      } else {
        alert(lang === "en" ? "Failed to send message." : "发送失败，请稍后重试。");
      }
    } catch (error) {
      alert(lang === "en" ? "An error occurred." : "发生错误，请稍后再试。");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-gray-900 text-white font-bold">DA</span>
            <div className="leading-tight">
              <div className="font-semibold">{t.brand}</div>
              <div className="text-xs text-gray-500">{t.tagline}</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-gray-700">{t.nav.services}</a>
            <a href="#gallery" className="hover:text-gray-700">{t.nav.gallery}</a>
            <a href="#about" className="hover:text-gray-700">{t.nav.about}</a>
            <a href="#contact" className="hover:text-gray-700">{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={() => setLang(lang === "en" ? "zh" : "en")} className="px-3 py-1.5 rounded-xl border text-sm hover:bg-gray-50">
              {lang === "en" ? "中文" : "EN"}
            </button>
            <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-xl bg-gray-900 text-white text-sm hover:opacity-90">{t.ctaBook}</a>
            <a href="tel:+64278818860" className="px-4 py-2 rounded-xl border text-sm hover:bg-gray-50">{t.ctaCall}</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542367597-8849ebf6c1d6?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" aria-hidden />
        <div className="absolute inset-0 bg-black/50" aria-hidden />
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-36 text-white">
          <h1 className="text-3xl md:text-5xl font-bold max-w-3xl">{t.hero.title}</h1>
          <p className="mt-4 text-lg opacity-90 max-w-2xl">{t.hero.subtitle}</p>
          <div className="mt-8 flex gap-3">
            <a href="#contact" className="px-5 py-3 rounded-xl bg-white text-gray-900 font-medium">{t.ctaBook}</a>
            <a href="tel:+64278818860" className="px-5 py-3 rounded-xl bg-white/10 border border-white/30">{t.ctaCall}</a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">{t.services.title}</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <div key={i} className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="h-36 rounded-xl bg-gray-100 bg-[url('https://images.unsplash.com/photo-1515921053-1c2c1f1a5b53?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white border-y">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">{t.about.title}</h2>
          <ul className="mt-6 grid md:grid-cols-2 gap-4">
            {t.about.points.map((p, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-white text-xs">✓</span>
                <span className="text-gray-700">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">{t.gallery.title}</h2>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="aspect-[4/3] rounded-2xl overflow-hidden border bg-gray-100">
              <img
                alt="work sample"
                src={`https://picsum.photos/seed/dongda-${i}/800/600`}
                className="h-full w-full object-cover hover:scale-105 transition"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">{t.contact.title}</h2>
            <p className="mt-2 text-gray-600">{t.contact.subtitle}</p>
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium">{t.contact.name}</label>
                <input className="mt-1 w-full rounded-xl border px-3 py-2" required />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">{t.contact.phone}</label>
                  <input className="mt-1 w-full rounded-xl border px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium">{t.contact.email}</label>
                  <input type="email" className="mt-1 w-full rounded-xl border px-3 py-2" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium">{t.contact.message}</label>
                <textarea rows={4} className="mt-1 w-full rounded-xl border px-3 py-2" />
              </div>
              <button type="submit" className="px-5 py-2.5 rounded-xl bg-gray-900 text-white">{t.contact.send}</button>
            </form>
          </div>
          <div>
            <h3 className="text-xl font-semibold">{t.contact.details}</h3>
            <div className="mt-4 text-gray-700 space-y-2">
              <div>
                <div className="text-sm uppercase tracking-wide text-gray-500">{t.contact.addrLabel}</div>
                <div>91A Huia Road, Ōtāhuhu, Auckland 1062</div>
                <a className="text-blue-600 underline" href="https://maps.google.com/?q=91A+Huia+Road,+Otahuhu">{t.contact.map}</a>
              </div>
              <div>
                <div className="text-sm uppercase tracking-wide text-gray-500">{t.contact.hours}</div>
                <div>Mon–Sat 9:00–18:00</div>
                <div>Phone: <a href="tel:+64278818860" className="underline">027 881 8860</a>, <a href="tel:+642040506079" className="underline">020 4050 6079</a></div>
                <div>Email: <a href="mailto:dongda.autos@gmail.com" className="underline">dongda.autos@gmail.com</a></div>
              </div>
              <div className="mt-4 rounded-2xl overflow-hidden border">
                <iframe
                  title="Google Map"
                  className="w-full h-60"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12777.772515848335!2d174.840!3d-36.948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d49a4b787f2c5%3A0x0000000000000000!2sOtahuhu!5e0!3m2!1sen!2snz!4v1715900000000"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600">© {new Date().getFullYear()} {t.brand}. {t.footer.rights}</div>
        </div>
      </footer>
    </div>
  );
}
