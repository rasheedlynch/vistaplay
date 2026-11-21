import { Laptop, MonitorPlay, Smartphone, Tablet, Tv } from "lucide-react";

import type { DeviceGuide } from "@/lib/devices";

export function DeviceIcon({ icon, className }: { icon: DeviceGuide["icon"]; className?: string }) {
  const props = { className, "aria-hidden": true as const };
  switch (icon) {
    case "tv":
      return <Tv {...props} />;
    case "stick":
      return <MonitorPlay {...props} />;
    case "phone":
      return <Smartphone {...props} />;
    case "apple":
      return <Tablet {...props} />;
    case "laptop":
      return <Laptop {...props} />;
  }
}
