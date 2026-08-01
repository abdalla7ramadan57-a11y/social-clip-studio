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
          <a href="#platforms">المنصات</a>
        </div>
        <a className="nav-cta" href="#demo">شاهد العرض <span>↙</span></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="kicker"><span className="pulse" /> إضافة واحدة. مسار أسرع.</div>
          <h1>من الرابط إلى<br /><em>التايملاين.</em></h1>
          <p>
            Social Clip Studio يجمع تنزيل الفيديو، تنظيم المراجع، مساحة الإنشاء،
            والـB‑Roll داخل لوحة واحدة جاهزة لـPremiere Pro وAfter Effects.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#demo">اكتشف طريقة العمل <span>←</span></a>
            <a className="button ghost" href="#studios">استكشف الاستديوهات</a>
          </div>
          <div className="hero-proof">
            <span><b>05</b> منصات ظاهرة</span>
            <i />
            <span><b>AR / EN</b> واجهة ثنائية</span>
            <i />
            <span><b>AAC</b> خيارات صوت</span>
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

      <section className="workflow shell">
        <div className="section-head">
          <div>
            <span className="section-number">03 / FLOW</span>
            <h2>ثلاث خطوات.<br />ولا نافذة زيادة.</h2>
          </div>
        </div>
        <div className="steps">
          <article><b>01</b><span className="step-icon">⌘</span><h3>الصق الرابط</h3><p>من أي منصة مدعومة ظاهرة داخل اللوحة.</p></article>
          <article><b>02</b><span className="step-icon">≋</span><h3>اضبط الناتج</h3><p>الجزء، الصيغة، الجودة، الصوت ومجلد الحفظ.</p></article>
          <article><b>03</b><span className="step-icon">↘</span><h3>كمّل المونتاج</h3><p>استورد المادة واشتغل عليها داخل مشروعك.</p></article>
        </div>
      </section>

      <section className="final-cta">
        <div className="cta-glow" />
        <div className="shell cta-inner">
          <span className="section-number">SOCIAL CLIP STUDIO</span>
          <h2>كل اللي تحتاجه للمحتوى.<br /><em>داخل مساحة واحدة.</em></h2>
          <p>تنزيل، معاينة، ملاحظات، إنشاء وB‑Roll — من غير ما تسيب بيئة المونتاج.</p>
          <a className="button primary" href="#top">ارجع وشاهد الواجهة <span>↑</span></a>
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
