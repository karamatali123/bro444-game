import { CpuIcon, HardDriveIcon, SmartphoneIcon, WifiIcon } from "lucide-react";

const ANDROID_REQS = [
  {
    label: "Android Version",
    value: "Android 6.0 (Marshmallow) or newer",
    note: "Android 10+ delivers the smoothest experience",
    icon: SmartphoneIcon,
  },
  {
    label: "Storage Space",
    value: "Minimum 50 MB free",
    note: "APK installer is 14.89 MB — remaining space used for game cache",
    icon: HardDriveIcon,
  },
  {
    label: "RAM",
    value: "At least 1 GB RAM",
    note: "2 GB+ recommended for crash games and live dealer streams",
    icon: CpuIcon,
  },
  {
    label: "Internet Connection",
    value: "3G, 4G, or Wi-Fi",
    note: "4G or Wi-Fi strongly recommended for live games and fast withdrawals",
    icon: WifiIcon,
  },
] as const;

const COMPATIBLE_DEVICES = [
  "Tecno Spark 6, 7, 8, 10, 20 series",
  "Infinix Hot 10, 12, 20, 30 / Smart 6, 7, 8",
  "Xiaomi Redmi A1, A2, A3 / Redmi 9, 10, 12",
  "Samsung Galaxy A05, A15, A25, A35",
  "Vivo Y16, Y22, Y35 series",
  "Oppo A17, A38, A58 series",
  "Realme C30, C51, C55, Narzo 50",
  "Nokia G21, G42, C series (Android 8+)",
];

const DEVICE_TABLE = [
  { phone: "Tecno Spark 8C / 10C", compatible: "Yes ✓", network: "3G / 4G" },
  { phone: "Infinix Hot 20 / Smart 7", compatible: "Yes ✓", network: "3G / 4G" },
  { phone: "Redmi A1 / A2 / A3", compatible: "Yes ✓", network: "3G / 4G" },
  { phone: "Samsung Galaxy A05 / A15", compatible: "Yes ✓", network: "4G / Wi-Fi" },
  { phone: "Realme C30 / C55", compatible: "Yes ✓", network: "3G / 4G" },
  { phone: "Vivo Y16 / Y22", compatible: "Yes ✓", network: "4G" },
  { phone: "iPhone (all models)", compatible: "Web only", network: "Wi-Fi / 4G" },
  { phone: "Android 5.1 or older", compatible: "Not supported", network: "—" },
];

export default function SystemRequirements() {
  return (
    <section
      id="system-requirements"
      aria-labelledby="sysreq-title"
      className="scroll-mt-28 border-b border-border/60 bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Phone compatibility
          </p>
          <h2
            id="sysreq-title"
            className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.65rem]"
          >
            Can Your Phone Run BRO444 Game App?
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            BRO444 Game App runs on the vast majority of Android phones sold across Pakistan — including Tecno,
            Infinix, Redmi, Samsung, and Realme. Review the specifications below to confirm your device is
            compatible. The installer is only 14.89 MB, so it fits easily even on phones with limited storage.
          </p>
        </div>

        {/* Requirements grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Left: Android specs */}
          <div className="rounded-2xl border border-border/80 bg-card/70 p-6 shadow-sm">
            <h3 className="font-heading text-xl font-bold text-foreground">
              Minimum Specifications for BRO444 Game App
            </h3>
            <ul className="mt-6 space-y-5">
              {ANDROID_REQS.map(({ label, value, note, icon: Icon }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {label}
                    </p>
                    <p className="mt-0.5 font-semibold text-foreground">{value}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{note}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-xl border border-primary/30 bg-primary/8 p-4 text-sm text-foreground/90">
              <strong>iOS / iPhone users:</strong> BRO444 Game App does not have a native iOS application. Visit
              the <strong>official lobby</strong> in Safari or Chrome on your iPhone to access the mobile web
              version — no download necessary.
            </div>
          </div>

          {/* Right: Compatible devices */}
          <div className="space-y-5">
            <div className="rounded-2xl border border-success/35 bg-success/8 p-6">
              <h3 className="font-heading text-lg font-bold text-foreground">
                Confirmed Compatible Devices in Pakistan
              </h3>
              <ul className="mt-4 space-y-2.5">
                {COMPATIBLE_DEVICES.map((device) => (
                  <li
                    key={device}
                    className="flex items-start gap-2.5 text-sm text-foreground/90"
                  >
                    <span
                      className="mt-1.5 size-1.5 shrink-0 rounded-full bg-success"
                      aria-hidden
                    />
                    {device}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border/70 bg-muted/25 p-5 text-sm">
              <h3 className="font-heading font-semibold text-foreground">
                Tip for slow or unstable connections
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                If you&apos;re on 3G or weak 4G, try downloading the APK over Wi-Fi first. The installer
                is just 14.89 MB — it finishes in under 60 seconds even at around 1 Mbps. Keep your
                browser open and screen active until the download completes.
              </p>
            </div>
          </div>
        </div>

        {/* Device compatibility table */}
        <div className="mt-10 overflow-x-auto rounded-2xl border border-border bg-card/60">
          <table className="w-full min-w-[420px] text-left text-sm">
            <caption className="sr-only">
              BRO444 Game App device compatibility table for Pakistani phones
            </caption>
            <thead>
              <tr className="border-b border-border bg-muted/60 text-xs uppercase tracking-wider text-muted-foreground">
                <th scope="col" className="py-3 pl-5 pr-3 w-2/5">
                  Phone Model
                </th>
                <th scope="col" className="py-3 px-3 w-1/3">
                  BRO444 Game App Compatible?
                </th>
                <th scope="col" className="py-3 pr-5 pl-3 w-1/4">
                  Network
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/80">
              {DEVICE_TABLE.map((row) => (
                <tr key={row.phone} className="hover:bg-muted/30">
                  <td className="py-3 pl-5 pr-3 font-medium text-foreground/90">{row.phone}</td>
                  <td
                    className={`py-3 px-3 font-medium ${
                      row.compatible === "Yes ✓"
                        ? "text-success"
                        : row.compatible === "Web only"
                          ? "text-primary"
                          : "text-muted-foreground"
                    }`}
                  >
                    {row.compatible}
                  </td>
                  <td className="py-3 pr-5 pl-3 text-muted-foreground">{row.network}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          Compatibility depends on Android OS version, not phone brand. Any Android 6.0+ device with 1 GB
          RAM and 50 MB free storage should run BRO444 Game App smoothly. If you experience crashes, close
          background apps before launching to free up RAM.
        </p>
      </div>
    </section>
  );
}
