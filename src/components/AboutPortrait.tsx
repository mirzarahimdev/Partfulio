import { useLanguage } from '../i18n/LanguageContext'

/** Editorial black plane — dog-ear TR, slanted bottom, notch BL */
const PORTRAIT_CLIP =
  'polygon(0% 0%, 82% 0%, 100% 9.5%, 100% 68%, 12% 100%, 0% 88%)'

export function AboutPortrait() {
  const { t } = useLanguage()

  return (
    <figure className="w-full max-w-[400px]">
      <div className="relative aspect-[3/4] w-full">
        {/* Black geometric plane */}
        <div
          className="absolute inset-0 bg-black"
          style={{ clipPath: PORTRAIT_CLIP }}
          aria-hidden="true"
        />

        <img
          src="/images/profile.jpg"
          alt={t.about.values.name}
          width={1200}
          height={1200}
          decoding="async"
          className="absolute inset-0 z-[1] h-full w-full object-cover object-[center_8%] [image-rendering:auto] contrast-[1.06] saturate-[1.05] brightness-[1.03]"
          style={{ clipPath: PORTRAIT_CLIP }}
        />

        <span
          className="absolute bottom-[8%] right-[1%] z-[2] h-2.5 w-2.5 rounded-full bg-black"
          aria-hidden="true"
        />
      </div>

      <figcaption className="mt-6">
        <p className="text-[1.65rem] md:text-[1.9rem] font-semibold leading-[1.05] tracking-[-0.03em] text-text">
          <span className="block">Mirzarahim</span>
          <span className="block">Murodullayev</span>
        </p>
        <p className="mt-3 text-[11px] md:text-xs uppercase tracking-[0.18em] text-text-secondary">
          {t.about.portraitRole}
        </p>
      </figcaption>
    </figure>
  )
}
