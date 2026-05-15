import { CpuIcon, HardDriveIcon, SmartphoneIcon, WifiIcon } from "lucide-react";

const ANDROID_REQS = [
  {
    label: "Android Version",
    value: "Android 6.0 (Marshmallow) or higher",
    note: "Android 10+ recommended for best performance",
    icon: SmartphoneIcon,
  },
  {
    label: "Storage Space",
    value: "50 MB free space minimum",
    note: "APK installer is under 12 MB — rest used for game cache",
    icon: HardDriveIcon,
  },
  {
    label: "RAM",
    value: "1 GB RAM minimum",
    note: "2 GB or more recommended for crash and live dealer games",
    icon: CpuIcon,
  },
  {
    label: "Internet Connection",
    value: "3G, 4G, or Wi-Fi",
    note: "4G or Wi-Fi recommended for live dealer and crash rounds",
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
            Does BRO444 Game work on your phone?
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            BRO444 Game works on most Android phones sold in Pakistan — including Tecno, Infinix, and Redmi. Check the list below before downloading to make sure your phone can run it. The app is only 12 MB so it installs fast even on phones with little storage.
          </p>
        </div>

        {/* Requirements grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Left: Android specs */}
          <div className="rounded-2xl border border-border/80 bg-card/70 p-6 shadow-sm">
            <h3 className="font-heading text-xl font-bold text-foreground">
              What your phone needs to run BRO444
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
              <strong>iOS / iPhone users:</strong> BRO444 Game does not have a native iOS app. Open{" "}
              <strong>BRO444.com</strong> in Safari or Chrome on your iPhone to access the mobile web
              version — no download required.
            </div>
          </div>

          {/* Right: Compatible devices */}
          <div className="space-y-5">
            <div className="rounded-2xl border border-success/35 bg-success/8 p-6">
              <h3 className="font-heading text-lg font-bold text-foreground">
                Phones that work with BRO444 in Pakistan
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
                Installation tip for slow internet
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                On 3G or weak 4G, download the APK over Wi-Fi first if possible. The installer is
                under 12 MB — it takes under 60 seconds even on a 3G connection (around 1 Mbps). Do
                not close your browser during the download.
              </p>
            </div>
          </div>
        </div>

        {/* Device compatibility table */}
        <div className="mt-10 overflow-x-auto rounded-2xl border border-border bg-card/60">
          <table className="w-full min-w-[420px] text-left text-sm">
            <caption className="sr-only">
              BRO444 Game device compatibility table for Pakistani phones
            </caption>
            <thead>
              <tr className="border-b border-border bg-muted/60 text-xs uppercase tracking-wider text-muted-foreground">
                <th scope="col" className="py-3 pl-5 pr-3 w-2/5">
                  Phone Model
                </th>
                <th scope="col" className="py-3 px-3 w-1/3">
                  BRO444 Compatible?
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
          Device compatibility is based on Android OS version, not hardware brand. Any Android 6.0+
          device with 1 GB RAM and 50 MB free storage should run BRO444 Game. If you experience
          crashes, ensure no background apps are consuming RAM before launching.
        </p>
      </div>
    </section>
  );
}
