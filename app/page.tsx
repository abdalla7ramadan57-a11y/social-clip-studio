"use client";

import { useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const studios = [
  {
    id: "workspace",
    label: "Social Workspace",
    eyebrow: "شاهد ونظّم",
    title: "كل فيديو قدامك، وكل ملاحظة في وقتها",
    text: "عاين الفيديو داخل مساحة العمل، تحكّم في السرعة والصوت، أضف ملاحظة عند التوقيت الحالي، واحفظ العلامات المرجعية والفيديوهات الأخيرة.",
    image: `${basePath}/screens/social-workspace.webp`,
    accent: "pink",
  },
  {
    id: "flow",
    label: "Flow Studio",
    eyebrow: "أنشئ داخل مشروعك",
    title: "ابدأ من الملف المفتوح بالفعل",
    text: "Flow Studio يتعرّف على الملف الموجود في Premiere Pro ويمنحك مساحة مباشرة لكتابة ما تريد إنشاءه وإضافة المدخلات من نفس اللوحة.",
    image: `${basePath}/screens/flow-studio.webp`,
    accent: "violet",
  },
  {
    id: "broll",
    label: "B-Roll Studio",
    eyebrow: "ابحث واستورد",
    title: "لقطات B‑Roll بدون مغادرة المونتاج",
    text: "ابحث عن فيديو أو صور أو صوت من Pexels وPixabay وUnsplash وFreesound، ثم نزّل واستورد النتيجة إلى الـComposition النشطة.",
    image: `${basePath}/screens/b-roll-studio.webp`,
    accent: "yellow",
  },
];

const platforms = ["YouTube", "Instagram", "Facebook", "Pinterest", "TikTok"];
const whatsappUrl = `https://wa.me/201091339187?text=${encodeURIComponent(
  "مرحبًا، أريد شراء Social Clip Studio بسعر 500 جنيه.",
)}`;

export default function Home() {
  const [active, setActive] = useState(studios[0]);

  return (
    <main>
      <nav className="nav shell" aria-label="التنقل الرئيسي">
        <a className="brand" href="#top" aria-label="Social Clip Studio — الرئيسية">
          <span className="brand-mark" aria-hidden="true">✂</span>
          <span>Social Clip Studio</span>
        </a>
        <div className="nav-links">
          <a href="#features">المزايا</a>
          <a href="#studios">الاستديوهات</a>
          <a href="#learning">التعلّم والكورسات</a>
          <a href="#price">السعر</a>
        </div>
        <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer">واتساب مباشر <span>↙</span></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="kicker"><span className="pulse" /> للتعلّم وصناعة الكورسات</div>
          <h1>من لينك YouTube إلى<br /><em>كورس منظّم.</em></h1>
          <p>
            Social Clip Studio تساعدك تجمع دروس YouTube، وتنظّم الفيديوهات والـPlaylists،
            وتحول المحتوى التعليمي إلى مسار واضح تقدر تتعلم منه أو تبني به كورسك.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={whatsappUrl} target="_blank" rel="noreferrer">اشترِ الآن بـ500ج <span>←</span></a>
            <a className="button ghost" href="#demo">شاهد طريقة العمل</a>
          </div>
          <div className="hero-proof">
            <span><b>05</b> منصات ظاهرة</span>
            <i />
            <span><b>AR / EN</b> واجهة ثنائية</span>
            <i />
            <span><b>500ج</b> السعر كامل</span>
          </div>
        </div>

        <div className="hero-visual" id="demo">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="window">
            <div className="window-bar">
              <div className="dots"><span /><span /><span /></div>
              <span>Social Clip Studio</span>
              <span className="live">LIVE PANEL</span>
            </div>
            <img src={`${basePath}/screens/social-clip-studio.webp`} alt="واجهة Social Clip Studio داخل Premiere Pro" />
          </div>
          <div className="float-card float-top">
            <span className="float-icon yellow">↯</span>
            <div><b>تسريع تلقائي</b><small>بكارت الشاشة عند توفره</small></div>
          </div>
          <div className="float-card float-bottom">
            <span className="float-icon pink">＋</span>
            <div><b>جاهز للمشروع</b><small>تنزيل واستيراد من نفس المكان</small></div>
          </div>
        </div>
      </section>

      <section className="platform-strip" id="platforms">
        <div className="shell platform-inner">
          <span className="strip-label">المنصات الظاهرة داخل الإضافة</span>
          <div className="platforms">
            {platforms.map((platform, index) => (
              <span key={platform}><b>{String(index + 1).padStart(2, "0")}</b>{platform}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell" id="features">
        <div className="section-head">
          <div>
            <span className="section-number">01 / DOWNLOAD</span>
            <h2>تحكّم في التحميل.<br />مش العكس.</h2>
          </div>
          <p>الصق الرابط، حدّد المطلوب، واضبط الناتج من غير ما تخرج من بيئة المونتاج.</p>
        </div>

        <div className="feature-grid">
          <article className="feature-card feature-main">
            <div className="card-index">01</div>
            <div className="feature-icon">⌁</div>
            <h3>فيديو كامل أو جزء محدد</h3>
            <p>نزّل المحتوى كاملًا، أو اختَر جزءًا محددًا بزمن بداية ونهاية واضح.</p>
            <div className="mini-timeline"><span /><b /></div>
          </article>
          <article className="feature-card">
            <div className="card-index">02</div>
            <div className="feature-icon">▣</div>
            <h3>صيغة وجودة وصوت</h3>
            <p>اختيارات واضحة للصيغة والجودة مع صوت AAC، من نفس واجهة التصدير.</p>
            <div className="pills"><span>MP4</span><span>1080p</span><span>AAC</span></div>
          </article>
          <article className="feature-card">
            <div className="card-index">03</div>
            <div className="feature-icon">⚡</div>
            <h3>أسرع عند توفر العتاد</h3>
            <p>تسريع بكارت الشاشة تلقائيًا عند توفره، مع عرض تقدّم التحميل بوضوح.</p>
            <div className="progress"><span /></div>
          </article>
          <article className="feature-card feature-wide">
            <div className="card-index">04</div>
            <div className="feature-icon">文</div>
            <h3>واجهة عربية وإنجليزية</h3>
            <p>بدّل بين AR وEN مباشرة من رأس الإضافة، وكمّل شغلك باللغة الأنسب لك.</p>
            <div className="language-toggle"><b>AR</b><span>EN</span></div>
          </article>
        </div>
      </section>

      <section className="studios" id="studios">
        <div className="shell">
          <div className="section-head studios-head">
            <div>
              <span className="section-number">02 / WORKSPACES</span>
              <h2>ثلاث مساحات.<br />نفس التايملاين.</h2>
            </div>
            <p>كل مساحة متخصصة في خطوة واضحة، وكلها موجودة داخل Social Clip Studio.</p>
          </div>

          <div className="studio-tabs" role="tablist" aria-label="مساحات Social Clip Studio">
            {studios.map((studio) => (
              <button
                key={studio.id}
                type="button"
                role="tab"
                aria-selected={active.id === studio.id}
                className={active.id === studio.id ? `active ${studio.accent}` : ""}
                onClick={() => setActive(studio)}
              >
                <span>{studio.label}</span><b>↗</b>
              </button>
            ))}
          </div>

          <div className={`studio-stage ${active.accent}`}>
            <div className="studio-copy">
              <span className="studio-eyebrow">{active.eyebrow}</span>
              <h3>{active.title}</h3>
              <p>{active.text}</p>
              {active.id === "broll" && (
                <div className="source-list"><span>Pexels</span><span>Pixabay</span><span>Unsplash</span><span>Freesound</span></div>
              )}
            </div>
            <div className="studio-shot">
              <img key={active.image} src={active.image} alt={`واجهة ${active.label}`} />
            </div>
          </div>
        </div>
      </section>

      <section className="workflow shell" id="learning">
        <div className="section-head">
          <div>
            <span className="section-number">03 / LEARNING</span>
            <h2>حوّل المشاهدة.<br />إلى رحلة تعلّم.</h2>
          </div>
          <p>من روابط YouTube المتفرقة إلى دروس وPlaylists مرتبة تخدم المتعلّم وصانع الكورس.</p>
        </div>
        <div className="steps learning-steps">
          <article><b>01</b><span className="step-icon">⌘</span><h3>اجمع لينكات الدروس</h3><p>ضع روابط فيديوهات YouTube التعليمية التي تريد الرجوع إليها أو استخدامها في الكورس.</p></article>
          <article><b>02</b><span className="step-icon">≋</span><h3>نظّم الدروس والـPlaylists</h3><p>رتّب المحتوى في مسار مفهوم بدل ما تفضل الفيديوهات موزعة بين روابط وقوائم مختلفة.</p></article>
          <article><b>03</b><span className="step-icon">◎</span><h3>راجع بملاحظات زمنية</h3><p>شاهد الفيديو، وأضف ملاحظتك عند التوقيت الحالي مع العلامات المرجعية داخل Social Workspace.</p></article>
          <article><b>04</b><span className="step-icon">↘</span><h3>ابنِ كورسك</h3><p>نزّل الأجزاء المطلوبة، حضّر المراجع، وكمّل إنشاء الدرس داخل بيئة المونتاج.</p></article>
        </div>
      </section>

      <section className="pricing shell" id="price">
        <div className="price-card">
          <div className="price-copy">
            <span className="section-number">04 / PRICE</span>
            <h2>كل الأدوات.<br />بسعر واحد واضح.</h2>
            <p>Social Clip Studio كاملة للتعلّم، تنظيم الدروس والـPlaylists، وصناعة محتوى الكورسات.</p>
            <ul>
              <li>تنظيم محتوى YouTube والدروس</li>
              <li>Social Workspace وFlow Studio</li>
              <li>B‑Roll Studio داخل بيئة المونتاج</li>
              <li>واجهة عربية وإنجليزية</li>
            </ul>
          </div>
          <div className="price-box">
            <span>السعر كامل</span>
            <div><b>500</b><small>جنيه مصري</small></div>
            <a className="button whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">تواصل واشترِ عبر واتساب <span>↗</span></a>
            <a className="phone-link" href="tel:+201091339187" dir="ltr">010 9133 9187</a>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="cta-glow" />
        <div className="shell cta-inner">
          <span className="section-number">SOCIAL CLIP STUDIO</span>
          <h2>رتّب تعلّمك.<br /><em>وابنِ كورسك.</em></h2>
          <p>Social Clip Studio كاملة بـ500 جنيه — تواصل معنا مباشرة وابدأ.</p>
          <a className="button whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">تواصل على واتساب <span>↗</span></a>
        </div>
      </section>

      <footer className="footer shell">
        <div className="brand"><span className="brand-mark">✂</span><span>Social Clip Studio</span></div>
        <p>Built around the real extension workflow.</p>
        <a href="#top">أعلى الصفحة ↑</a>
      </footer>
    </main>
  );
}
