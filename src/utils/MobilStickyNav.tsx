import { NAV_ITEMS } from "./navConvig";

export const MobileStickyNav = ({ activeSection }: any) => {
  const activeLabel =
    NAV_ITEMS.find((i) => i.id === activeSection && i.id !== "about")?.label ||
    "";

  return activeLabel ? (
    <div className="lg:hidden fixed top-0 z-50 flex align-middle justify-center w-[100%] h-[3em] bg-slate-900/90 backdrop-blur border-b border-slate-700">
      <span className="text-sm font-semibold text-cyan-400 pt-[1em]">
        {activeLabel}
      </span>
    </div>
  ) : null;
};
