// SS Finance - Full Website with Loan & Insurance Application Form

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Home, Car, User, Briefcase, Shield, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { icon: <Car />, title: "Car Loan", desc: "New and Used Cars Financing" },
  { icon: <Home />, title: "Home Loan", desc: "Low-interest home financing" },
  { icon: <User />, title: "Personal Loan", desc: "Quick personal loans" },
  { icon: <Briefcase />, title: "Business Loan", desc: "MSME and Startup Loans" },
  { icon: <Home />, title: "Loan Against Property", desc: "Get value from property" },
  { icon: <Shield />, title: "Insurance", desc: "Partnered with Tata AIG" },
];

const languages = {
  en: {
    title: "Welcome to SS Finance",
    subtitle: "Your Trusted Financial Partner",
    btnApply: "Apply Now",
    nav: ["Home", "About Us", "Services", "Contact"],
    about: "SS Finance is committed to delivering transparent and efficient financial solutions. With a team of experts and trusted partners like Tata AIG, we help you achieve your financial goals effortlessly.",
    contactHeading: "Get in Touch",
    contactText: "Reach out for any queries, consultation, or support. We're here to help.",
    form: {
      heading: "Loan / Insurance Application",
      name: "Full Name",
      mobile: "Mobile Number",
      type: "Select Service Type",
      car: "Car Loan",
      home: "Home Loan",
      personal: "Personal Loan",
      business: "Business Loan",
      mortgage: "Loan Against Property",
      insurance: "Insurance",
      submit: "Submit Application"
    }
  },
  hi: {
    title: "एसएस फाइनेंस में आपका स्वागत है",
    subtitle: "आपके भरोसेमंद वित्तीय साथी",
    btnApply: "अभी आवेदन करें",
    nav: ["मुखपृष्ठ", "हमारे बारे में", "सेवाएँ", "संपर्क करें"],
    about: "एसएस फाइनेंस पारदर्शी और कुशल वित्तीय समाधान प्रदान करने के लिए प्रतिबद्ध है। टाटा एआईजी जैसे विश्वसनीय भागीदारों और विशेषज्ञों की टीम के साथ, हम आपके वित्तीय लक्ष्यों को प्राप्त करने में मदद करते हैं।",
    contactHeading: "संपर्क करें",
    contactText: "किसी भी प्रश्न, परामर्श या सहायता के लिए संपर्क करें। हम आपकी मदद के लिए यहां हैं।",
    form: {
      heading: "ऋण / बीमा आवेदन",
      name: "पूरा नाम",
      mobile: "मोबाइल नंबर",
      type: "सेवा प्रकार चुनें",
      car: "कार ऋण",
      home: "होम लोन",
      personal: "पर्सनल लोन",
      business: "बिजनेस लोन",
      mortgage: "संपत्ति पर ऋण",
      insurance: "बीमा",
      submit: "आवेदन सबमिट करें"
    }
  },
};

export default function SsFinanceApp() {
  const [lang, setLang] = useState("en");
  const t = languages[lang];
  const [formData, setFormData] = useState({ name: "", mobile: "", type: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Application Submitted:\nName: ${formData.name}\nMobile: ${formData.mobile}\nType: ${formData.type}`);
    setFormData({ name: "", mobile: "", type: "" });
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 p-4">
      <header className="flex justify-between items-center border-b pb-4">
        <div>
          <h1 className="text-3xl font-bold">{t.title}</h1>
          <p className="text-md text-gray-500">{t.subtitle}</p>
        </div>
        <div className="space-x-2">
          {t.nav.map((item, i) => (
            <Button key={i} variant="ghost">{item}</Button>
          ))}
          <Button onClick={() => setLang(lang === "en" ? "hi" : "en")}>🌐</Button>
        </div>
      </header>

      <section className="my-6">
        <h2 className="text-2xl font-semibold mb-2">{t.nav[1]}</h2>
        <p className="text-gray-700 text-sm leading-relaxed max-w-3xl">{t.about}</p>
      </section>

      <section className="my-6">
        <h2 className="text-2xl font-semibold mb-4">{t.nav[2]}</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((service, idx) => (
            <motion.div whileHover={{ scale: 1.05 }} key={idx} className="rounded-2xl shadow-lg p-4 bg-white">
              <Card>
                <CardContent className="flex items-center gap-4">
                  {service.icon}
                  <div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.desc}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="my-6">
        <h2 className="text-2xl font-semibold mb-2">{t.contactHeading}</h2>
        <p className="text-sm text-gray-700 mb-4">{t.contactText}</p>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Phone className="text-gray-500" />
            <span>+91 82692 80424</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="text-gray-500" />
            <span>ssfinance2804@gmail.com</span>
          </div>
        </div>
      </section>

      <section className="my-6">
        <h2 className="text-2xl font-semibold mb-4">{t.form.heading}</h2>
        <form onSubmit={handleSubmit} className="max-w-md bg-white p-4 rounded-xl shadow space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">{t.form.name}</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{t.form.mobile}</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{t.form.type}</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            >
              <option value="">--</option>
              <option value="car">{t.form.car}</option>
              <option value="home">{t.form.home}</option>
              <option value="personal">{t.form.personal}</option>
              <option value="business">{t.form.business}</option>
              <option value="mortgage">{t.form.mortgage}</option>
              <option value="insurance">{t.form.insurance}</option>
            </select>
          </div>
          <Button type="submit" className="w-full">{t.form.submit}</Button>
        </form>
      </section>

      <footer className="mt-10 border-t pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SS Finance. All rights reserved.
      </footer>
    </main>
  );
}
