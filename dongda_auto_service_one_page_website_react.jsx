import React, { useState } from "react";

export default function Website() {
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
        subtitle: "Insurance & private jobs • Same‑day estimates • Bilingual service (中文/English)",
      },
      services: {
        title: "Our Services",
        list: [
          { title: "Panel Beating", desc: "Structural & cosmetic repairs with OEM methods." },
          { title: "Spray Painting", desc: "2K / tri‑coat / pearl; computer colour‑match & blending." },
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
          "Photo‑documented workflow and honest pricing",
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
      footer: {
        rights: "All rights reserved.",
      },
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
      footer: {
        rights: "保留所有权利。",
      },
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
      {/* same layout as before, form submission now sends to Formspree */}
    </div>
  );
}
